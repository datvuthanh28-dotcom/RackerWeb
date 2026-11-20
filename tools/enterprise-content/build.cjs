const fs = require('node:fs');
const path = require('node:path');
const stories = require('./mach-pho.cjs');
const {projects, services:buildingServices} = require('./nep-cong-trinh.cjs');
const barberServices = require('./gon.cjs');
const root = path.resolve(__dirname,'../..');

function pageWriter(siteId, brand, header, footer) {
  return (file, title, main) => {
    const html = `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="rackerweb-custom-design" content="hand-authored">
  <title>${title} · ${brand}</title>
  <link rel="stylesheet" href="css/frontend-local.css">
  <link rel="stylesheet" href="css/style.css">
  <script src="js/frontend-local.js" defer></script>
  <script src="js/app.js" defer></script>
</head>
<body>
<a class="skip-link" href="#main">Đi tới nội dung</a>
${header(file)}
<main id="main">
${main}
</main>
${footer}
</body>
</html>
`;
    fs.writeFileSync(path.join(root,'sites',siteId,file),html);
  };
}

const link = (file, target, label) => `<a href="${target}"${file===target?' aria-current="page"':''}>${label}</a>`;
const img = (name, alt, priority = false) => `<img src="assets/${name}.webp" alt="${alt}" ${priority?'fetchpriority="high"':'loading="lazy"'}>`;
const faq = (question, answer) => `<details><summary>${question}</summary><p>${answer}</p></details>`;
const money = amount => `${amount.toLocaleString('vi-VN')} ₫`;
const formatDate = (iso) => iso.split('-').reverse().join('/');
const articleUrl = story => `bai-${story.id}.html`;
const caseUrl = project => `du-an-${project.id}.html`;
const mostRead = [...stories].sort((a,b)=>b.views-a.views).slice(0,4);
const latest = [...stories].sort((a,b)=>b.date.localeCompare(a.date));
const lead = stories.find(s=>s.id==='laptop');
const topicOptions = [...new Set(stories.map(s=>s.topic))];
const byline = s => `<span>${s.author} · <time datetime="${s.date}">${formatDate(s.date)}</time></span>`;

function storyLink(story) {
  return `<a href="${articleUrl(story)}">${story.title}</a>`;
}
const journalHead = f => `<header class="masthead">
  <div class="imprint"><a class="mark" href="index.html">Mạch Phố</a><p>Tạp chí về thiết bị, sửa chữa và mua lại</p></div>
  <nav aria-label="Tòa soạn">${link(f,'index.html','Trang nhất')}${link(f,'san-pham.html','Tủ bài viết')}${link(f,'gioi-thieu.html','Tòa soạn')}${link(f,'lien-he.html','Góp đề tài')}</nav>
</header>`;
const journalFoot = `<footer class="journal-foot"><div><strong>Mạch Phố</strong><p>Ấn phẩm mẫu. Tác giả, ngày xuất bản và lượt đọc là dữ liệu minh họa.</p></div><nav aria-label="Cuối trang"><a href="san-pham.html">Tủ bài viết</a><a href="gioi-thieu.html">Nguyên tắc biên tập</a><a href="../../index.html">RackerWeb</a></nav></footer>`;
const journal = pageWriter('blog-tin-tuc-demo-84','Mạch Phố',journalHead,journalFoot);

