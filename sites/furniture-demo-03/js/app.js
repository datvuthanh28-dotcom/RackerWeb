/* =====================================================
   NORDIC LIVING — ATELIER INTERACTIVE ENGINE (#MS03)
   Hotspots, Material Swatches, Apartment Estimator, Quote Cart
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Drawer Navigation
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const closeBtn = document.getElementById('mobile-close');

  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          closeDrawer();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 2. Room Category Filter
  const roomTabs = document.querySelectorAll('.room-tab-btn');
  const furnitureCards = document.querySelectorAll('.furniture-card');

  roomTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      roomTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const room = tab.getAttribute('data-room');
      furnitureCards.forEach(card => {
        if (room === 'all' || card.getAttribute('data-room') === room) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Tactile Material Swatch Chips Interaction
  const swatchChips = document.querySelectorAll('.swatch-chip');
  swatchChips.forEach(chip => {
    chip.addEventListener('click', () => {
      swatchChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const materialName = chip.getAttribute('data-material') || chip.innerText;
      const desc = chip.getAttribute('data-desc') || 'Vật liệu đạt chứng nhận FSC & tiêu chuẩn hoàn thiện thủ công an toàn sức khỏe.';
      showToast(`<strong>${materialName}:</strong> ${desc}`);
    });
  });

  // 4. Hotspot Pins Click/Touch Support
  const hotspotPins = document.querySelectorAll('.hotspot-pin');
  hotspotPins.forEach(pin => {
    const btn = pin.querySelector('.hotspot-btn');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const wasActive = pin.classList.contains('active');
        hotspotPins.forEach(p => p.classList.remove('active'));
        if (!wasActive) pin.classList.add('active');
      });
    }
  });

  document.addEventListener('click', () => {
    hotspotPins.forEach(p => p.classList.remove('active'));
  });

  // 5. Interactive Apartment Estimator
  const areaSlider = document.getElementById('area-slider');
  const areaValDisplay = document.getElementById('area-val-display');
  const pkgButtons = document.querySelectorAll('.pkg-btn');
  const estPriceDisplay = document.getElementById('est-price-display');
  const estDaysDisplay = document.getElementById('est-days-display');

  let currentPkgRate = 750000; // 750k VND / m2 base for Standard
  let currentBaseDays = 15;

  function updateEstimate() {
    if (!areaSlider) return;
    const area = parseInt(areaSlider.value, 10);
    if (areaValDisplay) areaValDisplay.textContent = `${area} m²`;

    const totalVND = Math.round((area * currentPkgRate) / 1000000) * 1000000;
    const formattedPrice = totalVND.toLocaleString('vi-VN') + 'đ';
    if (estPriceDisplay) estPriceDisplay.textContent = formattedPrice;

    const days = Math.round(currentBaseDays + (area - 45) * 0.15);
    if (estDaysDisplay) estDaysDisplay.textContent = `~${days} ngày thi công xưởng`;
  }

  if (areaSlider) {
    areaSlider.addEventListener('input', updateEstimate);
  }

  pkgButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      pkgButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPkgRate = parseInt(btn.getAttribute('data-rate'), 10) || 750000;
      currentBaseDays = parseInt(btn.getAttribute('data-days'), 10) || 15;
      updateEstimate();
    });
  });

  // Run initial calculation if slider exists
  if (areaSlider) updateEstimate();

  // 6. Quote Cart State
  let quoteBasket = [];
  const basketCountEl = document.getElementById('cart-count');

  window.addToQuoteCart = function(productName, price) {
    quoteBasket.push({ name: productName, price: price });
    if (basketCountEl) {
      basketCountEl.textContent = quoteBasket.length;
    }
    showToast(`Đã thêm <strong>${productName} (${price})</strong> vào bảng dự toán! Tổng: ${quoteBasket.length} món.`);
  };

  // Toast Function
  window.showToast = function(htmlMessage) {
    let toast = document.getElementById('toast-nordic');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-nordic';
      toast.className = 'toast-nordic';
      document.body.appendChild(toast);
    }
    toast.innerHTML = htmlMessage;
    toast.classList.add('show');
    clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
  };

  // 7. Quote Form Submission
  const quoteForm = document.getElementById('nordic-quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('q-name')?.value || 'Quý khách';
      const phone = document.getElementById('q-phone')?.value || '';
      const spaceType = document.getElementById('q-space')?.value || 'Căn hộ chung cư';
      const itemReq = document.getElementById('q-item')?.value || 'Nội thất phòng khách';
      const note = document.getElementById('q-note')?.value || '';

      const itemsListed = quoteBasket.length > 0 
        ? quoteBasket.map(i => `${i.name} (${i.price})`).join(', ')
        : itemReq;

      showToast(`<strong>Cảm ơn ${name}!</strong> Yêu cầu tư vấn <strong>${itemsListed}</strong> đã được gửi tới Kiến trúc sư trưởng Nordic Living. Phản hồi qua số <strong>${phone}</strong> trong 15-30 phút.`);

      setTimeout(() => {
        const msg = encodeURIComponent(`Xin chào KTS Nordic Living, tôi cần tư vấn may đo nội thất:\n- Khách hàng: ${name}\n- SĐT: ${phone}\n- Loại công trình: ${spaceType}\n- Danh sách dự toán: ${itemsListed}\n- Ghi chú: ${note}`);
        const confirmZalo = confirm(`Yêu cầu của bạn đã được tiếp nhận! Bạn có muốn kết nối Zalo với Kiến trúc sư (0971183939) để gửi bản vẽ mặt bằng căn hộ ngay không?`);
        if (confirmZalo) {
          window.open(`https://zalo.me/0971183939?text=${msg}`, '_blank');
        }
      }, 700);

      quoteForm.reset();
    });
  }
});
