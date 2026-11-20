/* ==========================================================================
   GỌN BARBERSHOP — CLIENT INTERACTION ENGINE (#MS45)
   Features:
   - Mobile Nav Drawer Toggle
   - Service Catalog Filter & Accordion Linking
   - Booking Slot & Monday Closure Validation
   - Interactive Hair & Face Diagnostic Studio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('show');
    });
  }

  // 2. Service Filter & Tabs (on san-pham.html)
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const serviceGroups = document.querySelectorAll('[data-service-group]');
  const countEl = document.getElementById('service-count');
  const params = new URLSearchParams(location.search);
  const initialGroup = params.get('nhom');

  function updateServiceDisplay(selectedCategory) {
    let visibleCount = 0;
    serviceGroups.forEach(group => {
      if (!selectedCategory || group.dataset.serviceGroup === selectedCategory) {
        group.style.display = 'block';
        visibleCount += group.querySelectorAll('.service-details-item').length;
      } else {
        group.style.display = 'none';
      }
    });

    if (countEl) {
      countEl.textContent = `${visibleCount} dịch vụ`;
    }

    // Update active tab buttons
    filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === selectedCategory);
    });
  }

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        updateServiceDisplay(btn.dataset.filter);
      });
    });

    if (initialGroup) {
      updateServiceDisplay(initialGroup);
    }
  }

  // Open linked service via URL Hash (e.g. #crop)
  function openLinkedService() {
    if (!location.hash) return;
    const targetDetails = document.getElementById(location.hash.slice(1));
    if (targetDetails instanceof HTMLDetailsElement) {
      updateServiceDisplay('');
      targetDetails.open = true;
      targetDetails.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  window.addEventListener('hashchange', openLinkedService);
  openLinkedService();

  // 3. Booking Form Logic & Validation
  const serviceSelect = document.getElementById('service');
  const visitDay = document.getElementById('visit-day');
  const visitTime = document.getElementById('visit-time');
  const summaryInput = document.getElementById('service-summary');

  if (visitDay) {
    // Set min date to today
    const today = new Date();
    visitDay.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

    function validateMonday() {
      if (!visitDay.value) return;
      const dayOfWeek = new Date(visitDay.value + 'T12:00:00').getDay();
      if (dayOfWeek === 1) {
        visitDay.setCustomValidity('Tiệm nghỉ định kỳ vào Thứ Hai hàng tuần. Vui lòng chọn ngày từ Thứ Ba đến Chủ Nhật.');
      } else {
        visitDay.setCustomValidity('');
      }
    }
    visitDay.addEventListener('input', validateMonday);
    validateMonday();
  }

  if (serviceSelect && visitTime && summaryInput) {
    // Pre-select service from URL param
    const selectedServiceParam = params.get('dich-vu');
    if (selectedServiceParam) {
      for (const opt of serviceSelect.options) {
        if (opt.value === selectedServiceParam) {
          serviceSelect.value = selectedServiceParam;
          break;
        }
      }
    }

    function updateServiceSummaryAndSlots() {
      const selected = serviceSelect.selectedOptions[0];
      if (!selected) return;

      const minutes = Number(selected.dataset.minutes || 45);
      const price = selected.dataset.price ? Number(selected.dataset.price).toLocaleString('vi-VN') + ' ₫' : '';
      summaryInput.value = `${selected.textContent.trim()} ${price ? '· ' + price : ''}`;

      // Disable slots that would finish after 20:00
      for (const opt of visitTime.options) {
        if (!opt.value) continue;
        const [hours, mins] = opt.value.split(':').map(Number);
        const endMinutes = hours * 60 + mins + minutes;
        // 20:00 is 1200 minutes
        opt.disabled = endMinutes > 1200;
      }

      if (visitTime.selectedOptions[0]?.disabled) {
        visitTime.value = '';
      }
    }

    serviceSelect.addEventListener('change', updateServiceSummaryAndSlots);
    updateServiceSummaryAndSlots();
  }

  // 4. Interactive Diagnostic Matrix (Homepage)
  const faceChips = document.querySelectorAll('#face-chips .chip-btn');
  const hairChips = document.querySelectorAll('#hair-chips .chip-btn');
  const timeChips = document.querySelectorAll('#time-chips .chip-btn');

  const recTitle = document.getElementById('diag-rec-title');
  const recDesc = document.getElementById('diag-rec-desc');
  const hairStyle = document.getElementById('diag-hair-style');
  const dryTime = document.getElementById('diag-dry-time');
  const bookBtn = document.getElementById('diag-book-btn');

  if (faceChips.length > 0 && recTitle) {
    let currentFace = 'tron';
    let currentHair = 'cung';
    let currentTime = 'nhanh';

    const diagnosticMatrix = {
      'tron-cung': {
        title: 'Textured Crop Tỉa Mai Ép Nếp',
        desc: 'Với khuôn mặt tròn và sợi tóc cứng hay chỉa, giải pháp tốt nhất là hạ sát chân mai bằng Taper nhẹ để thu hẹp chiều ngang khuôn mặt, đồng thời tỉa texture phân tầng ở đỉnh đầu tạo hiệu ứng chiều cao thon gọn.',
        style: 'Textured French Crop',
        time: '1.5 phút',
        serviceId: 'crop'
      },
      'tron-manh': {
        title: 'Textured Crop Nâng Phồng Chân Tóc',
        desc: 'Tóc tơ mảnh trên mặt tròn cần cắt phân tầng ngắn để giảm trọng lượng sợi tóc, tạo độ bồng tự nhiên mà không cần dùng sáp nặng.',
        style: 'Short Textured Crop',
        time: '2 phút',
        serviceId: 'crop'
      },
      'tron-xoan': {
        title: 'Natural Curly Crop Giữ Nếp Mai Gọn',
        desc: 'Hạ gọn hai bên tai và gáy để mặt tròn thanh thoát hơn, giữ lọn xoăn tự nhiên trên đỉnh để tạo điểm nhấn nghệ thuật.',
        style: 'Curly Texture Fade',
        time: '2 phút',
        serviceId: 'xoan'
      },
      'vuong-cung': {
        title: 'Classic Taper Fade Lịch Lãm',
        desc: 'Khuôn mặt chữ điền kết hợp với Taper Fade sẽ tôn trọn góc cạnh xương quai hàm nam tính. Đỉnh đầu giữ độ dài để chải nhẹ.',
        style: 'Classic Taper Fade',
        time: '3 phút',
        serviceId: 'taper'
      },
      'vuong-manh': {
        title: 'Side-Part Vuốt Nhẹ Phom Vuông',
        desc: 'Tóc tơ trên mặt vuông nên rẽ ngôi 7/3 nhẹ nhàng bằng kéo, tránh cắt quá sát làm lộ góc cạnh thô.',
        style: 'Scissor Side-Part',
        time: '4 phút',
        serviceId: 'side-part'
      },
      'dai-cung': {
        title: 'Scissor Side-Part Giảm Chiều Dài Mặt',
        desc: 'Khuôn mặt dài và trán cao cần độ bồng hai bên để cân đối tỷ lệ. Kỹ thuật cắt kéo thủ công giúp hạ bớt chiều cao của mái.',
        style: 'Scissor Side-Part Thủ Công',
        time: '4 phút',
        serviceId: 'side-part'
      },
      'default': {
        title: 'The Signature Haircut & Scalp Ritual',
        desc: 'Phác đồ kết hợp hoàn hảo giữa kỹ thuật cắt kéo phân lớp theo hướng mọc của xoáy đầu và quy trình xả dưỡng thảo mộc phục hồi.',
        style: 'Custom Atelier Haircut',
        time: '3 phút',
        serviceId: 'crop'
      }
    };

    function updateDiagnostic() {
      const key = `${currentFace}-${currentHair}`;
      const config = diagnosticMatrix[key] || diagnosticMatrix['default'];

      recTitle.textContent = config.title;
      recDesc.textContent = config.desc;
      hairStyle.textContent = config.style;
      dryTime.textContent = currentTime === 'nhanh' ? '1.5 phút' : (currentTime === 'trungbinh' ? '4 phút' : '7 phút');
      if (bookBtn) {
        bookBtn.href = `lien-he.html?dich-vu=${config.serviceId}`;
      }
    }

    function setupChipGroup(chips, onSelect) {
      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          chips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          onSelect(chip);
          updateDiagnostic();
        });
      });
    }

    setupChipGroup(faceChips, chip => currentFace = chip.dataset.face);
    setupChipGroup(hairChips, chip => currentHair = chip.dataset.hair);
    setupChipGroup(timeChips, chip => currentTime = chip.dataset.time);
  }
});
