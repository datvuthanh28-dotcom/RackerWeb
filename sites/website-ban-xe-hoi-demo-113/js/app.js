/**
 * AutoPlex Motors (#MS113)
 * Automotive Showroom Engine: Specs Inspector, Loan Calculator & Test Drive Booking
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Auto Loan Installment Calculator
  const calcCarPrice = document.getElementById('calcCarPrice');
  const calcDownPayment = document.getElementById('calcDownPayment');
  const calcLoanTerm = document.getElementById('calcLoanTerm');

  const valCarPrice = document.getElementById('valCarPrice');
  const valDownPayment = document.getElementById('valDownPayment');
  const valLoanTerm = document.getElementById('valLoanTerm');
  const monthlyPayResult = document.getElementById('monthlyPayResult');
  const loanTotalAmount = document.getElementById('loanTotalAmount');

  function calculateAutoLoan() {
    if (!calcCarPrice || !calcDownPayment || !calcLoanTerm) return;

    const priceBillion = parseFloat(calcCarPrice.value) || 2.5;
    const downPercent = parseInt(calcDownPayment.value, 10) || 30;
    const termYears = parseInt(calcLoanTerm.value, 10) || 5;

    if (valCarPrice) valCarPrice.textContent = priceBillion.toFixed(2) + ' Tỷ VNĐ';
    if (valDownPayment) valDownPayment.textContent = downPercent + '% (' + ((priceBillion * downPercent) / 100).toFixed(2) + ' Tỷ)';
    if (valLoanTerm) valLoanTerm.textContent = termYears + ' Năm';

    const totalPriceVND = priceBillion * 1000000000;
    const loanVND = totalPriceVND * ((100 - downPercent) / 100);

    if (loanTotalAmount) {
      loanTotalAmount.textContent = (loanVND / 1000000000).toFixed(2) + ' Tỷ';
    }

    const totalMonths = termYears * 12;
    const monthlyPrincipal = loanVND / totalMonths;
    const monthlyInterest = loanVND * (0.079 / 12); // ~7.9% annual interest

    const monthlyTotal = Math.round((monthlyPrincipal + monthlyInterest) / 1000000);

    if (monthlyPayResult) {
      monthlyPayResult.textContent = monthlyTotal.toLocaleString('vi-VN') + ' Triệu / tháng';
    }
  }

  if (calcCarPrice) calcCarPrice.addEventListener('input', calculateAutoLoan);
  if (calcDownPayment) calcDownPayment.addEventListener('input', calculateAutoLoan);
  if (calcLoanTerm) calcLoanTerm.addEventListener('input', calculateAutoLoan);

  calculateAutoLoan();

  // 2. Segment Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const carCards = document.querySelectorAll('.car-card');

  if (filterBtns.length > 0 && carCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        carCards.forEach(card => {
          const cat = card.getAttribute('data-category') || '';
          if (filter === 'all' || cat.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 3. Vehicle Specs Modal
  const specModal = document.getElementById('carSpecModal');
  const specModalClose = document.getElementById('specModalClose');
  const specCarTitle = document.getElementById('specCarTitle');
  const specContent = document.getElementById('specContent');
  const specTestDriveBtn = document.getElementById('specTestDriveBtn');

  document.querySelectorAll('.btn-detail-car').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.getAttribute('data-title') || 'Chi Tiết Dòng Xe';
      const engine = btn.getAttribute('data-engine') || '2.0L Turbo';
      const hp = btn.getAttribute('data-hp') || '258 hp';
      const torque = btn.getAttribute('data-torque') || '400 Nm';
      const accel = btn.getAttribute('data-accel') || '6.2s (0-100km/h)';
      const gearbox = btn.getAttribute('data-gearbox') || 'Tự động 9 cấp 9G-TRONIC';
      const price = btn.getAttribute('data-price') || 'Liên hệ';

      if (specCarTitle) specCarTitle.textContent = title;
      if (specContent) {
        specContent.innerHTML = `
          <div style="background: #070b14; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 1.25rem; margin-bottom: 1.25rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem; font-size: 0.88rem;">
              <div><span style="color:#64748b;">Động cơ:</span> <strong style="color:#fff;">${engine}</strong></div>
              <div><span style="color:#64748b;">Công suất cực đại:</span> <strong style="color:#e11d48;">${hp}</strong></div>
              <div><span style="color:#64748b;">Mô-men xoắn:</span> <strong style="color:#fff;">${torque}</strong></div>
              <div><span style="color:#64748b;">Tăng tốc 0-100km/h:</span> <strong style="color:#fff;">${accel}</strong></div>
              <div style="grid-column: span 2;"><span style="color:#64748b;">Hộp số:</span> <strong style="color:#fff;">${gearbox}</strong></div>
              <div style="grid-column: span 2; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 0.75rem; margin-top: 0.25rem;">
                <span style="color:#64748b;">Giá niêm yết:</span> <strong style="color:#e11d48; font-size:1.3rem; font-family:'Barlow Semi Condensed', sans-serif;">${price}</strong>
              </div>
            </div>
          </div>
          <p style="font-size: 0.8rem; color: #94a3b8; line-height: 1.6;">
            * Xe được cấp chứng thư kiểm định 176 hạng mục không đâm đụng, ngập nước, km zin và bảo hành hộp số 3 năm.
          </p>
        `;
      }

      if (specTestDriveBtn) {
        specTestDriveBtn.onclick = () => {
          if (specModal) specModal.classList.remove('active');
          const testSection = document.getElementById('lai-thu');
          if (testSection) testSection.scrollIntoView({ behavior: 'smooth' });
          const carSelect = document.getElementById('driveCarModel');
          if (carSelect) carSelect.value = title;
        };
      }

      if (specModal) specModal.classList.add('active');
    });
  });

  if (specModalClose) {
    specModalClose.addEventListener('click', () => {
      if (specModal) specModal.classList.remove('active');
    });
  }

  // 4. Test Drive Form
  const driveForm = document.getElementById('testDriveForm');
  const driveSuccessModal = document.getElementById('driveSuccessModal');
  const driveSuccessCode = document.getElementById('driveSuccessCode');
  const driveSuccessClose = document.getElementById('driveSuccessClose');
  const driveZaloBtn = document.getElementById('driveZaloBtn');

  if (driveForm) {
    driveForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('driveName')?.value || 'Quý khách';
      const phone = document.getElementById('drivePhone')?.value || '';
      const car = document.getElementById('driveCarModel')?.value || 'Mẫu xe lái thử';
      const date = document.getElementById('driveDate')?.value || '';
      const time = document.getElementById('driveTime')?.value || '';
      const place = document.getElementById('driveLocation')?.value || 'Showroom AutoPlex Q.7';

      const code = 'DRIVE-' + Math.floor(1000 + Math.random() * 9000);

      if (driveSuccessCode) driveSuccessCode.textContent = code;

      if (driveZaloBtn) {
        driveZaloBtn.onclick = () => {
          const text = `Kính gửi Showroom AutoPlex (#MS113), tôi gửi đăng ký lái thử xe [Mã hẹn: ${code}]:%0A- Khách hàng: ${name} (${phone})%0A- Mẫu xe trải nghiệm: ${car}%0A- Ngày lái thử: ${date} lúc ${time}%0A- Địa điểm đón xe: ${place}`;
          window.open(`https://zalo.me/0971183939?text=${text}`, '_blank');
        };
      }

      if (driveSuccessModal) driveSuccessModal.classList.add('active');
      driveForm.reset();
    });
  }

  if (driveSuccessClose) {
    driveSuccessClose.addEventListener('click', () => {
      if (driveSuccessModal) driveSuccessModal.classList.remove('active');
    });
  }
});
