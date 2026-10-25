/* =====================================================
   COOL ORGANIC — JS LOGIC (#MS07)
   E-commerce Cart, Veggie Filter, Subscription Handler
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const closeBtn = document.getElementById('mobile-close');

  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  // Cart Sidebar Toggle
  const cartTriggerBtns = document.querySelectorAll('.btn-cart-trigger, .floating-cart-farm');
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartCloseBtn = document.getElementById('cart-close-btn');

  function openCart() {
    if (cartSidebar) cartSidebar.classList.add('open');
    if (backdrop) backdrop.classList.add('show');
  }

  function closeCart() {
    if (cartSidebar) cartSidebar.classList.remove('open');
    if (backdrop && (!drawer || !drawer.classList.contains('open'))) {
      backdrop.classList.remove('show');
    }
  }

  cartTriggerBtns.forEach(btn => btn.addEventListener('click', openCart));
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          closeDrawer();
          closeCart();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Produce Category Filter
  const farmTabs = document.querySelectorAll('.farm-tab-btn');
  const produceCards = document.querySelectorAll('.produce-card');

  farmTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      farmTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      produceCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Cart State
  let cart = [];

  window.addProduceToCart = function(name, priceStr) {
    const priceNum = parseInt(priceStr.replace(/\D/g, ''), 10) || 50000;
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ name, priceNum, priceStr, qty: 1 });
    }
    updateCartUI();
    showToast(`Đã thêm "${name}" vào giỏ hàng!`);
  };

  window.removeCartItem = function(index) {
    cart.splice(index, 1);
    updateCartUI();
  };

  function updateCartUI() {
    const countEls = document.querySelectorAll('.cart-count-badge');
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    countEls.forEach(el => el.textContent = totalCount);

    const listEl = document.getElementById('cart-items-list');
    const totalEl = document.getElementById('cart-total-price');
    const footEl = document.getElementById('cart-foot');

    if (!listEl) return;

    if (cart.length === 0) {
      listEl.innerHTML = '<div class="cart-empty-text">Giỏ thực phẩm của bạn đang trống.<br>Hãy chọn nông sản sạch tươi ngon nhé!</div>';
      if (footEl) footEl.style.display = 'none';
      return;
    }

    if (footEl) footEl.style.display = 'block';

    let total = 0;
    listEl.innerHTML = cart.map((item, index) => {
      const subtotal = item.priceNum * item.qty;
      total += subtotal;
      return `
        <div class="cart-item-row">
          <div>
            <strong>${item.name}</strong><br>
            <small style="color:#64748b;">${item.priceStr} × ${item.qty}</small>
          </div>
          <div style="text-align:right;">
            <span style="font-weight:700; color:#15803d;">${subtotal.toLocaleString('vi-VN')}đ</span><br>
            <button onclick="removeCartItem(${index})" style="background:none; border:none; color:#ef4444; font-size:0.75rem; cursor:pointer;">Xóa</button>
          </div>
        </div>
      `;
    }).join('');

    if (totalEl) {
      totalEl.textContent = total.toLocaleString('vi-VN') + 'đ';
    }
  }

  // Zalo Checkout
  const checkoutBtn = document.getElementById('btn-checkout-zalo');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) return;
      let total = 0;
      const orderLines = cart.map(item => {
        const sub = item.priceNum * item.qty;
        total += sub;
        return `- ${item.name} (SL: ${item.qty}) = ${sub.toLocaleString('vi-VN')}đ`;
      }).join('\n');

      const msg = encodeURIComponent(`Xin chào Cool Organic, tôi muốn đặt mua thực phẩm sạch:\n${orderLines}\n\nTổng cộng: ${total.toLocaleString('vi-VN')}đ\nVui lòng giao hàng sớm giúp tôi!`);
      window.open(`https://zalo.me/0971183939?text=${msg}`, '_blank');
    });
  }

  // Subscription Form Handling
  const subForm = document.getElementById('sub-box-form');
  if (subForm) {
    subForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('sub-name')?.value || 'Quý khách';
      const phone = document.getElementById('sub-phone')?.value || '';
      const combo = document.getElementById('sub-combo')?.value || 'Hộp rau 3-5kg';
      const frequency = document.getElementById('sub-freq')?.value || 'Mỗi tuần 1 lần';
      const address = document.getElementById('sub-addr')?.value || '';

      const toast = document.getElementById('toast-farm');
      if (toast) {
        toast.innerHTML = `<strong>Kính chào ${name}!</strong> Đăng ký gói <strong>${combo} (${frequency})</strong> đã thành công. Nông trại sẽ liên hệ SĐT <strong>${phone}</strong> để xác nhận ngày giao hộp rau đầu tiên tới địa chỉ <strong>${address}</strong>.`;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 7000);
      }

      // Offer direct confirmation via Zalo
      setTimeout(() => {
        const msg = encodeURIComponent(`Xin chào Cool Organic, tôi muốn đăng ký gói hộp rau định kỳ:\n- Họ tên: ${name}\n- SĐT: ${phone}\n- Gói rau: ${combo}\n- Tần suất: ${frequency}\n- Địa chỉ nhận hàng: ${address}`);
        const confirmZalo = confirm(`Đăng ký thành công! Bạn có muốn kết nối Zalo với Nông Trại (0971183939) để chọn các loại rau yêu thích trong hộp đầu tiên không?`);
        if (confirmZalo) {
          window.open(`https://zalo.me/0971183939?text=${msg}`, '_blank');
        }
      }, 800);

      subForm.reset();
    });
  }

  function showToast(text) {
    const toast = document.getElementById('toast-farm');
    if (toast) {
      toast.textContent = text;
      toast.classList.add('show');
      setTimeout(() => { toast.classList.remove('show'); }, 4000);
    }
  }
});
