/**
 * The Riverfront Riverside Residences & Sky Villa (#MS48)
 * Architectural Monograph Engine: Daylight Atmosphere Viewport, Financial Mortgage Calculator,
 * Residence Filter, Floor Plan Inspector & Mercedes Private Chauffeur Tour Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Daylight Atmosphere Viewport Switcher
  const timeBtns = document.querySelectorAll('.time-btn');
  const viewportImg = document.getElementById('heroViewportImg');
  const viewportTitle = document.getElementById('viewportTitle');
  const viewportDesc = document.getElementById('viewportDesc');

  const atmosphereData = {
    dawn: {
      src: 'assets/images/hero-dawn.jpg',
      title: '06:00 · Ánh Bình Minh Tinh Khôi Trên Sông Sài Gòn',
      desc: 'Ánh nắng ban mai dát vàng mặt nước sông, len lỏi qua từng tán cây và ban công kính vô cực.'
    },
    daylight: {
      src: 'assets/images/hero-daylight.jpg',
      title: '12:00 · Tầm Nhìn Cầu Ba Son & Bán Đảo Thủ Thiêm',
      desc: 'Trực diện biểu tượng kiến trúc dây văng nối liền trung tâm Quận 1 và nhịp sống sinh thái ven sông.'
    },
    twilight: {
      src: 'assets/images/hero-twilight.jpg',
      title: '18:30 · Hoàng Hôn Bến Du Thuyền & Landmark 81',
      desc: 'Khoảnh khắc tráng lệ khi ánh ráng chiều buông xuống bến neo đậu du thuyền tư nhân của cư dân.'
    },
    night: {
      src: 'assets/images/hero-night.jpg',
      title: '21:00 · Vũ Điệu Ánh Sáng Đường Chân Trời',
      desc: 'Bản hòa ca ánh sáng lung linh của quần thể kiến trúc và nhịp sống phồn hoa soi bóng dòng sông di sản.'
    }
  };

  if (timeBtns.length > 0 && viewportImg) {
    timeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        timeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const timeKey = btn.getAttribute('data-time') || 'twilight';
        const data = atmosphereData[timeKey];

        if (data) {
          viewportImg.style.opacity = '0.3';
          setTimeout(() => {
            viewportImg.src = data.src;
            viewportImg.alt = data.title;
            if (viewportTitle) viewportTitle.textContent = data.title;
            if (viewportDesc) viewportDesc.textContent = data.desc;
            viewportImg.style.opacity = '1';
          }, 200);
        }
      });
    });
  }

  // 2. Financial Loan & Mortgage Calculator
  const calcPriceSlider = document.getElementById('calcPriceSlider');
  const calcLoanSlider = document.getElementById('calcLoanSlider');
  const calcTermSlider = document.getElementById('calcTermSlider');

  const calcPriceVal = document.getElementById('calcPriceVal');
  const calcLoanVal = document.getElementById('calcLoanVal');
  const calcTermVal = document.getElementById('calcTermVal');
  const calcMonthlyResult = document.getElementById('calcMonthlyResult');
  const calcLoanAmount = document.getElementById('calcLoanAmount');

  function calculateMortgage() {
    if (!calcPriceSlider || !calcLoanSlider || !calcTermSlider) return;

    const priceBillion = parseFloat(calcPriceSlider.value) || 6.5;
    const loanPercent = parseInt(calcLoanSlider.value, 10) || 70;
    const termYears = parseInt(calcTermSlider.value, 10) || 20;

    if (calcPriceVal) calcPriceVal.textContent = priceBillion.toFixed(1) + ' Tỷ VNĐ';
    if (calcLoanVal) calcLoanVal.textContent = loanPercent + '%';
    if (calcTermVal) calcTermVal.textContent = termYears + ' Năm';

    const totalPriceVND = priceBillion * 1000000000;
    const loanAmountVND = totalPriceVND * (loanPercent / 100);

    if (calcLoanAmount) {
      calcLoanAmount.textContent = (loanAmountVND / 1000000000).toFixed(2) + ' Tỷ';
    }

    // Monthly principal
    const totalMonths = termYears * 12;
    const monthlyPrincipal = loanAmountVND / totalMonths;

    // Monthly interest (7.5% per year after 24-month grace period)
    const monthlyInterestRate = 0.075 / 12;
    const firstMonthInterest = loanAmountVND * monthlyInterestRate;

    const estimatedFirstMonth = monthlyPrincipal + firstMonthInterest;
    const millionVal = Math.round(estimatedFirstMonth / 1000000);

    if (calcMonthlyResult) {
      calcMonthlyResult.textContent = millionVal.toLocaleString('vi-VN') + ' Triệu / tháng';
    }
  }

  if (calcPriceSlider) calcPriceSlider.addEventListener('input', calculateMortgage);
  if (calcLoanSlider) calcLoanSlider.addEventListener('input', calculateMortgage);
  if (calcTermSlider) calcTermSlider.addEventListener('input', calculateMortgage);

  calculateMortgage();

  // 3. Residence Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const residenceCards = document.querySelectorAll('.residence-card');

  if (filterBtns.length > 0 && residenceCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterVal = btn.getAttribute('data-filter') || 'all';
        residenceCards.forEach(card => {
          const category = card.getAttribute('data-category') || '';
          if (filterVal === 'all' || category.includes(filterVal)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 4. Unit Floor Plan Inspector Modal
  const planModal = document.getElementById('unitPlanModal');
  const planModalClose = document.getElementById('planModalClose');
  const planUnitTitle = document.getElementById('planUnitTitle');
  const planUnitDetails = document.getElementById('planUnitDetails');
  const planBookBtn = document.getElementById('planBookBtn');

  document.querySelectorAll('.btn-inspect-plan').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.getAttribute('data-title') || 'Tư Dinh Ven Sông';
      const area = btn.getAttribute('data-area') || '85m²';
      const view = btn.getAttribute('data-view') || 'Trực diện sông Sài Gòn';
      const price = btn.getAttribute('data-price') || '6.5 Tỷ VNĐ';
      const layout = btn.getAttribute('data-layout') || '2 Phòng Ngủ, 2 WC, Ban công kính vô cực';

      if (planUnitTitle) planUnitTitle.textContent = title;
      if (planUnitDetails) {
        planUnitDetails.innerHTML = `
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 1.25rem; margin-bottom: 1.25rem; font-size: 0.9rem; line-height: 1.8;">
            <div><strong>Diện tích thông thủy:</strong> ${area}</div>
            <div><strong>Hướng tầm nhìn:</strong> ${view}</div>
            <div><strong>Cấu trúc mặt bằng:</strong> ${layout}</div>
            <div><strong>Giá bán dự kiến:</strong> <span style="color: #b8933b; font-weight: 800; font-size: 1.2rem;">${price}</span></div>
          </div>
          <p style="font-size: 0.82rem; color: #64748b; line-height: 1.6;">
            * Bàn giao hoàn thiện tiêu chuẩn hạng sang: Kính hộp Low-E 3 lớp, thiết bị vệ sinh Kohler mạ vàng, bếp đảo đá cẩm thạch tự nhiên và hệ thống điều hòa âm trần Daikin VRV.
          </p>
        `;
      }

      if (planBookBtn) {
        planBookBtn.onclick = () => {
          if (planModal) planModal.classList.remove('active');
          const tourSection = document.getElementById('dang-ky-tham-quan');
          if (tourSection) tourSection.scrollIntoView({ behavior: 'smooth' });
        };
      }

      if (planModal) planModal.classList.add('active');
    });
  });

  if (planModalClose) {
    planModalClose.addEventListener('click', () => {
      if (planModal) planModal.classList.remove('active');
    });
  }

  // Close modal on click outside
  window.addEventListener('click', (e) => {
    if (e.target === planModal) {
      planModal.classList.remove('active');
    }
  });

  // 5. Mercedes Private Chauffeur Tour Booking Engine
  const tourForm = document.getElementById('mercedesTourForm');
  const tourSuccessModal = document.getElementById('tourSuccessModal');
  const tourSuccessCode = document.getElementById('tourSuccessCode');
  const tourSuccessClose = document.getElementById('tourSuccessClose');
  const tourZaloBtn = document.getElementById('tourZaloBtn');

  if (tourForm) {
    tourForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('tourName')?.value || 'Quý khách';
      const phone = document.getElementById('tourPhone')?.value || '';
      const date = document.getElementById('tourDate')?.value || '';
      const time = document.getElementById('tourTime')?.value || '';
      const pickup = document.getElementById('tourPickup')?.value || 'Tòa nhà Bitexco Q.1';
      const unitType = document.getElementById('tourUnitType')?.value || 'Căn hộ 2-3 phòng ngủ';

      const randomCode = 'RIV-' + Math.floor(1000 + Math.random() * 9000);

      if (tourSuccessCode) tourSuccessCode.textContent = randomCode;

      if (tourZaloBtn) {
        tourZaloBtn.onclick = () => {
          const zaloMsg = `Chào Ban Quản Lý The Riverfront Riverside, tôi là ${name} (SĐT: ${phone}). Tôi vừa đăng ký lịch lái xe Mercedes đón tham quan nhà mẫu vào ngày ${date} lúc ${time} tại: ${pickup}. Mã VIP: ${randomCode}.`;
          window.open(`https://zalo.me/0971183939?text=${encodeURIComponent(zaloMsg)}`, '_blank');
        };
      }

      if (tourSuccessModal) tourSuccessModal.classList.add('active');
      tourForm.reset();
    });
  }

  if (tourSuccessClose) {
    tourSuccessClose.addEventListener('click', () => {
      if (tourSuccessModal) tourSuccessModal.classList.remove('active');
    });
  }
});
