/**
 * PETIT CARE CLINIC & PEDIATRICS - FRONTEND ENGINE
 * Interactive logic for Child Immunization Schedule Calculator,
 * WHO Growth Percentile Checker, Vaccine Booking Cart, and Appointment Scheduler.
 */

document.addEventListener('DOMContentLoaded', () => {
  initVaccineSchedule();
  initGrowthChecker();
  initVaccineCart();
  initBookingForm();
});

/* =========================================================
   1. CHILD IMMUNIZATION SCHEDULE ENGINE
   ========================================================= */
const vaccineScheduleData = {
  '0m': [
    { name: 'Vắc-xin Lao (BCG)', origin: 'Việt Nam (IVAC)', prevents: 'Phòng ngừa các thể lao nguy hiểm: Lao màng não, lao kê toàn thân.', price: '120.000đ', badge: 'Mũi tiêm đầu đời' },
    { name: 'Viêm gan B sơ sinh (Engerix B / Euvax B)', origin: 'Bỉ (GSK) / Hàn Quốc', prevents: 'Bảo vệ trẻ trước nguy cơ lây truyền virus viêm gan B từ mẹ.', price: '190.000đ', badge: 'Trong 24h đầu' }
  ],
  '2m': [
    { name: 'Vắc-xin 6 trong 1 (Hexaxim / Infanrix Hexa)', origin: 'Pháp (Sanofi) / Bỉ (GSK)', prevents: 'Bạch hầu, Ho gà, Uốn ván, Bại liệt, Viêm gan B, Viêm màng não mủ do Hib (Mũi 1).', price: '1.050.000đ', badge: 'Mũi quan trọng' },
    { name: 'Phế cầu khuẩn (Synflorix / Prevenar 13)', origin: 'Bỉ (GSK) / Mỹ (Pfizer)', prevents: 'Viêm phổi, viêm tai giữa, viêm màng não và nhiễm khuẩn huyết do phế cầu (Mũi 1).', price: '1.290.000đ', badge: 'Chuẩn quốc tế' },
    { name: 'Vắc-xin Uống Rota Virus (Rotarix / Rotateq)', origin: 'Bỉ / Mỹ (MSD)', prevents: 'Tiêu chảy cấp do virus Rota - nguyên nhân hàng đầu gây mất nước ở trẻ nhũ nhi (Liều 1).', price: '780.000đ', badge: 'Dạng uống ngọt' }
  ],
  '3m': [
    { name: 'Vắc-xin 6 trong 1 (Mũi 2)', origin: 'Pháp / Bỉ', prevents: 'Củng cố kháng thể phòng Bạch hầu, Ho gà, Uốn ván, Bại liệt, Viêm gan B, Hib.', price: '1.050.000đ', badge: 'Mũi nhắc' },
    { name: 'Vắc-xin Uống Rota Virus (Liều 2)', origin: 'Bỉ / Mỹ', prevents: 'Hoàn thiện miễn dịch đường ruột chống tiêu chảy cấp do Rota virus.', price: '780.000đ', badge: 'Hoàn tất phác đồ' }
  ],
  '4m': [
    { name: 'Vắc-xin 6 trong 1 (Mũi 3)', origin: 'Pháp / Bỉ', prevents: 'Hoàn thành 3 mũi cơ bản đầu đời, tạo kháng thể bền vững đến 18 tháng tuổi.', price: '1.050.000đ', badge: 'Hoàn thành cơ bản' },
    { name: 'Phế cầu khuẩn (Mũi 2)', origin: 'Mỹ (Pfizer) / Bỉ', prevents: 'Phòng viêm màng não và viêm phổi do phế cầu chủng 13 tuýp kháng thuốc.', price: '1.290.000đ', badge: 'Tiêm chủng' }
  ],
  '6m': [
    { name: 'Vắc-xin Cúm Mùa Tứ Giá (Vaxigrip Tetra / Influvac)', origin: 'Pháp / Hà Lan', prevents: 'Phòng ngừa 4 chủng virus cúm mùa phổ biến (A/H1N1, A/H3N2 và 2 chủng cúm B) (Mũi 1).', price: '360.000đ', badge: 'Mùa thu đông' },
    { name: 'Viêm màng não mô cầu BC (Mengoc BC)', origin: 'Cuba (Finlay)', prevents: 'Phòng bệnh viêm màng não và nhiễm khuẩn huyết tối cấp do não mô cầu nhóm B, C.', price: '290.000đ', badge: 'Kháng thể mạnh' }
  ],
  '9m': [
    { name: 'Vắc-xin Sởi Đơn (MVVac / Priorix mũi sớm)', origin: 'Việt Nam / Bỉ', prevents: 'Phòng bệnh Sởi nguy cơ biến chứng viêm phổi và suy giảm miễn dịch nghiêm trọng.', price: '180.000đ', badge: 'Khuyến cáo WHO' },
    { name: 'Viêm màng não mô cầu ACYW (Menactra)', origin: 'Mỹ (Sanofi Pasteur)', prevents: 'Bảo vệ toàn diện trước 4 nhóm huyết thanh não mô cầu nguy hiểm nhất.', price: '1.250.000đ', badge: 'Thế hệ mới' }
  ],
  '12m': [
    { name: 'Thủy Đậu (Varivax / Varilrix)', origin: 'Mỹ (MSD) / Bỉ (GSK)', prevents: 'Phòng bệnh trái rạ thủy đậu và các nốt mụn mủ để lại sẹo vĩnh viễn (Mũi 1).', price: '890.000đ', badge: 'Sau 1 tuổi' },
    { name: 'Viêm Não Nhật Bản (Imojev sống giảm độc lực)', origin: 'Thái Lan (Sanofi)', prevents: 'Miễn dịch suốt đời phòng virus viêm não Nhật Bản lây qua muỗi culex (Mũi 1).', price: '690.000đ', badge: 'Chỉ 2 mũi nhắc' },
    { name: 'Viêm Gan A (Avaxim / Epaxal)', origin: 'Pháp / Thụy Sĩ', prevents: 'Phòng bệnh viêm gan A lây truyền qua nguồn nước và thực phẩm ăn uống.', price: '480.000đ', badge: 'Tiêu chuẩn châu Âu' }
  ],
  '18m': [
    { name: 'Nhắc lại 6 trong 1 / DPT (Mũi 4)', origin: 'Pháp / Bỉ', prevents: 'Kháng thể bảo vệ bền vững chuẩn bị cho bé bước vào lứa tuổi nhà trẻ mầm non.', price: '1.050.000đ', badge: 'Mũi nhắc' },
    { name: 'Sởi - Quai Bị - Rubella (MMR II / Priorix)', origin: 'Mỹ / Bỉ', prevents: 'Phòng ngừa đồng thời 3 bệnh truyền nhiễm nguy hiểm gây biến chứng vô sinh.', price: '380.000đ', badge: 'Bắt buộc đi học' }
  ]
};