journal('index.html','Trang nhất',`
<h1 class="visually-hidden">Trang nhất Mạch Phố</h1>
<div class="desk"><section class="lead-story" aria-labelledby="lead-title">
  <a href="${articleUrl(lead)}">${img(lead.image,lead.alt,true)}</a>
  <div class="lead-copy"><p class="topic">Hướng dẫn mua lại</p><h2 id="lead-title">${storyLink(lead)}</h2><p>${lead.intro}</p><p class="meta">${byline(lead)}</p></div>
</section><aside class="latest" aria-labelledby="latest-title"><h2 id="latest-title">Mới lên trang</h2>
  <ol>${latest.slice(0,5).map(s=>`<li><span class="topic">${s.topic}</span>${storyLink(s)}<time class="meta" datetime="${s.date}">${formatDate(s.date)}</time></li>`).join('\n')}</ol>
</aside></div>
<section class="topic-index"><h2>Đọc theo chuyên mục</h2><div>${topicOptions.map(topic=>`<section><h3>${topic}</h3><ul>${latest.filter(s=>s.topic===topic).slice(0,2).map(s=>`<li>${storyLink(s)}</li>`).join('')}</ul><a href="san-pham.html?muc=${encodeURIComponent(topic)}">Xem mục ${topic}</a></section>`).join('\n')}</div></section>
<section class="issue-bottom"><div><h2>Được quan tâm</h2><ol>${mostRead.map(s=>`<li>${storyLink(s)} <span class="meta">${s.views.toLocaleString('vi-VN')} lượt đọc mẫu</span></li>`).join('')}</ol></div>
<div><h2>Gửi câu hỏi cho tòa soạn</h2><p>Máy đang gặp lỗi gì, khi nào lỗi lặp lại và bạn đã thử điều gì? Từ những chi tiết đó, tòa soạn có thể xây một hướng dẫn theo tình huống.</p><a class="action" href="lien-he.html">Chuẩn bị đề tài</a></div></section>
`);
journal('san-pham.html','Tủ bài viết',`
<header class="archive-head"><h1>Tủ bài viết</h1><p>Hướng dẫn, ghi chép bàn sửa và cách chọn đồ đã qua sử dụng.</p></header>
<div class="filter"><label for="query">Tìm bài<input type="search" id="query" placeholder="Ví dụ laptop cũ"></label><label for="topic">Chuyên mục<select id="topic"><option value="">Tất cả</option>${topicOptions.map(topic=>`<option>${topic}</option>`).join('')}</select></label></div><p id="results" role="status"></p>
<div class="archive-list">${latest.map(s=>`<article id="${s.id}" data-topic="${s.topic}"><div class="meta"><span class="topic">${s.topic}</span>${byline(s)}</div><div><h2>${storyLink(s)}</h2><p>${s.intro}</p></div></article>`).join('\n')}</div>
`);
journal('gioi-thieu.html','Tòa soạn',`
<header class="archive-head"><h1>Tòa soạn Mạch Phố</h1><p>Chúng tôi viết về quãng đời dài nhất của thiết bị, từ những ngày dùng hằng ngày đến khi cần bảo trì, sửa hoặc chuyển giao.</p></header>
<div class="editorial-about"><section><h2>Từ câu hỏi trên bàn sửa</h2><p>Mạch Phố là tòa soạn hư cấu mở từ mùa thu 2026. Số đầu tiên bắt đầu bằng ba tình huống quen thuộc: pin tụt lúc đi đường, phím lặp ký tự và mua máy cũ ở một cuộc hẹn ngắn.</p><p>Mỗi bài làm rõ điều độc giả có thể quan sát, việc nên dừng và khi nào cần người có chuyên môn. Các tình huống bàn sửa là ví dụ biên tập, lượt đọc được đặt để thể hiện bố cục của một ấn phẩm.</p></section>
<section><h2>Ban biên tập</h2><dl><dt>An Lam</dt><dd>Biên tập dữ liệu và những việc cần chuẩn bị trước khi đổi máy.</dd><dt>Tú Giang</dt><dd>Theo dõi cách kiểm tra và bàn giao tại bàn sửa.</dd><dt>Duy Thảo</dt><dd>Phụ trách mua thiết bị cũ và phụ kiện cho bàn làm việc nhỏ.</dd></dl></section></div>
<section class="section-rule"><h2>Cách làm và sửa bài</h2><ol><li>Đặt tình huống và giới hạn bài ngay đầu.</li><li>Tách quan sát, giải thích và quyết định cần thực hiện.</li><li>Ghi rõ nếu tình huống là minh họa hoặc kết luận phụ thuộc thiết bị.</li><li>Với góp ý, lưu dấu đoạn cần sửa và lý do để lần cập nhật sau dễ đối chiếu.</li></ol><a href="lien-he.html">Chuẩn bị góp ý cho tòa soạn</a></section>
`);
journal('lien-he.html','Góp đề tài',`
<div class="editorial-about"><section><h1>Góp đề tài</h1><p>Hữu ích nhất là tên thiết bị, lúc sự cố xuất hiện, điều đã thử và câu hỏi còn mở. Che số sê-ri, mã tài khoản và dữ liệu riêng nếu tự chuẩn bị ảnh minh họa.</p><h2>Quy trình mẫu</h2><p>Tòa soạn xếp đề tài theo chuyên mục, tách lỗi cần chuyên gia xử lý khỏi những việc độc giả có thể tự quan sát, rồi lên dàn ý. Hộp thư minh họa là bandoc@machpho.example.</p></section>
<form id="story-contact" data-contact-channel="none"><label for="author">Tên người góp ý</label><input id="author" required autocomplete="name">
<label for="subject">Chủ đề</label><input id="subject" required maxlength="100"><label for="story-category">Chuyên mục gợi ý</label><select id="story-category"><option>Thiết bị</option><option>Xưởng</option><option>Mua lại</option><option>Dữ liệu</option></select>
<label for="story">Tình huống và câu hỏi</label><textarea id="story" required rows="7"></textarea><button class="action" type="submit">Lưu bản góp ý</button></form></div>
`);
for (const story of stories) {
  const related = stories.filter(item=>item.topic===story.topic && item!==story).slice(0,3);
  const indexed = latest.indexOf(story);
  const next = latest[(indexed+1)%latest.length];
  journal(articleUrl(story),story.title,`
  <article class="reading">
    <header class="reading-head"><a href="san-pham.html?muc=${encodeURIComponent(story.topic)}">${story.topic}</a><h1>${story.title}</h1><p class="standfirst">${story.intro}</p><p class="meta">${byline(story)} · ${Math.max(2,Math.ceil(story.sections.flat().join(' ').split(/\s+/).length/210))} phút đọc</p></header>
    ${story.image?`<figure>${img(story.image,story.alt,true)}<figcaption>${story.alt} · Ảnh minh họa</figcaption></figure>`:''}
    <div class="reading-body">${story.sections.map(([heading,...body])=>`<section><h2>${heading}</h2>${body.map(p=>`<p>${p}</p>`).join('')}</section>`).join('\n')}</div>
    <section class="related"><h2>Cùng chuyên mục</h2><ul>${related.map(item=>`<li>${storyLink(item)}</li>`).join('')}</ul><p>Bài tiếp theo · ${storyLink(next)}</p></section>
  </article>`);
}

