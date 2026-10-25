/**
 * Auto Garage Demo 40 - Core Application Logic
 * Độc lập, thuần Vanilla JS, hỗ trợ lưu trữ localStorage
 */

const STORAGE_KEY = 'autogarage_cart_v1';

// ==========================================
// CART STORAGE HELPERS
// ==========================================
function getCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Lỗi đọc giỏ hàng:', e);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    updateCartHeaderBadge();
  } catch (e) {
    console.error('Lỗi lưu giỏ hàng:', e);
  }
}

function addToCart(productId, qty = 1) {
  const product = (typeof CAR_PRODUCTS !== 'undefined') ? CAR_PRODUCTS.find(p => p.id === productId) : null;
  if (!product) {
    showToast('Không tìm thấy thông tin sản phẩm!');
    return;
  }

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      priceDisplay: product.priceDisplay,
      image: product.image,
      categoryName: product.categoryName,
      qty: qty
    });
  }

  saveCart(cart);
  showToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
}

function updateCartQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart(cart);
  renderCartPage();
}

function removeFromCart(productId) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  const itemName = item ? item.name : 'Sản phẩm';
  cart = cart.filter(i => i.id !== productId);
  saveCart(cart);
  showToast(`Đã xóa "${itemName}" khỏi giỏ hàng.`);
  renderCartPage();
}

function clearCart() {
  localStorage.removeItem(STORAGE_KEY);
  updateCartHeaderBadge();
  renderCartPage();
}

function updateCartHeaderBadge() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll('.cart-count, #cart-count');
  badges.forEach(b => {
    b.textContent = totalCount;
  });
}

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ==========================================
// FORMATTING HELPERS
// ==========================================
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount).replace('₫', '₫');
}

