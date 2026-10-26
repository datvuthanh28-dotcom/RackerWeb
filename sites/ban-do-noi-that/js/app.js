/**
 * MỘC ĐIỀN ATELIER - Frontend Interactive Systems
 * 1. Wood Species & Grain Studio
 * 2. Joinery Craftsmanship Matrix
 * 3. Custom Woodwork Estimator
 * 4. Bespoke Consultation & Cart Management
 */

document.addEventListener('DOMContentLoaded', () => {
  initWoodStudio();
  initEstimator();
  initCartSystem();
});

// 1. Wood Species & Grain Studio Data & Logic
const WOOD_DATA = {
  walnut: {
    title: 'Gỗ Óc Chó Bắc Mỹ (American Walnut)',
    latin: 'Juglans nigra — FAS Grade 1 Cực Phẩm',
    image: 'assets/images/wood-grain-walnut.jpg',
    badge: 'Gỗ Quý Nhập Khẩu',
    desc: 'Được tuyển chọn từ những thân cây cổ thụ vùng Bắc Mỹ, gỗ óc chó sở hữu sắc nâu socola trầm ấm cùng những đường vân cuộn sóng ánh đồng độc bản. Sau khi sấy chân không đạt độ ẩm tiêu chuẩn <10% MC, gỗ được hoàn thiện bằng 3 lớp dầu lau thực vật Osmo (CHLB Đức) giữ trọn vẹn từng thớ gỗ tự nhiên.',
    hardness: '1.010 lbf',
    hardnessPercent: '75%',
    stability: 'Tối ưu (Chống cong vênh 99%)',
    stabilityPercent: '95%',
    finish: 'Dầu lau thực vật Osmo Polyx-Oil Đức',
    application: 'Bàn ăn nguyên tấm, Tủ kệ phòng khách, Giường ngủ Master'
  },
  oak: {
    title: 'Gỗ Sồi Trắng Châu Âu (European White Oak)',
    latin: 'Quercus alba — Nhập Khẩu Đức & Pháp',
    image: 'assets/images/wood-grain-spalted.jpg',
    badge: 'Chịu Lực Va Đập Cao',
    desc: 'Gỗ sồi trắng châu Âu nổi tiếng với cấu trúc vân tia dạng vẩy rồng, tông màu vàng sáng thanh nhã tạo cảm giác cởi mở, khoáng đạt. Cấu trúc tế bào gỗ dạng chai (tyloses) ngăn chặn triệt để độ ẩm, cực kỳ lý tưởng cho khí hậu nhiệt đới ẩm Việt Nam.',
    hardness: '1.360 lbf',
    hardnessPercent: '90%',
    stability: 'Rất cao (Kháng ẩm tự nhiên)',
    stabilityPercent: '88%',
    finish: 'Dầu lau hữu cơ Matte hoặc Sơn gốc nước',
    application: 'Bàn ghế ăn hiện đại, Kệ sách thư viện, Hệ tủ bếp'
  },
  teak: {
    title: 'Gỗ Teak Giả Tỵ Tự Nhiên (Golden Teak)',
    latin: 'Tectona grandis — Dòng Gỗ Thượng Hạng',
    image: 'assets/images/wood-grain-walnut.jpg',
    badge: 'Kháng Nước & Ẩm Tuyệt Đối',
    desc: 'Teak là dòng gỗ huyền thoại được ứng dụng trong du thuyền xa xỉ nhờ hàm lượng tinh dầu tự nhiên dồi dào, kháng mối mọt và biến dạng tuyệt đối qua hàng thập kỷ. Màu sắc biến chuyển từ vàng mật ong sang tông hổ phách bóng bẩy theo thời gian sử dụng.',
    hardness: '1.070 lbf',
    hardnessPercent: '78%',
    stability: 'Tuyệt đối (Không biến dạng)',
    stabilityPercent: '98%',
    finish: 'Dầu Teak tự nhiên bảo vệ sâu từng sợi gỗ',
    application: 'Bàn trà ngoài trời, Bàn đảo bếp, Phản nằm thư giãn'
  },
  spalted: {
    title: 'Gỗ Tần Bì Nu Vân (Spalted Ash Burl)',
    latin: 'Fraxinus excelsior — Tuyển Chọn Nghệ Thuật',
    image: 'assets/images/wood-grain-spalted.jpg',
    badge: 'Vân Nu Nghệ Thuật Độc Bản',
    desc: 'Tần bì nu sở hữu những đường chỉ đen tự nhiên uốn lượn như một bức tranh thuỷ mặc Wabi-Sabi. Mỗi phiến gỗ là một tác phẩm duy nhất của tạo hóa, được thợ cả Mộc Điền gia cố bằng khớp mộng bướm đồng nguyên khối.',
    hardness: '1.320 lbf',
    hardnessPercent: '86%',
    stability: 'Cao (Ổn định cơ lý tính)',
    stabilityPercent: '85%',
    finish: 'Dầu lau khoáng mờ giữ nguyên vân đá',
    application: 'Bàn trà thiền, Bàn console sảnh đón, Đôn nghệ thuật'
  }
};

