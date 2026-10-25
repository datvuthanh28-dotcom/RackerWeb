/* =====================================================
   AN NHIÊN SPA & WELLNESS — JS LOGIC (#MS18)
   Appointment Booking, Service Filtering, Mobile Nav
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

  // Appointment Form Handling
  const bookingForm = document.getElementById('spa-booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('spa-name')?.value || 'Quý khách';
      const phone = document.getElementById('spa-phone')?.value || '';
      const service = document.getElementById('spa-service')?.value || 'Liệu trình thư giãn';
      const date = document.getElementById('spa-date')?.value || '';
      const time = document.getElementById('spa-time')?.value || '';
      const note = document.getElementById('spa-note')?.value || '';

      const toast = document.getElementById('toast-spa');
      if (toast) {
        toast.innerHTML = `<strong>Kính chào ${name}!</strong> Phiếu hẹn <strong>${service}</strong> vào <strong>${time} ngày ${date}</strong> đã được ghi nhận (mô phỏng demo). Chuyên viên tư vấn sẽ liên hệ qua SĐT/Zalo <strong>${phone}</strong> để xác nhận phòng trống thực tế.`;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 7000);
      }

      // Offer direct confirmation via Zalo
      setTimeout(() => {
        const msg = encodeURIComponent(`Xin chào An Nhiên Spa, tôi muốn đặt lịch trị liệu:\n- Khách hàng: ${name}\n- SĐT: ${phone}\n- Dịch vụ: ${service}\n- Ngày hẹn: ${date}\n- Khung giờ: ${time}\n- Ghi chú: ${note}`);
        const confirmZalo = confirm(`Yêu cầu của bạn đã được tiếp nhận! Bạn có muốn mở Zalo để gửi chi tiết lịch hẹn trực tiếp tới chuyên viên tư vấn (0971183939) không?`);
        if (confirmZalo) {
          window.open(`https://zalo.me/0971183939?text=${msg}`, '_blank');
        }
      }, 800);

      bookingForm.reset();
    });
  }

  // Pre-select service from cards to form
  window.selectSpaService = function(serviceName) {
    const serviceSelect = document.getElementById('spa-service');
    const bookingSection = document.getElementById('dat-lich');
    if (serviceSelect) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].text.includes(serviceName) || serviceSelect.options[i].value.includes(serviceName)) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`Đã chọn liệu trình "${serviceName}"! Vui lòng chọn ngày giờ hẹn.`);
  };

  function showToast(text) {
    const toast = document.getElementById('toast-spa');
    if (toast) {
      toast.textContent = text;
      toast.classList.add('show');
      setTimeout(() => { toast.classList.remove('show'); }, 4000);
    }
  }
});
