/* =====================================================
   THE FLOUR & STONE — JS LOGIC (#MS37)
   Pre-order Cart, Pastry Filter, Mobile Navigation
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

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          closeDrawer();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Pastry Category Filter
  const bakeryTabs = document.querySelectorAll('.bakery-tab-btn');
  const pastryCards = document.querySelectorAll('.pastry-card');

  bakeryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      bakeryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      pastryCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Custom Cake Order Form
  const cakeForm = document.getElementById('cake-order-form');
  if (cakeForm) {
    cakeForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('cake-name')?.value || 'Quý khách';
      const phone = document.getElementById('cake-phone')?.value || '';
      const type = document.getElementById('cake-type')?.value || 'Bánh sinh nhật';
      const size = document.getElementById('cake-size')?.value || '16cm';
      const date = document.getElementById('cake-date')?.value || '';
      const textNote = document.getElementById('cake-text')?.value || '';

      const toast = document.getElementById('toast-bakery');
      if (toast) {
        toast.innerHTML = `<strong>Kính chào ${name}!</strong> Đơn đặt <strong>${type} (${size})</strong> vào ngày <strong>${date}</strong> đã được chuyển tới bếp bánh. Bếp sẽ liên hệ qua SĐT <strong>${phone}</strong> để xác nhận chi tiết.`;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 7000);
      }

      // Offer direct confirmation via Zalo
      setTimeout(() => {
        const msg = encodeURIComponent(`Xin chào Tiệm bánh The Flour & Stone, tôi muốn đặt bánh:\n- Tên khách: ${name}\n- SĐT: ${phone}\n- Loại bánh: ${type} (Size: ${size})\n- Ngày nhận bánh: ${date}\n- Chữ ghi lên bánh / Yêu cầu: ${textNote}`);
        const confirmZalo = confirm(`Đơn đặt bánh của bạn đã được tiếp nhận! Bạn có muốn kết nối Zalo trực tiếp với Bếp Bánh (0971183939) để gửi hình mẫu trang trí không?`);
        if (confirmZalo) {
          window.open(`https://zalo.me/0971183939?text=${msg}`, '_blank');
        }
      }, 800);

      cakeForm.reset();
    });
  }

  // Cart Counter & Pre-order
  let cartCount = 0;
  window.addPastryToCart = function(productName, price) {
    cartCount++;
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.textContent = cartCount;

    showToast(`Đã thêm "${productName}" vào giỏ bánh đặt trước!`);
  };

  function showToast(text) {
    const toast = document.getElementById('toast-bakery');
    if (toast) {
      toast.textContent = text;
      toast.classList.add('show');
      setTimeout(() => { toast.classList.remove('show'); }, 4000);
    }
  }
});
