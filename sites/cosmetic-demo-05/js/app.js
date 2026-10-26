/**
 * MAISON ÉCLAT — Haute Parfumerie (Demo #MS05)
 * Interactive Engine:
 * - Olfactory Pyramid interactive tabs
 * - Custom Discovery Set 3-scent builder
 * - Slide-out Cart Drawer with persistence & Zalo order bridge
 * - Collection filter by olfactory family
 * - Mobile navigation drawer
 * - Toast notification feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ═══════════════════════════════════════
     1. TOAST NOTIFICATION
     ═══════════════════════════════════════ */
  let toastEl = document.querySelector('.toast-notice');
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.className = 'toast-notice';
    document.body.appendChild(toastEl);
  }

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastEl._timer);
    toastEl._timer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3200);
  }

  function formatVND(amount) {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
  }

  /* ═══════════════════════════════════════
     2. CART DRAWER & STATE
     ═══════════════════════════════════════ */
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartEmptyMsg = document.getElementById('cart-empty');
  const cartFooter = document.getElementById('cart-footer');
  const cartTotalPriceEl = document.getElementById('cart-total-price');
  const cartCountBadges = document.querySelectorAll('#cart-count');
  const btnCheckout = document.getElementById('btn-checkout');

  let cart = [];
  try {
    const saved = localStorage.getItem('maison_eclat_cart');
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }

  function saveCart() {
    try {
      localStorage.setItem('maison_eclat_cart', JSON.stringify(cart));
    } catch (e) {}
  }

  function openCart() {
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.add('open');
      cartOverlay.classList.add('open');
    }
  }

  function closeCart() {
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.remove('open');
      cartOverlay.classList.remove('open');
    }
  }

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  function renderCart() {
    const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartCountBadges.forEach(badge => {
      badge.textContent = totalCount;
    });

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty" id="cart-empty">
          <p style="font-family:var(--serif);font-size:1.1rem;color:var(--ivory);margin-bottom:0.5rem;">Bộ sưu tập đang trống</p>
          <p style="font-size:0.8rem;color:var(--text-secondary);">Khám phá các mùi hương Maison Éclat để chọn tác phẩm yêu thích của bạn.</p>
        </div>
      `;
      if (cartFooter) cartFooter.style.display = 'none';
      return;
    }

    if (cartFooter) cartFooter.style.display = 'block';

    let totalAmount = 0;
    let html = '';

    cart.forEach((item, index) => {
      const itemTotal = item.price * (item.quantity || 1);
      totalAmount += itemTotal;

      html += `
        <div class="cart-item">
          ${item.image ? `<img src="${item.image}" alt="${item.name}" style="width:58px;height:70px;object-fit:cover;border:1px solid rgba(201,169,110,0.2);">` : ''}
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-detail">${item.detail || 'Flacon 50ml · Extrait'}</div>
            <div class="cart-item-price">${formatVND(item.price)} × ${item.quantity || 1}</div>
            <button class="cart-item-remove" data-index="${index}">Loại bỏ</button>
          </div>
        </div>
      `;
    });

    cartItemsContainer.innerHTML = html;
    if (cartTotalPriceEl) {
      cartTotalPriceEl.textContent = formatVND(totalAmount);
    }

    // Attach remove handlers
    cartItemsContainer.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.target.getAttribute('data-index'), 10);
        if (!isNaN(idx) && idx >= 0 && idx < cart.length) {
          const removed = cart.splice(idx, 1)[0];
          saveCart();
          renderCart();
          showToast(`Đã loại bỏ "${removed.name}"`);
        }
      });
    });
  }

  function addToCart(item) {
    const existing = cart.find(i => i.name === item.name && i.detail === item.detail);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    saveCart();
    renderCart();
    openCart();
    showToast(`Đã thêm "${item.name}" vào bộ sưu tập`);
  }

  // Bind Add to Cart buttons across pages
  document.querySelectorAll('.btn-buy, .btn-add-collection').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = btn.closest('.product-card') || btn.closest('.collection-card') || btn.closest('.collection-feature') || btn.closest('.perfume-card');
      let name = btn.getAttribute('data-name');
      let price = parseInt(btn.getAttribute('data-price'), 10);
      let image = btn.getAttribute('data-image');
      let detail = btn.getAttribute('data-detail');

      if (!name && card) {
        const titleEl = card.querySelector('h3, .card-title, .feature-title, .perfume-card-name');
        if (titleEl) name = titleEl.textContent.trim();
      }
      if (!price && card) {
        const priceEl = card.querySelector('.price, .card-price, .feature-price, .perfume-card-price');
        if (priceEl) {
          const raw = priceEl.textContent.replace(/[^0-9]/g, '');
          price = parseInt(raw, 10);
        }
      }
      if (!image && card) {
        const imgEl = card.querySelector('img');
        if (imgEl) image = imgEl.getAttribute('src');
      }

      if (!price) price = 3600000;
      if (!name) name = 'Maison Éclat Extrait';

      addToCart({
        name: name,
        price: price,
        image: image || 'assets/images/perfume-hero.jpg',
        detail: detail || '50ml Flacon · Extrait de Parfum'
      });
    });
  });

  // Zalo Order Checkout Bridge
  if (btnCheckout) {
    btnCheckout.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Bộ sưu tập của bạn đang trống.');
        return;
      }
      let totalAmount = 0;
      let orderLines = [];
      cart.forEach((item, i) => {
        const subtotal = item.price * (item.quantity || 1);
        totalAmount += subtotal;
        orderLines.push(`${i + 1}. ${item.name} (${item.detail || '50ml'}) x${item.quantity || 1}: ${formatVND(subtotal)}`);
      });

      const message = `Kính chào Maison Éclat! Tôi muốn đặt bộ sưu tập nước hoa:\n\n${orderLines.join('\n')}\n\nTổng cộng: ${formatVND(totalAmount)}\n\nVui lòng tư vấn giao hàng & hướng dẫn thanh toán.`;
      
      const zaloUrl = `https://zalo.me/0971183939`;
      showToast('Đang kết nối đến chuyên viên tư vấn Maison Éclat qua Zalo...');
      window.open(zaloUrl, '_blank');
    });
  }

  // Initial render of cart
  renderCart();

  /* ═══════════════════════════════════════
     3. OLFACTORY PYRAMID INTERACTIVE TABS
     ═══════════════════════════════════════ */
  const pyramidTabs = document.querySelectorAll('.pyramid-tab');
  const pyramidPanels = document.querySelectorAll('.pyramid-panel');

  if (pyramidTabs.length && pyramidPanels.length) {
    pyramidTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-target');
        pyramidTabs.forEach(t => t.classList.remove('active'));
        pyramidPanels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  }

  /* ═══════════════════════════════════════
     4. DISCOVERY SET BUILDER (3 SCENTS)
     ═══════════════════════════════════════ */
  const discoveryOptions = document.querySelectorAll('.discovery-option');
  const discoverySelectedList = document.getElementById('discovery-selected-list');
  const discoveryTotalPrice = document.getElementById('discovery-total-price');
  const btnDiscoveryOrder = document.getElementById('btn-discovery-order');

  let selectedScents = [];
  const SET_PRICE = 1490000; // Special bundle price for 3x10ml

  function updateDiscoveryUI() {
    if (!discoverySelectedList) return;

    if (selectedScents.length === 0) {
      discoverySelectedList.innerHTML = `
        <p style="font-size:0.85rem;color:var(--text-secondary);text-align:center;padding:1.5rem 0;">
          Chọn 3 mùi hương bên trái để khám phá (0/3 đã chọn)
        </p>
      `;
      if (discoveryTotalPrice) discoveryTotalPrice.textContent = '0đ';
      if (btnDiscoveryOrder) {
        btnDiscoveryOrder.disabled = true;
        btnDiscoveryOrder.textContent = 'Chọn Đủ 3 Mùi Hương (0/3)';
      }
      return;
    }

    let html = '';
    selectedScents.forEach((item, idx) => {
      html += `
        <div class="discovery-selected-item">
          <span>
            <strong style="color:var(--champagne);margin-right:0.4rem;">${idx + 1}.</strong>
            <span class="item-name">${item.name}</span> (10ml)
          </span>
          <button class="item-remove" data-remove="${item.name}" title="Bỏ chọn">&times;</button>
        </div>
      `;
    });

    if (selectedScents.length < 3) {
      const remaining = 3 - selectedScents.length;
      html += `
        <div style="font-size:0.75rem;color:var(--champagne-dim);padding-top:0.75rem;font-style:italic;">
          ✦ Vui lòng chọn thêm ${remaining} mùi hương nữa
        </div>
      `;
      if (discoveryTotalPrice) discoveryTotalPrice.textContent = formatVND(selectedScents.length * 480000);
      if (btnDiscoveryOrder) {
        btnDiscoveryOrder.disabled = true;
        btnDiscoveryOrder.textContent = `Chọn Đủ 3 Mùi Hương (${selectedScents.length}/3)`;
      }
    } else {
      html += `
        <div style="font-size:0.75rem;color:var(--champagne);padding-top:0.75rem;font-weight:500;">
          ✓ Đã hoàn tất Discovery Set độc bản (3x10ml)
        </div>
      `;
      if (discoveryTotalPrice) discoveryTotalPrice.textContent = formatVND(SET_PRICE);
      if (btnDiscoveryOrder) {
        btnDiscoveryOrder.disabled = false;
        btnDiscoveryOrder.textContent = 'Đặt Discovery Set (1.490.000đ)';
      }
    }

    discoverySelectedList.innerHTML = html;

    // Attach remove handlers inside summary
    discoverySelectedList.querySelectorAll('.item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const scentName = btn.getAttribute('data-remove');
        toggleScent(scentName);
      });
    });
  }

  function toggleScent(scentName, price, img) {
    const existingIndex = selectedScents.findIndex(s => s.name === scentName);
    if (existingIndex > -1) {
      selectedScents.splice(existingIndex, 1);
      discoveryOptions.forEach(opt => {
        if (opt.getAttribute('data-fragrance') === scentName) {
          opt.classList.remove('selected');
        }
      });
    } else {
      if (selectedScents.length >= 3) {
        showToast('Bạn đã chọn tối đa 3 mùi hương cho Discovery Set!');
        return;
      }
      selectedScents.push({
        name: scentName,
        price: price || 480000,
        img: img || ''
      });
      discoveryOptions.forEach(opt => {
        if (opt.getAttribute('data-fragrance') === scentName) {
          opt.classList.add('selected');
        }
      });
    }
    updateDiscoveryUI();
  }

  discoveryOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const scentName = opt.getAttribute('data-fragrance');
      const price = parseInt(opt.getAttribute('data-price'), 10);
      const img = opt.querySelector('img') ? opt.querySelector('img').getAttribute('src') : '';
      toggleScent(scentName, price, img);
    });
  });

  if (btnDiscoveryOrder) {
    btnDiscoveryOrder.addEventListener('click', () => {
      if (selectedScents.length !== 3) {
        showToast('Vui lòng chọn đủ 3 mùi hương để đặt Discovery Set!');
        return;
      }
      const names = selectedScents.map(s => s.name).join(', ');
      addToCart({
        name: 'Discovery Set Custom',
        price: SET_PRICE,
        image: 'assets/images/hero-collection.jpg',
        detail: `3x10ml: ${names}`
      });
      showToast('Đã thêm Discovery Set tùy chọn của bạn vào giỏ hàng!');
    });
  }

  // Initialize discovery UI
  updateDiscoveryUI();

  /* ═══════════════════════════════════════
     5. FRAGRANCE FAMILY FILTER (san-pham.html)
     ═══════════════════════════════════════ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card, .perfume-card');

  if (filterBtns.length && productCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        productCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'block';
            card.style.opacity = '0';
            setTimeout(() => {
              card.style.opacity = '1';
            }, 30);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ═══════════════════════════════════════
     6. MOBILE NAVIGATION DRAWER
     ═══════════════════════════════════════ */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavPanel = document.getElementById('mobile-nav-panel');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  const mobileNavClose = document.getElementById('mobile-nav-close');

  function openMobileNav() {
    if (mobileNavPanel && mobileNavOverlay) {
      mobileNavPanel.classList.add('open');
      mobileNavOverlay.classList.add('open');
    }
  }

  function closeMobileNav() {
    if (mobileNavPanel && mobileNavOverlay) {
      mobileNavPanel.classList.remove('open');
      mobileNavOverlay.classList.remove('open');
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileNav);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);
  if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', closeMobileNav);

  // Close nav on clicking links
  if (mobileNavPanel) {
    mobileNavPanel.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMobileNav);
    });
  }

  /* ═══════════════════════════════════════
     7. CONSULTATION CONTACT FORM
     ═══════════════════════════════════════ */
  const contactForm = document.getElementById('site-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = contactForm.querySelector('input[type="text"]');
      const name = nameInput ? nameInput.value : 'Quý khách';
      
      alert(`Kính gửi ${name},\n\nMaison Éclat đã ghi nhận yêu cầu tư vấn hương riêng của bạn.\nChuyên viên điều hương cao cấp sẽ liên hệ qua Zalo / Số điện thoại trong vòng 15 phút.`);
      contactForm.reset();
    });
  }
});
