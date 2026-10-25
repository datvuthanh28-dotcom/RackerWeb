/* =====================================================
   ASPEN DENTAL — JS LOGIC (#MS34)
   Appointment Booking, Specialty Selection, Mobile Nav
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
  const appointmentForms = document.querySelectorAll('.dental-booking-form');
  appointmentForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('[name="patient_name"]')?.value || 'Quý khách';
      const phone = form.querySelector('[name="patient_phone"]')?.value || '';
      const service = form.querySelector('[name="patient_service"]')?.value || 'Khám tổng quát';
      const branch = form.querySelector('[name="patient_branch"]')?.value || 'Cơ sở chính';
      const date = form.querySelector('[name="patient_date"]')?.value || '';

      const toast = document.getElementById('toast-dental');
      if (toast) {
        toast.innerHTML = `<strong>Kính chào ${name}!</strong> Yêu cầu khám <strong>${service}</strong> tại <strong>${branch}</strong> đã được tiếp nhận. Trợ lý Bác sĩ sẽ gọi điện/Zalo tới số <strong>${phone}</strong> để xác nhận lịch hẹn trong 5 phút.`;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 7000);
      }

      // Offer direct confirmation via Zalo
      setTimeout(() => {
        const msg = encodeURIComponent(`Xin chào Nha khoa Aspen Dental, tôi muốn đăng ký khám tư vấn:\n- Bệnh nhân: ${name}\n- SĐT: ${phone}\n- Dịch vụ: ${service}\n- Chi nhánh: ${branch}\n- Ngày mong muốn: ${date}`);
        const confirmZalo = confirm(`Đăng ký thành công! Bạn có muốn mở Zalo gửi tin nhắn trực tiếp tới Bác sĩ tư vấn Aspen Dental (0971183939) không?`);
        if (confirmZalo) {
          window.open(`https://zalo.me/0971183939?text=${msg}`, '_blank');
        }
      }, 800);

      form.reset();
    });
  });

  // Pre-select service into appointment form
  window.selectDentalService = function(serviceName) {
    const serviceSelects = document.querySelectorAll('[name="patient_service"]');
    serviceSelects.forEach(sel => {
      for (let i = 0; i < sel.options.length; i++) {
        if (sel.options[i].text.includes(serviceName) || sel.options[i].value.includes(serviceName)) {
          sel.selectedIndex = i;
          break;
        }
      }
    });

    const bookSection = document.getElementById('dat-lich-kham');
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`Đã chọn dịch vụ "${serviceName}". Vui lòng điền thông tin hẹn khám!`);
  };

  function showToast(text) {
    const toast = document.getElementById('toast-dental');
    if (toast) {
      toast.textContent = text;
      toast.classList.add('show');
      setTimeout(() => { toast.classList.remove('show'); }, 4000);
    }
  }
});
