(() => {
  'use strict';
  const el = id => document.getElementById(id);
  const sites = window.THEMES_DATA;
  const fields = ['brief', 'tone', 'title', 'body', 'seo-title', 'seo-description'];
  let currentKey = '';
  let timer;
  const status = message => { el('status').textContent = message; };
  const escape = text => String(text).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  function read(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      if (Array.isArray(fallback)) return Array.isArray(value) ? value.filter(item => item && typeof item === 'object' && item.data && typeof item.data === 'object') : fallback;
      return value && typeof value === 'object' && !Array.isArray(value) ? value : fallback;
    }
    catch { status('Không đọc được bộ nhớ cục bộ. Bạn có thể xuất nội dung ra tệp.'); return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch { status('Bộ nhớ bị chặn hoặc đã đầy. Hãy xuất nội dung để giữ bản sao.'); return false; }
  }
  const content = () => Object.fromEntries(fields.map(id => [id, el(id).value]));
  const site = () => sites.find(item => item.id === el('site').value);
  function preview() {
    el('preview').replaceChildren();
    const title = document.createElement('h1'); title.textContent = el('title').value;
    const body = document.createElement('p'); body.textContent = el('body').value;
    el('preview').append(title, body);
    el('seo-preview-title').textContent = el('seo-title').value;
    el('seo-preview-description').textContent = el('seo-description').value;
  }
  function save() {
    clearTimeout(timer);
    if (currentKey && write(currentKey, content())) status('Đã lưu nháp trên trình duyệt này.');
  }
  function history() {
    const versions = read(currentKey + ':versions', []);
    el('history').replaceChildren();
    if (!Array.isArray(versions)) return;
    versions.slice().reverse().forEach(version => {
      const button = document.createElement('button');
      button.textContent = 'Khôi phục ' + new Date(version.at).toLocaleString('vi-VN');
      button.onclick = () => {
        const backup = read(currentKey + ':versions', []);
        if (!write(currentKey + ':versions', [...backup, {at:new Date().toISOString(), data:content()}].slice(-50))) return;
        fields.forEach(id => { el(id).value = String(version.data[id] ?? ''); });
        save(); preview(); history();
      };
      el('history').append(button);
    });
  }
  function load() {
    currentKey = `racker:writer:v1:${el('site').value}:${el('page').value}`;
    const data = read(currentKey, {});
    fields.forEach(id => { el(id).value = typeof data[id] === 'string' ? data[id] : id === 'tone' ? 'clear' : ''; });
    el('industry').textContent = site().category;
    el('open-site').href = `../sites/${site().id}/${el('page').value}`;
    status('Nội dung và lịch sử được lưu riêng cho website và trang đang chọn.');
    preview(); history();
  }
  function pages() {
    el('page').replaceChildren();
    (window.WRITER_PAGES[site().id] || []).forEach(page => el('page').add(new Option(page, page)));
    if (window.WRITER_PAGES[site().id]?.includes('index.html')) el('page').value = 'index.html';
    load();
  }
  sites.forEach(item => el('site').add(new Option(`${item.name} · ${item.id}`, item.id)));
  el('site').onchange = () => { save(); pages(); };
  el('page').onchange = () => { save(); load(); };
  fields.forEach(id => el(id).addEventListener('input', () => { preview(); clearTimeout(timer); timer = setTimeout(save, 400); }));
  window.addEventListener('pagehide', save);
  el('save').onclick = () => {
    save(); const versions = read(currentKey + ':versions', []);
    if (write(currentKey + ':versions', [...versions, {at:new Date().toISOString(), data:content()}].slice(-50))) status('Đã lưu phiên bản cục bộ. Lịch sử giữ tối đa 50 phiên bản mỗi trang.');
    history();
  };
  el('generate').onclick = () => {
    const brief = el('brief').value.trim();
    if (!brief) { status('Nhập thông tin đã xác nhận để tạo bản nháp.'); el('brief').focus(); return; }
    const page = el('page').value;
    const openings = {'index.html':`Khám phá ${site().category.toLocaleLowerCase('vi-VN')}`, 'san-pham.html':'Lựa chọn phù hợp với nhu cầu của bạn', 'gioi-thieu.html':`Về ${site().name}`, 'lien-he.html':'Trao đổi yêu cầu của bạn'};
    el('title').value = openings[page] || site().name;
    el('body').value = `${brief}\n\n${site().name} — ${site().category}.\n\nHãy chia sẻ nhu cầu cụ thể để lựa chọn sản phẩm hoặc dịch vụ phù hợp.`;
    preview(); save();
  };
  el('rewrite').onclick = () => {
    const sentences = el('body').value.split(/(?<=[.!?])\s+/).map(text => text.trim()).filter(Boolean);
    if (el('tone').value === 'brief') el('body').value = sentences.slice(0, 3).join(' ');
    else if (el('tone').value === 'warm') el('body').value = 'Bạn đang tìm lựa chọn phù hợp?\n\n' + sentences.join('\n\n');
    else el('body').value = sentences.join('\n\n');
    preview(); save(); status('Đã biên tập theo quy tắc cục bộ. Kiểm tra nội dung trước khi dùng.');
  };
  el('seo').onclick = () => {
    el('seo-title').value = `${el('title').value || site().name} | ${site().name}`.slice(0, 60);
    el('seo-description').value = el('body').value.replace(/\s+/g, ' ').trim().slice(0, 160);
    preview(); save();
  };
  el('prompt').onclick = async () => {
    const prompt = `Viết nội dung tiếng Việt cho ${site().name}, ngành ${site().category}, trang ${el('page').value}. Giọng văn ${el('tone').selectedOptions[0].textContent}. Chỉ sử dụng thông tin sau, không tự tạo chứng nhận, đánh giá, số liệu hay cam kết.\n${el('brief').value}\nNội dung hiện tại:\n${el('body').value}\nTrả về JSON gồm title, body, seo-title, seo-description. SEO title tối đa 60 ký tự, description tối đa 160 ký tự.`;
    try { await navigator.clipboard.writeText(prompt); status('Đã sao chép prompt. Dán vào ChatGPT để sử dụng.'); }
    catch { el('import-text').value = prompt; el('import-text').focus(); el('import-text').select(); status('Prompt đã được chọn trong ô dán nội dung. Nhấn Ctrl+C để sao chép.'); }
  };
  el('import').onclick = () => {
    const text = el('import-text').value.trim();
    if (!text) return;
    let data;
    try { data = JSON.parse(text.replace(/^```(?:json)?\s*|\s*```$/g, '')); } catch { data = {body:text}; }
    data = data?.content || data;
    if (!data || typeof data !== 'object') { status('Nội dung JSON cần là một đối tượng.'); return; }
    fields.forEach(id => { if (typeof data[id] === 'string') el(id).value = data[id]; });
    preview(); save();
  };
  document.querySelectorAll('[data-export]').forEach(button => button.onclick = () => {
    save(); const data = content(); const format = button.dataset.export;
    let output = JSON.stringify({site:site().id, page:el('page').value, content:data}, null, 2);
    if (format === 'md') output = `# ${data.title}\n\n${data.body}\n\nSEO title\n${data['seo-title']}\n\nSEO description\n${data['seo-description']}\n`;
    if (format === 'html') output = `<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(data['seo-title'] || data.title)}</title><meta name="description" content="${escape(data['seo-description'])}"></head><body><main><h1>${escape(data.title)}</h1>${data.body.split(/\n\s*\n/).map(p => `<p>${escape(p).replace(/\n/g,'<br>')}</p>`).join('\n')}</main></body></html>`;
    const url = URL.createObjectURL(new Blob([output], {type:format === 'html' ? 'text/html;charset=utf-8' : format === 'json' ? 'application/json' : 'text/markdown;charset=utf-8'}));
    const link = document.createElement('a'); link.href = url; link.download = `${site().id}-${el('page').value.replace('.html','')}.${format}`; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  pages();
})();
