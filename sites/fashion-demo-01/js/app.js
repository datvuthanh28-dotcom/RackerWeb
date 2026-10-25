document.addEventListener('DOMContentLoaded', () => {
  /* ==================== CART (DEMO) ==================== */
  let cartCount = 0;
  const cartBadge = document.getElementById('cart-count');

  document.querySelectorAll('.btn-buy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      cartCount++;
      if (cartBadge) cartBadge.textContent = cartCount;
      const itemName = e.target.getAttribute('data-name') || 'Sản phẩm';

      // Visual feedback
      const originalText = btn.textContent;
      btn.textContent = '✓ Đã Thêm';
      btn.style.background = '#16a34a';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 1500);

      // Demo notice instead of misleading "consultant will call"
      alert(
        '✓ Đã thêm "' + itemName + '" vào giỏ hàng (demo).\n\n' +
        'Đây là giao diện mẫu — chức năng giỏ hàng chỉ mang tính minh họa.\n' +
        'Để đặt hàng thực tế, vui lòng liên hệ Zalo: 0971183939'
      );
    });
  });

  /* ==================== CONTACT FORM (DEMO) ==================== */
  const contactForm = document.getElementById('site-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(
        '✓ Cảm ơn bạn đã điền thông tin (demo)!\n\n' +
        'Đây là giao diện mẫu — thông tin bạn nhập KHÔNG được gửi đi.\n' +
        'Để liên hệ thực tế, vui lòng nhắn qua Zalo: 0971183939'
      );
      contactForm.reset();
    });
  }

  /* ==================== NEWSLETTER (DEMO) ==================== */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(
        '✓ Đăng ký thành công (demo)!\n\n' +
        'Đây là giao diện mẫu — chức năng đăng ký newsletter chỉ mang tính minh họa.'
      );
      newsletterForm.reset();
    });
  }

  /* ==================== PRODUCT FILTERS ==================== */
  const filterTabs = document.querySelectorAll('.filter-tab');
  const productGrid = document.getElementById('product-grid');
  const productCount = document.querySelector('.product-count strong');

  if (filterTabs.length && productGrid) {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Update active tab
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');
        const cards = productGrid.querySelectorAll('.card');
        let visibleCount = 0;

        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = '';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        if (productCount) {
          productCount.textContent = visibleCount;
        }
      });
    });
  }

  /* ==================== MOBILE MENU ==================== */
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      // Animate hamburger
      const spans = menuToggle.querySelectorAll('span');
      if (mainNav.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }

  /* ==================== SMOOTH SCROLL FOR ANCHOR LINKS ==================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
