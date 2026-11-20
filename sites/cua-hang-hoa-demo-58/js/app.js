// Vòm Hoa — Wedding Botanical Art Studio & Moodboard Engine
document.addEventListener('DOMContentLoaded', () => {
  // 1. Existing Wedding Plan URL & Date handling
  const plan = document.getElementById('wedding-plan');
  const fromProject = new URLSearchParams(location.search).get('phuong-an');
  if (plan && [...plan.options].some(option => option.value === fromProject)) {
    plan.value = fromProject;
  }

  const weddingDate = document.getElementById('wedding-date');
  if (weddingDate) {
    const today = new Date();
    weddingDate.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  }

  // 2. Interactive Wedding Floral Moodboard Builder Engine
  const moodboardContainer = document.getElementById('wedding-moodboard-builder');
  if (moodboardContainer) {
    const venueBtns = document.querySelectorAll('[data-step="venue"]');
    const paletteBtns = document.querySelectorAll('[data-step="palette"]');
    const scaleBtns = document.querySelectorAll('[data-step="scale"]');

    const previewTitle = document.getElementById('mb-preview-title');
    const previewDesc = document.getElementById('mb-preview-desc');
    const previewFlowers = document.getElementById('mb-preview-flowers');
    const previewTone = document.getElementById('mb-preview-tone');

    const MOODBOARD_DATA = {
      'khach-san': {
        name: 'Sảnh Đại Tiệc Khách Sạn 5 Sao',
        desc: 'Không gian trần cao từ 6-8 mét với ánh sáng vàng ấm và đèn chùm pha lê. Cần kết cấu vòm hoa chịu lực cao, tán hoa bay bổng để cân bằng tỷ lệ kiến trúc trần.',
        flowers: ['Hồng O\'Hara Ecuador thơm ngát', 'Hồ Điệp trắng cánh bướm rủ mềm', 'Phi Yến (Delphinium) xanh thẫm tạo chiều cao', 'Lá Khuynh Diệp (Eucalyptus) phủ nền xanh bạc'],
        tone: 'Trọng thể, lộng lẫy và tràn đầy ánh sáng hoàng gia'
      },
      'san-vuon': {
        name: 'Biệt Thự Sân Vườn Hoàng Hôn',
        desc: 'Không gian mở đón gió tự nhiên và ánh hoàng hôn. Sử dụng lối cắm hoa hữu cơ (Organic botanical) tựa như khu vườn nở tự nhiên từ thảm cỏ.',
        flowers: ['Hồng bụi David Austin thơm trà', 'Hoa Đồng Tiền nhí và Cúc Tana', 'Cẩm Tú Cầu tím khói Đà Lạt', 'Cỏ đuôi chồn và Dương Xỉ rừng tạo nhịp điệu tự nhiên'],
        tone: 'Thơ mộng, gần gũi thiên nhiên và bay bổng lãng mạn'
      },
      'nha-tho': {
        name: 'Thánh Đường & Nhà Thờ Cổ',
        desc: 'Không gian trang nghiêm tôn nghiêm với ánh sáng xuyên qua kính màu. Cần hàng trụ hoa thanh thoát dọc lối đi chính dẫn lên cung thánh.',
        flowers: ['Lan Hồ Điệp trắng thuần khiết', 'Hoa Rum (Calla Lily) trắng kiêu hãnh', 'Hồng trắng Avalanche kiên định', 'Lá Nguyệt Quế biểu trưng cho sự vĩnh cửu'],
        tone: 'Thuần khiết, trang nghiêm và vĩnh cửu trong lời nguyện ước'
      },
      'bai-bien': {
        name: 'Lễ Cưới Bãi Biển Nhiệt Đới',
        desc: 'Bờ cát trắng, tiếng sóng và nắng gió nhiệt đới. Cần cấu trúc vòm gỗ lũa chịu gió mạnh với các loại hoa nhiệt đới giữ nước tốt.',
        flowers: ['Thiên Điểu (Bird of Paradise)', 'Hoa Protea Nam Phi chịu gió biển', 'Lan Mokara vàng cam rực rỡ', 'Lá Cọ rẽ quạt và cỏ Pampas khô mộc mạc'],
        tone: 'Phóng khoáng, ấm áp và tràn đầy năng lượng đại dương'
      }
    };

    let selectedVenue = 'khach-san';
    let selectedPalette = 'trang-kem';
    let selectedScale = '150-khach';

    function updateMoodboard() {
      const data = MOODBOARD_DATA[selectedVenue] || MOODBOARD_DATA['khach-san'];
      if (previewTitle) previewTitle.textContent = data.name;
      if (previewDesc) previewDesc.textContent = data.desc;
      if (previewTone) previewTone.textContent = `TINH THẦN KHÔNG GIAN: ${data.tone}`;

      if (previewFlowers) {
        previewFlowers.innerHTML = data.flowers.map(f => `<li>${f}</li>`).join('');
      }

      // Save user moodboard preference to LocalStorage
      try {
        localStorage.setItem('vom-hoa-moodboard-draft', JSON.stringify({
          venue: selectedVenue,
          palette: selectedPalette,
          scale: selectedScale,
          updated_at: new Date().toISOString()
        }));
      } catch (e) {}
    }

    venueBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        venueBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedVenue = btn.dataset.value;
        updateMoodboard();
      });
    });

    paletteBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        paletteBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedPalette = btn.dataset.value;
        updateMoodboard();
      });
    });

    scaleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        scaleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedScale = btn.dataset.value;
        updateMoodboard();
      });
    });

    updateMoodboard();
  }
});
