/* =====================================================
   AN NHIÊN SPA & WELLNESS — JS LOGIC (#MS18)
   Sensory Pillar Switcher, Appointment Booking, Mobile Nav
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Nav Toggle
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

  // 2. Smooth scroll
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

  // 3. Sensory Pillar Switcher (Hero interactive explorer)
  const sensoryData = {
    than: {
      title: 'Liệu pháp kích hoạt tuần hoàn & đả thông kinh lạc:',
      desc: 'Miết huyệt chuẩn xác vùng cổ vai gáy kết hợp đá bazan núi lửa chườm ấm giúp giải phóng các điểm cơ co thắt lâu ngày, trả lại sự nhẹ nhõm cho cơ thể.'
    },
    tam: {
      title: 'Hương trầm & Không gian tĩnh lặng xoa dịu hệ thần kinh:',
      desc: 'Sử dụng tinh dầu phong lữ, oải hương và gỗ tuyết tùng thượng hạng xông phòng, kết hợp tiếng chuông xoay giúp tâm trí buông bỏ mọi phiền toái thường nhật.'
    },
    tri: {
      title: 'Thực dưỡng cân bằng năng lượng & Dưỡng nhan:',
      desc: 'Thưởng thức trà thảo mộc hoa cúc la mã cùng chén yến chưng táo đỏ hạt sen hữu cơ, nuôi dưỡng sự minh mẫn và hồi phục thể trạng từ sâu bên trong.'
    }
  };

  const sensoryTabs = document.querySelectorAll('.sensory-tab-btn');
  const sensoryDescEl = document.getElementById('sensory-description');

  if (sensoryTabs && sensoryDescEl) {
    sensoryTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        sensoryTabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const pillar = btn.getAttribute('data-pillar');
        if (sensoryData[pillar]) {
          sensoryDescEl.style.opacity = '0';
          setTimeout(() => {
            sensoryDescEl.innerHTML = `<strong>${sensoryData[pillar].title}</strong>${sensoryData[pillar].desc}`;
            sensoryDescEl.style.opacity = '1';
          }, 150);
        }
      });
    });
  }

  // 4. Appointment Form Handling
  const bookingForm = document.getElementById('spa-booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('spa-name')?.value || 'Quý khách';
      const phone = document.getElementById('spa-phone')?.value || '';
      const service = document.getElementById('spa-service')?.value || 'Liệu trình thư giãn';
      const date = document.getElementById('spa-date')?.value || '';
      const time = document.getElementById('spa-time')?.value || '';
      const tea = document.getElementById('spa-tea')?.value || 'Trà Hoa Cúc La Mã';
      const note = document.getElementById('spa-note')?.value || '';

      const toast = document.getElementById('toast-spa');
      if (toast) {
        toast.innerHTML = `<strong>Kính chào ${name}!</strong> Phiếu hẹn <strong>${service}</strong> vào <strong>${time} ngày ${date}</strong> đã được ghi nhận. Vị trà đón khách: <em>${tea}</em>. Chuyên viên An Nhiên sẽ liên hệ SĐT/Zalo <strong>${phone}</strong> để xác nhận phòng trống.`;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 8000);
      }

      // Offer direct confirmation via Zalo
      setTimeout(() => {
        const msg = encodeURIComponent(`Xin chào An Nhiên Retreat, tôi muốn đặt lịch trị liệu:\n- Khách hàng: ${name}\n- SĐT: ${phone}\n- Dịch vụ: ${service}\n- Ngày hẹn: ${date}\n- Khung giờ: ${time}\n- Trà đón khách: ${tea}\n- Ghi chú: ${note}`);
        const confirmZalo = confirm(`Yêu cầu của bạn đã được tiếp nhận! Bạn có muốn mở Zalo để gửi chi tiết lịch hẹn trực tiếp tới chuyên viên tư vấn (0971183939) không?`);
        if (confirmZalo) {
          window.open(`https://zalo.me/0971183939?text=${msg}`, '_blank');
        }
      }, 800);

      bookingForm.reset();
    });
  }

  // 5. Pre-select service from cards to form
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
