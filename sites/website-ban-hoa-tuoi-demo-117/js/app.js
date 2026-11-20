(() => {
  const storageKey = 'racker:cart:v1:gui-no';
  const products = new Map(window.GIFT_PRODUCTS.map(product => [product.id, product]));
  const format = new Intl.NumberFormat('vi-VN', {style:'currency', currency:'VND'});
  const catalog = document.querySelector('.gift-grid');
  const basket = document.getElementById('gift-basket');
  const checkout = document.getElementById('gift-checkout');
  const emptyOrder = document.getElementById('empty-order');
  let cart = readCart();
  let storageFailed = false;

  function readCart() {
    let stored;
    try { stored = JSON.parse(localStorage.getItem(storageKey)); }
    catch { return []; }
    if (!Array.isArray(stored)) return [];
    const items = [];
    for (const record of stored) {
      const product = products.get(record?.id);
      const variantKey = record?.variant;
      if (!product || (variantKey !== 'gon' && variantKey !== 'day')) continue;
      const {stock} = product.variants[variantKey];
      if (!stock || !Number.isInteger(record.quantity) || record.quantity < 1) continue;
      const duplicate = items.find(item => item.id === product.id && item.variant === variantKey);
      if (duplicate) duplicate.quantity = Math.min(stock, duplicate.quantity + record.quantity);
      else items.push({id:product.id, variant:variantKey, quantity: Math.min(stock,record.quantity)});
    }
    return items;
  }

  function saveCart() {
    try { localStorage.setItem(storageKey,JSON.stringify(cart)); storageFailed = false; }
    catch { storageFailed = true; }
    renderCount();
  }

  function renderCount() {
    const count = cart.reduce((sum,item) => sum + item.quantity,0);
    document.querySelectorAll('[data-cart-count]').forEach(el => { el.textContent = count; });
  }

  function initCatalog() {
    const search = document.getElementById('gift-search');
    const occasion = document.getElementById('occasion');
    const sort = document.getElementById('gift-sort');
    const results = document.getElementById('gift-results');
    const cards = [...catalog.querySelectorAll('article')];
    const occasions = {'sinh-nhat':'Sinh nhật','cam-on':'Cảm ơn','dong-vien':'Động viên'};
    const slug = new URLSearchParams(location.search).get('dip');
    if (Object.hasOwn(occasions,slug)) occasion.value = occasions[slug];

    function fold(text) {
      return text.toLocaleLowerCase('vi-VN').normalize('NFD').replace(/\p{Diacritic}/gu,'').replace(/đ/g,'d');
    }

    function filter() {
      const query = fold(search.value.trim());
      let count = 0;
      const ordered = [...cards];
      if (sort.value) {
        ordered.sort((a,b) => (sort.value === 'asc' ? 1 : -1) * (Number(a.dataset.price) - Number(b.dataset.price)));
      }
      for (const card of ordered) {
        const matches = (!occasion.value || card.dataset.category === occasion.value) && fold(card.querySelector('h2').textContent + ' ' + card.querySelector('h2 + p').textContent).includes(query);
        card.hidden = !matches;
        if (matches) count++;
        catalog.append(card);
      }
      results.textContent = count ? count + ' mẫu hoa' : 'Không tìm thấy mẫu hoa phù hợp.';
    }

    cards.forEach(card => {
      const size = card.querySelector('[data-variant]');
      const stockStatus = card.querySelector('[data-stock-status]');
      const add = card.querySelector('[data-add]');
      const product = products.get(card.id);
      stockStatus.setAttribute('aria-live','polite');

      function update(added = false) {
        const {stock} = product.variants[size.value];
        const picked = cart.find(item => item.id === card.id && item.variant === size.value)?.quantity || 0;
        add.disabled = picked >= stock;
        if (added && storageFailed) stockStatus.textContent = 'Đã chọn trong trang này. Trình duyệt không cho lưu giỏ.';
        else if (added) stockStatus.textContent = 'Đã thêm vào giỏ · ' + picked + ' bó cỡ này.';
        else stockStatus.textContent = 'Tồn minh họa ' + stock + ' · Đã chọn ' + picked;
      }

      size.onchange = () => update();
      add.onclick = () => {
        const variant = size.value;
        const {stock} = product.variants[variant];
        const existing = cart.find(item => item.id === card.id && item.variant === variant);
        if (existing) existing.quantity = Math.min(existing.quantity + 1,stock);
        else cart.push({id:product.id, variant, quantity:1});
        saveCart();
        update(true);
      };
      update();
    });

    search.oninput = filter;
    occasion.onchange = filter;
    sort.onchange = filter;
    filter();
  }

  function renderBasket(focusTarget) {
    if (!basket) return;
    const activeRows = new Map();
    const lines = [];
    let total = 0;
    basket.replaceChildren();
    for (const [index,item] of cart.entries()) {
      const product = products.get(item.id);
      const {name,price,stock} = product.variants[item.variant];
      const subtotal = price * item.quantity;
      total += subtotal;
      const caption = product.name + ' · ' + name;
      lines.push(caption + ' × ' + item.quantity + ' — ' + format.format(subtotal));
      const row = document.createElement('article');
      row.className = 'basket-row';
      const photo = document.createElement('img');
      photo.src = 'assets/' + product.id + '.webp';
      photo.alt = '';
      const info = document.createElement('div');
      const title = document.createElement('strong');
      title.textContent = caption;
      const amount = document.createElement('p');
      amount.textContent = format.format(price) + ' mỗi bó · ' + format.format(subtotal);
      info.append(title,amount);
      const quantity = document.createElement('input');
      quantity.type = 'number';
      quantity.min = 1;
      quantity.max = stock;
      quantity.value = item.quantity;
      quantity.setAttribute('aria-label','Số lượng ' + caption);
      quantity.onchange = () => {
        item.quantity = Math.max(1, Math.min(stock, Math.floor(quantity.valueAsNumber) || 1));
        saveCart();
        renderBasket({index,role:'quantity'});
      };
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'remove-gift';
      remove.textContent = 'Bỏ';
      remove.setAttribute('aria-label','Bỏ ' + caption);
      remove.onclick = () => {
        cart.splice(index,1);
        saveCart();
        renderBasket({index:Math.max(0,Math.min(index,cart.length-1)),role:'remove'});
      };
      row.append(photo,info,quantity,remove);
      basket.append(row);
      activeRows.set(index,{quantity,remove});
    }

    const totalLabel = document.getElementById('basket-total');
    totalLabel.textContent = format.format(total);
    document.getElementById('order-items').value = lines.length ? [...lines,'Tổng giá hoa: ' + format.format(total)].join('\n') : '';
    checkout.hidden = !cart.length;
    emptyOrder.hidden = Boolean(cart.length);
    if (!cart.length || storageFailed) {
      const note = document.createElement('p');
      note.textContent = storageFailed ? 'Giỏ hiện ở trong trang này vì trình duyệt không cho lưu.' : 'Giỏ chưa có hoa.';
      basket.prepend(note);
    }
    if (focusTarget) {
      const control = activeRows.get(focusTarget.index)?.[focusTarget.role] || basket.parentElement.querySelector('a');
      control?.focus();
    }
  }

  window.addEventListener('storage',event => {
    if (event.key !== storageKey) return;
    cart = readCart();
    renderCount();
    if (catalog) {
      catalog.querySelectorAll('[data-variant]').forEach(control => control.dispatchEvent(new Event('change')));
    }
    renderBasket();
  });
  renderCount();
  if (catalog) initCatalog();
  renderBasket();
})();
