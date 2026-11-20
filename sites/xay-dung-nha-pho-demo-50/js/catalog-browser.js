/* Static catalogue interactions for sites that use .btn-buy product cards. */
(() => {
  'use strict';
  const prefix = 'racker:catalog:v1:' + location.pathname.split('/').slice(-2,-1)[0];
  function read(name) { try { const value = JSON.parse(localStorage.getItem(prefix + name) || '[]'); return Array.isArray(value) ? value : []; } catch { return []; } }
  function save(name, data) { try { localStorage.setItem(prefix + name, JSON.stringify(data)); return true; } catch { return false; } }
  document.addEventListener('DOMContentLoaded', () => {
    let cart = read(':cart').filter(item => item && typeof item.name === 'string').map(item => ({name:item.name,qty:Math.max(1,Math.min(999,Math.floor(Number(item.qty)) || 1))}));
    let wishlist = read(':wishlist').filter(item => typeof item === 'string');
    const cards = [...document.querySelectorAll('.card')].filter(card => card.querySelector('.btn-buy'));
    const notice = document.createElement('p'); notice.setAttribute('role','status'); notice.className = 'local-request-note'; notice.hidden = true;
    const dialog = document.createElement('dialog'); dialog.style.cssText = 'width:min(640px,92vw);max-height:85vh;padding:24px;border:1px solid #777;overflow:auto;';
    const close = document.createElement('button'); close.type = 'button'; close.textContent = 'Đóng'; close.onclick = () => dialog.close();
    const dialogBody = document.createElement('div'); dialog.append(close,dialogBody); document.body.append(dialog,notice);
    function announce(text) { notice.hidden = false; notice.textContent = text; }
    function badge() { document.querySelectorAll('#cart-count').forEach(el => { el.textContent = cart.reduce((sum,item) => sum + item.qty,0); }); }
    function show(title, text) { dialogBody.replaceChildren(); const heading = document.createElement('h2'); heading.textContent = title; const paragraph = document.createElement('p'); paragraph.textContent = text; dialogBody.append(heading,paragraph); if (!dialog.open) dialog.showModal(); }
    function showCart() {
      show('Danh sách đã chọn', cart.length ? 'Danh sách trên thiết bị này · Chưa gửi yêu cầu đặt hàng.' : 'Danh sách đang trống.');
      cart.forEach(item => {
        const row = document.createElement('div'); row.style.cssText = 'display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin:16px 0';
        const name = document.createElement('span'); name.textContent = item.name;
        const qty = document.createElement('input'); qty.type = 'number'; qty.min = '1'; qty.max = '999'; qty.value = item.qty; qty.style.width = '80px'; qty.setAttribute('aria-label','Số lượng ' + item.name);
        qty.onchange = () => { item.qty = Math.max(1,Math.min(999,Math.floor(Number(qty.value)||1))); qty.value = item.qty; if (!save(':cart',cart)) announce('Không lưu được giỏ. Xuất danh sách trước khi rời trang.'); badge(); };
        const remove = document.createElement('button'); remove.textContent = 'Bỏ chọn'; remove.onclick = () => { cart = cart.filter(entry => entry.name !== item.name); save(':cart',cart); badge(); showCart(); };
        row.append(name,qty,remove); dialogBody.append(row);
      });
      if (cart.length) {
        const button = document.createElement('button'); button.textContent = 'Xuất danh sách JSON'; button.onclick = () => { const url = URL.createObjectURL(new Blob([JSON.stringify({status:'unsent',items:cart},null,2)],{type:'application/json'})); const link = document.createElement('a'); link.href = url; link.download = 'danh-sach-da-chon.json'; link.click(); setTimeout(() => URL.revokeObjectURL(url),1000); }; dialogBody.append(button);
      }
    }
    document.querySelectorAll('.cart-trigger,#cart-btn').forEach(button => button.addEventListener('click',event => { event.preventDefault(); event.stopImmediatePropagation(); showCart(); },true));
    cards.forEach(card => {
      const button = card.querySelector('.btn-buy');
      const name = button.dataset.name || card.querySelector('h3')?.textContent.trim() || 'Sản phẩm';
      button.addEventListener('click',event => {
        event.preventDefault(); event.stopImmediatePropagation();
        const existing = cart.find(item => item.name === name);
        if (existing) existing.qty = Math.min(999,existing.qty+1); else cart.push({name,qty:1});
        const saved = save(':cart',cart); badge(); showCart();
        if (!saved) announce('Bộ nhớ bị chặn. Giỏ hiện chỉ được giữ trong trang đang mở.');
      },true);
      const detail = document.createElement('button'); detail.type = 'button'; detail.textContent = 'Xem chi tiết'; detail.onclick = () => show(name,card.querySelector('p')?.textContent || 'Liên hệ để xác nhận quy cách, giá và khả năng cung cấp.');
      const favorite = document.createElement('button'); favorite.type = 'button';
      const updateFavorite = () => { favorite.textContent = wishlist.includes(name) ? 'Đã lưu yêu thích' : 'Lưu yêu thích'; favorite.setAttribute('aria-pressed',String(wishlist.includes(name))); };
      favorite.onclick = () => { wishlist = wishlist.includes(name) ? wishlist.filter(item => item !== name) : [...wishlist,name]; if (!save(':wishlist',wishlist)) announce('Chưa lưu được yêu thích trên thiết bị.'); updateFavorite(); }; updateFavorite();
      const actions = document.createElement('div'); actions.className = 'local-catalog-actions'; actions.append(detail,favorite); card.append(actions);
    });
    const grids = [...new Set(cards.map(card => card.parentElement))];
    grids.forEach(grid => {
      const items = cards.filter(card => card.parentElement === grid);
      const controls = document.createElement('div'); controls.className = 'local-catalog-controls';
      const search = document.createElement('input'); search.type = 'search'; search.placeholder = 'Tìm trong danh mục'; search.setAttribute('aria-label','Tìm trong danh mục');
      const sort = document.createElement('select'); sort.setAttribute('aria-label','Sắp xếp danh mục'); [['default','Thứ tự ban đầu'],['asc','Tên A–Z'],['desc','Tên Z–A']].forEach(([value,text]) => sort.add(new Option(text,value)));
      const favorites = document.createElement('button'); favorites.type = 'button'; favorites.textContent = 'Chỉ xem yêu thích'; favorites.setAttribute('aria-pressed','false');
      const empty = document.createElement('p'); empty.textContent = 'Không tìm thấy lựa chọn phù hợp.'; empty.hidden = true;
      const normalize = text => text.toLocaleLowerCase('vi-VN').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');
      function filter() { let count=0; items.forEach(card => { const name = card.querySelector('.btn-buy').dataset.name || card.querySelector('h3').textContent.trim(); card.hidden = !normalize(card.textContent).includes(normalize(search.value)) || (favorites.getAttribute('aria-pressed') === 'true' && !wishlist.includes(name)); if (!card.hidden) count++; }); empty.hidden = count > 0; }
      search.oninput = filter; favorites.onclick = () => { favorites.setAttribute('aria-pressed',String(favorites.getAttribute('aria-pressed') !== 'true')); filter(); };
      sort.onchange = () => { const ordered = [...items]; if (sort.value !== 'default') ordered.sort((a,b) => a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent,'vi')*(sort.value === 'asc' ? 1 : -1)); ordered.forEach(card => grid.append(card)); };
      controls.append(search,sort,favorites); grid.before(controls); grid.after(empty);
    });
    badge();
  });
})();
