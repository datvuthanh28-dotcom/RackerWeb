# BÁO CÁO TOÀN DIỆN HIỆN TRẠNG HỆ THỐNG DVWEB & THƯ VIỆN DEMO
## Comprehensive Architectural Audit & Root-Cause Investigation

**Chuyên viên thực hiện:** Principal UI/UX Designer, Creative Director & Senior Frontend Architect  
**Dự án:** DVWeb — Frontend Website Template Marketplace & Demo Library  
**Phạm vi:** 113 Website độc lập tại `sites/`, Bộ tạo tự động `tools/theme-discovery/`, Dữ liệu `data/themes.json`, và Marketplace Portal `index.html`.  
**Ngày lập báo cáo:** 15/10/2026  

---

## 1. Tóm tắt kết quả kiểm toán (Executive Summary)

Đợt kiểm tra trực tiếp mã nguồn trên toàn bộ workspace DVWeb đã xác nhận chính xác các phát hiện sơ bộ trước đây với các số liệu thực tế tuyệt đối:

- **Tổng số website độc lập trong kho:** 113 website (`sites/` directory).
- **Số website tùy biến hoàn chỉnh (Customized-Rich):** **3** / 113 (chiếm 2.65%):
  1. `auto-garage-demo-40` (`#MS40`) — Giao diện Showroom Ô tô hạng sang với 6 trang con, giỏ hàng lưu `localStorage`, bộ lọc xe, thông số kỹ thuật, 11 ảnh chuyên biệt.
  2. `cua-hang-hoa-demo-64` (`#MS64`) — Giao diện Cửa hàng hoa nghệ thuật Flora Art với 4 trang, dữ liệu sản phẩm chi tiết, form đặt hàng và modal.
  3. `fashion-demo-01` (`#MS01`) — Giao diện Thời trang Atelier đương đại với 24 sản phẩm, danh mục phong cách và layout riêng biệt.
- **Số website chia sẻ cấu trúc mẫu generic 4 card:** **110** / 113 (chiếm 97.35%).
- **Số website chia sẻ mã JavaScript rỗng/identical:** **110** / 113 chia sẻ chung file `js/app.js` 23 dòng (chỉ hiển thị `alert()` giỏ hàng và reset form liên hệ).
- **Số website bị lỗi giao diện rỗng (Broken / Empty Shell):** **46** website (chính xác 46 website với tiêu đề chính `<h1></h1>` rỗng, tiêu đề phụ `<h2></h2>` rỗng, thanh điều hướng rỗng chữ `<a></a>`, và lưới hiển thị `<div class="grid">` hoàn toàn không có sản phẩm nào).
- **Số website bị thiếu ảnh xem trước cục bộ (Missing Preview Assets):** **13** website đang phải sử dụng ảnh dự phòng fallback.
- **Nguy cơ ghi đè mã nguồn tùy biến (Destructive Overwrite Vulnerability):** Cực kỳ nghiêm trọng. Các script tự động `build_sites.ps1` và `generate_local_sites.ps1` thực hiện ghi đè toàn bộ thư mục `sites/<id>/` mà không hề có cơ chế bảo vệ (lockfile / exclude list), có thể xóa sổ toàn bộ công sức của 3 site đã tùy biến bất cứ lúc nào.

---

## 2. Giải phẫu kỹ thuật: Tại sao 110/113 website lại giống hệt nhau?

### 2.1. Cơ chế template cứng nhắc trong `tools/theme-discovery/template_index.html`