const buildHead = f => `<header class="site-rail"><a class="mark" href="index.html">Nếp <br>Công Trình</a>
<nav aria-label="Điều hướng">${link(f,'index.html','Tổng quan')}${link(f,'san-pham.html','Hồ sơ dự án')}${link(f,'dich-vu.html','Phạm vi dịch vụ')}${link(f,'gioi-thieu.html','Phương pháp')}${link(f,'lien-he.html','Lập yêu cầu')}</nav>
<p>Cải tạo công trình hiện hữu</p></header>`;
const buildFoot = `<footer class="build-foot"><div><strong>Nếp Công Trình</strong><p>Xưởng cải tạo hư cấu. Dự án, giá và hình ảnh là dữ liệu minh họa.</p></div><nav aria-label="Cuối trang"><a href="dich-vu.html">Phạm vi dịch vụ</a><a href="lien-he.html">Chuẩn bị khảo sát</a><a href="../../index.html">RackerWeb</a></nav></footer>`;
const build = pageWriter('building-demo-17','Nếp Công Trình',buildHead,buildFoot);
const projectFacts = (p) => `<dl class="project-facts"><div><dt>Loại công trình</dt><dd>${p.type}</dd></div><div><dt>Diện tích mẫu</dt><dd>${p.area}</dd></div><div><dt>Tiến độ minh họa</dt><dd>${p.duration}</dd></div></dl>`;
function projectLink(p) {
  return `<a href="${caseUrl(p)}">${p.name}</a>`;
}
build('index.html','Cải tạo công trình',`
<section class="blueprint"><div><p class="small">Thiết kế và thi công cải tạo</p><h1>Làm mới từ phần còn tốt.</h1><p>Khảo sát trước khi vẽ. Làm rõ hạng mục giữ lại, tuyến vật tư và điều kiện sử dụng trước khi chốt phương án cho nhà phố và mặt bằng nhỏ.</p><a class="action" href="san-pham.html">Khám phá hồ sơ dự án</a></div>${img('nha-ong',projects[0].alt,true)}</section>
<section class="scope-band"><h2>Bắt đầu ở giai đoạn bạn đang cần</h2><dl>${buildingServices.map(s=>`<div><dt><a href="dich-vu.html#${s.id}">${s.name}</a></dt><dd>${s.intro}</dd></div>`).join('')}</dl></section>
<section class="project-overview"><header><h2>Ba công trình, ba bài toán</h2><a href="san-pham.html">Toàn bộ sáu hồ sơ</a></header><div>${[projects[1],projects[3],projects[4]].map(p=>`<article>${img(p.image,p.alt)}<h3>${projectLink(p)}</h3><p>${p.intro}</p><p class="small">${p.area} · ${p.duration}</p></article>`).join('')}</div></section>
<section class="method home-process"><h2>Phần khuất cần nghiệm thu trước</h2><p>Nhà cải tạo có những điều chỉ lộ ra sau khi mở tường. Xưởng tách mốc duyệt phần tháo, phần điện nước và phần hoàn thiện, để việc phát sinh có người duyệt trước khi che lại.</p><a href="gioi-thieu.html#lich">Xem các mốc nghiệm thu</a></section>
<section class="home-process"><h2>Khi nào có thể lập dự toán?</h2><p>Cần biết phạm vi giữ lại, thời gian mặt bằng có thể bàn giao và nhóm vật liệu dự kiến. Dữ liệu hiện trạng tốt giúp tách khoản đã chốt khỏi khoản dự phòng.</p><a href="dich-vu.html#bao-gia">Xem các yếu tố hình thành giá</a></section>
<section class="contact-band"><h2>Chuẩn bị một buổi khảo sát.</h2><p>Ghi diện tích ước tính, các vị trí đang xuống cấp, thời gian có thể mở công trường và khu vực cần giữ hoạt động.</p><a class="action" href="lien-he.html">Lập yêu cầu khảo sát</a></section>
`);
build('san-pham.html','Hồ sơ dự án',`
<header class="build-title"><h1>Hồ sơ dự án</h1><p>Sáu tình huống minh họa cho nhà ở, mặt bằng kinh doanh, nội thất và sửa chữa kỹ thuật. Mỗi hồ sơ có phạm vi, quyết định thiết kế và tài liệu bàn giao.</p></header>
<div class="portfolio-controls"><label for="project-type">Loại công trình</label><select id="project-type"><option value="">Tất cả</option>${[...new Set(projects.map(p=>p.type))].map(t=>`<option>${t}</option>`).join('')}</select><p id="project-count" role="status"></p></div>
<div class="project-register">${projects.map(p=>`<article class="case" id="${p.id}" data-type="${p.type}"><a href="${caseUrl(p)}">${img(p.image,p.alt)}</a><div><p class="small">${p.type} · ${p.area}</p><h2>${projectLink(p)}</h2><p>${p.intro}</p><a href="lien-he.html?du-an=${p.id}">Dùng làm ví dụ trong yêu cầu</a></div></article>`).join('\n')}</div>
`);
build('dich-vu.html','Phạm vi dịch vụ',`
<header class="build-title"><h1>Phạm vi dịch vụ</h1><p>Chọn theo mức độ rõ của hiện trạng và phần việc bạn đã chốt.</p></header>
<div class="scope-index">${buildingServices.map(s=>`<a href="#${s.id}">${s.name}</a>`).join('')}</div>
${buildingServices.map(s=>`<section class="service-detail" id="${s.id}"><header><h2>${s.name}</h2><p>${s.intro}</p><strong>${s.price}</strong></header><dl><dt>Phù hợp với</dt><dd>${s.audience}</dd><dt>Phạm vi</dt><dd>${s.scope}</dd><dt>Hồ sơ bàn giao</dt><dd>${s.output}</dd><dt>Thời gian minh họa</dt><dd>${s.time}</dd></dl><a href="lien-he.html?goi=${s.id}">Lập yêu cầu cho dịch vụ</a></section>`).join('\n')}
<section class="scope-band" id="bao-gia"><h2>Điều gì làm thay đổi báo giá?</h2><dl><div><dt>Hiện trạng</dt><dd>Phần phải mở để kiểm tra, đường vận chuyển, giờ thi công và số lần chuyển vật tư.</dd></div><div><dt>Vật liệu</dt><dd>Bề mặt dùng tay thường xuyên, độ ẩm và khả năng thay riêng. Ghi một lựa chọn chính và một lựa chọn thay thế.</dd></div><div><dt>Trình tự</dt><dd>Nhà còn người ở hoặc quán phải giữ hoạt động cần thêm bước che chắn và bàn giao theo vùng.</dd></div></dl></section>
`);
build('gioi-thieu.html','Phương pháp',`
<header class="build-title"><h1>Tổ chức công trường nhỏ</h1><p>Nếp Công Trình là xưởng mẫu ra đời năm 2018 từ các ca sửa nhà đang có người ở. Phương pháp của xưởng giữ một bản mô tả chung cho gia chủ, người vẽ và đội thi công.</p></header>
<section class="method home-process"><h2>Nguyên tắc khảo sát</h2><p>Yên Khôi phụ trách hồ sơ giữ và thay. Hải Thềm điều phối mốc bàn giao vật tư. Hai nhân sự hư cấu cùng đọc ảnh hiện trạng trước khi vẽ đường can thiệp. Dấu hiệu ẩm, nứt hoặc thay đổi kết cấu cần được đánh giá riêng theo từng công trình.</p></section>
<section id="lich" class="method"><h2>Từ khảo sát đến bàn giao</h2><ol class="timeline"><li><strong>Khảo sát hiện trạng</strong> Đo mặt bằng, chụp theo phòng, ghi vị trí tường, cửa, điện nước và lối vận chuyển.</li><li><strong>Phương án và vật liệu</strong> Đối chiếu mẫu ở nơi có ánh sáng thực tế. Kiểm tra kích thước cửa và đồ rời trước khi chốt mặt bằng.</li><li><strong>Mở và nghiệm thu phần khuất</strong> Ghi các thay đổi trước khi đóng trần hoặc tường. Chốt đầu nối và điểm kiểm tra với gia chủ.</li><li><strong>Bàn giao theo khu vực</strong> Thử đèn, thoát nước, cửa và bề mặt. Giao danh mục vật tư và hướng dẫn vệ sinh, bảo trì.</li></ol></section>
<section class="method"><h2>Chọn vật liệu theo việc sử dụng</h2><dl class="brief-materials"><div><dt>Bề mặt ướt</dt><dd>Ưu tiên gạch nhám, vị trí mở rãnh và cấu tạo cạnh dễ thay.</dd></div><div><dt>Đồ gỗ</dt><dd>Đối chiếu độ ẩm và vị trí tay nắm. Thử đóng mở tại góc thực trước khi đặt.</dd></div><div><dt>Vách ngăn</dt><dd>Xem tầm nhìn, ánh sáng, lối đi và yêu cầu âm thanh cùng một lúc.</dd></div></dl></section>
<section class="method"><h2>Câu hỏi trước khi bắt đầu</h2>
${faq('Có thể ở tại nhà trong khi cải tạo không?','Chỉ xem xét khi chia được công việc theo tầng và giữ lối ra sử dụng được. Bụi, cắt điện nước và khu vực can thiệp kết cấu cần thống nhất riêng trước khi lên lịch.')}
${faq('Khi nào cần dự toán lại?','Khi mở hiện trạng phát hiện phần khuất khác bản vẽ, hãy ghi hạng mục, ảnh và phương án thay thế. Chốt đúng phạm vi phát sinh trước khi tiếp tục.')}
${faq('Hồ sơ mẫu có dùng để thi công trực tiếp được không?','Các hồ sơ là tình huống minh họa. Công trình thực tế cần đo đạc, kiểm tra điều kiện địa điểm và thiết kế phù hợp.')}
</section>
`);
build('lien-he.html','Lập yêu cầu khảo sát',`
<div class="request-layout"><section><h1>Lập yêu cầu khảo sát</h1><p>Chuẩn bị loại công trình, diện tích ước tính, mục tiêu cải tạo và lịch bàn giao mặt bằng. Nếu có bản vẽ cũ, ghi lại thời điểm lập và những lần đã sửa.</p>
<h2>Sau khi lập phiếu</h2><ol><li>Xem lại khu vực cần xử lý và phần muốn giữ.</li><li>Tải phiếu JSON để dùng khi chuẩn bị hồ sơ khảo sát.</li><li>Ghi bổ sung điều kiện ra vào công trường hoặc thời gian có người ở.</li></ol>
<p>Văn phòng minh họa ở Cụm Sân Nếp, phường Bờ Gạch. Giờ làm việc mẫu 08:30–17:30 thứ Hai đến thứ Sáu. Hộp thư <span>khaosat@nepcongtrinh.example</span>.</p>
${faq('Chưa biết diện tích chính xác thì ghi thế nào?','Ước tính diện tích vùng tác động, ghi cách đo trong phần hạng mục. Bản khảo sát sẽ đo lại theo ranh giới từng phòng.')}
</section>
<form id="project-rfq" data-contact-channel="none"><fieldset><legend>Phạm vi</legend><label for="project">Hồ sơ tham chiếu</label><select id="project"><option value="">Không chọn hồ sơ</option>${projects.map(p=>`<option value="${p.id}" data-project-type="${p.type}">${p.name}</option>`).join('')}</select>
<label for="scope-type">Loại công trình</label><select id="scope-type" required><option value="">Chọn loại công trình</option>${[...new Set(projects.map(p=>p.type))].map(t=>`<option>${t}</option>`).join('')}</select>
<label for="service-scope">Dịch vụ quan tâm</label><select id="service-scope" required><option value="">Chọn dịch vụ</option>${buildingServices.map(s=>`<option value="${s.id}">${s.name}</option>`).join('')}</select>
<label for="area">Diện tích ước tính (m²)</label><input id="area" type="number" min="1" max="10000" required><label for="request-detail">Hạng mục cần khảo sát</label><textarea id="request-detail" rows="5" maxlength="1500" required></textarea></fieldset>
<fieldset><legend>Người lập yêu cầu</legend><label for="customer">Họ và tên</label><input id="customer" autocomplete="name" maxlength="80" required><label for="region">Khu vực công trình</label><input id="region" autocomplete="address-level2" maxlength="120" required></fieldset><button class="action" type="submit">Lưu yêu cầu</button></form></div>
`);
for (const project of projects) {
  const compare = project.id==='mai' ? `<div class="before-after"><figure>${img('mai-truoc','Sân mái giả định trước khi cải tạo, nền xi măng đọng nước')}<figcaption>Trước · nền mòn, nước đọng gần lối vào.</figcaption></figure><figure>${img('mai-sau',project.alt)}<figcaption>Sau · phương án minh họa với rãnh dọc và mặt gạch nhám.</figcaption></figure></div>` : '';
  build(caseUrl(project),project.name,`
    <header class="build-title"><a href="san-pham.html">Hồ sơ dự án</a><h1>${project.name}</h1><p>${project.intro}</p>${projectFacts(project)}</header>
    <figure class="case-image">${img(project.image,project.alt,true)}<figcaption>Hình ảnh phương án minh họa</figcaption></figure>
    <div class="case-report"><section><h2>Mục tiêu</h2><p>${project.goal}</p></section><section><h2>Hiện trạng giả định</h2><p>${project.existing}</p></section><section><h2>Phương án</h2><p>${project.answer}</p></section><section><h2>Kết quả minh họa</h2><p>${project.result}</p></section></div>
    ${compare}<section class="scope-band"><h2>Hồ sơ bàn giao</h2><p>${project.deliverables}</p><p class="small">${project.materials}</p></section>
    <a class="action" href="lien-he.html?du-an=${project.id}&amp;loai=${encodeURIComponent(project.type)}">Dùng hồ sơ trong yêu cầu khảo sát</a>`);
}
const barberHead = f => `<header class="front-desk"><a class="mark" href="index.html">Gọn</a><nav aria-label="Điều hướng">
${link(f,'san-pham.html','Bảng dịch vụ')}${link(f,'kieu-toc.html','Kiểu tóc')}${link(f,'gioi-thieu.html','Đội thợ')}${link(f,'lien-he.html','Chuẩn bị lịch')}</nav></header>`;
const barberFoot = `<footer class="barber-foot"><div><a class="mark" href="index.html">Gọn</a><p>Barbershop hư cấu. Giá, hồ sơ thợ và lịch là dữ liệu minh họa.</p></div><div><p>10:00–19:30 · Thứ Ba–Chủ nhật<br>Hẻm Thước Mộc, khu Bàn Gương</p><a href="../../index.html">RackerWeb</a></div></footer>`;
const barber = pageWriter('barbershop-demo-45','Gọn Barbershop',barberHead,barberFoot);
const barberGroups = [...new Set(barberServices.map(s=>s.group))];
const styles = [
 {id:'crop',name:'Crop có kết cấu',image:'crop',alt:'Tóc crop ngắn nhìn từ góc ba phần tư',tip:'Giữ mái ngắn và các cụm tóc tách nhẹ. Có thể chọn đường viền mềm nếu muốn tóc mọc ra đều hơn.'},
 {id:'taper',name:'Taper quanh tai',image:'taper',alt:'Đường chuyển độ dài taper nhìn nghiêng',tip:'Giảm độ dài sát mai và gáy trong khi vẫn giữ bề rộng hai bên. Hữu ích khi muốn gọn viền mà phần trên còn đủ để chải.'},
 {id:'side-part',name:'Chải lệch bằng kéo',image:'chai-lech',alt:'Dáng tóc chải lệch với phần trên dài hơn',tip:'Giữ phần trên đủ dài để đổi hướng rẽ, lấy bớt nặng quanh tai để tóc rơi tự nhiên.'},
 {id:'xoan',name:'Xoăn giữ nếp',image:'toc-xoan',alt:'Tóc xoăn tự nhiên được cắt giữ độ gợn',tip:'Chừa độ dài tại vùng co mạnh, để lọn rơi theo thói quen. Có thể sấy gió nhẹ nếu muốn giữ độ xoăn.'}
];
barber('index.html','Trang tiệm',`
<section class="poster">${img('crop',styles[0].alt,true)}<div><h1>Gọn đầu.<br>Nhẹ việc.</h1><p>Kiểu tóc bạn có thể tự sấy lại vào sáng hôm sau. Tiệm cắt theo đường xoáy, mật độ và thời gian bạn muốn dành cho tóc.</p><a class="action" href="san-pham.html">Xem bảng dịch vụ</a></div></section>
<section class="window-strip"><div><h2>Chọn theo việc cần làm</h2><p>Đổi dáng, chỉnh viền, hay làm tóc và râu trong cùng lượt?</p></div><ul>${barberGroups.map(g=>`<li><a href="san-pham.html?nhom=${encodeURIComponent(g)}">${g}</a></li>`).join('')}</ul></section>
<section class="style-duet"><div><h2>Nhìn từ bên cạnh.</h2><p>Mang ảnh nhìn nghiêng nếu bạn quan tâm đường mai, độ sát quanh tai hay dáng tóc dưới mũ bảo hiểm.</p><a href="kieu-toc.html">Xem bốn kiểu tóc</a></div>${img('chai-lech',styles[2].alt)}</section>
<section class="bench"><h2>Mỗi ghế có một nhịp.</h2><p>Thợ xem tóc ở trạng thái khô, xác nhận mức ngắn và mới chuyển sang cắt. Trước khi rời ghế, khách có thể thử tự sấy một đoạn.</p><nav aria-label="Xem thêm"><a href="gioi-thieu.html">Gặp đội thợ</a><a href="lien-he.html">Chọn khung giờ</a></nav></section>
`);
barber('san-pham.html','Bảng dịch vụ',`
<header class="barber-heading"><h1>Bảng dịch vụ</h1><p>Mức giá minh họa tính cho một lượt. Mở từng dòng để xem phần thực hiện, dáng tóc phù hợp và cách chăm sau buổi cắt.</p></header>
<div class="service-toolbar"><label for="service-filter">Nhóm dịch vụ</label><select id="service-filter"><option value="">Tất cả</option>${barberGroups.map(g=>`<option>${g}</option>`).join('')}</select><span id="service-count" role="status"></span></div>
<div class="price-sheet">${barberGroups.map(group=>`<section class="menu-group" data-service-group="${group}"><h2>${group}</h2>
${barberServices.filter(s=>s.group===group).map(s=>`<details id="${s.id}"><summary><span>${s.name}</span><span>${s.minutes} phút</span><strong>${money(s.price)}</strong></summary><div class="menu-detail"><p>${s.description}</p><dl><dt>Hợp với</dt><dd>${s.fit}</dd><dt>Ở nhà</dt><dd>${s.after}</dd></dl><a href="lien-he.html?dich-vu=${s.id}">Chọn ${s.name}</a></div></details>`).join('\n')}</section>`).join('\n')}</div>
<section class="bench"><h2>Thời lượng tính thế nào?</h2><p>Thời lượng bao gồm đoạn tư vấn nhanh, cắt hoặc chỉnh theo dịch vụ và kiểm tra dáng cuối. Nếu tóc dài hơn nhiều so với kiểu muốn chọn, ghi điều đó trong yêu cầu để xếp thêm thời gian.</p></section>
`);
barber('kieu-toc.html','Kiểu tóc',`
<header class="barber-heading"><h1>Kiểu tóc theo nếp.</h1><p>Chọn ảnh theo cách tóc rơi và dáng hai bên. Khi chuẩn bị lịch, ghi một điểm bạn muốn giữ và một điểm muốn thay đổi.</p></header>
<div class="style-book">${styles.map((s,i)=>`<article><figure>${img(s.image,s.alt,i===0)}<figcaption>${s.name}</figcaption></figure><div><h2>${s.name}</h2><p>${s.tip}</p><a href="san-pham.html#${s.id}">Xem giá và thời lượng</a></div></article>`).join('\n')}</div>
<section class="bench"><h2>Chuẩn bị ảnh tham chiếu</h2><p>Chọn một ảnh chính diện và một ảnh nhìn nghiêng, ưu tiên chất tóc gần với tóc của bạn. Chụp thêm tóc lúc chưa dùng sáp nếu xoáy hoặc tóc con là điều bạn muốn xử lý.</p></section>
`);
barber('gioi-thieu.html','Đội thợ',`
<header class="barber-heading"><h1>Hai ghế, hai người thợ.</h1><p>Gọn là tiệm mẫu bắt đầu năm 2020. Bàn cắt xuất phát từ một câu hỏi thường nghe sau buổi cắt: sáng mai làm sao đưa tóc về đúng dáng?</p></header>
<section class="barber-team">${img('doi-tho','Hai người thợ hư cấu đứng cạnh ghế cắt')}<div><h2>Đội thợ hư cấu</h2><p><strong>Quân Kéo</strong> phụ trách các kiểu giữ trọng lượng bằng kéo và đường rẽ mềm. Khi tư vấn, Quân xem khách hay vuốt tóc sang phía nào trước.</p><p><strong>Vũ Mai</strong> tập trung vào chuyển độ dài ở mai, đường gáy và dáng râu. Vũ dùng gương cạnh để khách xem viền trong tư thế ngồi thẳng.</p></div></section>
<section class="window-strip"><div><h2>Trong ghế cắt</h2></div><ol><li>Xem tóc ở trạng thái khô và hỏi nhịp sinh hoạt.</li><li>Chốt phần ngắn nhất, vị trí đường viền và cách sấy.</li><li>Cho khách xem lại phía bên, sau và thử đưa tóc về nếp.</li></ol></section>
<section class="bench"><h2>Câu hỏi trước khi đến</h2>
${faq('Tóc dài có cắt ngắn trong một lượt được không?','Có thể tùy độ dài và kiểu muốn giữ. Ghi chiều dài hiện tại trong bản nháp để dự trù thêm thời gian tư vấn và tách lớp.')}
${faq('Có cần gội hoặc bôi sáp trước không?','Đến với tóc khô ở trạng thái thường ngày sẽ giúp thợ thấy rõ xoáy. Nếu dùng sáp thường xuyên, cho thợ biết loại và lượng bạn dùng.')}
${faq('Muốn chỉnh viền giữa hai lần cắt thì đặt gì?','Chọn Gọn viền nếu chỉ cần quanh tai và gáy. Nếu muốn đổi cả dáng tóc trên, chọn một mục trong nhóm Cắt tóc.')}
</section>
`);
barber('lien-he.html','Chuẩn bị lịch',`
<div class="booking-layout"><section><h1>Chuẩn bị lịch cắt.</h1><p>Chọn dịch vụ, ngày giờ mong muốn và thợ nếu đã có lựa chọn. Bản nháp giúp bạn lưu lại giá minh họa và thời lượng trên thiết bị.</p><h2>Trước khi đến</h2><ul><li>Chuẩn bị ảnh nghiêng nếu muốn thay đường mai hoặc gáy.</li><li>Cho biết bạn đội mũ bảo hiểm thường xuyên hay sấy tóc mỗi sáng.</li><li>Chọn giờ bắt đầu đủ để kết thúc trước 19:30.</li></ul><p>Tiệm mẫu mở 10:00–19:30, thứ Ba đến Chủ nhật. Địa điểm minh họa Hẻm Thước Mộc, khu Bàn Gương. Hộp thư ghecat@gon.example.</p>
${faq('Giờ được chọn có phải giờ trống của tiệm không?','Các giờ là khung minh họa để chuẩn bị yêu cầu. Sau khi lưu, trạng thái của bản nháp vẫn là Chưa gửi.')}</section>
<form class="ticket" id="barber-booking" data-contact-channel="none"><label for="service">Dịch vụ</label><select required id="service"><option value="">Chọn dịch vụ</option>${barberGroups.map(g=>`<optgroup label="${g}">${barberServices.filter(s=>s.group===g).map(s=>`<option value="${s.id}" data-minutes="${s.minutes}" data-price="${s.price}">${s.name} · ${s.minutes} phút · ${money(s.price)}</option>`).join('')}</optgroup>`).join('')}</select>
<div class="slot"><div><label for="visit-day">Ngày mong muốn</label><input type="date" id="visit-day" required></div><div><label for="visit-time">Giờ mong muốn</label><select id="visit-time" required><option value="">Chọn giờ</option><option>10:00</option><option>11:30</option><option>14:00</option><option>16:00</option><option>17:45</option><option>19:00</option></select></div></div>
<label for="barber-choice">Thợ mong muốn</label><select id="barber-choice"><option>Bất kỳ</option><option>Quân Kéo</option><option>Vũ Mai</option></select><label for="visit-name">Tên khách</label><input id="visit-name" autocomplete="name" required maxlength="80">
<label for="hair-note">Ghi chú về tóc</label><textarea id="hair-note" rows="3" maxlength="600"></textarea><label for="service-summary">Dịch vụ, thời lượng và giá mẫu</label><input id="service-summary" readonly>
<button type="submit" class="action">Lưu lịch mong muốn</button></form></div>
`);

const siteRoot = path.join(root,'sites');
const catalog = Object.fromEntries(fs.readdirSync(siteRoot,{withFileTypes:true})
  .filter(entry=>entry.isDirectory())
  .map(entry=>[entry.name,fs.readdirSync(path.join(siteRoot,entry.name)).filter(file=>file.endsWith('.html')).sort()]));
fs.writeFileSync(path.join(root,'content-writer','catalog.js'),'window.WRITER_PAGES = '+JSON.stringify(catalog,null,2)+';\n');
console.log('Built Mạch Phố, Nếp Công Trình and Gọn static pages.');
