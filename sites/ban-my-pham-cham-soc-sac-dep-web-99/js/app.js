/**
 * BOTANICA DERMA LAB - Clinical Frontend Systems
 * 1. Skin Barrier Diagnostic Matrix
 * 2. AM/PM Routine Customizer
 * 3. Consultation Cart & Zalo Dispatch
 */

document.addEventListener('DOMContentLoaded', () => {
  initDiagnosticMatrix();
  initRoutineBuilder();
  initCartSystem();
});

// 1. Skin Barrier Diagnostic Matrix Data & Logic
const MATRIX_DATA = {
  treatment: {
    title: 'Phục Hồi Hàng Rào Da Hậu Treatment & Bong Tróc',
    target: 'Target: Cấp Cứu Màng Lipid • Tăng Sinh Tế Bào • Giảm Đỏ 85%',
    image: 'assets/images/model-cream-apply.jpg',
    desc: 'Làn da sau laser, peel nông hoặc sử dụng retinoid nồng độ cao thường bị tổn thương lớp sừng biểu bì (Stratum Corneum), gây châm chích và mất nước qua da (TEWL). Phác đồ tập trung vào phức hợp Ceramide 3-6-9 sinh học và Centella Asiatica 10% giúp làm dịu tức thì và tái tạo màng bảo vệ trong 48 giờ.',
    steps: [
      { num: '01', title: 'Làm Sạch Dịu Nhẹ pH 5.5', product: 'Gel Rửa Mặt Thảo Dược Amino Acid (280.000đ)' },
      { num: '02', title: 'Cấp Cứu Làm Dịu Khẩn Cấp', product: 'Tinh Chất Rau Má Centella 10% Soothing Ampoule (450.000đ)' },
      { num: '03', title: 'Khóa Ẩm Tái Tạo Lipid', product: 'Kem Phục Hồi Ceramide Bio-Barrier Cream (520.000đ)' },
      { num: '04', title: 'Bảo Vệ Vật Lý Tuyệt Đối', product: 'Kem Chống Nắng Khoáng Kẽm Zinc Pure Mineral SPF 50+ (390.000đ)' }
    ]
  },
  acne: {
    title: 'Cân Bằng Hệ Vi Sinh & Kiểm Soát Dầu Mụn',
    target: 'Target: Giảm Viêm Sưng 24h • Kiềm Dầu 8h • 0 Bít Tắc Lỗ Chân Lông',
    image: 'assets/images/dropper-liquid.jpg',
    desc: 'Dành cho da dầu mụn mẫn cảm với mụn viêm đỏ và sợi bã nhờn. Cơ chế tác động kép: BHA tự nhiên từ vỏ liễu trắng làm sạch sâu nang lông, kết hợp Zinc PCA 1% và Niacinamide 5% ức chế khuẩn C.acnes mà không làm khô căng hay bong tróc da.',
    steps: [
      { num: '01', title: 'Thanh Lọc Lỗ Chân Lông', product: 'Gel Rửa Mặt Tràm Trà & BHA Tự Nhiên (280.000đ)' },
      { num: '02', title: 'Cân Bằng & Kháng Khuẩn', product: 'Nước Hoa Hồng Cân Bằng Dầu Chiết Xuất Trà Xanh (320.000đ)' },
      { num: '03', title: 'Đặc Trị Se Khít & Mờ Thâm', product: 'Serum Niacinamide 5% + Zinc PCA 1% (420.000đ)' },
      { num: '04', title: 'Gel Dưỡng Khóa Ẩm Kiềm Dầu', product: 'Gel Dưỡng Ẩm Thảo Mộc Water-Gel (380.000đ)' }
    ]
  },
  rosacea: {
    title: 'Làm Dịu Giãn Mao Mạch & Da Đỏ Mẫn Cảm',
    target: 'Target: Củng Cố Thành Mao Mạch • Hạ Nhiệt Tức Thì 2°C • Kháng Viêm',
    image: 'assets/images/product-serum.jpg',
    desc: 'Hội chứng da ửng đỏ, lộ rõ mạch máu li ti khi tiếp xúc với ánh nắng hoặc nhiệt độ cao. Công thức bổ sung Ectoin 2% và chiết xuất cúc La Mã ngậm nước giúp giảm kích ứng nhiệt, củng cố thành mao mạch và phục hồi độ đàn hồi tự nhiên.',
    steps: [
      { num: '01', title: 'Rửa Mặt Không Bọt', product: 'Sữa Rửa Mặt Cúc La Mã Dịu Nhẹ (290.000đ)' },
      { num: '02', title: 'Hạ Nhiệt Kháng Kích Ứng', product: 'Xịt Khoáng Tế Bào Gốc Rau Má Tươi (260.000đ)' },
      { num: '03', title: 'Phục Hồi Mao Mạch', product: 'Serum Phục Hồi Ectoin 2% + Panthenol B5 (480.000đ)' },
      { num: '04', title: 'Màng Lọc Chống Tia UV & HEV', product: 'Chống Nắng Vật Lý Thảo Mộc SPF 50+ PA++++ (390.000đ)' }
    ]
  },
  aging: {
    title: 'Tăng Cường Collagen & Phục Hồi Độ Ẩm Tầng Sâu',
    target: 'Target: Tăng Sinh Collagen • Căng Mọng Mịn Màng • Xóa Mờ Nếp Nhăn Khô',
    image: 'assets/images/product-cream.jpg',
    desc: 'Làn da sau tuổi 25 bắt đầu suy giảm tổng hợp HA tự nhiên, biểu hiện qua các nếp nhăn nông đuôi mắt và da xỉn màu thiếu sức sống. Phác đồ sử dụng HA 8 tầng phân tử và phức hợp Peptide kích thích tăng sinh nguyên bào sợi hạ bì.',
    steps: [
      { num: '01', title: 'Làm Sạch Cấp Ẩm Tự Nhiên', product: 'Gel Rửa Mặt Amino Acid Hydrating (280.000đ)' },
      { num: '02', title: 'Cấp Nước Đa Tầng', product: 'Tinh Chất Hyaluronic Acid 8 Multi-Weight (490.000đ)' },
      { num: '03', title: 'Tái Cấu Trúc Nâng Cơ', product: 'Serum Chống Lão Hóa Hydralift Multi-Peptide (580.000đ)' },
      { num: '04', title: 'Khóa Ẩm Trẻ Hóa Chuyên Sâu', product: 'Kem Dưỡng Đêm Peptide & Nấm Men Lên Men (620.000đ)' }
    ]
  }
};

