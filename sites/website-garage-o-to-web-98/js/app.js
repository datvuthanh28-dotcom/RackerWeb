/**
 * APEX MOTORS WORKSHOP & DETAILING - FRONTEND ENGINE
 * Standalone pure JavaScript logic for diagnostic matrix, live bay tracker,
 * before/after detailing comparison, service filter, and booking flows.
 */

document.addEventListener('DOMContentLoaded', () => {
  initDiagnosticMatrix();
  initDetailingSlider();
  initBayTracker();
  initCatalogFilters();
  initCartAndBooking();
  initContactForm();
});

/* =========================================================
   1. INTERACTIVE DIAGNOSTIC MATRIX (BÁC SĨ CHẨN ĐOÁN XE)
   ========================================================= */
const diagnosticData = {
  brake: {
    title: 'Rung lắc vô lăng khi rà phanh từ 70 - 100 km/h',
    severity: 'high',
    severityText: 'Mức độ: Cấp thiết - Nguy hiểm tốc độ cao',
    cause: 'Hiện tượng chênh lệch độ dày đĩa phanh (DTV) vượt quá 0.015mm, đĩa cong vênh do sốc nhiệt khi xịt nước rửa xe lúc phanh còn nóng, hoặc cùm phanh bị kẹt piston một bên.',
    solution: 'Đo độ đảo mặt đĩa bằng đồng hồ so Mitutoyo. Tiến hành láng đĩa phanh công nghệ Pro-Cut chuẩn vi tính trực tiếp trên moay-ơ xe, hoặc thay thế đĩa tản nhiệt Brembo 2 mảnh Carbon.',
    time: '2 - 3 Giờ',
    cost: 'Từ 850.000đ / cặp đĩa'
  },
  engine: {
    title: 'Đèn Check Engine sáng báo lỗi, hụt ga khi thốc ga',
    severity: 'high',
    severityText: 'Mức độ: Cấp thiết - Có thể kích hoạt Limp Mode',
    cause: 'Cảm biến áp suất khí nạp (MAP/MAF) bám cặn muội than, rò rỉ đường ống chân không Turbo boost, hỏng van điều khiển van biến thiên (VVT solenoid) hoặc bugi đánh lửa Iridium bị mòn khe hở.',
    solution: 'Quét chẩn đoán chuyên sâu giao thức OBD-II bằng Autel MaxiSys Ultra. Đọc Data Stream thời gian thực, đo áp suất buồng đốt, vệ sinh kim phun siêu âm và cân chỉnh góc đánh lửa.',
    time: '1.5 - 2 Giờ',
    cost: 'Từ 500.000đ (Miễn phí khi sửa)'
  },
  suspension: {
    title: 'Tiếng kêu lục cục gầm trước khi qua gờ giảm tốc',
    severity: 'medium',
    severityText: 'Mức độ: Cần kiểm tra trong tuần',
    cause: 'Rách chụp bụi cao su rotuyn cân bằng, lão hóa đệm cao su càng chữ A, dơ bát bèo giảm xóc hoặc phuộc dầu thủy lực bị xì dầu giảm chấn mất lực nén.',
    solution: 'Kiểm tra rung lắc trên bàn kiểm tra gầm thủy lực. Ép thay bạc cao su chịu lực chính hãng Lemförder / Meyle HD và cân chỉnh lại toàn bộ hệ giằng treo.',
    time: '2 - 4 Giờ',
    cost: 'Từ 1.200.000đ'
  },
  alignment: {
    title: 'Xe nhao lái sang phải, mòn vẹt mép lốp không đều',
    severity: 'medium',
    severityText: 'Mức độ: Ảnh hưởng độ bám đường & tuổi thọ lốp',
    cause: 'Sai lệch góc đặt bánh xe Camber, Caster, Toe sau thời gian vận hành hoặc sụp ổ gà. Khiến tâm tiếp xúc bánh xe không thẳng hàng với phương chuyển động.',
    solution: 'Hiệu chỉnh 3D trên máy Hunter HawkEye Elite (Hoa Kỳ) sử dụng 4 camera độ phân giải cao kết hợp bia ngắm kỹ thuật số, đưa mọi góc đặt về chuẩn thông số xuất xưởng của hãng.',
    time: '45 - 60 Phút',
    cost: '600.000đ - 900.000đ / xe'
  },
  detailing: {
    title: 'Sơn xước xoáy quầng tròn, ố mốc acid & mất độ bóng sâu',
    severity: 'medium',
    severityText: 'Mức độ: Thẩm mỹ & Bảo vệ giá trị xe',
    cause: 'Rửa xe bằng khăn cát bẩn, khăn lau sợi thô, nước rửa chứa kiềm cao, phơi nắng bụi sơn công nghiệp và mưa acid ăn mòn lớp bóng Clearcoat.',
    solution: 'Quy trình hiệu chỉnh sơn 3 bước bằng máy quỹ đạo lệch tâm Rupes BigFoot và xi mạ Koch-Chemie. Phủ bảo vệ 2 lớp Ceramic Gyeon Q² Pure EVO độ cứng 9H chống tia UV và trượt nước cực đại.',
    time: '1 - 2 Ngày',
    cost: 'Từ 6.500.000đ'
  }
};