function initWoodStudio() {
  const tabs = document.querySelectorAll('.wood-tab-btn');
  const sampleImg = document.getElementById('wood-sample-img');
  const sampleBadge = document.getElementById('wood-sample-badge');
  const titleEl = document.getElementById('wood-title');
  const latinEl = document.getElementById('wood-latin');
  const descEl = document.getElementById('wood-desc');
  const hardVal = document.getElementById('wood-hardness-val');
  const hardBar = document.getElementById('wood-hardness-bar');
  const stabVal = document.getElementById('wood-stability-val');
  const stabBar = document.getElementById('wood-stability-bar');
  const finishVal = document.getElementById('wood-finish-val');
  const appVal = document.getElementById('wood-app-val');

  if (!tabs.length || !sampleImg) return;

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');

      const key = btn.dataset.wood;
      const data = WOOD_DATA[key];
      if (!data) return;

      // Smooth transition
      sampleImg.style.opacity = '0.3';
      setTimeout(() => {
        sampleImg.src = data.image;
        sampleBadge.textContent = data.badge;
        titleEl.textContent = data.title;
        latinEl.textContent = data.latin;
        descEl.textContent = data.desc;
        hardVal.textContent = data.hardness;
        hardBar.style.width = data.hardnessPercent;
        stabVal.textContent = data.stability;
        stabBar.style.width = data.stabilityPercent;
        finishVal.textContent = data.finish;
        appVal.textContent = data.application;
        sampleImg.style.opacity = '1';
      }, 200);
    });
  });
}

// 2. Custom Woodwork Estimator
function initEstimator() {
  const spaceSelect = document.getElementById('est-space');
  const woodSelect = document.getElementById('est-wood');
  const itemsCheckboxes = document.querySelectorAll('.est-item-checkbox');
  const totalValEl = document.getElementById('est-total-val');
  const durationValEl = document.getElementById('est-duration-val');
  const woodTypeValEl = document.getElementById('est-wood-summary');
  const reqBtn = document.getElementById('btn-request-estimate');

  if (!spaceSelect || !woodSelect || !totalValEl) return;

  function calculate() {
    let basePrice = 0;
    let days = 25;

    // Room multiplier
    const room = spaceSelect.value;
    if (room === 'living') basePrice += 15000000;
    else if (room === 'dining') basePrice += 18000000;
    else if (room === 'bedroom') basePrice += 22000000;
    else if (room === 'tearoom') basePrice += 12000000;

    // Items calculation
    let checkedCount = 0;
    itemsCheckboxes.forEach(cb => {
      if (cb.checked) {
        basePrice += parseInt(cb.dataset.price || '0', 10);
        checkedCount++;
      }
    });

    // Wood coefficient
    const wood = woodSelect.value;
    let woodName = 'Gỗ Óc Chó Bắc Mỹ';
    if (wood === 'walnut') {
      basePrice *= 1.35;
      woodName = 'Gỗ Óc Chó Bắc Mỹ (FAS)';
      days += 5;
    } else if (wood === 'oak') {
      basePrice *= 1.1;
      woodName = 'Gỗ Sồi Trắng Châu Âu';
    } else if (wood === 'teak') {
      basePrice *= 1.45;
      woodName = 'Gỗ Teak Giả Tỵ Tự Nhiên';
      days += 8;
    } else if (wood === 'spalted') {
      basePrice *= 1.25;
      woodName = 'Gỗ Tần Bì Nu Nghệ Thuật';
      days += 3;
    }

    if (checkedCount > 2) days += 5;

    totalValEl.textContent = Math.round(basePrice).toLocaleString('vi-VN') + 'đ';
    durationValEl.textContent = `${days} - ${days + 10} ngày chế tác`;
    woodTypeValEl.textContent = woodName;
  }

  spaceSelect.addEventListener('change', calculate);
  woodSelect.addEventListener('change', calculate);
  itemsCheckboxes.forEach(cb => cb.addEventListener('change', calculate));

  calculate();

  if (reqBtn) {
    reqBtn.addEventListener('click', () => {
      const total = totalValEl.textContent;
      const wood = woodTypeValEl.textContent;
      const msg = encodeURIComponent(`Xin chào Mộc Điền Atelier! Tôi muốn nhận tư vấn dự toán thi công nội thất: Dòng gỗ ${wood}, dự toán ước tính khoảng ${total}. Nhờ xưởng hỗ trợ khảo sát và gửi mẫu gỗ tận nơi.`);
      window.open(`https://zalo.me/0971183939?text=${msg}`, '_blank');
    });
  }
}

