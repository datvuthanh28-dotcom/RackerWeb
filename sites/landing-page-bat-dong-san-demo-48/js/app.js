/**
 * The Riverfront Riverside & Sky Villa (#MS48)
 * Financial Loan Calculator, Unit Floor Plan Inspector & Mercedes Tour Booking Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mortgage & Financial Loan Calculator
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

    // Estimated monthly interest at 7.5% per year
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

  // 2. Unit Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const unitCards = document.querySelectorAll('.unit-card');

  if (filterBtns.length > 0 && unitCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterVal = btn.getAttribute('data-filter');
        unitCards.forEach(card => {
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

  // 3. Unit Floor Plan Modal
  const planModal = document.getElementById('unitPlanModal');
  const planModalClose = document.getElementById('planModalClose');
  const planUnitTitle = document.getElementById('planUnitTitle');
  const planUnitDetails = document.getElementById('planUnitDetails');
  const planBookBtn = document.getElementById('planBookBtn');

  document.querySelectorAll('.btn-view-plan').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.getAttribute('data-title') || 'Căn Hộ Thượng Lưu';
      const area = btn.getAttribute('data-area') || '85m²';
      const view = btn.getAttribute('data-view') || 'Trực diện sông Sài Gòn';
      const price = btn.getAttribute('data-price') || '6.5 Tỷ';
      const layout = btn.getAttribute('data-layout') || '2 Phòng Ngủ, 2 WC, Ban công kính vô cực';

      if (planUnitTitle) planUnitTitle.textContent = title;
      if (planUnitDetails) {
        planUnitDetails.innerHTML = `
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; font-size: 0.9rem; line-height: 1.7;">
            <div><strong>Diện tích thông thủy:</strong> ${area}</div>
            <div><strong>Hướng tầm nhìn:</strong> ${view}</div>
            <div><strong>Cấu trúc mặt bằng:</strong> ${layout}</div>
            <div><strong>Giá bán dự kiến:</strong> <span style="color: #c59b27; font-weight: 800; font-size: 1.1rem;">${price}</span></div>
          </div>
          <p style="font-size: 0.82rem; color: #64748b;">
            * Căn hộ được bàn giao hoàn thiện nội thất cao cấp chuẩn Kohler & Hafele nhập khẩu từ Đức.
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

  // 4. Mercedes Private Tour Booking Form
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
          const zaloMsg = `Kính gửi Ban Quản Lý The Riverfront (#MS48), tôi gửi phiếu đăng ký tham quan nhà mẫu [Mã VIP: ${randomCode}]:%0A- Khách hàng: ${name} (${phone})%0A- Thời gian: ${time} ngày ${date}%0A- Điểm đón xe Mercedes: ${pickup}%0A- Quan tâm phân khu: ${unitType}`;
          window.open(`https://zalo.me/0971183939?text=${zaloMsg}`, '_blank');
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

  // 5. Brochure Download Handler (Allows native download of sample PDF)
  // Native <a> download handles the file directly; no blocking prompt.
});