function initDiagnosticMatrix() {
  const buttons = document.querySelectorAll('.symptom-btn');
  const titleEl = document.getElementById('diag-name');
  const severityEl = document.getElementById('diag-severity');
  const causeEl = document.getElementById('diag-cause');
  const solutionEl = document.getElementById('diag-solution');
  const timeEl = document.getElementById('diag-time');
  const costEl = document.getElementById('diag-cost');
  const bookBtn = document.getElementById('diag-book-btn');

  if (!buttons.length || !titleEl) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const key = btn.getAttribute('data-symptom');
      const data = diagnosticData[key];
      if (!data) return;

      // Animate update
      const resultCol = document.querySelector('.matrix-result-col');
      if (resultCol) {
        resultCol.style.opacity = '0.5';
        setTimeout(() => {
          titleEl.textContent = data.title;
          severityEl.textContent = data.severityText;
          severityEl.className = 'diag-severity ' + data.severity;
          causeEl.textContent = data.cause;
          solutionEl.textContent = data.solution;
          timeEl.textContent = data.time;
          costEl.textContent = data.cost;
          if (bookBtn) {
            bookBtn.textContent = 'Đặt Lịch Xử Lý ' + data.title.split(' ')[0] + ' ' + data.title.split(' ')[1] + '...';
            bookBtn.setAttribute('data-target-service', data.title);
          }
          resultCol.style.opacity = '1';
        }, 150);
      }
    });
  });

  if (bookBtn) {
    bookBtn.addEventListener('click', () => {
      const targetService = bookBtn.getAttribute('data-target-service') || 'Kiểm Tra Chẩn Đoán';
      window.location.href = `lien-he.html?service=${encodeURIComponent(targetService)}`;
    });
  }
}

/* =========================================================
   2. INTERACTIVE BEFORE / AFTER DETAILING SLIDER
   ========================================================= */
function initDetailingSlider() {
  const container = document.querySelector('.slider-container');
  const afterWrap = document.querySelector('.slider-img-after');
  const handle = document.querySelector('.slider-handle');

  if (!container || !afterWrap || !handle) return;

  let isDragging = false;

  function updateSlider(xPos) {
    const rect = container.getBoundingClientRect();
    let pos = xPos - rect.left;
    if (pos < 0) pos = 0;
    if (pos > rect.width) pos = rect.width;
    const percentage = (pos / rect.width) * 100;

    afterWrap.style.width = percentage + '%';
    handle.style.left = percentage + '%';
  }

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  // Touch support
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });
}

/* =========================================================
   3. LIVE WORKSHOP BAY TRACKER (6 CẦU NÂNG)
   ========================================================= */
const bayData = [
  { id: 1, car: 'Porsche 911 GT3 (992)', service: 'ECU Remap Stage 2 + Akrapovič Titanium', progress: 85, eta: '16:30 Hôm nay', tech: 'KTV. Hoàng Minh' },
  { id: 2, car: 'BMW M4 Competition', service: 'Căn chỉnh góc đặt Hunter 3D + Thay má Brembo', progress: 50, eta: '17:15 Hôm nay', tech: 'KTV. Tuấn Anh' },
  { id: 3, car: 'Mercedes-AMG GT R', service: 'Nâng cấp cụm phanh gốm Carbon Ceramic', progress: 92, eta: 'Hoàn tất nghiệm thu', tech: 'KTV. Hải Nam' },
  { id: 4, car: 'Audi RS6 Avant Quattro', service: 'Bảo dưỡng định kỳ cấp lớn 60.000km', progress: 35, eta: '18:00 Hôm nay', tech: 'KTV. Trọng Đức' },
  { id: 5, car: 'Porsche Taycan 4S', service: 'Phủ Ceramic Gyeon Q² Pure EVO 9H', progress: 70, eta: 'Ngày mai 10:00', tech: 'Master. Văn Phong' },
  { id: 6, car: 'CẦU NÂNG SẴN SÀNG', service: 'Tiếp nhận xe cứu hộ hoặc kiểm tra nhanh', progress: 0, eta: 'Nhận xe ngay', tech: 'Trưởng Ca Trực' }
];

