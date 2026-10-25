document.addEventListener('DOMContentLoaded', () => {
  let cartCount = 0;
  const cartBadge = document.getElementById('cart-count');
  
  document.querySelectorAll('.btn-buy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      cartCount++;
      if (cartBadge) cartBadge.textContent = cartCount;
      const itemName = e.target.getAttribute('data-name') || 'Mục';
      alert('Đã thêm "' + itemName + '" vào giỏ hàng thành công!\nLiên hệ ngay Zalo: 0971183939 để xác nhận và nhận tư vấn chi tiết.');
    });
  });

  const contactForm = document.getElementById('site-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Cảm ơn bạn đã gửi liên hệ!\nChuyên viên tư vấn sẽ liên hệ lại qua số Zalo / Điện thoại của bạn trong ít phút.');
      contactForm.reset();
    });
  }
});
