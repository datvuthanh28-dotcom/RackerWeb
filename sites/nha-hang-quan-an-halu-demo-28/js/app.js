/* =====================================================
   HALU RESTAURANT — JS LOGIC (#MS28)
   Reservation Handler, Menu Filtering, Mobile Navigation
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

  // Smooth scroll for internal links
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

  // Menu Category Filtering
  const filterBtns = document.querySelectorAll('.menu-tab-btn');
  const dishCards = document.querySelectorAll('.dish-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      dishCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Reservation Form Handling
  const resForm = document.getElementById('reservation-form');
  if (resForm) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('res-name')?.value || 'Quý khách';
      const phone = document.getElementById('res-phone')?.value || '';
      const date = document.getElementById('res-date')?.value || '';
      const time = document.getElementById('res-time')?.value || '';
      const guests = document.getElementById('res-guests')?.value || '2';
      const area = document.getElementById('res-area')?.value || 'Khu vực chung';
      const note = document.getElementById('res-note')?.value || '';

      const toast = document.getElementById('toast-msg');
      if (toast) {
        toast.innerHTML = `<strong>Kính chào ${name}!</strong> Yêu cầu đặt bàn cho <strong>${guests} khách</strong> vào <strong>${time} ngày ${date}</strong> đã được gửi thành công. Nhà hàng Halu sẽ gọi xác nhận tới SĐT <strong>${phone}</strong> trong 5 phút.`;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 7000);
      }

      // Offer direct confirmation via Zalo
      setTimeout(() => {
        const msg = encodeURIComponent(`Xin chào Nhà hàng Halu, tôi muốn xác nhận đặt bàn:\n- Tên: ${name}\n- SĐT: ${phone}\n- Thời gian: ${time} ngày ${date}\n- Số khách: ${guests}\n- Khu vực: ${area}\n- Ghi chú: ${note}`);
        const confirmZalo = confirm(`Yêu cầu của quý khách đã tiếp nhận! Bạn có muốn mở Zalo để gửi tin nhắn đặt bàn trực tiếp tới Hotline Halu (0971183939) không?`);
        if (confirmZalo) {
          window.open(`https://zalo.me/0971183939?text=${msg}`, '_blank');
        }
      }, 800);

      resForm.reset();
    });
  }

  // Pre-select dish to reservation note
  window.selectDishToOrder = function(dishName) {
    const noteField = document.getElementById('res-note');
    const resSection = document.getElementById('dat-ban');
    if (noteField) {
      if (noteField.value.trim() === '') {
        noteField.value = `Món gọi trước: ${dishName}`;
      } else if (!noteField.value.includes(dishName)) {
        noteField.value += `, ${dishName}`;
      }
      if (resSection) {
        resSection.scrollIntoView({ behavior: 'smooth' });
      }
      showToast(`Đã thêm "${dishName}" vào danh sách món phục vụ trước!`);
    }
  };

  function showToast(text) {
    const toast = document.getElementById('toast-msg');
    if (toast) {
      toast.textContent = text;
      toast.classList.add('show');
      setTimeout(() => { toast.classList.remove('show'); }, 4000);
    }
  }
});