function initVaccineSchedule() {
  const tabs = document.querySelectorAll('.age-tab-btn');
  const container = document.getElementById('vaccine-cards-container');

  if (!tabs.length || !container) return;

  function renderAge(ageKey) {
    const list = vaccineScheduleData[ageKey] || [];
    container.innerHTML = '';

    list.forEach(item => {
      const card = document.createElement('div');
      card.className = 'vaccine-item-card';
      card.innerHTML = `
        <span class="vaccine-badge">${item.badge}</span>
        <h4 class="vaccine-name">${item.name}</h4>
        <div class="vaccine-origin">Xuất xứ: <strong>${item.origin}</strong></div>
        <p class="vaccine-prevents">${item.prevents}</p>
        <div class="vaccine-card-foot">
          <span class="vaccine-price">${item.price}</span>
          <button type="button" class="btn-reserve-vaccine" data-name="${item.name}" data-price="${item.price}">
            + Đặt Mũi Này
          </button>
        </div>
      `;
      container.appendChild(card);
    });

    // Re-bind click handlers for reservation buttons
    container.querySelectorAll('.btn-reserve-vaccine').forEach(btn => {
      btn.addEventListener('click', () => {
        const vName = btn.getAttribute('data-name');
        const vPrice = btn.getAttribute('data-price');
        addVaccineToBooking(vName, vPrice);
      });
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const age = tab.getAttribute('data-age');
      renderAge(age);
    });
  });

  // Initial render with '2m'
  renderAge('2m');
}

/* =========================================================
   2. WHO CHILD GROWTH PERCENTILE CHECKER
   ========================================================= */
