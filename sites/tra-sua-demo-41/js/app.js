/**
 * Mộc Trà Boba & Tea Lounge (#MS41)
 * Interactive Drink Customizer, Category Filter & Fast Delivery Cart Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let cart = [];
  let currentCustomizingItem = null;

  // Customizer state
  let selectedSize = 'M';
  let sizeExtra = 0;
  let selectedSugar = '50%';
  let selectedIce = '70%';
  let selectedToppings = [];

  // DOM Elements
  const cartTrigger = document.querySelector('.btn-cart-nav');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartClose = document.getElementById('cartClose');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartBadges = document.querySelectorAll('.cart-badge');
  const checkoutZaloBtn = document.getElementById('checkoutZaloBtn');

  // Customizer Modal Elements
  const customModal = document.getElementById('customizerModal');
  const customModalClose = document.getElementById('modalCloseBtn');
  const customDrinkName = document.getElementById('customDrinkName');
  const customDrinkDesc = document.getElementById('customDrinkDesc');
  const customTotalPrice = document.getElementById('customTotalPrice');
  const btnConfirmAdd = document.getElementById('btnConfirmAdd');

  // 1. Menu Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const drinkCards = document.querySelectorAll('.drink-card');

  if (filterBtns.length > 0 && drinkCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        drinkCards.forEach(card => {
          const category = card.getAttribute('data-category') || '';
          if (filter === 'all' || category.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 2. Open Customizer Modal
  document.querySelectorAll('.btn-customize').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = btn.getAttribute('data-name');
      const basePrice = parseInt(btn.getAttribute('data-price'), 10) || 35000;
      const desc = btn.getAttribute('data-desc') || 'Đậm vị trà mộc Bảo Lộc kết hợp sữa tươi thanh khiết.';

      currentCustomizingItem = { name, basePrice, desc };
      selectedSize = 'M';
      sizeExtra = 0;
      selectedSugar = '50%';
      selectedIce = '70%';
      selectedToppings = [];

      // Reset options in modal UI
      resetModalOptions();

      if (customDrinkName) customDrinkName.textContent = name;
      if (customDrinkDesc) customDrinkDesc.textContent = desc;

      recalcModalPrice();

      if (customModal) customModal.classList.add('active');
    });
  });

  function resetModalOptions() {
    document.querySelectorAll('.size-option').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-size') === 'M');
    });
    document.querySelectorAll('.sugar-option').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-sugar') === '50%');
    });
    document.querySelectorAll('.ice-option').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-ice') === '70%');
    });
    document.querySelectorAll('.topping-checkbox').forEach(chk => {
      chk.checked = false;
    });
  }

  function recalcModalPrice() {
    if (!currentCustomizingItem) return;
    const toppingsTotal = selectedToppings.reduce((sum, top) => sum + top.price, 0);
    const finalPrice = currentCustomizingItem.basePrice + sizeExtra + toppingsTotal;
    if (customTotalPrice) {
      customTotalPrice.textContent = finalPrice.toLocaleString('vi-VN') + 'đ';
    }
  }

  // Size option click
  document.querySelectorAll('.size-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.size-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      selectedSize = opt.getAttribute('data-size');
      sizeExtra = parseInt(opt.getAttribute('data-extra'), 10) || 0;
      recalcModalPrice();
    });
  });

  // Sugar option click
  document.querySelectorAll('.sugar-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.sugar-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      selectedSugar = opt.getAttribute('data-sugar');
    });
  });

  // Ice option click
  document.querySelectorAll('.ice-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.ice-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      selectedIce = opt.getAttribute('data-ice');
    });
  });

  // Topping checkbox toggle
  document.querySelectorAll('.topping-checkbox').forEach(chk => {
    chk.addEventListener('change', () => {
      const name = chk.getAttribute('data-name');
      const price = parseInt(chk.getAttribute('data-price'), 10) || 0;

      if (chk.checked) {
        selectedToppings.push({ name, price });
      } else {
        selectedToppings = selectedToppings.filter(t => t.name !== name);
      }
      recalcModalPrice();
    });
  });

  // Modal Close
  function closeModal() {
    if (customModal) customModal.classList.remove('active');
  }
  if (customModalClose) customModalClose.addEventListener('click', closeModal);
  if (customModal) {
    customModal.addEventListener('click', (e) => {
      if (e.target === customModal) closeModal();
    });
  }

  // Confirm Add Custom Drink to Cart
  if (btnConfirmAdd) {
    btnConfirmAdd.addEventListener('click', () => {
      if (!currentCustomizingItem) return;

      const toppingsTotal = selectedToppings.reduce((sum, top) => sum + top.price, 0);
      const unitPrice = currentCustomizingItem.basePrice + sizeExtra + toppingsTotal;
      const toppingNames = selectedToppings.length > 0 
        ? selectedToppings.map(t => t.name).join(', ') 
        : 'Không topping';

      const itemDetail = {
        name: currentCustomizingItem.name,
        size: selectedSize,
        sugar: selectedSugar,
        ice: selectedIce,
        toppings: toppingNames,
        unitPrice: unitPrice,
        qty: 1
      };

      cart.push(itemDetail);
      closeModal();
      updateCartUI();
      openCart();
    });
  }

  // 3. Cart Drawer UI
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

  function updateCartUI() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartBadges.forEach(badge => badge.textContent = totalQty);

    if (!cartItemsList) return;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: #8c7c6f;">
          <div style="font-size: 3rem; margin-bottom: 0.75rem;">🧋</div>
          <p style="font-weight: 700;">Giỏ đồ uống của bạn đang trống!</p>
          <span style="font-size: 0.8rem; display: block; margin-top: 4px;">Hãy chọn ngay một ly trà sữa nướng hoặc trà trái cây tươi mát nhé!</span>
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
      const lineTotal = item.unitPrice * item.qty;
      subtotal += lineTotal;

      html += `
        <div class="cart-item-row">
          <div style="flex-grow: 1; padding-right: 0.5rem;">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-opts">Size ${item.size} • ${item.sugar} Đường • ${item.ice} Đá</div>
            <div class="cart-item-opts" style="color: #c2410c;">+ ${item.toppings}</div>
            <div class="cart-item-price">${lineTotal.toLocaleString('vi-VN')}đ</div>
          </div>
          <div class="cart-qty-ctrls">
            <button type="button" class="btn-qty btn-cart-minus" data-index="${index}">-</button>
            <span style="font-weight: 800; min-width: 18px; text-align: center;">${item.qty}</span>
            <button type="button" class="btn-qty btn-cart-plus" data-index="${index}">+</button>
          </div>
        </div>
      `;
    });

    cartItemsList.innerHTML = html;
    if (cartSubtotal) cartSubtotal.textContent = subtotal.toLocaleString('vi-VN') + 'đ';

    // Quantity events
    cartItemsList.querySelectorAll('.btn-cart-minus').forEach(btn => {
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

    cartItemsList.querySelectorAll('.btn-cart-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        cart[idx].qty += 1;
        updateCartUI();
      });
    });
  }

  // Checkout via Zalo Bridge
  if (checkoutZaloBtn) {
    checkoutZaloBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Giỏ hàng chưa có đồ uống. Vui lòng chọn món trước!');
        return;
      }

      const drinksText = cart.map((c, i) => 
        `Ly ${i+1}: ${c.name} (Size ${c.size}, ${c.sugar} đường, ${c.ice} đá, Topping: ${c.toppings}) - SL: ${c.qty} ly = ${(c.unitPrice * c.qty).toLocaleString('vi-VN')}đ`
      ).join('%0A');

      const total = cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0).toLocaleString('vi-VN') + 'đ';
      const text = `Kính gửi Mộc Trà Boba (#MS41), tôi muốn đặt giao hỏa tốc các món sau:%0A${drinksText}%0ATổng cộng: ${total}%0AVui lòng xác nhận và giao trong 30 phút!`;

      window.open(`https://zalo.me/0971183939?text=${text}`, '_blank');
    });
  }

  // 4. Party / Event booking form
  const partyForm = document.getElementById('partyBookingForm');
  if (partyForm) {
    partyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Đăng ký tiệc / teabreak thành công!\nBộ phận chăm sóc khách hàng Mộc Trà sẽ gọi điện tư vấn set menu ưu đãi trong 10 phút.');
      partyForm.reset();
    });
  }
});