Khi kiểm tra [template_index.html](file:///d:/dvweb/tools/theme-discovery/template_index.html), toàn bộ cấu trúc giao diện trang chủ được gói gọn trong đúng 98 dòng HTML tĩnh với đúng một kịch bản duy nhất cho mọi ngành nghề:

```html
<!-- Dòng 17-36: Header đóng khung -->
<header>
  <div class="header-wrap">
    <div class="logo">{{THEME_NAME}}<span>{{THEME_CODE}}</span></div>
    <nav>
      <ul>
        <li><a href="index.html" class="active">Trang Chủ</a></li>
        <li><a href="san-pham.html">{{ITEM_TYPE}}</a></li>
        <li><a href="gioi-thieu.html">Giới Thiệu</a></li>
        <li><a href="lien-he.html">Liên Hệ</a></li>
      </ul>
    </nav>
    <div class="header-actions">
      <button type="button" class="cart-trigger">Giỏ Hàng (<span id="cart-count">0</span>)</button>
      <a href="https://zalo.me/0971183939" class="btn-zalo">Zalo: 0971183939</a>
    </div>
  </div>
</header>

<!-- Dòng 39-63: Khối Hero 2 cột và Lưới 4 Card cố định -->
<main>
  <section class="hero">
    <div class="hero-content">
      <h1>{{TAGLINE}}</h1>
      <p>Trải nghiệm dịch vụ chuyên nghiệp, chuẩn mực thiết kế tối ưu và công nghệ tiên tiến nhất từ {{THEME_NAME}}.</p>
      ...
    </div>
    <div class="hero-image"><img src="{{BANNER_IMG}}"></div>
  </section>

  <section class="section">
    <div class="section-title">
      <h2>{{CATALOG_TITLE}}</h2>
      <p>Lựa chọn tiêu biểu được khách hàng tin tưởng và đánh giá cao nhất</p>
    </div>
    <div class="grid">
      {{PRODUCT_CARDS}}
    </div>
  </section>
</main>
```

**Hệ quả kiến trúc:**
1. **Ép buộc hành vi E-commerce vào mọi lĩnh vực:** Dù là Trường mầm non (`#MS112`), Dịch vụ bảo vệ (`#MS76`), Gia công cơ khí (`#MS38`), hay Thẩm mỹ viện (`#MS106`), tất cả đều bị ép hiển thị nút `"Giỏ Hàng (0)"` trên header và các nút `"Thêm Giỏ Hàng"` trên từng card! Khách hàng tìm kiếm dịch vụ bảo vệ hoặc gia công cơ khí khuôn mẫu không bao giờ bấm "Thêm vào giỏ hàng" như mua một chiếc áo sơ mi.
2. **Khẩu hiệu sao chép máy móc:** Đoạn văn bản giới thiệu `"Trải nghiệm dịch vụ chuyên nghiệp, chuẩn mực thiết kế tối ưu và công nghệ tiên tiến nhất từ {{THEME_NAME}}."` xuất hiện nguyên văn tại 110 website, làm mất hoàn toàn tính chân thực và cá tính thương hiệu.
3. **Cấu trúc thị giác đơn điệu:** Tỷ lệ layout 1.1fr / 0.9fr của khối Hero và lưới 4 cột của sản phẩm xuất hiện lặp lại 110 lần, khiến người duyệt có cảm giác như đang xem một trang duy nhất được thay chữ và đổi màu viền.

---

### 2.2. CSS Template đơn điệu trong `tools/theme-discovery/template_style.css`

Tập tin [template_style.css](file:///d:/dvweb/tools/theme-discovery/template_style.css) (chỉ dài 91 dòng) chỉ cho phép thay thế đúng 5 biến CSS qua cơ chế String Replace:
`--primary: {{PRIMARY}};`
`--secondary: {{SECONDARY}};`
`--bg: {{BG}};`
`--surface: {{SURFACE}};`
`--text: {{TEXT}};`

Hệ thống token typography hoàn toàn không biến đổi:
- 100% website dùng chung font chữ `'Be Vietnam Pro', 'Inter', sans-serif`.
- Bán kính góc bo (`--radius`) cố định 12px cho tất cả các thương hiệu — từ hãng luật cần nét sắc cạnh uy nghiêm, tới thẩm mỹ viện cần sự mềm mại uyển chuyển.
- Khoảng cách, đổ bóng (`box-shadow: 0 10px 25px rgba(0,0,0,0.1)`), cấu trúc hover card (`transform: translateY(-4px)`) giống nhau 100%.

---

### 2.3. Tương tác giả lập gây hiểu lầm trong `tools/theme-discovery/template_app.js`

Toàn bộ logic tương tác của 110 website nằm gọn trong file [template_app.js](file:///d:/dvweb/tools/theme-discovery/template_app.js) dài đúng 23 dòng:

```javascript
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
```

**Các vấn đề nghiêm trọng về trải nghiệm người dùng & tính chính trực:**
1. **Lệnh `alert()` trình duyệt chặn luồng tương tác (blocking modal):** Mỗi lần người dùng click "Thêm Giỏ Hàng", trình duyệt bật popup cảnh báo hệ thống gây khó chịu và tạo cảm giác nghiệp dư, lỗi thời.
2. **Không có giỏ hàng thật:** Nút giỏ hàng trên header hoàn toàn không mở ra trang giỏ hàng hay drawer xem sản phẩm; số lượng tăng lên nhưng biến mất ngay khi chuyển sang trang khác vì không lưu trữ vào `localStorage`.
3. **Form liên hệ cam kết ảo:** Khi người dùng gửi form, hệ thống thông báo *"Chuyên viên tư vấn sẽ liên hệ lại..."* nhưng thực chất dữ liệu form chỉ bị `e.preventDefault()` và `contactForm.reset()`, hoàn toàn không được gửi đi bất kỳ đâu (kể cả lưu trữ local hay kích hoạt giao thức Zalo/Mailto).

---

## 3. Nguyên nhân gốc rễ của 46 website bị lỗi rỗng (The 46 Empty Shell Demos)

Quá trình điều tra sâu vào cơ chế thực thi của [build_sites.ps1](file:///d:/dvweb/tools/theme-discovery/build_sites.ps1) và [industry_configs.json](file:///d:/dvweb/tools/theme-discovery/industry_configs.json) đã phát hiện ra lỗ hổng logic:

### 3.1. Danh mục ngành nghề bị thiếu hụt nghiêm trọng

Trong [industry_configs.json](file:///d:/dvweb/tools/theme-discovery/industry_configs.json), chỉ có cấu hình cho **12 ngành nghề**:
1. Thời trang
2. Mỹ phẩm
3. Công nghệ
4. Bất động sản
5. Nội thất
6. Ẩm thực - Nhà hàng
7. Spa - Làm đẹp
8. Ô tô - Xe máy
9. Du lịch
10. Y tế
11. Thú cưng
12. Khác (với dấu sắc: `"Khác"`)

Tuy nhiên, trong dữ liệu thực tế tại [data/themes.json](file:///d:/dvweb/data/themes.json), tồn tại đến **23 ngành nghề khác nhau**:
- `"Doanh nghiệp"` (9 themes) — hoàn toàn không có trong config!
- `"Thực phẩm"` (11 themes) — hoàn toàn không có trong config!
- `"Khac"` (9 themes, viết không dấu) — hoàn toàn không khớp với key `"Khác"` có dấu!
- `"Dịch vụ"` (4 themes) — không có trong config!
- `"Giáo dục"` (4 themes) — không có trong config!
- `"Tổ chức sự kiện"` (4 themes) — không có trong config!
- `"Thể thao"` (2 themes) — không có trong config!
- `"Gia dụng"` (2 themes) — không có trong config!
- `"Studio"` (1 theme) — không có trong config!
- `"Vận tải"` (1 theme) — không có trong config!
- `"Quà tặng"` (1 theme) — không có trong config!

Tổng cộng: 9 + 11 + 9 + 4 + 4 + 4 + 2 + 2 + 1 + 1 + 1 = **48 themes** rơi vào trường hợp không khớp danh mục. Trừ đi 2 theme đã được làm thủ công (`#MS40` và `#MS64`), còn lại **chính xác 46 theme** bị ảnh hưởng!

### 3.2. Lỗi mã hóa chuỗi khiến cơ chế Fallback bị tê liệt

Trong [build_sites.ps1](file:///d:/dvweb/tools/theme-discovery/build_sites.ps1), tác giả đã viết đoạn mã fallback:
```powershell
# Select industry config or default
$c = $configs."$category"
if ($null -eq $c) {
    $c = $configs."Khác"
}
```

Tuy nhiên:
1. Khi Windows PowerShell 5.1 đọc file `industry_configs.json` và biên dịch script, ký tự tiếng Việt có dấu `"Khác"` bị lệch encoding (ANSI vs UTF-8 không BOM), dẫn đến việc truy vấn `$configs."Khác"` trả về `$null`.
2. Do `$c` là `$null`, các thuộc tính `$c.tagline`, `$c.catalogTitle`, `$c.itemType`, `$c.items` đều là chuỗi rỗng hoặc rỗng mảng.
3. Vòng lặp `foreach ($item in $c.items)` không sinh ra bất kỳ thẻ card nào (`$productCards = ""`).
4. Khi hàm replace thay thế `{{TAGLINE}}`, `{{CATALOG_TITLE}}`, `{{ITEM_TYPE}}`, `{{PRODUCT_CARDS}}`:
   - `<h1>{{TAGLINE}}</h1>` biến thành `<h1></h1>` (RỖNG TIÊU ĐỀ CHÍNH).
   - `<h2>{{CATALOG_TITLE}}</h2>` biến thành `<h2></h2>` (RỖNG TIÊU ĐỀ DANH MỤC).
   - `<li><a href="san-pham.html">{{ITEM_TYPE}}</a></li>` biến thành `<li><a href="san-pham.html"></a></li>` (LINK MENU RỖNG CHỮ).
   - `<div class="grid">{{PRODUCT_CARDS}}</div>` biến thành `<div class="grid">\n\n</div>` (LƯỚI TRẮNG TINH).

### 3.3. Danh sách 46 Website Demo rỗng nội dung cần cấp cứu (P0)

| STT | Mã Theme | Theme ID | Tên Website Catalog | Ngành Nghề Gốc | Hiện Trạng Thất Bại |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 1 | **MS84** | `blog-tin-tuc-demo-84` | Blog tin tức - demo 84 | Doanh nghiệp | H1 rỗng, Grid 0 card, Menu rỗng |
| 2 | **MS17** | `building-demo-17` | Building demo 17 | Khac | H1 rỗng, Grid 0 card, Menu rỗng |
| 3 | **MS70** | `cong-ty-san-xuat-bao-bi-demo-70` | Công ty sản xuất bao bì - demo 70 | Doanh nghiệp | H1 rỗng, Grid 0 card, Menu rỗng |
| 4 | **MS37** | `cua-hang-banh-ngot-demo-37` | Cửa hàng bánh ngọt - demo 37 | Thực phẩm | H1 rỗng, Grid 0 card, Menu rỗng |
| 5 | **MS58** | `cua-hang-hoa-demo-58` | Cửa hàng hoa - demo 58 | Tổ chức sự kiện | H1 rỗng, Grid 0 card, Menu rỗng |
| 6 | **MS85** | `cua-hang-hoa-tuoi-demo-85` | Cửa hàng hoa tươi - demo 85 | Dịch vụ | H1 rỗng, Grid 0 card, Menu rỗng |
| 7 | **MS76** | `dich-vu-bao-ve-demo-76` | Dịch vụ bảo vệ - demo 76 | Dịch vụ | H1 rỗng, Grid 0 card, Menu rỗng |
| 8 | **MS38** | `dich-vu-gia-cong-co-khi-demo-38` | Dịch vụ gia công - cơ khí - demo 38 | Khac | H1 rỗng, Grid 0 card, Menu rỗng |
| 9 | **MS44** | `dich-vu-in-an-va-thiet-ke-demo-44` | Dịch vụ in ấn và thiết kế - demo 44 | Khac | H1 rỗng, Grid 0 card, Menu rỗng |
| 10 | **MS47** | `dich-vu-sua-chua-co-nhiet-dien-lanh-demo-47` | Dịch vụ sửa chữa Cơ Nhiệt - Điện Lạnh | Khac | H1 rỗng, Grid 0 card, Menu rỗng |
| 11 | **MS87** | `dich-vu-thiep-cuoi-demo-87` | Dịch vụ thiệp cưới - demo 87 | Dịch vụ | H1 rỗng, Grid 0 card, Menu rỗng |
| 12 | **MS66** | `duoc-pham-viet-nam-demo-66` | Dược phẩm Việt Nam - demo 66 | Thực phẩm | H1 rỗng, Grid 0 card, Menu rỗng |
| 13 | **MS63** | `fashion-demo-63` | Fashion demo 63 | Studio | H1 rỗng, Grid 0 card, Menu rỗng |
| 14 | **MS14** | `flower-demo-14` | Flower demo 14 | Tổ chức sự kiện | H1 rỗng, Grid 0 card, Menu rỗng |
| 15 | **MS07** | `food-demo-07` | Food demo 07 | Khac | H1 rỗng, Grid 0 card, Menu rỗng |
| 16 | **MS03** | `furniture-demo-03` | Furniture demo 03 | Khac | H1 rỗng, Grid 0 card, Menu rỗng |
| 17 | **MS10** | `furniture-demo-10` | Furniture demo 10 | Khac | H1 rỗng, Grid 0 card, Menu rỗng |
| 18 | **MS25** | `furniture-demo-25` | Furniture demo 25 | Gia dụng | H1 rỗng, Grid 0 card, Menu rỗng |
| 19 | **MS112** | `giao-duc-mam-non-demo-112` | Giáo dục mầm non - demo 112 | Giáo dục | H1 rỗng, Grid 0 card, Menu rỗng |
| 20 | **MS93** | `kien-truc-xay-dung-demo-93` | Kiến trúc xây dựng - demo 93 | Doanh nghiệp | H1 rỗng, Grid 0 card, Menu rỗng |
| 21 | **MS48** | `landing-page-bat-dong-san-demo-48` | Landing Page - Bất động sản - demo 48 | Doanh nghiệp | H1 rỗng, Grid 0 card, Menu rỗng |
| 22 | **MS67** | `mam-non-tri-tam-demo-67` | Mầm non Trí Tâm - demo 67 | Giáo dục | H1 rỗng, Grid 0 card, Menu rỗng |
| 23 | **MS08** | `media-demo-08` | Media demo 08 | Doanh nghiệp | H1 rỗng, Grid 0 card, Menu rỗng |
| 24 | **MS43** | `son-nuoc-demo-43` | Sơn nước - demo 43 | Khac | H1 rỗng, Grid 0 card, Menu rỗng |
| 25 | **MS71** | `the-gioi-ruou-ngoai-demo-71` | Thế giới rượu ngoại - demo 71 | Thực phẩm | H1 rỗng, Grid 0 card, Menu rỗng |
| 26 | **MS30** | `thiep-cuoi-demo-30` | Thiệp cưới demo 30 | Tổ chức sự kiện | H1 rỗng, Grid 0 card, Menu rỗng |
| 27 | **MS41** | `tra-sua-demo-41` | Trà sữa - demo 41 | Thực phẩm | H1 rỗng, Grid 0 card, Menu rỗng |
| 28 | **MS86** | `trung-tam-can-thiep-som-demo-86` | Trung tâm can thiệp sớm - demo 86 | Doanh nghiệp | H1 rỗng, Grid 0 card, Menu rỗng |
| 29 | **MS74** | `trung-tam-day-boi-demo-74` | Trung tâm dạy bơi - demo 74 | Giáo dục | H1 rỗng, Grid 0 card, Menu rỗng |
| 30 | **MS88** | `trung-tam-day-lai-xe-demo-88` | Trung tâm dạy lái xe - demo 88 | Giáo dục | H1 rỗng, Grid 0 card, Menu rỗng |
| 31 | **MS60** | `trung-tam-day-yoga-demo-60` | Trung tâm dạy yoga - demo 60 | Dịch vụ | H1 rỗng, Grid 0 card, Menu rỗng |
| 32 | **MS46** | `trung-tam-ngoai-ngu-demo-46` | Trung tâm Ngoại ngữ - demo 46 | Doanh nghiệp | H1 rỗng, Grid 0 card, Menu rỗng |
| 33 | **MS82** | `trung-tam-the-duc-the-hinh-demo-82` | Trung tâm thể dục thể hình - demo 82 | Thể thao | H1 rỗng, Grid 0 card, Menu rỗng |
| 34 | **MS92** | `van-tai-logistics` | Vận tải logistics - demo 92 | Doanh nghiệp | H1 rỗng, Grid 0 card, Menu rỗng |
| 35 | **MS42** | `van-tai-logistics-demo-42` | Vận tải - Logistics - demo 42 | Vận tải | H1 rỗng, Grid 0 card, Menu rỗng |
| 36 | **MS110** | `website-ban-banh-trung-thu-demo-110`| Website bán bánh trung thu - demo 110 | Thực phẩm | H1 rỗng, Grid 0 card, Menu rỗng |
| 37 | **MS107** | `website-ban-dac-san-demo-107` | Website bán đặc sản - demo 107 | Thực phẩm | H1 rỗng, Grid 0 card, Menu rỗng |
| 38 | **MS53** | `website-ban-do-an-nhanh-demo-53` | Website bán đồ ăn nhanh - demo 53 | Thực phẩm | H1 rỗng, Grid 0 card, Menu rỗng |
| 39 | **MS117** | `website-ban-hoa-tuoi-demo-117` | Website bán hoa tươi - demo 117 | Quà tặng | H1 rỗng, Grid 0 card, Menu rỗng |
| 40 | **MS109** | `website-gio-cha-demo-109` | Website giò chả - demo 109 | Thực phẩm | H1 rỗng, Grid 0 card, Menu rỗng |
| 41 | **MS57** | `website-shop-tra-thao-moc-demo-57` | Website shop trà thảo mộc - demo 57 | Thực phẩm | H1 rỗng, Grid 0 card, Menu rỗng |
| 42 | **MS116** | `website-thiet-ke-xay-dung-san-vuon-demo-116`| Thiết kế xây dựng sân vườn - demo 116| Doanh nghiệp | H1 rỗng, Grid 0 card, Menu rỗng |
| 43 | **MS54** | `website-tiem-cafe-tinh-demo-54` | Website tiệm cafe Tình - demo 54 | Thực phẩm | H1 rỗng, Grid 0 card, Menu rỗng |
| 44 | **MS23** | `xay-dung-driller-demo-23` | Xây dựng Driller demo 23 | Gia dụng | H1 rỗng, Grid 0 card, Menu rỗng |
| 45 | **MS21** | `xe-dap-the-thao-electric-bicycle-21` | Xe Đạp - Thể Thao Electric Bicycle 21| Thể thao | H1 rỗng, Grid 0 card, Menu rỗng |
| 46 | **MS69** | `yen-sao-nguyen-chat-demo-69` | Yến sào nguyên chất - demo 69 | Thực phẩm | H1 rỗng, Grid 0 card, Menu rỗng |

---

## 4. Kiểm toán nguy cơ ghi đè mã nguồn (Generator Overwrite Vulnerability)

### 4.1. Nguy cơ từ `build_sites.ps1` và `generate_local_sites.ps1`
Khi kiểm tra dòng 29-120 của [build_sites.ps1](file:///d:/dvweb/tools/theme-discovery/build_sites.ps1):
```powershell
foreach ($t in $themes) {
    ...
    [System.IO.File]::WriteAllText("$cssPath\style.css", $css, [System.Text.Encoding]::UTF8)
    [System.IO.File]::WriteAllText("$jsPath\app.js", $tplApp, [System.Text.Encoding]::UTF8)
    [System.IO.File]::WriteAllText("$sitePath\index.html", $idxContent, [System.Text.Encoding]::UTF8)
    [System.IO.File]::WriteAllText("$sitePath\san-pham.html", $spContent, [System.Text.Encoding]::UTF8)
    [System.IO.File]::WriteAllText("$sitePath\gioi-thieu.html", $gtContent, [System.Text.Encoding]::UTF8)
    [System.IO.File]::WriteAllText("$sitePath\lien-he.html", $lhContent, [System.Text.Encoding]::UTF8)
}
```
Script này **không kiểm tra** xem thư mục `sites/<id>` đã có file tùy biến hay chưa. Bất kỳ lập trình viên nào chạy lại lệnh `powershell -File tools/theme-discovery/build_sites.ps1` sẽ ngay lập tức **xóa sạch** toàn bộ 24 file công phu của `auto-garage-demo-40`, 23 file của `cua-hang-hoa-demo-64`, và 18 file của `fashion-demo-01`, đưa chúng về template 4 card thô sơ!

### 4.2. Giải pháp khắc phục kiến trúc bắt buộc:
1. Tạo danh sách khóa bảo vệ `data/protected_sites.json` hoặc thuộc tính `"designStatus": "custom-verified"` trong `data/themes.json`.
2. Sửa đổi generator script để kiểm tra trạng thái bảo vệ trước khi ghi file (`if ($t.designStatus -eq 'custom-verified') { continue }`).
3. Tách biệt bộ tạo dữ liệu danh mục (catalog generator) khỏi bộ sinh mã nguồn giao diện (site generator).

---

## 5. Kiểm toán tính chính trực & Đạo đức dữ liệu Demo (Content & Demo Integrity)

### 5.1. Sai lệch giữa Preview ảnh và Website thực tế
- Có **11 ảnh preview** trong `assets/previews/` được tạo bằng AI (`preview_fashion_114`, `preview_realestate_96`, `preview_bakery_37`...). Những hình ảnh này thể hiện giao diện đa tầng, typography tinh xảo, bố cục tạp chí đẳng cấp.
- Nhưng khi người dùng nhấn "XEM WEBSITE" trên marketplace, họ được chuyển đến một trang trắng rỗng (như `#MS37`) hoặc trang generic 4 sản phẩm sơ sài. Đây là điểm trừ lớn về mặt uy tín thương mại.

### 5.2. Sự trùng lặp dữ liệu giả tạo (Mock Data Repetition)
- Trong 64 website có hiển thị sản phẩm, tất cả các website cùng ngành nhận chính xác 4 sản phẩm giống nhau từng chữ:
  - Tất cả các website thời trang đều bán *"Áo Sơ Mi Lụa Cao Cấp 650.000đ"*, *"Đầm Dạ Hội Dáng Xòe 1.250.000đ"*.
  - Tất cả các website công nghệ đều bán *"Laptop Hiệu Năng Cao Gen 14 24.990.000đ"*.
  - Tất cả các website ẩm thực đều bán *"Set Bánh Mì Men Tự Nhiên Artisan 120.000đ"*.
- Sự trùng lặp này khiến người mua cảm thấy đây chỉ là "một trang web nhân bản" chứ không phải là một kho thư viện 113 giải pháp chuyên nghiệp.

### 5.3. Tiêu chuẩn đạo đức dữ liệu mẫu (Truthful Demo Content Standards)
- **Không ngụy tạo số liệu chứng nhận:** Loại bỏ các counter đếm số liệu như *"15+ Năm Uy Tín"*, *"50.000+ Khách Hàng Hài Lòng"* đối với các demo hư cấu, hoặc ghi rõ `Dữ liệu minh họa hiển thị (Illustrative Demo Data)`.
- **Form liên hệ trung thực:** Form liên hệ khi gửi ở môi trường tĩnh (GitHub Pages) phải thông báo minh bạch: *"Đây là giao diện trải nghiệm mẫu. Để được tư vấn triển khai thực tế, quý khách vui lòng liên hệ trực tiếp hotline Zalo: 0971183939."* kèm theo tùy chọn tự động mở link chat Zalo với nội dung mẫu đã điền.
- **Giỏ hàng lưu trữ LocalStorage thật:** Dù là frontend-only, chức năng giỏ hàng phải cho phép thêm, xóa, tăng giảm số lượng, lưu trữ phiên làm việc và hiển thị trang Checkout/Cart trực quan.

---

## 6. Kiểm toán tính bảo tồn kỹ thuật (Technical Preservation Audit)

| Thành phần | Hiện trạng trong Codebase | Yêu cầu bảo tồn |
| :--- | :--- | :--- |
| **Theme ID & Code** | `id` (slug) và `code` (`MS01` - `MS117`, `SKD-000`) trong `themes.json` | Giữ nguyên 100%, không đổi slug thư mục hoặc mã theme vì ảnh hưởng tới URL và SEO |
| **Marketplace Catalog** | `data/themes.json` và `js/themes-data.js` đồng bộ song song | Mọi cập nhật dữ liệu phải cập nhật cả 2 file để hỗ trợ giao thức file:// và web server |
| **Thanh điều hướng Return Bar** | `.library-return-bar` với liên kết `../../index.html` | Bắt buộc phải hiện diện trên tất cả các trang con của 113 website |
| **Kênh tư vấn Hotline** | Zalo `0971183939` (`https://zalo.me/0971183939`) | Tích hợp nhất quán trên Topbar, Header, Footer và Floating button |
| **Stack công nghệ** | Thuần HTML5, Vanilla CSS, Vanilla JavaScript | Không đưa React, Vue, Vite, Tailwind CLI hay backend Node/PHP vào các site demo |
