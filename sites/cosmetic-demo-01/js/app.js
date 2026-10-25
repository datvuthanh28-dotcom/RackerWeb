/**
 * Lumière Beauty — app.js
 * Cart, wishlist, mobile nav, header scroll behaviour
 * Demo only — localStorage-based frontend simulation
 */

(function () {
  'use strict';

  /* =====================================================
     CART STATE
     ===================================================== */
  const CART_KEY = 'lumiere_cart_ms01';
  let cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');

  function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  function formatPrice(num) {
    return num.toLocaleString('vi-VN') + 'đ';
  }

  function updateCartCount() {
    const count = cart.reduce((s, i) => s + i.qty, 0);
    const el = document.getElementById('cart-count');
    if (!el) return;
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  }

  function renderCartItems() {
    const container = document.getElementById('cart-items');
    const empty = document.getElementById('cart-empty');
    const footer = document.getElementById('cart-footer');
    const totalEl = document.getElementById('cart-total-amount');
    if (!container) return;

    if (cart.length === 0) {
      if (empty) empty.style.display = 'flex';
      if (footer) footer.style.display = 'none';
      // Remove dynamic items
      container.querySelectorAll('.cart-item').forEach(el => el.remove());
      return;
    }

    if (empty) empty.style.display = 'none';
    if (footer) footer.style.display = 'block';
    if (totalEl) totalEl.textContent = formatPrice(getCartTotal());

    // Rebuild list
    container.querySelectorAll('.cart-item').forEach(el => el.remove());
    cart.forEach(item => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.dataset.id = item.id;
      div.innerHTML = `
        <div style="flex:1">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${formatPrice(item.price)}</div>
          <div class="cart-item-controls">
            <button class="cart-item-qty-btn" data-action="decrease" aria-label="Giảm số lượng">−</button>
            <span class="cart-item-qty">${item.qty}</span>
            <button class="cart-item-qty-btn" data-action="increase" aria-label="Tăng số lượng">+</button>
            <button class="cart-item-remove" data-action="remove">Xoá</button>
          </div>
        </div>`;
      div.querySelector('[data-action="decrease"]').addEventListener('click', () => {
        changeQty(item.id, -1);
      });
      div.querySelector('[data-action="increase"]').addEventListener('click', () => {
        changeQty(item.id, 1);
      });
      div.querySelector('[data-action="remove"]').addEventListener('click', () => {
        removeFromCart(item.id);
      });
      container.appendChild(div);
    });

    if (totalEl) totalEl.textContent = formatPrice(getCartTotal());
  }

  function addToCart(id, name, price) {
    const existing = cart.find(i => i.id === id);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ id, name, price, qty: 1 });
    }
    saveCart();
    updateCartCount();
    renderCartItems();
    showToast(`Đã thêm "${name}" vào giỏ hàng`);
    openCart();
  }

  function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
    saveCart();
    updateCartCount();
    renderCartItems();
  }

  function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateCartCount();
    renderCartItems();
  }

  /* =====================================================
     CART UI OPEN/CLOSE
     ===================================================== */
  function openCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    if (!sidebar || !overlay) return;
    overlay.style.display = 'block';
    requestAnimationFrame(() => {
      overlay.classList.add('open');
      sidebar.classList.add('open');
    });
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    if (!sidebar || !overlay) return;
    overlay.classList.remove('open');
    sidebar.classList.remove('open');
    setTimeout(() => { overlay.style.display = 'none'; }, 350);
    document.body.style.overflow = '';
  }

  /* =====================================================
     WISHLIST
     ===================================================== */
  const WISHLIST_KEY = 'lumiere_wishlist_ms01';
  let wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');

  function toggleWishlist(btn, id) {
    const idx = wishlist.indexOf(id);
    if (idx === -1) {
      wishlist.push(id);
      btn.classList.add('wishlisted');
      btn.setAttribute('aria-label', 'Đã thêm vào danh sách yêu thích');
      showToast('Đã thêm vào danh sách yêu thích');
    } else {
      wishlist.splice(idx, 1);
      btn.classList.remove('wishlisted');
      btn.setAttribute('aria-label', 'Thêm vào danh sách yêu thích');
      showToast('Đã xoá khỏi danh sách yêu thích');
    }
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }

  function applyWishlistState() {
    document.querySelectorAll('.btn-wishlist[data-id]').forEach(btn => {
      if (wishlist.includes(btn.dataset.id)) {
        btn.classList.add('wishlisted');
      }
    });
  }

  /* =====================================================
     TOAST
     ===================================================== */
  let toastTimer;
  function showToast(msg) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
  }

  /* =====================================================
     MOBILE NAV
     ===================================================== */
  function openMobileNav() {
    const nav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('mobile-nav-overlay');
    if (!nav || !overlay) return;
    overlay.style.display = 'block';
    requestAnimationFrame(() => {
      overlay.classList.add('open');
      nav.classList.add('open');
    });
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    const nav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('mobile-nav-overlay');
    if (!nav || !overlay) return;
    overlay.classList.remove('open');
    nav.classList.remove('open');
    setTimeout(() => { overlay.style.display = 'none'; }, 350);
    document.body.style.overflow = '';
  }

  /* =====================================================
     HEADER SCROLL
     ===================================================== */
  function initHeaderScroll() {
    const header = document.getElementById('site-header');
    if (!header) return;
    const onScroll = () => {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* =====================================================
     BIND EVENTS
     ===================================================== */
  document.addEventListener('DOMContentLoaded', function () {

    // Initial state
    updateCartCount();
    renderCartItems();
    applyWishlistState();
    initHeaderScroll();

    // Cart toggle
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) cartBtn.addEventListener('click', openCart);

    const cartClose = document.getElementById('cart-close');
    if (cartClose) cartClose.addEventListener('click', closeCart);

    const cartOverlay = document.getElementById('cart-overlay');
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    // Mobile nav
    const menuBtn = document.getElementById('mobile-menu-btn');
    if (menuBtn) menuBtn.addEventListener('click', openMobileNav);

    const navClose = document.getElementById('mobile-nav-close');
    if (navClose) navClose.addEventListener('click', closeMobileNav);

    const navOverlay = document.getElementById('mobile-nav-overlay');
    if (navOverlay) navOverlay.addEventListener('click', closeMobileNav);

    // Add to cart buttons
    document.querySelectorAll('.btn-quick-add').forEach(btn => {
      btn.addEventListener('click', function () {
        const { name, price, id } = this.dataset;
        addToCart(id, name, parseInt(price, 10));
      });
    });

    // Wishlist buttons
    document.querySelectorAll('.btn-wishlist').forEach(btn => {
      btn.addEventListener('click', function () {
        toggleWishlist(this, this.dataset.id);
      });
    });

    // Newsletter form (demo)
    const newsletter = document.getElementById('newsletter-form');
    if (newsletter) {
      newsletter.addEventListener('submit', function (e) {
        e.preventDefault();
        showToast('Đây là giao diện mẫu — chức năng đăng ký chỉ minh họa.');
      });
    }

    // Keyboard accessibility: close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeCart();
        closeMobileNav();
      }
    });
  });

})();
