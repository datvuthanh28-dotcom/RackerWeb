// sites/website-tiem-cafe-tinh-demo-54/js/app.js
// Interactive Specialty Coffee Ordering, Custom Drink Builder & Table Booking

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-nav-btn');
  const mainNav = document.getElementById('cafe-nav');
  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', () => {
      mainNav.classList.toggle('mobile-active');
    });
  }

  // 2. Specialty Menu Filtering
  const menuTabBtns = document.querySelectorAll('.menu-tab-btn');
  const coffeeCards = document.querySelectorAll('.coffee-card');

  if (menuTabBtns.length > 0 && coffeeCards.length > 0) {
    menuTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        menuTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-cat');

        coffeeCards.forEach(card => {
          if (cat === 'all' || card.getAttribute('data-category') === cat) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 3. Cart State Management via LocalStorage
  const CART_KEY = 'tinh_cafe_cart_v1';
  let cart = [];
  try {
    const saved = localStorage.getItem(CART_KEY);
    if (saved) cart = JSON.parse(saved);
  } catch (err) {
    cart = [];
  }

  function saveCart() {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (err) {}
    renderCart();
  }

  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const cartTriggers = document.querySelectorAll('.trigger-cart-drawer');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const cartCountBadges = document.querySelectorAll('.cart-badge');
  const cartItemList = document.getElementById('cart-item-list');
  const cartTotalVal = document.getElementById('cart-total-val');

  function openCart() {
    if (cartDrawer && cartOverlay) {
      cartOverlay.classList.add('active');
      cartDrawer.classList.add('open');
    }
  }

  function closeCart() {
    if (cartDrawer && cartOverlay) {
      cartOverlay.classList.remove('active');
      cartDrawer.classList.remove('open');
    }
  }

  cartTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCart();
    });
  });

  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  function renderCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountBadges.forEach(b => b.textContent = totalItems);

    if (!cartItemList || !cartTotalVal) return;

    if (cart.length === 0) {
      cartItemList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: #8c7b70;">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">☕</div>
          <p style="font-size: 0.95rem; font-weight: 500;">Túi đồ uống của bạn đang trống</p>
          <p style="font-size: 0.8rem; margin-top: 0.25rem;">Hãy chọn món từ thực đơn để thưởng thức cùng Tình Cafe.</p>
        </div>
      `;
      cartTotalVal.textContent = '0₫';
      return;
    }

    let totalPrice = 0;
    cartItemList.innerHTML = '';

    cart.forEach((item, index) => {
      const itemSubtotal = item.price * item.qty;
      totalPrice += itemSubtotal;

      const row = document.createElement('div');
      row.className = 'cart-item-row';
      row.innerHTML = `
        <div class="cart-item-info">
          <h5>${item.name}</h5>
          <div class="cart-item-customs">${item.options}</div>
          <div class="cart-item-price">${(item.price).toLocaleString('vi-VN')}₫</div>
        </div>
        <div class="cart-qty-ctrl">
          <button type="button" class="qty-btn" data-action="dec" data-index="${index}">-</button>
          <span style="font-size: 0.9rem; font-weight: 600; min-width: 20px; text-align: center;">${item.qty}</span>
          <button type="button" class="qty-btn" data-action="inc" data-index="${index}">+</button>
        </div>
      `;
      cartItemList.appendChild(row);
    });

    cartTotalVal.textContent = totalPrice.toLocaleString('vi-VN') + '₫';

    // Quantity buttons
    cartItemList.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = btn.getAttribute('data-action');
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        if (action === 'inc') {
          cart[idx].qty++;
        } else if (action === 'dec') {
          cart[idx].qty--;
          if (cart[idx].qty <= 0) cart.splice(idx, 1);
        }
        saveCart();
      });
    });
  }

  // Initial cart render
  renderCart();

  // 4. Custom Drink Modal
  const customizeModal = document.getElementById('customize-drink-modal');
  const closeCustomizeBtn = document.getElementById('close-customize-modal');
  const customizeTriggers = document.querySelectorAll('.trigger-customize-modal');
  const modalDrinkName = document.getElementById('modal-drink-name');
  const modalDrinkPrice = document.getElementById('modal-drink-price');
  const btnAddToCartCustom = document.getElementById('btn-add-to-cart-custom');

  let activeDrink = null;
  let selectedSugar = '30% Ngọt Thanh';
  let selectedIce = 'Bình Thường';
  let selectedMilk = 'Sữa Thanh Trùng';

  function openCustomize(drink) {
    activeDrink = drink;
    if (modalDrinkName) modalDrinkName.textContent = drink.name;
    if (modalDrinkPrice) modalDrinkPrice.textContent = drink.price.toLocaleString('vi-VN') + '₫';
    if (customizeModal) customizeModal.classList.add('active');
  }

  function closeCustomize() {
    if (customizeModal) customizeModal.classList.remove('active');
  }

  customizeTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = btn.getAttribute('data-name') || 'Cà Phê';
      const price = parseInt(btn.getAttribute('data-price') || '65000', 10);
      openCustomize({ name, price });
    });
  });

  if (closeCustomizeBtn) closeCustomizeBtn.addEventListener('click', closeCustomize);
  if (customizeModal) {
    customizeModal.addEventListener('click', (e) => {
      if (e.target === customizeModal) closeCustomize();
    });
  }

  // Option pill selector inside modal
  const pillOptions = document.querySelectorAll('.pill-option');
  pillOptions.forEach(pill => {
    pill.addEventListener('click', () => {
      const group = pill.closest('.pills-selector');
      group.querySelectorAll('.pill-option').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const optionType = group.getAttribute('data-opt');
      if (optionType === 'sugar') selectedSugar = pill.textContent.trim();
      else if (optionType === 'ice') selectedIce = pill.textContent.trim();
      else if (optionType === 'milk') selectedMilk = pill.textContent.trim();
    });
  });

  if (btnAddToCartCustom) {
    btnAddToCartCustom.addEventListener('click', () => {
      if (!activeDrink) return;
      const optionsText = `${selectedSugar} • Đá: ${selectedIce} • ${selectedMilk}`;
      
      const existing = cart.find(item => item.name === activeDrink.name && item.options === optionsText);
      if (existing) {
        existing.qty++;
      } else {
        cart.push({
          name: activeDrink.name,
          price: activeDrink.price,
          options: optionsText,
          qty: 1
        });
      }

      saveCart();
      closeCustomize();
      openCart();
    });
  }

  // 5. Simulated Checkout Handler
  const checkoutBtn = document.getElementById('btn-checkout-simulated');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) return;
      alert('ĐÃ XÁC NHẬN ĐƠN MẪU (DEMO)!\n\nĐơn đồ uống của bạn đã được ghi nhận vào hàng đợi chuẩn bị tại quầy Bar Tình Cafe (Thảo Điền).\nTổng giá trị: ' + (cart.reduce((s, i) => s + i.price * i.qty, 0)).toLocaleString('vi-VN') + '₫\n\nĐây là tính năng trình diễn Frontend cho Thư Viện Theme (#MS54). Quý khách có thể liên hệ trực tiếp Zalo: 0971183939 để đặt bàn và tư vấn.');
      cart = [];
      saveCart();
      closeCart();
    });
  }

  // 6. Table Booking Form
  const bookingForm = document.getElementById('table-booking-form');
  const bookingSuccess = document.getElementById('booking-success-box');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('b-name')?.value || 'Quý khách';
      const guests = document.getElementById('b-guests')?.value || '2';
      const time = document.getElementById('b-time')?.value || '09:00';
      const date = document.getElementById('b-date')?.value || 'Hôm nay';

      if (bookingSuccess) {
        bookingSuccess.innerHTML = `
          <div style="background: #f0fdf4; border: 1px solid #86efac; padding: 1.25rem; border-radius: 8px; margin-top: 1rem; color: #166534; text-align: left;">
            <strong style="font-size: 1.05rem; display: block; margin-bottom: 0.35rem;">Đã Giữ Chỗ Trải Nghiệm Demo!</strong>
            <p style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 0.75rem;">
              Cảm ơn <strong>${name}</strong>. Bàn dành cho <strong>${guests} khách</strong> vào lúc <strong>${time} ngày ${date}</strong> đã được sắp xếp tại không gian sân vườn Tĩnh (Thảo Điền).
            </p>
            <p style="font-size: 0.8rem; color: #4b5563;">
              <em>Lưu ý: Đây là tính năng mô phỏng đặt bàn mẫu cho Theme #MS54. Mọi thông tin đặt bàn thực tế quý khách vui lòng kết nối qua hotline Zalo: 0971183939.</em>
            </p>
          </div>
        `;
        bookingForm.style.display = 'none';
      }
    });
  }
});