function initGrowthChecker() {
  const form = document.getElementById('growth-calc-form');
  const resultBox = document.getElementById('growth-result');

  if (!form || !resultBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const gender = document.getElementById('growth-gender').value;
    const ageMonths = parseInt(document.getElementById('growth-age').value, 10);
    const weight = parseFloat(document.getElementById('growth-weight').value);
    const height = parseFloat(document.getElementById('growth-height').value);

    if (!ageMonths || !weight || !height) return;

    // Approximate WHO Median Standard
    // Boys median: Weight ~ 3.3 + 0.6 * age (first 6m) or ~ 7.9 + 0.25 * (age-6)
    // Girls median: slightly lower
    let stdWeight = gender === 'boy' ? (ageMonths <= 6 ? 3.3 + ageMonths * 0.75 : 7.8 + (ageMonths - 6) * 0.25) : (ageMonths <= 6 ? 3.2 + ageMonths * 0.7 : 7.3 + (ageMonths - 6) * 0.23);
    let stdHeight = gender === 'boy' ? (ageMonths <= 12 ? 50 + ageMonths * 2.1 : 75 + (ageMonths - 12) * 0.9) : (ageMonths <= 12 ? 49 + ageMonths * 2.0 : 74 + (ageMonths - 12) * 0.85);

    const weightDiff = ((weight - stdWeight) / stdWeight) * 100;
    const heightDiff = ((height - stdHeight) / stdHeight) * 100;

    let weightStatus = 'Cân nặng chuẩn WHO';
    let weightColor = '#10b981';
    if (weightDiff < -15) {
      weightStatus = 'Nhẹ cân so với tuổi (Cần theo dõi dinh dưỡng)';
      weightColor = '#f59e0b';
    } else if (weightDiff > 20) {
      weightStatus = 'Nguy cơ thừa cân';
      weightColor = '#f59e0b';
    }

    let heightStatus = 'Chiều cao chuẩn WHO';
    let heightColor = '#10b981';
    if (heightDiff < -10) {
      heightStatus = 'Thấp hơn mức trung bình (Nên bổ sung D3K2)';
      heightColor = '#f59e0b';
    }

    resultBox.innerHTML = `
      <div style="font-weight: 800; color: #0284c7; margin-bottom: 0.5rem; font-size: 1rem;">
        🩺 Kết Quả Đánh Giá Tăng Trưởng (Chuẩn WHO)
      </div>
      <div style="font-size: 0.9rem; line-height: 1.6; color: #334155;">
        <div>• <strong>Cân nặng:</strong> ${weight} kg (Chuẩn mốc ${ageMonths} tháng: ~${stdWeight.toFixed(1)} kg) &rarr; <span style="font-weight: 700; color: ${weightColor};">${weightStatus}</span></div>
        <div style="margin-top: 0.35rem;">• <strong>Chiều cao:</strong> ${height} cm (Chuẩn mốc ${ageMonths} tháng: ~${stdHeight.toFixed(1)} cm) &rarr; <span style="font-weight: 700; color: ${heightColor};">${heightStatus}</span></div>
        <div style="margin-top: 0.75rem; padding: 0.75rem; background: #f0fdf4; border-radius: 8px; font-size: 0.85rem; color: #166534; border: 1px solid #bbf7d0;">
          💡 <em>Lời khuyên bác sĩ:</em> Trẻ đang phát triển trong giới hạn khỏe mạnh. Ba mẹ duy trì chế độ bú sữa và dinh dưỡng hợp lý, đừng quên lịch tiêm nhắc phòng bệnh định kỳ nhé!
        </div>
      </div>
    `;
    resultBox.classList.add('show');
  });
}

/* =========================================================
   3. VACCINE BOOKING CART SYSTEM
   ========================================================= */
let vaccineCart = [];

function initVaccineCart() {
  const cartBtn = document.querySelector('.btn-booking-cart');
  if (!cartBtn) return;

  cartBtn.addEventListener('click', () => {
    if (vaccineCart.length === 0) {
      showToast('Danh sách mũi tiêm giữ chỗ đang trống. Vui lòng bấm [+ Đặt Mũi Này] tại bảng lịch tiêm!');
    } else {
      const items = vaccineCart.map(i => `• ${i.name} (${i.price})`).join('\n');
      alert(`DANH SÁCH MŨI TIÊM & DỊCH VỤ ĐÃ GIỮ CHỖ (${vaccineCart.length} mũi):\n\n${items}\n\nNhấn OK để chuyển tới trang Đặt Hẹn Khám và Phòng Tiêm.`);
      window.location.href = 'lien-he.html?cart=' + encodeURIComponent(JSON.stringify(vaccineCart));
    }
  });
}

function addVaccineToBooking(name, price) {
  vaccineCart.push({ name, price });
  const badge = document.getElementById('cart-count');
  if (badge) badge.textContent = vaccineCart.length;
  showToast(`Đã giữ chỗ mũi [${name}] vào danh sách tiêm của bé!`);
}

/* =========================================================
   4. APPOINTMENT BOOKING FORM
   ========================================================= */
function initBookingForm() {
  const form = document.getElementById('petit-booking-form');
  if (!form) return;

  // Auto-fill from query params
  const params = new URLSearchParams(window.location.search);
  const serviceParam = params.get('service');
  if (serviceParam) {
    const select = document.getElementById('book-service');
    if (select) {
      for (let opt of select.options) {
        if (opt.text.toLowerCase().includes(serviceParam.toLowerCase()) || opt.value.toLowerCase().includes(serviceParam.toLowerCase())) {
          opt.selected = true;
          break;
        }
      }
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const parentName = document.getElementById('parent-name').value;
    const phone = document.getElementById('parent-phone').value;
    const babyName = document.getElementById('baby-name').value;
    const babyAge = document.getElementById('baby-age').value;
    const service = document.getElementById('book-service').value;
    const date = document.getElementById('book-date').value;

    alert(`ĐẶT HẸN KHÁM CHO BÉ THÀNH CÔNG!\n\nKính gửi Ba/Mẹ: ${parentName}\nSố điện thoại: ${phone}\nTên bé: ${babyName} (${babyAge})\nDịch vụ: ${service}\nThời gian: ${date}\n\nBác sĩ phòng khám Petit Care sẽ liên hệ qua Zalo / Điện thoại để xác nhận lịch khám và gửi hướng dẫn chuẩn bị cho bé trước khi đến xưởng!`);
    form.reset();
  });
}

/* Toast Notification Utility */
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="color: var(--primary-blue); font-weight: 800;">🍼 PETIT CARE:</span> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
