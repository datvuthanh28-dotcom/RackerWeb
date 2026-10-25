/**
 * Vị Xưa Quán (#MS12) - Culinary & Gastronomy Engine
 * Interactive Menu Filtering, Realtime Takeaway Cart & Instant Table Booking Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let cart = [];

  // DOM Elements
  const cartTrigger = document.querySelector('.btn-cart-nav');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartClose = document.getElementById('cartClose');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartCountBadges = document.querySelectorAll('.cart-badge');
  const checkoutZaloBtn = document.getElementById('checkoutZaloBtn');

  // Reservation Modal Elements
  const resForm = document.getElementById('tableBookingForm');
  const resModal = document.getElementById('bookingConfirmationModal');
  const resModalCode = document.getElementById('bookingCodeDisplay');
  const resModalSummary = document.getElementById('bookingSummaryDisplay');
  const resModalClose = document.getElementById('bookingModalClose');
  const sendResZaloBtn = document.getElementById('sendResZaloBtn');

  // 1. Menu Filter functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.menu-item-card');

  if (filterBtns.length > 0 && menuItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        menuItems.forEach(item => {
          const itemCat = item.getAttribute('data-category') || '';
          if (filterValue === 'all' || itemCat.includes(filterValue)) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // 2. Cart Drawer Toggle
  function openCart() {
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.add('active');
      cartOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCart() {
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.remove('active');
      cartOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (cartTrigger) cartTrigger.addEventListener('click', openCart);
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // 3. Add to Takeaway Cart
  document.querySelectorAll('.btn-add-takeaway').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = btn.getAttribute('data-name');
      const price = parseInt(btn.getAttribute('data-price'), 10) || 0;

      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ name, price, qty: 1 });
      }

      updateCartUI();
      openCart();
    });
  });

  function updateCartUI() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountBadges.forEach(badge => badge.textContent = totalQty);

    if (!cartItemsList) return;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-empty-state">
          <div class="cart-empty-icon">🍲</div>
          <p>Giỏ đặc sản mang về chưa có món nào.</p>
          <span style="font-size: 0.8rem; color: #9ca3af; display: block; margin-top: 4px;">Hãy chọn các món niêu hoặc đặc sản đóng gói tươi ngon!</span>
        </div>
      `;
      if (cartSubtotal) cartSubtotal.textContent = '0đ';
      if (checkoutZaloBtn) checkoutZaloBtn.style.opacity = '0.5';
      return;
    }

    if (checkoutZaloBtn) checkoutZaloBtn.style.opacity = '1';

    let html = '';
    let subtotal = 0;

    cart.forEach((item, index) => {
      const lineTotal = item.price * item.qty;
      subtotal += lineTotal;

      html += `
        <div class="cart-item-row">
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <p>${item.price.toLocaleString('vi-VN')}đ</p>
          </div>
          <div class="cart-item-controls">
            <button type="button" class="cart-btn-qty btn-qty-minus" data-index="${index}">-</button>
            <span style="font-weight: 700; min-width: 20px; text-align: center;">${item.qty}</span>
            <button type="button" class="cart-btn-qty btn-qty-plus" data-index="${index}">+</button>
          </div>
        </div>
      `;
    });

    cartItemsList.innerHTML = html;
    if (cartSubtotal) cartSubtotal.textContent = subtotal.toLocaleString('vi-VN') + 'đ';

    // Attach qty listener
    cartItemsList.querySelectorAll('.btn-qty-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        if (cart[idx].qty > 1) {
          cart[idx].qty -= 1;
        } else {
          cart.splice(idx, 1);
        }
        updateCartUI();
      });
    });

    cartItemsList.querySelectorAll('.btn-qty-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        cart[idx].qty += 1;
        updateCartUI();
      });
    });
  }

  // Checkout via Zalo bridge
  if (checkoutZaloBtn) {
    checkoutZaloBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Giỏ hàng chưa có món. Vui lòng chọn món trước khi đặt mang về!');
        return;
      }
      const itemsListStr = cart.map(i => `• ${i.name} (SL: ${i.qty}) - ${(i.price * i.qty).toLocaleString('vi-VN')}đ`).join('%0A');
      const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0).toLocaleString('vi-VN') + 'đ';
      const text = `Kính gửi Vị Xưa Quán (#MS12), tôi muốn đặt mang về các món sau:%0A${itemsListStr}%0ATổng cộng: ${totalAmount}%0AVui lòng tư vấn thời gian giao và đóng gói!`;
      window.open(`https://zalo.me/0971183939?text=${text}`, '_blank');
    });
  }

  // 4. Reservation Engine
  if (resForm) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('resName')?.value || 'Quý khách';
      const phone = document.getElementById('resPhone')?.value || '';
      const date = document.getElementById('resDate')?.value || '';
      const time = document.getElementById('resTime')?.value || '';
      const guests = document.getElementById('resGuests')?.value || '2 khách';
      const space = document.getElementById('resSpace')?.value || 'Không gian ấm cúng chung';
      const note = document.getElementById('resNote')?.value || 'Không có';

      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const bookingCode = `VX-${randomNum}`;

      if (resModalCode) resModalCode.textContent = bookingCode;
      if (resModalSummary) {
        resModalSummary.innerHTML = `
          <strong>Thực khách:</strong> ${name} (${phone})<br>
          <strong>Thời gian:</strong> ${time} ngày ${date}<br>
          <strong>Quy mô:</strong> ${guests} | <strong>Khu vực:</strong> ${space}<br>
          <em>Ghi chú: ${note}</em>
        `;
      }

      if (sendResZaloBtn) {
        sendResZaloBtn.onclick = () => {
          const zaloText = `Kính gửi Vị Xưa Quán (#MS12), tôi gửi xác nhận đặt bàn [Mã: ${bookingCode}]:%0A- Khách: ${name} (${phone})%0A- Giờ: ${time} ngày ${date}%0A- Số lượng: ${guests}%0A- Khu vực: ${space}%0A- Yêu cầu: ${note}`;
          window.open(`https://zalo.me/0971183939?text=${zaloText}`, '_blank');
        };
      }

      if (resModal) resModal.classList.add('active');
      resForm.reset();
    });
  }

  if (resModalClose) {
    resModalClose.addEventListener('click', () => {
      if (resModal) resModal.classList.remove('active');
    });
  }

  // Smooth scroll to reservation
  document.querySelectorAll('.btn-scroll-res').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('dat-ban');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = 'index.html#dat-ban';
      }
    });
  });

  // General contact form listener
  const contactForm = document.getElementById('contactPageForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Cảm ơn Quý khách đã để lại lời nhắn!\nBộ phận Lễ tân Vị Xưa Quán sẽ chủ động gọi điện hỗ trợ trong vòng 10 phút.');
      contactForm.reset();
    });
  }
});
