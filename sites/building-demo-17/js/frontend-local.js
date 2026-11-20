/* Distributed into each website so its request workflow remains self-contained. */
(() => {
  'use strict';
  const key = 'racker:requests:v1:' + location.pathname.split('/').slice(-2, -1)[0];
  const requestPattern = /contact|booking|reservation|reserve|rfq|survey|checkout|newsletter|event|party|tour|drive|patient|appointment|spa|cake|subscribe|subscription|teabreak|partner|quote|sub-box/i;
  function download(value) {
    const url = URL.createObjectURL(new Blob([JSON.stringify(value, null, 2)], {type:'application/json'}));
    const link = document.createElement('a'); link.href = url; link.download = 'yeu-cau-chua-gui.json'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function label(field) {
    return field.labels?.[0]?.textContent.trim() || field.name || field.id || field.placeholder || 'Thông tin';
  }
  function prepare(form) {
    if (form.dataset.localRequest || !requestPattern.test(form.id + ' ' + form.className + ' ' + form.getAttribute('onsubmit'))) return;
    if (/search|login|register|auth|growth|calculator|estimate/i.test(form.id + ' ' + form.className)) return;
    form.dataset.localRequest = 'true';
    const note = document.createElement('p'); note.className = 'local-request-note';
    note.textContent = form.dataset.contactChannel === 'none'
      ? 'Bản nháp lưu trên thiết bị này. Bạn có thể tải xuống sau khi lưu.'
      : 'Yêu cầu được lưu trên trình duyệt của bạn. Sau khi kiểm tra, hãy xuất bản yêu cầu hoặc mở kênh liên hệ để gửi.';
    form.prepend(note);
    form.querySelectorAll('button[type="submit"],input[type="submit"]').forEach(button => {
      if (button.tagName === 'INPUT') button.value = 'Lưu yêu cầu trên thiết bị';
      else button.textContent = 'Lưu yêu cầu trên thiết bị';
    });
  }
  document.addEventListener('submit', event => {
    const form = event.target;
    prepare(form);
    if (!form.dataset.localRequest) return;
    event.preventDefault(); event.stopImmediatePropagation();
    if (!form.reportValidity()) return;
    const fields = [...form.elements].filter(field => /INPUT|SELECT|TEXTAREA/.test(field.tagName) && !field.disabled && !['submit','button','password','hidden','file'].includes(field.type) && (!['radio','checkbox'].includes(field.type) || field.checked));
    const data = fields.map(field => ({label:label(field), value:field.value}));
    const request = {id:crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36), created:new Date().toISOString(), page:location.pathname, status:'unsent', fields:data};
    let saved = false;
    try {
      const stored = JSON.parse(localStorage.getItem(key) || '[]');
      localStorage.setItem(key, JSON.stringify([...(Array.isArray(stored) ? stored : []), request].slice(-100))); saved = true;
    } catch { /* The export path still preserves the entered request. */ }
    let result = form.querySelector('.local-request-result');
    if (!result) { result = document.createElement('div'); result.className = 'local-request-result'; form.append(result); }
    result.replaceChildren(); result.setAttribute('role','status'); result.tabIndex = -1;
    const message = document.createElement('p');
    message.textContent = saved ? 'Đã lưu trên thiết bị này · Chưa gửi. Bạn có thể tải xuống để giữ bản sao.' : 'Chưa gửi. Trình duyệt không lưu được bản nháp. Hãy xuất bản yêu cầu để giữ thông tin.';
    const exportButton = document.createElement('button'); exportButton.type = 'button'; exportButton.textContent = 'Xuất yêu cầu JSON'; exportButton.onclick = () => download(request);
    const channel = document.createElement('a'); channel.href = 'https://zalo.me/0971183939'; channel.target = '_blank'; channel.rel = 'noopener noreferrer'; channel.textContent = 'Mở Zalo để gửi';
    const copy = document.createElement('button'); copy.type = 'button'; copy.textContent = 'Sao chép thông tin';
    copy.onclick = async () => {
      const text = data.map(field => `${field.label}: ${field.value}`).join('\n');
      try { await navigator.clipboard.writeText(text); message.textContent = 'Đã sao chép · Chưa gửi. Dán nội dung vào cuộc trò chuyện của bạn.'; }
      catch { const area = document.createElement('textarea'); area.value = text; area.setAttribute('aria-label','Thông tin yêu cầu để sao chép'); result.append(area); area.select(); }
    };
    result.append(message, exportButton, copy);
    if (form.dataset.contactChannel !== 'none') result.append(channel);
    result.focus();
  }, true);
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form').forEach(prepare);
    const history = document.createElement('details'); history.className = 'local-request-history';
    const summary = document.createElement('summary'); summary.textContent = 'Yêu cầu đã lưu trên thiết bị'; history.append(summary);
    history.addEventListener('toggle', () => {
      if (!history.open) return;
      history.querySelectorAll('p,button').forEach(node => node.remove());
      let requests = [];
      try { const value = JSON.parse(localStorage.getItem(key) || '[]'); if (Array.isArray(value)) requests = value; } catch { /* Empty history remains usable. */ }
      const note = document.createElement('p'); note.textContent = requests.length ? 'Các bản yêu cầu dưới đây đều chưa được gửi. Dữ liệu chỉ có trên trình duyệt này.' : 'Chưa có yêu cầu cục bộ.'; history.append(note);
      requests.slice().reverse().forEach(request => { const button = document.createElement('button'); button.type = 'button'; button.textContent = 'Xuất yêu cầu ' + new Date(request.created).toLocaleString('vi-VN'); button.onclick = () => download(request); history.append(button); });
    });
    document.body.append(history);
    new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(node => {
      if (node.nodeType !== 1) return;
      if (node.matches('form')) prepare(node);
      node.querySelectorAll('form').forEach(prepare);
    }))).observe(document.body, {childList:true, subtree:true});
  });
})();
