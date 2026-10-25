/* =====================================================
   NORDIC LIVING — JS LOGIC (#MS03)
   Quotation Cart, Room Filter, Mobile Navigation
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
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

  // Smooth scroll
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

  // Room Category Filter
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

  // Quote Form Submission
  const quoteForm = document.getElementById('nordic-quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('q-name')?.value || 'Quý khách';
      const phone = document.getElementById('q-phone')?.value || '';
      const spaceType = document.getElementById('q-space')?.value || 'Căn hộ chung cư';
      const itemReq = document.getElementById('q-item')?.value || 'Nội thất phòng khách';
      const note = document.getElementById('q-note')?.value || '';

      const toast = document.getElementById('toast-nordic');
      if (toast) {
        toast.innerHTML = `<strong>Cảm ơn ${name}!</strong> Yêu cầu tư vấn & báo giá <strong>${itemReq}</strong> cho <strong>${spaceType}</strong> đã được gửi tới Kiến trúc sư Nordic Living. Chúng tôi sẽ phản hồi tới số <strong>${phone}</strong> trong 15-30 phút.`;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 7000);
      }

      // Offer direct confirmation via Zalo
      setTimeout(() => {
        const msg = encodeURIComponent(`Xin chào Nordic Living, tôi cần tư vấn thiết kế nội thất:\n- Khách hàng: ${name}\n- SĐT: ${phone}\n- Loại công trình: ${spaceType}\n- Hạng mục: ${itemReq}\n- Ghi chú: ${note}`);
        const confirmZalo = confirm(`Yêu cầu của bạn đã được tiếp nhận! Bạn có muốn kết nối Zalo trực tiếp với Kiến trúc sư (0971183939) để gửi bản vẽ mặt bằng không?`);
        if (confirmZalo) {
          window.open(`https://zalo.me/0971183939?text=${msg}`, '_blank');
        }
      }, 800);

      quoteForm.reset();
    });
  }

  // Quotation Cart State
  let quoteCount = 0;
  window.addToQuoteCart = function(productName, price) {
    quoteCount++;
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.textContent = quoteCount;

    const itemField = document.getElementById('q-item');
    const quoteSection = document.getElementById('bao-gia');
    if (itemField) {
      if (itemField.value.trim() === '') {
        itemField.value = productName;
      } else if (!itemField.value.includes(productName)) {
        itemField.value += `, ${productName}`;
      }
    }

    showToast(`Đã thêm "${productName}" vào danh mục yêu cầu báo giá!`);
  };

  function showToast(text) {
    const toast = document.getElementById('toast-nordic');
    if (toast) {
      toast.textContent = text;
      toast.classList.add('show');
      setTimeout(() => { toast.classList.remove('show'); }, 4000);
    }
  }
});