function initBayTracker() {
  const cards = document.querySelectorAll('.bay-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const bayNum = card.getAttribute('data-bay');
      const item = bayData.find(b => b.id == bayNum);
      if (!item) return;

      if (item.progress === 0) {
        showToast(`Cầu nâng #${bayNum} hiện đang TRỐNG! Bạn có thể đặt hẹn mang xe đến tiếp nhận ngay.`);
      } else {
        showToast(`Cầu #${bayNum}: ${item.car} đang thực hiện [${item.service}] bởi ${item.tech}. Dự kiến bàn giao: ${item.eta}.`);
      }
    });
  });
}

/* =========================================================
   4. CATALOG CATEGORY FILTERS (SAN-PHAM.HTML)
   ========================================================= */
function initCatalogFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.service-eng-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* =========================================================
   5. CART & BOOKING TOAST SYSTEM
   ========================================================= */
let cart = [];

function initCartAndBooking() {
  const cartBadge = document.getElementById('cart-count');
  const cartTrigger = document.querySelector('.btn-cart-trigger');

  document.querySelectorAll('.btn-add-service').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = btn.closest('.service-eng-card');
      const serviceName = card ? card.querySelector('.service-eng-title').textContent.trim() : 'Dịch Vụ Apex';
      const servicePrice = card ? card.querySelector('.cost-amount').textContent.trim() : 'Liên hệ';

      cart.push({ name: serviceName, price: servicePrice });
      if (cartBadge) cartBadge.textContent = cart.length;

      showToast(`Đã thêm gói [${serviceName}] vào danh sách đặt lịch hẹn!`);
    });
  });

  if (cartTrigger) {
    cartTrigger.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Danh sách đặt hẹn đang trống. Vui lòng chọn gói dịch vụ bạn quan tâm!');
      } else {
        const items = cart.map(i => `• ${i.name} (${i.price})`).join('\n');
        alert(`DANH SÁCH DỊCH VỤ ĐÃ CHỌN (${cart.length} mục):\n\n${items}\n\nNhấn OK để chuyển tới trang Đặt Lịch Hẹn & Xác Nhận Cầu Nâng.`);
        window.location.href = 'lien-he.html?cart=' + encodeURIComponent(JSON.stringify(cart));
      }
    });
  }
}

/* =========================================================
   6. CONTACT & APPOINTMENT BOOKING FORM
   ========================================================= */
function initContactForm() {
  const form = document.getElementById('appointment-form');
  if (!form) return;

  // Auto-fill service from URL if present
  const params = new URLSearchParams(window.location.search);
  const serviceParam = params.get('service');
  if (serviceParam) {
    const serviceSelect = document.getElementById('book-service');
    if (serviceSelect) {
      // Find matching option or set text
      for (let opt of serviceSelect.options) {
        if (opt.text.toLowerCase().includes(serviceParam.toLowerCase()) || serviceParam.toLowerCase().includes(opt.value.toLowerCase())) {
          opt.selected = true;
          break;
        }
      }
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const car = document.getElementById('cust-car').value;
    const service = document.getElementById('book-service').value;
    const date = document.getElementById('book-date').value;

    alert(`XÁC NHẬN LỊCH HẸN THÀNH CÔNG!\n\nKính gửi Anh/Chị: ${name}\nSố điện thoại: ${phone}\nDòng xe: ${car}\nGói kỹ thuật: ${service}\nThời gian: ${date}\n\nKỹ sư trưởng APEX MOTORS sẽ liên hệ qua Zalo / Điện thoại để xác nhận vị trí cầu nâng và chuẩn bị phụ tùng chuyên dụng!`);
    form.reset();
  });
}

/* Utility: Toast notification */
function showToast(message) {
  let toast = document.querySelector('.toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="color: var(--accent-amber); font-weight: 800;">⚡ APEX WORKSHOP:</span> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