// ==========================================
// RENDER CAR CARD HTML
// ==========================================
function createCarCardHTML(car) {
  const specsSnippet = car.specs ? `
    <div class="card-specs-mini">
      <span>Động cơ: <strong>${car.specs['Động cơ'] ? car.specs['Động cơ'].split('+')[0].trim() : 'Chuẩn hãng'}</strong></span>
      <span>Công suất: <strong>${car.specs['Công suất cực đại'] || car.specs['Thời gian thực hiện'] || 'Tối ưu'}</strong></span>
    </div>
  ` : '';

  return `
    <div class="car-card" data-category="${car.category}">
      <div class="card-img-wrap">
        <a href="product-detail.html?id=${car.id}">
          <img src="${car.image}" alt="${car.name}" loading="lazy">
        </a>
        ${car.badge ? `<span class="card-badge">${car.badge}</span>` : ''}
        ${car.status ? `<span class="card-status">${car.status}</span>` : ''}
      </div>
      <div class="card-body">
        <div class="card-category">${car.categoryName}</div>
        <h3 class="card-title">
          <a href="product-detail.html?id=${car.id}">${car.name}</a>
        </h3>
        <p class="card-desc">${car.shortDesc}</p>
        ${specsSnippet}
        <div class="card-price-row">
          <div class="card-price">${car.priceDisplay}</div>
          ${car.originalPrice ? `<div class="card-old-price">${car.originalPrice}</div>` : ''}
        </div>
        <div class="card-actions">
          <a href="product-detail.html?id=${car.id}" class="btn-card-detail">Xem Chi Tiết</a>
          <button type="button" class="btn-card-add" onclick="addToCart('${car.id}')">Thêm Giỏ Hàng</button>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// HOMEPAGE INITIALIZER
// ==========================================
function initHomePage() {
  const container = document.getElementById('featured-cars-grid');
  if (container && typeof CAR_PRODUCTS !== 'undefined') {
    renderCarsGrid(CAR_PRODUCTS.slice(0, 6), container);

    // Setup filter tabs
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-cat');
        if (cat === 'all') {
          renderCarsGrid(CAR_PRODUCTS, container);
        } else {
          const filtered = CAR_PRODUCTS.filter(p => p.category === cat);
          renderCarsGrid(filtered, container);
        }
      });
    });
  }

  // Render articles
  const blogContainer = document.getElementById('home-blog-grid');
  if (blogContainer && typeof BLOG_ARTICLES !== 'undefined') {
    blogContainer.innerHTML = BLOG_ARTICLES.map(art => `
      <div class="blog-card">
        <div class="blog-img">
          <img src="${art.image}" alt="${art.title}" loading="lazy">
        </div>
        <div class="blog-content">
          <div class="blog-meta">
            <span>${art.category}</span>
            <span>${art.date}</span>
          </div>
          <h3 class="blog-title">${art.title}</h3>
          <p class="blog-excerpt">${art.excerpt}</p>
          <a href="blog.html" class="blog-link">Đọc chi tiết &rarr;</a>
        </div>
      </div>
    `).join('');
  }

  // Handle booking form
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = bookingForm.querySelector('[name="name"]').value.trim();
      const phone = bookingForm.querySelector('[name="phone"]').value.trim();
      const car = bookingForm.querySelector('[name="car"]').value;

      if (!name || !phone) {
        showToast('Vui lòng nhập họ tên và số điện thoại!');
        return;
      }

      showToast(`Cảm ơn quý khách ${name}! Chuyên viên sẽ gọi điện tư vấn xe ${car} qua số ${phone} trong 15 phút.`);
      bookingForm.reset();
    });
  }
}

function renderCarsGrid(list, container) {
  if (!container) return;
  if (list.length === 0) {
    container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #94a3b8;">Không tìm thấy dòng xe hoặc dịch vụ phù hợp.</div>';
    return;
  }
  container.innerHTML = list.map(car => createCarCardHTML(car)).join('');
}

// ==========================================
// PRODUCTS LISTING PAGE INITIALIZER
// ==========================================
function initProductsPage() {
  const container = document.getElementById('catalog-grid');
  if (!container || typeof CAR_PRODUCTS === 'undefined') return;

  const searchInput = document.getElementById('search-input');
  const catSelect = document.getElementById('category-filter');
  const sortSelect = document.getElementById('sort-filter');
  const countDisplay = document.getElementById('result-count');

  function filterAndRender() {
    let list = [...CAR_PRODUCTS];
    const kw = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const cat = catSelect ? catSelect.value : 'all';
    const sort = sortSelect ? sortSelect.value : 'default';

    if (kw) {
      list = list.filter(p => p.name.toLowerCase().includes(kw) || p.shortDesc.toLowerCase().includes(kw));
    }

    if (cat !== 'all') {
      list = list.filter(p => p.category === cat);
    }

    if (sort === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }

    if (countDisplay) {
      countDisplay.textContent = `Hiển thị ${list.length} xe & dịch vụ`;
    }

    renderCarsGrid(list, container);
  }

  if (searchInput) searchInput.addEventListener('input', filterAndRender);
  if (catSelect) catSelect.addEventListener('change', filterAndRender);
  if (sortSelect) sortSelect.addEventListener('change', filterAndRender);

  // Initial render
  filterAndRender();
}

// ==========================================
// PRODUCT DETAIL PAGE INITIALIZER
// ==========================================
function initDetailPage() {
  if (typeof CAR_PRODUCTS === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id') || 'car-01';
  const car = CAR_PRODUCTS.find(p => p.id === id) || CAR_PRODUCTS[0];

  // Set document title
  document.title = `${car.name} | Auto Garage Showroom`;

  // Gallery
  const mainImg = document.getElementById('detail-main-img');
  const thumbsContainer = document.getElementById('detail-thumbs');
  if (mainImg) mainImg.src = car.image;

  if (thumbsContainer && car.gallery) {
    thumbsContainer.innerHTML = car.gallery.map((src, idx) => `
      <button type="button" class="thumb-btn ${idx === 0 ? 'active' : ''}" onclick="changeDetailImage('${src}', this)">
        <img src="${src}" alt="Ảnh ${idx + 1}">
      </button>
    `).join('');
  }

  // Info fields
  const titleEl = document.getElementById('detail-title');
  const priceEl = document.getElementById('detail-price');
  const oldPriceEl = document.getElementById('detail-old-price');
  const categoryEl = document.getElementById('detail-category');
  const badgeEl = document.getElementById('detail-badge');
  const statusEl = document.getElementById('detail-status');
  const descEl = document.getElementById('detail-desc');

  if (titleEl) titleEl.textContent = car.name;
  if (priceEl) priceEl.textContent = car.priceDisplay;
  if (oldPriceEl) oldPriceEl.textContent = car.originalPrice || '';
  if (categoryEl) categoryEl.textContent = car.categoryName;
  if (badgeEl) badgeEl.textContent = car.badge || 'Chính hãng';
  if (statusEl) statusEl.textContent = car.status || 'Sẵn xe';
  if (descEl) descEl.textContent = car.shortDesc;

  // Specs Table
  const specsTable = document.getElementById('detail-specs-table');
  if (specsTable && car.specs) {
    specsTable.innerHTML = Object.entries(car.specs).map(([label, val]) => `
      <tr>
        <td>${label}</td>
        <td>${val}</td>
      </tr>
    `).join('');
  }

  // Features list
  const featuresList = document.getElementById('detail-features');
  if (featuresList && car.features) {
    featuresList.innerHTML = car.features.map(f => `<li>${f}</li>`).join('');
  }

  // Add to cart button
  const addBtn = document.getElementById('btn-add-detail');
  if (addBtn) {
    addBtn.onclick = () => {
      const qtyInput = document.getElementById('detail-qty');
      const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
      addToCart(car.id, qty);
    };
  }

  // Related cars
  const relatedGrid = document.getElementById('detail-related-grid');
  if (relatedGrid) {
    const related = CAR_PRODUCTS.filter(p => p.id !== car.id).slice(0, 3);
    relatedGrid.innerHTML = related.map(c => createCarCardHTML(c)).join('');
  }
}

function changeDetailImage(src, btn) {
  const mainImg = document.getElementById('detail-main-img');
  if (mainImg) mainImg.src = src;
  const allThumbs = document.querySelectorAll('.thumb-btn');
  allThumbs.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

// ==========================================
// CART PAGE INITIALIZER
// ==========================================
function renderCartPage() {
  const cartWrap = document.getElementById('cart-page-content');
  if (!cartWrap) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartWrap.innerHTML = `
      <div class="empty-cart-state">
        <div style="font-size: 4rem; margin-bottom: 1rem;">🚗</div>
        <h3>Giỏ hàng của bạn đang trống</h3>
        <p>Khám phá ngay bộ sưu tập xe hạng sang và các gói dịch vụ bảo dưỡng độc quyền của Auto Garage Demo 40.</p>
        <a href="san-pham.html" class="btn-primary">Xem Danh Mục Dòng Xe &rarr;</a>
      </div>
    `;
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const totalFormatted = formatCurrency(subtotal);

  cartWrap.innerHTML = `
    <div class="cart-layout">
      <div class="cart-table-wrap">
        <table class="cart-table">
          <thead>
            <tr>
              <th>Dòng xe / Dịch vụ</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Tạm tính</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${cart.map(item => `
              <tr>
                <td>
                  <div class="cart-item-info">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div>
                      <strong style="color: #fff; font-size: 0.95rem;">${item.name}</strong>
                      <div style="font-size: 0.78rem; color: #94a3b8;">${item.categoryName}</div>
                    </div>
                  </div>
                </td>
                <td style="font-weight: 600; color: #cbd5e1;">${formatCurrency(item.price)}</td>
                <td>
                  <div class="qty-ctrl">
                    <button type="button" class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
                    <span class="qty-val">${item.qty}</span>
                    <button type="button" class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
                  </div>
                </td>
                <td style="font-weight: 700; color: var(--primary);">${formatCurrency(item.price * item.qty)}</td>
                <td>
                  <button type="button" class="cart-remove-btn" onclick="removeFromCart('${item.id}')">Xóa</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <div style="padding: 1rem; display: flex; justify-content: space-between; background: var(--surface);">
          <a href="san-pham.html" style="color: #94a3b8; font-size: 0.9rem;">&larr; Tiếp tục chọn thêm xe</a>
          <button type="button" onclick="clearCart()" style="background: none; border: none; color: #ef4444; font-size: 0.85rem; cursor: pointer;">Xóa toàn bộ giỏ hàng</button>
        </div>
      </div>

      <div class="cart-summary">
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem; text-transform: uppercase;">Tóm tắt đơn hàng</h3>
        <div class="summary-row">
          <span>Tổng số lượng sản phẩm:</span>
          <span style="color: #fff; font-weight: 700;">${cart.reduce((s, i) => s + i.qty, 0)}</span>
        </div>
        <div class="summary-row">
          <span>Tổng tiền tạm tính:</span>
          <span style="color: #fff; font-weight: 700;">${totalFormatted}</span>
        </div>
        <div class="summary-row">
          <span>Ưu đãi áp dụng:</span>
          <span style="color: #10b981; font-weight: 600;">Tặng gói phụ kiện 50tr</span>
        </div>
        <div class="summary-row total">
          <span>Tổng thanh toán:</span>
          <span>${totalFormatted}</span>
        </div>

        <form id="checkout-form" style="margin-top: 1.5rem;" onsubmit="handleCheckout(event)">
          <div class="form-group">
            <label>Họ và tên quý khách</label>
            <input type="text" id="cust-name" class="form-control" placeholder="Nguyễn Văn A" required>
          </div>
          <div class="form-group">
            <label>Số điện thoại liên hệ</label>
            <input type="tel" id="cust-phone" class="form-control" placeholder="09xxxxxxxx" required>
          </div>
          <div class="form-group">
            <label>Ghi chú hoặc yêu cầu lái thử</label>
            <textarea id="cust-notes" class="form-control" rows="2" placeholder="Ví dụ: Cần giao xe tại Hà Nội / TP.HCM..."></textarea>
          </div>
          <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; margin-top: 0.5rem;">
            Gửi Yêu Cầu Đặt Giữ Xe
          </button>
        </form>
        <p style="font-size: 0.78rem; color: #64748b; text-align: center; margin-top: 0.85rem;">
          * Cam kết bảo mật thông tin. Nhân viên kinh doanh sẽ liên hệ xác nhận trong 15 phút.
        </p>
      </div>
    </div>
  `;
}

function handleCheckout(e) {
  e.preventDefault();
  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();

  if (!name || !phone) {
    showToast('Vui lòng điền đầy đủ họ tên và số điện thoại!');
    return;
  }

  showToast(`Đặt cọc xe thành công! Cảm ơn anh/chị ${name}. Showroom sẽ liên hệ qua SĐT ${phone}.`);
  localStorage.removeItem(STORAGE_KEY);
  updateCartHeaderBadge();
  setTimeout(() => {
    renderCartPage();
  }, 1200);
}

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
function setupMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');
  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('mobile-active');
    });
  }
}

// ==========================================
// GLOBAL INIT ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  updateCartHeaderBadge();
  setupMobileMenu();

  if (document.getElementById('featured-cars-grid')) {
    initHomePage();
  }

  if (document.getElementById('catalog-grid')) {
    initProductsPage();
  }

  if (document.getElementById('detail-main-img')) {
    initDetailPage();
  }

  if (document.getElementById('cart-page-content')) {
    renderCartPage();
  }

  // Global contact form
  const contactForm = document.getElementById('contact-page-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Đã gửi thông tin liên hệ thành công! Chúng tôi sẽ phản hồi sớm nhất.');
      contactForm.reset();
    });
  }
});