function initDiagnosticMatrix() {
  const tabs = document.querySelectorAll('.matrix-tab-btn');
  const titleEl = document.getElementById('matrix-title');
  const targetEl = document.getElementById('matrix-target');
  const descEl = document.getElementById('matrix-desc');
  const imgEl = document.getElementById('matrix-img');
  const routineContainer = document.getElementById('matrix-routine-steps');

  if (!tabs.length || !titleEl) return;

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');

      const key = btn.dataset.condition;
      const data = MATRIX_DATA[key];
      if (!data) return;

      imgEl.style.opacity = '0.3';
      setTimeout(() => {
        titleEl.textContent = data.title;
        targetEl.textContent = data.target;
        descEl.textContent = data.desc;
        imgEl.src = data.image;

        let stepsHtml = '';
        data.steps.forEach(step => {
          stepsHtml += `
            <div class="routine-step-item">
              <div class="step-num-badge">${step.num}</div>
              <div>
                <div class="step-title">${step.title}</div>
                <div class="step-product-name">${step.product}</div>
              </div>
            </div>
          `;
        });
        routineContainer.innerHTML = stepsHtml;
        imgEl.style.opacity = '1';
      }, 180);
    });
  });
}

// 2. AM/PM Routine Customizer
function initRoutineBuilder() {
  const skinTypeSelect = document.getElementById('routine-skin-type');
  const mainGoalSelect = document.getElementById('routine-goal');
  const itemCheckboxes = document.querySelectorAll('.routine-checkbox');
  const totalValEl = document.getElementById('routine-total-val');
  const safetyValEl = document.getElementById('routine-safety-val');
  const countValEl = document.getElementById('routine-count-val');
  const requestBtn = document.getElementById('btn-request-routine');

  if (!skinTypeSelect || !mainGoalSelect || !totalValEl) return;

  function calculateRoutine() {
    let total = 0;
    let count = 0;

    itemCheckboxes.forEach(cb => {
      if (cb.checked) {
        total += parseInt(cb.dataset.price || '0', 10);
        count++;
      }
    });

    totalValEl.textContent = total.toLocaleString('vi-VN') + 'đ';
    countValEl.textContent = `${count} bước chuẩn y khoa`;
    safetyValEl.textContent = '100% EWG Green (An toàn tuyệt đối)';
  }

  skinTypeSelect.addEventListener('change', calculateRoutine);
  mainGoalSelect.addEventListener('change', calculateRoutine);
  itemCheckboxes.forEach(cb => cb.addEventListener('change', calculateRoutine));

  calculateRoutine();

  if (requestBtn) {
    requestBtn.addEventListener('click', () => {
      const skin = skinTypeSelect.options[skinTypeSelect.selectedIndex].text;
      const goal = mainGoalSelect.options[mainGoalSelect.selectedIndex].text;
      const total = totalValEl.textContent;
      const msg = encodeURIComponent(`Xin chào Dược Sĩ Botanica Derma Lab!\nTôi muốn tư vấn phác đồ chăm sóc da lâm sàng:\n- Tình trạng da: ${skin}\n- Mục tiêu cải thiện: ${goal}\n- Ngân sách ước tính: ${total}\nNhờ dược sĩ phân tích da và xếp lịch tư vấn trực tiếp.`);
      window.open(`https://zalo.me/0971183939?text=${msg}`, '_blank');
    });
  }
}

