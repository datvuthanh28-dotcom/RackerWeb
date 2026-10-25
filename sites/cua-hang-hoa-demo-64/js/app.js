/**
 * Flora Art - Cửa hàng hoa tươi MS64
 * Main Interactive Application Script
 * 
 * Features:
 * - Cart Management with localStorage persistence (dvweb:flower64:cart:v1)
 * - Demo Authentication with Web Crypto salted hashing (dvweb:flower64:auth:v1)
 * - Accent-insensitive search & category filtering
 * - Product detail modal
 * - Toast notification system (no alert())
 * - Responsive mobile navigation
 */

(function () {
  'use strict';

  // Storage Keys
  const STORAGE_KEYS = {
    CART: 'dvweb:flower64:cart:v1',
    AUTH: 'dvweb:flower64:auth:v1',
    USERS: 'dvweb:flower64:users:v1'
  };

  /* ==========================================================================
     TOAST NOTIFICATION COMPONENT
     ========================================================================== */
  function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type}`;
    
    const icon = type === 'success' ? '✓' : (type === 'error' ? '✕' : 'ℹ');
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span class="toast-msg">${message}</span>
    `;

    container.appendChild(toast);

    // Fade out and remove
    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  /* ==========================================================================
     CART MANAGER (localStorage namespaced)
     ========================================================================== */
  const Cart = {
    getItems() {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.CART);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          // validate item structures
          return parsed.filter(item => item && item.id && item.quantity > 0);
        }
      } catch (e) {
        console.warn('Malformed cart data in localStorage. Resetting cart.', e);
      }
      return [];
    },

    save(items) {
      try {
        localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(items));
      } catch (e) {
        console.error('Failed to save cart to localStorage', e);
      }
      Cart.updateUI();
    },

    addItem(productId, qty = 1) {
      const product = FLOWER_PRODUCTS.find(p => p.id === productId);
      if (!product) return;

      const items = Cart.getItems();
      const existing = items.find(item => item.id === productId);

      if (existing) {
        existing.quantity += qty;
      } else {
        items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: qty
        });
      }

      Cart.save(items);
      showToast(`Đã thêm "${product.name}" vào giỏ hàng!`, 'success');
    },

    updateQuantity(productId, newQty) {
      let items = Cart.getItems();
      if (newQty <= 0) {
        items = items.filter(i => i.id !== productId);
      } else {
        const item = items.find(i => i.id === productId);
        if (item) item.quantity = newQty;
      }
      Cart.save(items);
    },

    removeItem(productId) {
      let items = Cart.getItems();
      const item = items.find(i => i.id === productId);
      const name = item ? item.name : 'Sản phẩm';
      items = items.filter(i => i.id !== productId);
      Cart.save(items);
      showToast(`Đã xóa "${name}" khỏi giỏ hàng.`, 'info');
    },

    clear() {
      Cart.save([]);
      showToast('Đã làm trống giỏ hàng.', 'info');
    },

    getCount() {
      return Cart.getItems().reduce((sum, item) => sum + item.quantity, 0);
    },

    getSubtotal() {
      return Cart.getItems().reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },

    updateUI() {
      const badge = document.getElementById('cart-count');
      if (badge) {
        const count = Cart.getCount();
        badge.textContent = count;
        badge.classList.toggle('has-items', count > 0);
      }

      // If drawer is open, re-render it
      const drawerList = document.getElementById('cart-drawer-items');
      const drawerSubtotal = document.getElementById('cart-drawer-subtotal');
      const emptyNotice = document.getElementById('cart-drawer-empty');
      const checkoutBtn = document.getElementById('cart-checkout-btn');

      if (drawerList && drawerSubtotal) {
        const items = Cart.getItems();
        if (items.length === 0) {
          drawerList.innerHTML = '';
          if (emptyNotice) emptyNotice.style.display = 'block';
          if (checkoutBtn) checkoutBtn.setAttribute('disabled', 'true');
          drawerSubtotal.textContent = formatCurrency(0);
        } else {
          if (emptyNotice) emptyNotice.style.display = 'none';
          if (checkoutBtn) checkoutBtn.removeAttribute('disabled');
          drawerSubtotal.textContent = formatCurrency(Cart.getSubtotal());

          drawerList.innerHTML = items.map(item => `
            <div class="cart-item" data-id="${item.id}">
              <img src="${item.image}" alt="${item.name}" class="cart-item-img">
              <div class="cart-item-info">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-price">${formatCurrency(item.price)}</div>
                <div class="cart-item-controls">
                  <div class="qty-stepper">
                    <button type="button" class="btn-qty btn-qty-minus" data-id="${item.id}" aria-label="Giảm">-</button>
                    <span class="qty-value">${item.quantity}</span>
                    <button type="button" class="btn-qty btn-qty-plus" data-id="${item.id}" aria-label="Tăng">+</button>
                  </div>
                  <button type="button" class="btn-remove-item" data-id="${item.id}" title="Xóa khỏi giỏ">Xóa</button>
                </div>
              </div>
            </div>
          `).join('');

          // Bind qty buttons
          drawerList.querySelectorAll('.btn-qty-minus').forEach(btn => {
            btn.onclick = () => {
              const id = btn.getAttribute('data-id');
              const item = items.find(i => i.id === id);
              if (item) Cart.updateQuantity(id, item.quantity - 1);
            };
          });

          drawerList.querySelectorAll('.btn-qty-plus').forEach(btn => {
            btn.onclick = () => {
              const id = btn.getAttribute('data-id');
              const item = items.find(i => i.id === id);
              if (item) Cart.updateQuantity(id, item.quantity + 1);
            };
          });

          drawerList.querySelectorAll('.btn-remove-item').forEach(btn => {
            btn.onclick = () => {
              const id = btn.getAttribute('data-id');
              Cart.removeItem(id);
            };
          });
        }
      }
    }
  };

  /* ==========================================================================
     DEMO AUTHENTICATION (Web Crypto Salted Hashing - Demo only)
     ========================================================================== */
  async function hashPassword(password, salt) {
    const enc = new TextEncoder();
    const data = enc.encode(password + '::flora_demo_salt::' + salt);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  const Auth = {
    getUsers() {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.USERS);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    },

    saveUsers(users) {
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    },

    getCurrentUser() {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.AUTH);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    },

    setCurrentUser(user) {
      if (user) {
        localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEYS.AUTH);
      }
      Auth.updateUI();
    },

    async register(name, email, password) {
      const users = Auth.getUsers();
      const normalizedEmail = email.trim().toLowerCase();

      if (users.some(u => u.email === normalizedEmail)) {
        return { success: false, message: 'Email này đã được đăng ký tài khoản demo.' };
      }

      const salt = Math.random().toString(36).substring(2, 10);
      const hashedPassword = await hashPassword(password, salt);

      const newUser = {
        id: 'u_' + Date.now(),
        name: name.trim(),
        email: normalizedEmail,
        salt,
        passwordHash: hashedPassword,
        createdAt: new Date().toLocaleDateString('vi-VN')
      };

      users.push(newUser);
      Auth.saveUsers(users);

      // Auto login
      Auth.setCurrentUser({ id: newUser.id, name: newUser.name, email: newUser.email });
      return { success: true, message: `Chào mừng ${newUser.name}! Tạo tài khoản demo thành công.` };
    },

    async login(email, password) {
      const users = Auth.getUsers();
      const normalizedEmail = email.trim().toLowerCase();
      const user = users.find(u => u.email === normalizedEmail);

      if (!user) {
        return { success: false, message: 'Email hoặc mật khẩu demo chưa chính xác.' };
      }

      const hash = await hashPassword(password, user.salt);
      if (hash !== user.passwordHash) {
        return { success: false, message: 'Email hoặc mật khẩu demo chưa chính xác.' };
      }

      Auth.setCurrentUser({ id: user.id, name: user.name, email: user.email });
      return { success: true, message: `Đăng nhập thành công! Chào bạn, ${user.name}.` };
    },

    logout() {
      Auth.setCurrentUser(null);
      showToast('Đã đăng xuất khỏi tài khoản demo.', 'info');
    },

    updateUI() {
      const user = Auth.getCurrentUser();
      const authTrigger = document.getElementById('auth-trigger');
      const authUserMenu = document.getElementById('auth-user-menu');
      const authUserName = document.getElementById('auth-user-name');

      if (authTrigger && authUserMenu && authUserName) {
        if (user) {
          authTrigger.style.display = 'none';
          authUserMenu.style.display = 'flex';
          authUserName.textContent = user.name;
        } else {
          authTrigger.style.display = 'inline-flex';
          authUserMenu.style.display = 'none';
          authUserName.textContent = '';
        }
      }
    }
  };

  /* ==========================================================================
     PRODUCT DETAIL MODAL
     ========================================================================== */
  function openProductModal(productId) {
    const product = FLOWER_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    let modal = document.getElementById('product-detail-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'product-detail-modal';
      modal.className = 'modal-overlay';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal-dialog modal-product" role="dialog" aria-modal="true" aria-labelledby="modal-prod-title">
        <button type="button" class="modal-close-btn" aria-label="Đóng cửa sổ">&times;</button>
        <div class="product-modal-grid">
          <div class="product-modal-image">
            <img src="${product.image}" alt="${product.alt}">
            <span class="badge-category">${product.category}</span>
          </div>
          <div class="product-modal-body">
            <span class="product-modal-code">Mã SP: ${product.id.toUpperCase()}</span>
            <h2 id="modal-prod-title" class="product-modal-title">${product.name}</h2>
            <div class="product-modal-price">${formatCurrency(product.price)}</div>
            <div class="product-modal-desc">
              <p><strong>Mô tả:</strong> ${product.description}</p>
            </div>
            <div class="product-care-box">
              <span class="care-icon">🌿</span>
              <div>
                <strong>Bí quyết chăm sóc hoa tươi:</strong>
                <p>${product.careTip}</p>
              </div>
            </div>
            <div class="modal-buy-section">
              <div class="qty-stepper modal-qty">
                <button type="button" id="modal-qty-minus">-</button>
                <span id="modal-qty-val">1</span>
                <button type="button" id="modal-qty-plus">+</button>
              </div>
              <button type="button" id="modal-add-cart-btn" class="btn-primary btn-add-modal">
                Thêm Vào Giỏ Hàng
              </button>
            </div>
            <div class="product-modal-perks">
              <span>🚚 Giao hỏa tốc 2H</span>
              <span>💌 Tặng thiệp chúc mừng</span>
              <span>🌸 Hoa tươi bảo hành 3 ngày</span>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    let currentQty = 1;
    const qtyVal = modal.querySelector('#modal-qty-val');
    modal.querySelector('#modal-qty-minus').onclick = () => {
      if (currentQty > 1) {
        currentQty--;
        qtyVal.textContent = currentQty;
      }
    };
    modal.querySelector('#modal-qty-plus').onclick = () => {
      currentQty++;
      qtyVal.textContent = currentQty;
    };

    modal.querySelector('#modal-add-cart-btn').onclick = () => {
      Cart.addItem(product.id, currentQty);
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    const closeBtn = modal.querySelector('.modal-close-btn');
    closeBtn.onclick = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    };
  }

  /* ==========================================================================
     AUTH MODAL (Login / Register / Profile)
     ========================================================================== */
  function openAuthModal(mode = 'login') {
    let modal = document.getElementById('auth-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'auth-modal';
      modal.className = 'modal-overlay';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal-dialog modal-auth" role="dialog" aria-modal="true">
        <button type="button" class="modal-close-btn" aria-label="Đóng cửa sổ">&times;</button>
        <div class="auth-header">
          <div class="auth-logo">🌸 Flora Art</div>
          <p class="auth-subtitle">Cửa hàng hoa tươi chuyên nghiệp #MS64</p>
        </div>

        <div class="auth-demo-badge">
          ℹ️ <strong>Mô phỏng Demo:</strong> Đăng ký và đăng nhập được lưu an toàn trong trình duyệt (localStorage với salted SHA-256). Không gửi dữ liệu đến máy chủ thực.
        </div>

        <div class="auth-tabs">
          <button type="button" class="auth-tab ${mode === 'login' ? 'active' : ''}" id="tab-login">Đăng Nhập</button>
          <button type="button" class="auth-tab ${mode === 'register' ? 'active' : ''}" id="tab-register">Đăng Ký Tài Khoản</button>
        </div>

        <div id="auth-alert" class="auth-alert" style="display: none;"></div>

        <!-- LOGIN FORM -->
        <form id="form-login" class="auth-form ${mode === 'login' ? 'active' : ''}">
          <div class="form-group">
            <label for="login-email">Địa chỉ Email *</label>
            <input type="email" id="login-email" required placeholder="vidu: khachhang@email.com">
          </div>
          <div class="form-group">
            <label for="login-pwd">Mật khẩu *</label>
            <div class="input-password-wrap">
              <input type="password" id="login-pwd" required placeholder="Nhập mật khẩu demo">
              <button type="button" class="btn-toggle-pwd" aria-label="Hiện mật khẩu">👁</button>
            </div>
          </div>
          <button type="submit" class="btn-primary btn-submit-auth">Đăng Nhập Demo</button>
          <div class="auth-footer-help">
            <span>Chưa có tài khoản?</span>
            <a href="#" id="switch-to-register">Đăng ký ngay tại đây</a>
          </div>
        </form>

        <!-- REGISTER FORM -->
        <form id="form-register" class="auth-form ${mode === 'register' ? 'active' : ''}">
          <div class="form-group">
            <label for="reg-name">Họ và tên hiển thị *</label>
            <input type="text" id="reg-name" required placeholder="Nguyễn Thu Hà">
          </div>
          <div class="form-group">
            <label for="reg-email">Địa chỉ Email *</label>
            <input type="email" id="reg-email" required placeholder="thuha@email.com">
          </div>
          <div class="form-group">
            <label for="reg-pwd">Mật khẩu demo (tối thiểu 6 ký tự) *</label>
            <div class="input-password-wrap">
              <input type="password" id="reg-pwd" required minlength="6" placeholder="Nhập mật khẩu">
              <button type="button" class="btn-toggle-pwd" aria-label="Hiện mật khẩu">👁</button>
            </div>
          </div>
          <div class="form-group">
            <label for="reg-pwd-confirm">Xác nhận mật khẩu *</label>
            <div class="input-password-wrap">
              <input type="password" id="reg-pwd-confirm" required minlength="6" placeholder="Nhập lại mật khẩu">
              <button type="button" class="btn-toggle-pwd" aria-label="Hiện mật khẩu">👁</button>
            </div>
          </div>
          <button type="submit" class="btn-primary btn-submit-auth">Tạo Tài Khoản Demo</button>
          <div class="auth-footer-help">
            <span>Đã có tài khoản?</span>
            <a href="#" id="switch-to-login">Đăng nhập tại đây</a>
          </div>
        </form>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const alertBox = modal.querySelector('#auth-alert');
    const tabLogin = modal.querySelector('#tab-login');
    const tabReg = modal.querySelector('#tab-register');
    const formLogin = modal.querySelector('#form-login');
    const formReg = modal.querySelector('#form-register');

    function switchTab(newMode) {
      if (newMode === 'login') {
        tabLogin.classList.add('active');
        tabReg.classList.remove('active');
        formLogin.classList.add('active');
        formReg.classList.remove('active');
      } else {
        tabReg.classList.add('active');
        tabLogin.classList.remove('active');
        formReg.classList.add('active');
        formLogin.classList.remove('active');
      }
      alertBox.style.display = 'none';
    }

    tabLogin.onclick = () => switchTab('login');
    tabReg.onclick = () => switchTab('register');
    modal.querySelector('#switch-to-register').onclick = (e) => { e.preventDefault(); switchTab('register'); };
    modal.querySelector('#switch-to-login').onclick = (e) => { e.preventDefault(); switchTab('login'); };

    // Password visibility toggles
    modal.querySelectorAll('.btn-toggle-pwd').forEach(btn => {
      btn.onclick = () => {
        const input = btn.previousElementSibling;
        if (input.type === 'password') {
          input.type = 'text';
          btn.textContent = '🔒';
        } else {
          input.type = 'password';
          btn.textContent = '👁';
        }
      };
    });

    // Close handlers
    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };
    modal.querySelector('.modal-close-btn').onclick = closeModal;
    modal.onclick = (e) => { if (e.target === modal) closeModal(); };

    // Submit Login
    formLogin.onsubmit = async (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const pwd = document.getElementById('login-pwd').value;

      const res = await Auth.login(email, pwd);
      if (res.success) {
        showToast(res.message, 'success');
        closeModal();
      } else {
        alertBox.textContent = res.message;
        alertBox.style.display = 'block';
      }
    };

    // Submit Register
    formReg.onsubmit = async (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value;
      const email = document.getElementById('reg-email').value;
      const pwd = document.getElementById('reg-pwd').value;
      const pwdConfirm = document.getElementById('reg-pwd-confirm').value;

      if (pwd !== pwdConfirm) {
        alertBox.textContent = 'Mật khẩu xác nhận không khớp!';
        alertBox.style.display = 'block';
        return;
      }

      const res = await Auth.register(name, email, pwd);
      if (res.success) {
        showToast(res.message, 'success');
        closeModal();
      } else {
        alertBox.textContent = res.message;
        alertBox.style.display = 'block';
      }
    };
  }

  /* ==========================================================================
     DRAWER CART SETUP
     ========================================================================== */
  function setupCartDrawer() {
    let drawer = document.getElementById('cart-drawer');
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.id = 'cart-drawer';
      drawer.className = 'cart-drawer-overlay';
      drawer.innerHTML = `
        <div class="cart-drawer-panel" role="dialog" aria-labelledby="cart-drawer-title">
          <div class="cart-drawer-header">
            <h3 id="cart-drawer-title">Giỏ Hàng Của Bạn</h3>
            <button type="button" class="drawer-close-btn" aria-label="Đóng giỏ hàng">&times;</button>
          </div>

          <div class="cart-drawer-body">
            <div id="cart-drawer-empty" class="cart-drawer-empty" style="display: none;">
              <span class="empty-icon">💐</span>
              <p>Giỏ hàng của bạn đang trống</p>
              <a href="san-pham.html" class="btn-primary btn-shop-now">Khám Phá Hoa Tươi</a>
            </div>
            <div id="cart-drawer-items" class="cart-drawer-list"></div>
          </div>

          <div class="cart-drawer-footer">
            <div class="cart-summary-row">
              <span>Tạm tính:</span>
              <strong id="cart-drawer-subtotal">0₫</strong>
            </div>
            <p class="cart-drawer-note">Miễn phí thiệp chúc mừng & phụ kiện cắm hoa.</p>
            <div class="cart-drawer-actions">
              <button type="button" id="cart-clear-btn" class="btn-outline btn-clear-cart">Xóa Tất Cả</button>
              <button type="button" id="cart-checkout-btn" class="btn-primary btn-checkout">Đặt Hàng Demo</button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(drawer);
    }

    const openDrawer = () => {
      Cart.updateUI();
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    };

    // Triggers
    document.querySelectorAll('.cart-trigger').forEach(btn => {
      btn.onclick = openDrawer;
    });

    drawer.querySelector('.drawer-close-btn').onclick = closeDrawer;
    drawer.onclick = (e) => { if (e.target === drawer) closeDrawer(); };

    // Clear cart button
    drawer.querySelector('#cart-clear-btn').onclick = () => {
      if (Cart.getItems().length > 0) {
        Cart.clear();
      }
    };

    // Checkout button (honest demo notice)
    drawer.querySelector('#cart-checkout-btn').onclick = () => {
      if (Cart.getItems().length === 0) return;
      showToast('Đây là giao diện mô phỏng e-commerce! Đơn hàng thử nghiệm thành công (không thanh toán thực tế).', 'success');
      Cart.clear();
      closeDrawer();
    };
  }

  /* ==========================================================================
     GLOBAL SEARCH SETUP
     ========================================================================== */
  function setupSearch() {
    const searchForms = document.querySelectorAll('.header-search-form');
    searchForms.forEach(form => {
      form.onsubmit = (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="search"]');
        const query = input ? input.value.trim() : '';
        if (query) {
          window.location.href = `san-pham.html?q=${encodeURIComponent(query)}`;
        }
      };
    });
  }

  /* ==========================================================================
     HOMEPAGE PRODUCT RENDERING
     ========================================================================== */
  function renderHomepageFeatured() {
    const container = document.getElementById('featured-products-grid');
    if (!container) return;

    // Display at least 6 products
    const featured = FLOWER_PRODUCTS.filter(p => p.isFeatured).slice(0, 8);
    container.innerHTML = featured.map(product => `
      <div class="product-card" data-id="${product.id}">
        <div class="card-img-wrap">
          <img src="${product.image}" alt="${product.alt}" loading="lazy">
          <span class="card-category-tag">${product.category}</span>
          <button type="button" class="btn-quick-view" data-id="${product.id}" title="Xem chi tiết">
            👁 Xem chi tiết
          </button>
        </div>
        <div class="card-details">
          <h3 class="card-title">
            <a href="javascript:void(0)" class="prod-title-link" data-id="${product.id}">${product.name}</a>
          </h3>
          <p class="card-short-desc">${product.shortDesc}</p>
          <div class="card-bottom">
            <div class="card-price">${formatCurrency(product.price)}</div>
            <button type="button" class="btn-add-cart" data-id="${product.id}" title="Thêm vào giỏ">
              <span>+</span> Thêm giỏ
            </button>
          </div>
        </div>
      </div>
    `).join('');

    bindProductCardActions(container);
  }

  /* ==========================================================================
     CATALOG PAGE RENDERING & FILTERING (san-pham.html)
     ========================================================================== */
  function renderCatalogPage() {
    const catalogGrid = document.getElementById('catalog-products-grid');
    if (!catalogGrid) return;

    // Parse URL params
    const params = new URLSearchParams(window.location.search);
    let activeQuery = params.get('q') || '';
    let activeCategory = params.get('cat') || 'all';
    let currentSort = 'default';

    const searchInput = document.getElementById('catalog-search-input');
    const categorySelect = document.getElementById('catalog-category-filter');
    const sortSelect = document.getElementById('catalog-sort-filter');
    const resultCountEl = document.getElementById('catalog-result-count');
    const activeFilterTag = document.getElementById('catalog-active-filter');
    const clearFilterBtn = document.getElementById('catalog-clear-filter');

    if (searchInput && activeQuery) {
      searchInput.value = activeQuery;
    }
    if (categorySelect && activeCategory) {
      categorySelect.value = activeCategory;
    }

    function filterAndRender() {
      let filtered = [...FLOWER_PRODUCTS];

      // Filter by Category
      if (activeCategory && activeCategory !== 'all') {
        filtered = filtered.filter(p => p.categorySlug === activeCategory || p.category === activeCategory);
      }

      // Filter by Search Query (Vietnamese Accent Insensitive)
      if (activeQuery) {
        const cleanQuery = removeVietnameseTones(activeQuery);
        filtered = filtered.filter(p => {
          const matchName = removeVietnameseTones(p.name).includes(cleanQuery);
          const matchCat = removeVietnameseTones(p.category).includes(cleanQuery);
          const matchDesc = removeVietnameseTones(p.description).includes(cleanQuery);
          const matchShort = removeVietnameseTones(p.shortDesc).includes(cleanQuery);
          return matchName || matchCat || matchDesc || matchShort;
        });
      }

      // Sorting
      if (currentSort === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (currentSort === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
      } else if (currentSort === 'name-asc') {
        filtered.sort((a, b) => a.name.localeCompare(b.name, 'vi'));
      }

      // Update count & active filter tag
      if (resultCountEl) {
        resultCountEl.textContent = `${filtered.length} sản phẩm hoa tươi`;
      }

      if (activeFilterTag) {
        let tagText = [];
        if (activeCategory && activeCategory !== 'all') {
          const catP = FLOWER_PRODUCTS.find(p => p.categorySlug === activeCategory);
          tagText.push(`Danh mục: ${catP ? catP.category : activeCategory}`);
        }
        if (activeQuery) {
          tagText.push(`Từ khóa: "${activeQuery}"`);
        }

        if (tagText.length > 0) {
          activeFilterTag.innerHTML = `Bộ lọc đang áp dụng: <strong>${tagText.join(' | ')}</strong>`;
          activeFilterTag.style.display = 'inline-flex';
          if (clearFilterBtn) clearFilterBtn.style.display = 'inline-block';
        } else {
          activeFilterTag.style.display = 'none';
          if (clearFilterBtn) clearFilterBtn.style.display = 'none';
        }
      }

      // Render Grid
      if (filtered.length === 0) {
        catalogGrid.innerHTML = `
          <div class="empty-catalog-state">
            <span class="empty-catalog-icon">🥀</span>
            <h3>Không tìm thấy mẫu hoa phù hợp</h3>
            <p>Không có sản phẩm nào khớp với tìm kiếm "${activeQuery || activeCategory}". Vui lòng thử từ khóa khác hoặc đặt lại bộ lọc.</p>
            <button type="button" class="btn-primary" id="btn-reset-filters">Xem Tất Cả 14 Mẫu Hoa</button>
          </div>
        `;
        const resetBtn = catalogGrid.querySelector('#btn-reset-filters');
        if (resetBtn) {
          resetBtn.onclick = () => {
            activeQuery = '';
            activeCategory = 'all';
            currentSort = 'default';
            if (searchInput) searchInput.value = '';
            if (categorySelect) categorySelect.value = 'all';
            if (sortSelect) sortSelect.value = 'default';
            window.history.pushState({}, '', 'san-pham.html');
            filterAndRender();
          };
        }
      } else {
        catalogGrid.innerHTML = filtered.map(product => `
          <div class="product-card" data-id="${product.id}">
            <div class="card-img-wrap">
              <img src="${product.image}" alt="${product.alt}" loading="lazy">
              <span class="card-category-tag">${product.category}</span>
              <button type="button" class="btn-quick-view" data-id="${product.id}" title="Xem chi tiết">
                👁 Xem chi tiết
              </button>
            </div>
            <div class="card-details">
              <h3 class="card-title">
                <a href="javascript:void(0)" class="prod-title-link" data-id="${product.id}">${product.name}</a>
              </h3>
              <p class="card-short-desc">${product.shortDesc}</p>
              <div class="card-bottom">
                <div class="card-price">${formatCurrency(product.price)}</div>
                <button type="button" class="btn-add-cart" data-id="${product.id}" title="Thêm vào giỏ">
                  <span>+</span> Thêm giỏ
                </button>
              </div>
            </div>
          </div>
        `).join('');

        bindProductCardActions(catalogGrid);
      }
    }

    // Filter controls events
    if (categorySelect) {
      categorySelect.onchange = () => {
        activeCategory = categorySelect.value;
        filterAndRender();
      };
    }

    if (sortSelect) {
      sortSelect.onchange = () => {
        currentSort = sortSelect.value;
        filterAndRender();
      };
    }

    if (searchInput) {
      searchInput.oninput = () => {
        activeQuery = searchInput.value.trim();
        filterAndRender();
      };
    }

    if (clearFilterBtn) {
      clearFilterBtn.onclick = () => {
        activeQuery = '';
        activeCategory = 'all';
        currentSort = 'default';
        if (searchInput) searchInput.value = '';
        if (categorySelect) categorySelect.value = 'all';
        if (sortSelect) sortSelect.value = 'default';
        window.history.pushState({}, '', 'san-pham.html');
        filterAndRender();
      };
    }

    // Quick category tabs on top of catalog
    document.querySelectorAll('.catalog-tab-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.catalog-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-cat') || 'all';
        if (categorySelect) categorySelect.value = activeCategory;
        filterAndRender();
      };
    });

    filterAndRender();
  }

  /* ==========================================================================
     BIND PRODUCT CARD ACTIONS
     ========================================================================== */
  function bindProductCardActions(container) {
    container.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        Cart.addItem(id, 1);
      };
    });

    container.querySelectorAll('.btn-quick-view, .prod-title-link').forEach(elem => {
      elem.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = elem.getAttribute('data-id');
        openProductModal(id);
      };
    });
  }

  /* ==========================================================================
     MOBILE NAVIGATION & AUTH DROPDOWN
     ========================================================================== */
  function setupNavigation() {
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const navMenu = document.querySelector('header nav');

    if (mobileToggle && navMenu) {
      mobileToggle.onclick = () => {
        navMenu.classList.toggle('nav-open');
        mobileToggle.classList.toggle('is-open');
      };
    }

    // Auth triggers
    const authBtn = document.getElementById('auth-trigger');
    if (authBtn) {
      authBtn.onclick = () => openAuthModal('login');
    }

    const authLogoutBtn = document.getElementById('auth-logout-btn');
    if (authLogoutBtn) {
      authLogoutBtn.onclick = () => Auth.logout();
    }
  }

  /* ==========================================================================
     CONTACT FORM HANDLING
     ========================================================================== */
  function setupContactForm() {
    const contactForm = document.getElementById('site-contact-form');
    if (!contactForm) return;

    contactForm.onsubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById('c-name')?.value || 'Quý khách';
      const phone = document.getElementById('c-phone')?.value || '';
      
      showToast(`Cảm ơn ${name}! Flora Art đã nhận yêu cầu tư vấn. (Mô phỏng demo: Chưa gửi đến máy chủ thực tế).`, 'success');
      contactForm.reset();
    };
  }

  /* ==========================================================================
     INITIALIZATION ON DOM LOAD
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    setupCartDrawer();
    setupSearch();
    setupNavigation();
    setupContactForm();

    Cart.updateUI();
    Auth.updateUI();

    // Render page-specific content
    renderHomepageFeatured();
    renderCatalogPage();

    // Keyboard support: ESC closes any open modal or drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal-overlay.active');
        if (activeModal) {
          activeModal.classList.remove('active');
          document.body.style.overflow = '';
        }
        const activeDrawer = document.querySelector('.cart-drawer-overlay.active');
        if (activeDrawer) {
          activeDrawer.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  });

})();
