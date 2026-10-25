// sites/cong-ty-san-xuat-bao-bi-demo-70/js/app.js
// Interactive B2B Request For Quotation & Technical Filter Engine

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('mobile-active');
    });
  }

  // 2. Interactive RFQ Calculator Logic
  const calcPkgBtns = document.querySelectorAll('.calc-pkg-btn');
  const calcQtySlider = document.getElementById('calc-qty-slider');
  const calcQtyVal = document.getElementById('calc-qty-val');
  const estLeadTime = document.getElementById('est-lead-time');
  const estWeight = document.getElementById('est-weight');
  const estDiscount = document.getElementById('est-discount');
  
  let currentPkgType = 'Thùng Carton Sóng 5 Lớp';
  let currentQty = 10000;

  function updateEstimate() {
    if (!calcQtySlider) return;
    currentQty = parseInt(calcQtySlider.value, 10);
    if (calcQtyVal) calcQtyVal.textContent = currentQty.toLocaleString('vi-VN') + ' sản phẩm';

    // Calculate lead time and weight based on quantity
    if (estLeadTime) {
      if (currentQty <= 5000) estLeadTime.textContent = '3 - 4 ngày';
      else if (currentQty <= 20000) estLeadTime.textContent = '5 - 7 ngày';
      else estLeadTime.textContent = '7 - 10 ngày';
    }

    if (estWeight) {
      const avgKgPerUnit = currentPkgType.includes('Carton') ? 0.35 : 0.045;
      const totalTons = ((currentQty * avgKgPerUnit) / 1000).toFixed(1);
      estWeight.textContent = totalTons + ' tấn nguyên liệu';
    }

    if (estDiscount) {
      if (currentQty >= 50000) estDiscount.textContent = 'Ưu đãi B2B cấp 1 (-15%)';
      else if (currentQty >= 10000) estDiscount.textContent = 'Ưu đãi B2B cấp 2 (-10%)';
      else estDiscount.textContent = 'Đơn giá xuất xưởng tiêu chuẩn';
    }
  }

  if (calcPkgBtns.length > 0) {
    calcPkgBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        calcPkgBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        currentPkgType = btn.getAttribute('data-type') || 'Bao bì';
        updateEstimate();
      });
    });
  }

  if (calcQtySlider) {
    calcQtySlider.addEventListener('input', updateEstimate);
    updateEstimate();
  }

  // 3. RFQ Modal Open & Close
  const rfqModal = document.getElementById('rfq-modal');
  const openRfqTriggers = document.querySelectorAll('.trigger-rfq-modal');
  const closeRfqBtn = document.getElementById('close-rfq-modal');
  const rfqForm = document.getElementById('rfq-form');
  const rfqPkgSelect = document.getElementById('rfq-pkg-type');
  const rfqQtyInput = document.getElementById('rfq-quantity');

  function openRfq(pkgType, qty) {
    if (!rfqModal) return;
    if (rfqPkgSelect && pkgType) rfqPkgSelect.value = pkgType;
    if (rfqQtyInput && qty) rfqQtyInput.value = qty;
    rfqModal.classList.add('active');
  }

  function closeRfq() {
    if (rfqModal) rfqModal.classList.remove('active');
  }

  openRfqTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const specificType = btn.getAttribute('data-preset-type') || currentPkgType;
      openRfq(specificType, currentQty);
    });
  });

  if (closeRfqBtn) closeRfqBtn.addEventListener('click', closeRfq);
  if (rfqModal) {
    rfqModal.addEventListener('click', (e) => {
      if (e.target === rfqModal) closeRfq();
    });
  }

  // 4. RFQ Form Submission & Truthful Demo Response
  const rfqSuccessNotice = document.getElementById('rfq-success-notice');
  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('rfq-name')?.value || 'Quý khách';
      const company = document.getElementById('rfq-company')?.value || 'Doanh nghiệp';
      const phone = document.getElementById('rfq-phone')?.value || '';
      const pkg = rfqPkgSelect?.value || currentPkgType;
      const qty = rfqQtyInput?.value || currentQty;

      // Render demo confirmation state
      if (rfqSuccessNotice) {
        rfqSuccessNotice.innerHTML = `
          <div style="background: #f0fdf4; border: 1px solid #86efac; padding: 1.25rem; border-radius: 6px; margin-top: 1rem; color: #166534;">
            <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.5rem;">Đã ghi nhận yêu cầu báo giá kỹ thuật!</h4>
            <p style="font-size: 0.9rem; margin-bottom: 0.75rem;">
              Cảm ơn đại diện <strong>${name}</strong> (${company}). Hồ sơ báo giá cho <strong>${qty}</strong> sản phẩm <strong>${pkg}</strong> đã được lập mã tham chiếu <strong>RFQ-${Math.floor(100000 + Math.random() * 900000)}</strong>.
            </p>
            <p style="font-size: 0.85rem; color: #4b5563; margin-bottom: 1rem;">
              <em>Đây là giao diện demo mô phỏng quy trình RFQ B2B. Để được phòng kinh doanh gửi bảng báo giá chính thức kèm khuôn dập mẫu, quý khách vui lòng liên hệ trực tiếp:</em>
            </p>
            <a href="https://zalo.me/0971183939?text=Toi%20can%20bao%20gia%20${encodeURIComponent(pkg)}%20so%20luong%20${qty}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #0068ff; color: #fff; padding: 0.6rem 1.25rem; border-radius: 4px; font-weight: 700; text-decoration: none;">
              Gửi yêu cầu qua Zalo: 0971183939
            </a>
          </div>
        `;
        rfqForm.style.display = 'none';
      }
    });
  }

  // 5. Product Catalog Filter (for san-pham.html)
  const filterBtns = document.querySelectorAll('.cat-filter-btn');
  const productCards = document.querySelectorAll('.industrial-product-card');

  if (filterBtns.length > 0 && productCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.getAttribute('data-filter');

        productCards.forEach(card => {
          if (filterVal === 'all' || card.getAttribute('data-cat') === filterVal) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 6. Technical Tab Switcher (for chi-tiet-san-pham.html)
  const tabBtns = document.querySelectorAll('.spec-tab-btn');
  const tabPanes = document.querySelectorAll('.spec-tab-pane');

  if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-tab');
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add('active');
      });
    });
  }
});