// 3. Cart & Consultation System
let cart = [];

function initCartSystem() {
  const trigger = document.querySelector('.cart-trigger');
  const countEl = document.getElementById('cart-count');
  const modal = document.getElementById('cart-modal');
  const closeBtn = document.getElementById('cart-close-btn');
  const container = document.getElementById('cart-items-container');
  const totalEl = document.getElementById('cart-total-price');
  const checkoutBtn = document.getElementById('btn-checkout-zalo');

  try {
    const saved = localStorage.getItem('botanica_cart');
    if (saved) cart = JSON.parse(saved);
  } catch(e) {}

  function updateCartUI() {
    if (countEl) countEl.textContent = cart.length;

    if (container) {
      if (cart.length === 0) {
        container.innerHTML = '<p style="color:#64748b;text-align:center;padding:2rem 0;">Chưa có sản phẩm nào trong phác đồ tư vấn.</p>';
        if (totalEl) totalEl.textContent = '0đ';
        return;
      }

      let html = '';
      let sum = 0;
      cart.forEach((item, index) => {
        sum += item.price;
        html += `
          <div class="cart-item-row">
            <div>
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-price">${item.price.toLocaleString('vi-VN')}đ</div>
            </div>
            <button type="button" class="cart-item-remove" data-index="${index}">Xóa</button>
          </div>
        `;
      });
      container.innerHTML = html;
      if (totalEl) totalEl.textContent = sum.toLocaleString('vi-VN') + 'đ';

      const removeBtns = container.querySelectorAll('.cart-item-remove');
      removeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.index, 10);
          cart.splice(idx, 1);
          saveCart();
          updateCartUI();
        });
      });
    }
  }

  function saveCart() {
    try {
      localStorage.setItem('botanica_cart', JSON.stringify(cart));
    } catch(e) {}
  }

  if (trigger && modal) {
    trigger.addEventListener('click', () => {
      modal.classList.add('active');
      updateCartUI();
    });
  }
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  const addBtns = document.querySelectorAll('.btn-add-cart');
  addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name || 'Sản phẩm Botanica';
      const price = parseInt(btn.dataset.price || '350000', 10);
      cart.push({ name, price });
      saveCart();
      updateCartUI();
      showToast(`Đã thêm "${name}" vào phác đồ tư vấn.`);
    });
  });

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cart.length === 0) {
        alert('Vui lòng chọn ít nhất một sản phẩm để gửi tư vấn.');
        return;
      }
      const itemNames = cart.map(i => `- ${i.name} (${i.price.toLocaleString('vi-VN')}đ)`).join('\n');
      const total = cart.reduce((acc, cur) => acc + cur.price, 0).toLocaleString('vi-VN') + 'đ';
      const msg = encodeURIComponent(`Kính gửi Dược Sĩ Botanica Derma Lab!\nTôi quan tâm đến các dược mỹ phẩm phục hồi da sau:\n${itemNames}\nTổng giá trị phác đồ: ${total}\nNhờ dược sĩ kiểm tra độ tương thích hoạt chất và hướng dẫn cách dùng.`);
      window.open(`https://zalo.me/0971183939?text=${msg}`, '_blank');
    });
  }

  updateCartUI();
}

function showToast(message) {
  let toast = document.getElementById('botanica-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'botanica-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(15, 41, 30, 0.95);
      color: #fff;
      padding: 0.8rem 1.6rem;
      border-radius: 50px;
      font-size: 0.88rem;
      font-weight: 600;
      box-shadow: 0 8px 24px rgba(0,0,0,0.25);
      z-index: 2000;
      transition: opacity 0.3s ease;
      pointer-events: none;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  setTimeout(() => {
    toast.style.opacity = '0';
  }, 2600);
}
