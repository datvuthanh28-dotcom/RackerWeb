/**
 * PREMIER REALTY VIETNAM (#MS96)
 * High-End Real Estate & Investment Advisory Interactive Engine
 * - Dynamic Property Filtering & Search
 * - Real-Time Mortgage & Cashflow Calculator
 * - Private Portfolio / Saved Projects Drawer
 * - Private Tour Mercedes Concierge Booking
 * - Zalo Advisory Bridge & Dossier Export
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ═══════════════════════════════════════
     1. TOAST NOTIFICATION
     ═══════════════════════════════════════ */
  let toast = document.querySelector('.toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  function formatBillion(val) {
    return val >= 1 ? val.toFixed(1).replace('.0', '') + ' Tỷ VNĐ' : (val * 1000).toFixed(0) + ' Triệu VNĐ';
  }

  function formatMoney(amount) {
    return new Intl.NumberFormat('vi-VN').format(Math.round(amount)) + ' đ';
  }

  /* ═══════════════════════════════════════
     2. MORTGAGE & FINANCIAL CALCULATOR
     ═══════════════════════════════════════ */
  const rangePrice = document.getElementById('calc-property-price');
  const rangeLoanPct = document.getElementById('calc-loan-percent');
  const rangeYears = document.getElementById('calc-loan-years');
  const rangeRate = document.getElementById('calc-interest-rate');

  const displayPrice = document.getElementById('val-property-price');
  const displayLoanPct = document.getElementById('val-loan-percent');
  const displayYears = document.getElementById('val-loan-years');
  const displayRate = document.getElementById('val-interest-rate');

  const outTotalMonthly = document.getElementById('out-monthly-payment');
  const outLoanAmount = document.getElementById('out-loan-amount');
  const outEquity = document.getElementById('out-equity-amount');
  const outMonthlyPrincipal = document.getElementById('out-monthly-principal');
  const outMonthlyInterest = document.getElementById('out-monthly-interest');
  const outRentalYield = document.getElementById('out-est-rental');

  function calculateMortgage() {
    if (!rangePrice || !rangeLoanPct || !rangeYears || !rangeRate) return;

    const propertyPriceBillion = parseFloat(rangePrice.value); // in billion VNĐ
    const loanPct = parseFloat(rangeLoanPct.value); // 30% - 70%
    const years = parseInt(rangeYears.value, 10); // 5 - 35
    const annualRate = parseFloat(rangeRate.value); // 6.5% - 12%

    // Update label displays
    if (displayPrice) displayPrice.textContent = `${propertyPriceBillion} Tỷ`;
    if (displayLoanPct) displayLoanPct.textContent = `${loanPct}%`;
    if (displayYears) displayYears.textContent = `${years} Năm`;
    if (displayRate) displayRate.textContent = `${annualRate.toFixed(1)}%/Năm`;

    const propertyValueVND = propertyPriceBillion * 1000000000;
    const loanAmountVND = propertyValueVND * (loanPct / 100);
    const equityVND = propertyValueVND - loanAmountVND;

    const totalMonths = years * 12;
    const monthlyPrincipal = loanAmountVND / totalMonths;
    const monthlyRate = (annualRate / 100) / 12;
    const monthlyInterestFirst = loanAmountVND * monthlyRate;
    const totalFirstMonth = monthlyPrincipal + monthlyInterestFirst;

    // Estimated monthly rental income based on 6.8% gross yield
    const estRentalMonthly = (propertyValueVND * 0.068) / 12;

    if (outTotalMonthly) outTotalMonthly.textContent = formatMoney(totalFirstMonth) + ' / tháng';
    if (outLoanAmount) outLoanAmount.textContent = formatMoney(loanAmountVND);
    if (outEquity) outEquity.textContent = formatMoney(equityVND);
    if (outMonthlyPrincipal) outMonthlyPrincipal.textContent = formatMoney(monthlyPrincipal);
    if (outMonthlyInterest) outMonthlyInterest.textContent = formatMoney(monthlyInterestFirst);
    if (outRentalYield) outRentalYield.textContent = '~' + formatMoney(estRentalMonthly) + ' / tháng';
  }

  if (rangePrice) rangePrice.addEventListener('input', calculateMortgage);
  if (rangeLoanPct) rangeLoanPct.addEventListener('input', calculateMortgage);
  if (rangeYears) rangeYears.addEventListener('input', calculateMortgage);
  if (rangeRate) rangeRate.addEventListener('input', calculateMortgage);

  calculateMortgage(); // Initial run

  // Export dossier button
  const btnExportDossier = document.getElementById('btn-export-dossier');
  if (btnExportDossier) {
    btnExportDossier.addEventListener('click', () => {
      const price = rangePrice ? rangePrice.value : 15;
      const loan = rangeLoanPct ? rangeLoanPct.value : 50;
      const msg = `Kính gửi Premier Realty! Tôi quan tâm đến phương án tài chính cho BĐS ${price} Tỷ (vay ${loan}%). Xin vui lòng gửi Private Financial Dossier chi tiết qua Zalo.`;
      showToast('Đang kết nối chuyên viên tài chính Premier Realty...');
      window.open(`https://zalo.me/0971183939`, '_blank');
    });
  }

  /* ═══════════════════════════════════════
     3. SAVED PORTFOLIO / WISHLIST DRAWER
     ═══════════════════════════════════════ */
  const btnOpenPortfolio = document.getElementById('btn-open-portfolio');
  const portfolioDrawer = document.getElementById('portfolio-drawer');
  const portfolioOverlay = document.getElementById('portfolio-overlay');
  const btnCloseDrawer = document.getElementById('btn-close-drawer');
  const drawerItemsContainer = document.getElementById('drawer-items');
  const savedCountBadges = document.querySelectorAll('#saved-count');
  const btnSendZaloDossier = document.getElementById('btn-send-zalo-dossier');

  let savedList = [];
  try {
    const raw = localStorage.getItem('premier_realty_saved');
    if (raw) savedList = JSON.parse(raw);
  } catch (e) {
    savedList = [];
  }

  function saveToStorage() {
    try {
      localStorage.setItem('premier_realty_saved', JSON.stringify(savedList));
    } catch (e) {}
  }

  function openDrawer() {
    if (portfolioDrawer && portfolioOverlay) {
      portfolioDrawer.classList.add('open');
      portfolioOverlay.classList.add('open');
    }
  }

  function closeDrawer() {
    if (portfolioDrawer && portfolioOverlay) {
      portfolioDrawer.classList.remove('open');
      portfolioOverlay.classList.remove('open');
    }
  }

  if (btnOpenPortfolio) btnOpenPortfolio.addEventListener('click', openDrawer);
  if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', closeDrawer);
  if (portfolioOverlay) portfolioOverlay.addEventListener('click', closeDrawer);

  function renderPortfolio() {
    savedCountBadges.forEach(b => b.textContent = savedList.length);

    // Update wishlist button states in page
    document.querySelectorAll('.btn-wishlist').forEach(btn => {
      const name = btn.getAttribute('data-name');
      if (savedList.some(item => item.name === name)) {
        btn.classList.add('saved');
        btn.innerHTML = '★';
      } else {
        btn.classList.remove('saved');
        btn.innerHTML = '☆';
      }
    });

    if (!drawerItemsContainer) return;

    if (savedList.length === 0) {
      drawerItemsContainer.innerHTML = `
        <div class="drawer-empty">
          <p style="font-family:var(--font-serif);font-size:1.15rem;color:var(--pearl);margin-bottom:0.5rem;">Danh mục chưa có dự án</p>
          <p style="font-size:0.85rem;">Nhấn biểu tượng ngôi sao để lưu lại các dự án bạn muốn phân tích chuyên sâu.</p>
        </div>
      `;
      if (btnSendZaloDossier) btnSendZaloDossier.style.display = 'none';
      return;
    }

    if (btnSendZaloDossier) btnSendZaloDossier.style.display = 'block';

    let html = '';
    savedList.forEach((item, idx) => {
      html += `
        <div class="saved-item">
          <img src="${item.img || 'assets/hero-skyline.jpg'}" alt="${item.name}">
          <div class="saved-item-info" style="flex:1;">
            <h4>${item.name}</h4>
            <div style="font-size:0.75rem;color:var(--bronze);">${item.loc || 'Thủ Thiêm, TP. Thủ Đức'}</div>
            <div class="saved-item-price">${item.price || 'Từ 8.5 Tỷ'}</div>
          </div>
          <button class="btn-remove-saved" data-idx="${idx}" style="color:var(--pearl-muted);font-size:1.1rem;padding:0 0.5rem;" title="Xóa">&times;</button>
        </div>
      `;
    });

    drawerItemsContainer.innerHTML = html;

    drawerItemsContainer.querySelectorAll('.btn-remove-saved').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.target.getAttribute('data-idx'), 10);
        if (!isNaN(idx)) {
          const removed = savedList.splice(idx, 1)[0];
          saveToStorage();
          renderPortfolio();
          showToast(`Đã bỏ lưu "${removed.name}"`);
        }
      });
    });
  }

  // Toggle wishlist item
  document.querySelectorAll('.btn-wishlist').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.project-card');
      const name = btn.getAttribute('data-name') || (card ? card.querySelector('.project-name').textContent.trim() : 'Dự án Premier');
      const price = btn.getAttribute('data-price') || (card ? card.querySelector('.price-val').textContent.trim() : '');
      const loc = btn.getAttribute('data-loc') || (card ? card.querySelector('.project-badge-loc').textContent.trim() : '');
      const img = card && card.querySelector('img') ? card.querySelector('img').getAttribute('src') : 'assets/hero-skyline.jpg';

      const existIdx = savedList.findIndex(item => item.name === name);
      if (existIdx > -1) {
        savedList.splice(existIdx, 1);
        showToast(`Đã bỏ lưu "${name}"`);
      } else {
        savedList.push({ name, price, loc, img });
        showToast(`Đã thêm "${name}" vào danh mục quan tâm!`);
      }
      saveToStorage();
      renderPortfolio();
    });
  });

  if (btnSendZaloDossier) {
    btnSendZaloDossier.addEventListener('click', () => {
      if (savedList.length === 0) return;
      const names = savedList.map((item, i) => `${i + 1}. ${item.name} (${item.loc} - ${item.price})`).join('\n');
      const msg = `Kính chào Premier Realty! Tôi đang quan tâm danh mục các dự án sau:\n\n${names}\n\nXin vui lòng gửi trọn bộ tài liệu mật (mặt bằng, chính sách chiết khấu đợt 1 & suất ngoại giao).`;
      showToast('Đang kết nối chuyên viên Private Client qua Zalo...');
      window.open(`https://zalo.me/0971183939`, '_blank');
    });
  }

  renderPortfolio();

  /* ═══════════════════════════════════════
     4. PROJECT CATEGORY FILTER & SEARCH
     ═══════════════════════════════════════ */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (tabBtns.length && projectCards.length) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.getAttribute('data-category');
        projectCards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (cat === 'all' || cardCat === cat) {
            card.style.display = 'flex';
            card.style.opacity = '0';
            setTimeout(() => card.style.opacity = '1', 30);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Hero Search Form filtering
  const heroSearchBtn = document.getElementById('btn-hero-search');
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const typeSelect = document.getElementById('search-type');
      const locSelect = document.getElementById('search-location');
      const budgetSelect = document.getElementById('search-budget');

      const selectedType = typeSelect ? typeSelect.value : 'all';
      const selectedLoc = locSelect ? locSelect.value : 'all';

      projectCards.forEach(card => {
        const cardCat = card.getAttribute('data-category') || '';
        const cardLoc = card.getAttribute('data-location') || '';

        const matchType = (selectedType === 'all' || cardCat === selectedType);
        const matchLoc = (selectedLoc === 'all' || cardLoc === selectedLoc);

        if (matchType && matchLoc) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });

      // Scroll smoothly down to projects
      const targetSec = document.getElementById('featured-projects');
      if (targetSec) {
        targetSec.scrollIntoView({ behavior: 'smooth' });
      }
      showToast('Đã lọc kết quả theo tiêu chí của bạn');
    });
  }

  /* ═══════════════════════════════════════
     5. PRIVATE TOUR BOOKING FORM
     ═══════════════════════════════════════ */
  const tourForm = document.getElementById('tour-booking-form');
  if (tourForm) {
    tourForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = tourForm.querySelector('#tour-client-name') ? tourForm.querySelector('#tour-client-name').value : 'Quý khách';
      const phone = tourForm.querySelector('#tour-client-phone') ? tourForm.querySelector('#tour-client-phone').value : '';
      const project = tourForm.querySelector('#tour-project-select') ? tourForm.querySelector('#tour-project-select').value : 'Dự án yêu cầu';
      const date = tourForm.querySelector('#tour-date') ? tourForm.querySelector('#tour-date').value : 'Sớm nhất';

      alert(`Kính gửi ${name},\n\nPremier Realty đã xác nhận lịch trình Private Tour tham quan "${project}".\nChuyên viên Concierge sẽ gọi điện xác nhận giờ đón bằng xe Mercedes Maybach riêng đến số ${phone}.\n\nTrân trọng cảm ơn sự tin tưởng của Quý khách!`);
      tourForm.reset();
    });
  }

  const contactVipForm = document.getElementById('contact-vip-form');
  if (contactVipForm) {
    contactVipForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactVipForm.querySelector('#contact-name') ? contactVipForm.querySelector('#contact-name').value : 'Quý khách';
      const phone = contactVipForm.querySelector('#contact-phone') ? contactVipForm.querySelector('#contact-phone').value : '';
      const segment = contactVipForm.querySelector('#contact-segment') ? contactVipForm.querySelector('#contact-segment').value : 'Bất động sản';
      const location = contactVipForm.querySelector('#contact-location') ? contactVipForm.querySelector('#contact-location').value : 'Landmark 81';

      alert(`Kính gửi ${name},\n\nPremier Realty đã ghi nhận yêu cầu tiếp đón riêng tư về "${segment}".\nĐịa điểm ưu tiên: ${location}.\nGiám đốc Khối Khách hàng Thượng lưu sẽ liên hệ trực tiếp qua số ${phone} trong vòng 15 phút.\n\nTrân trọng!`);
      contactVipForm.reset();
    });
  }

  /* ═══════════════════════════════════════
     6. MOBILE NAVIGATION
     ═══════════════════════════════════════ */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNavPanel = document.getElementById('mobile-nav-panel');
  const mobileNavClose = document.getElementById('mobile-nav-close');

  function openMobile() {
    if (mobileNavPanel && portfolioOverlay) {
      mobileNavPanel.classList.add('open');
      portfolioOverlay.classList.add('open');
    }
  }

  function closeMobile() {
    if (mobileNavPanel && portfolioOverlay) {
      mobileNavPanel.classList.remove('open');
      portfolioOverlay.classList.remove('open');
    }
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobile);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobile);

  if (mobileNavPanel) {
    mobileNavPanel.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMobile);
    });
  }
});