// 3. Cart & Consultation Drawer Management
let cart = [];

function initCartSystem() {
  const cartTrigger = document.querySelector('.cart-trigger');
  const cartCountEl = document.getElementById('cart-count');
  const modal = document.getElementById('cart-modal');
  const closeBtn = document.getElementById('cart-close-btn');
  const itemsContainer = document.getElementById('cart-items-container');
  const totalEl = document.getElementById('cart-total-price');
  const checkoutBtn = document.getElementById('btn-checkout-zalo');

  // Load from session or local
  try {
    const saved = localStorage.getItem('mocdien_cart');
    if (saved) cart = JSON.parse(saved);
  } catch(e) {}

  function updateCartUI() {
    if (cartCountEl) cartCountEl.textContent = cart.length;

    if (itemsContainer) {
      if (cart.length === 0) {
        itemsContainer.innerHTML = '<p style="color:#8a7e72;text-align:center;padding:2rem 0;">Chưa có sản phẩm nào được chọn tư vấn.</p>';
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
      itemsContainer.innerHTML = html;
      if (totalEl) totalEl.textContent = sum.toLocaleString('vi-VN') + 'đ';

      // Attach remove handlers
      const removeBtns = itemsContainer.querySelectorAll('.cart-item-remove');
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
      localStorage.setItem('mocdien_cart', JSON.stringify(cart));
    } catch(e) {}
  }

  // Open/Close
  if (cartTrigger && modal) {
    cartTrigger.addEventListener('click', () => {
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

  // Add to cart buttons
  const addBtns = document.querySelectorAll('.btn-add-cart');
  addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name || 'Tác phẩm Mộc Điền';
      const price = parseInt(btn.dataset.price || '15000000', 10);
      cart.push({ name, price });
      saveCart();
      updateCartUI();
      showToast(`Đã thêm "${name}" vào danh sách tư vấn.`);
    });
  });

  // Checkout via Zalo
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cart.length === 0) {
        alert('Vui lòng chọn ít nhất một tác phẩm để gửi tư vấn.');
        return;
      }
      const itemNames = cart.map(i => `- ${i.name} (${i.price.toLocaleString('vi-VN')}đ)`).join('\n');
      const total = cart.reduce((acc, cur) => acc + cur.price, 0).toLocaleString('vi-VN') + 'đ';
      const msg = encodeURIComponent(`Kính gửi Mộc Điền Atelier!\nTôi quan tâm đến các tác phẩm nội thất thủ công sau:\n${itemNames}\nTổng giá trị tham khảo: ${total}\nNhờ xưởng gửi bản vẽ chi tiết và xếp lịch tư vấn trực tiếp.`);
      window.open(`https://zalo.me/0971183939?text=${msg}`, '_blank');
    });
  }

  updateCartUI();
}

function showToast(message) {
  let toast = document.getElementById('mocdien-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'mocdien-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(27, 19, 14, 0.95);
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
