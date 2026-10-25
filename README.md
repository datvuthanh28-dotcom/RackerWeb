# THEME LIBRARY — KHO GIAO DIỆN WEBSITE MẪU & LOCAL DEMO SITES

Website thư viện giao diện website chuyên nghiệp, chạy 100% trên nền tảng Front-end thuần (HTML5, CSS3, JavaScript), tương thích xuất sắc với **GitHub Pages** mà không cần backend, server riêng hoặc database.

---

## 🌟 TÍNH NĂNG NỔI BẬT

1. **Toàn bộ Theme có Website Local Độc Lập:**
   - 100% card theme trong kho khi nhấn **"XEM WEBSITE"** sẽ mở website độc lập nội bộ tại `sites/<theme-id>/index.html`.
   - **Tuyệt đối không trỏ khách hàng đến URL Sikido ngoài.**
   - Mỗi website con gồm đầy đủ 4 trang: Trang chủ (`index.html`), Sản phẩm/Dịch vụ (`san-pham.html`), Giới thiệu (`gioi-thieu.html`), Liên hệ (`lien-he.html`).
   - Có thanh điều hướng `Quay lại Thư Viện Theme Library` trên đầu trang để quay về danh mục bất kỳ lúc nào.
2. **Bộ lọc danh mục đa ngành:**
   - 22+ ngành nghề thực tế (Thời trang, Mỹ phẩm, Công nghệ, Bất động sản, Nội thất, Du lịch, Y tế, Ẩm thực,...).
   - Hiển thị số lượng theme thực tế trong từng nhóm ngành.
   - Lọc dữ liệu tức thì không cần tải lại trang.
3. **Tìm kiếm thông minh (Live Search):**
   - Tìm kiếm kết hợp theo tên, mã theme, ngành nghề hoặc từ khóa mô tả.
   - Tích hợp debounce tối ưu hiệu năng.
4. **Sắp xếp linh hoạt:**
   - Tên giao diện A → Z & Z → A.
   - Giá trọn gói thấp đến cao & cao đến thấp.
5. **Tích hợp Zalo tư vấn 24/7:**
   - Hotline & Zalo: **0971183939**
   - Nút Zalo cố định góc dưới bên phải màn hình kèm hiệu ứng sóng lan tỏa (pulse wave).
   - Nút Zalo trên header, từng card sản phẩm và trong tất cả 113 website con.
6. **Ảnh Preview AI sắc nét:**
   - Các theme tiêu biểu được thiết kế ảnh preview riêng biệt bằng AI Image Generation (16:9, Flat 2D Web UI Full-bleed).
   - Tự động fallback ảnh nội bộ để 100% card hiển thị đẹp mắt, không bao giờ bị vỡ ảnh.

---

## 📁 CẤU TRÚC THƯ MỤC

```text
├── index.html                           # Giao diện chính của thư viện
├── README.md                            # Tài liệu hướng dẫn sử dụng & triển khai
├── css/
│   ├── style.css                        # Hệ thống thiết kế & Style chính
│   └── responsive.css                   # Định dạng responsive (Desktop, Tablet, Mobile)
├── js/
│   ├── app.js                           # Khởi tạo và quản lý sự kiện người dùng
│   ├── filters.js                       # Logic lọc, tìm kiếm, sắp xếp và phân trang
│   ├── themes.js                        # Render card giao diện, modal xem nhanh (dùng localUrl)
│   └── themes-data.js                   # Dữ liệu tĩnh nhúng (chạy offline / không cần CORS)
├── data/
│   ├── themes.json                      # Dữ liệu kiểm kê đầy đủ 113 theme có localUrl
│   └── categories.json                  # Danh mục ngành nghề
├── assets/
│   ├── logo/                            # Logo thư viện
│   ├── icons/                           # Biểu tượng vector
│   └── previews/                        # Ảnh preview riêng biệt cho từng theme
├── sites/                               # HỆ THỐNG 113 WEBSITE ĐỘC LẬP
│   ├── <theme-id>/
│   │   ├── index.html                   # Trang chủ website con
│   │   ├── san-pham.html                # Trang danh mục sản phẩm/dịch vụ
│   │   ├── gioi-thieu.html              # Trang giới thiệu
│   │   ├── lien-he.html                 # Trang liên hệ tích hợp form
│   │   ├── css/style.css                # Style riêng biệt theo ngành nghề
│   │   ├── js/app.js                    # Tương tác giỏ hàng, đặt hàng, form
│   │   └── assets/                      # Ảnh banner preview nội bộ
├── tools/
│   ├── theme-discovery/                 # Bộ công cụ quét danh mục & sinh local sites
│   └── preview-generation/              # Bộ công cụ đồng bộ và quản lý ảnh AI
└── reports/
    ├── local-sites-report.md            # Báo cáo nghiệm thu 113 website độc lập
    ├── theme-inventory.csv              # Bảng kiểm kê 113 theme
    ├── page-inventory.csv               # Bảng khảo sát các trang con của demo
    ├── assets-manifest.csv              # Bảng kê khai tài nguyên ảnh
    ├── access-report.md                 # Báo cáo truy cập và khảo sát bản quyền
    └── implementation-report.md         # Báo cáo nghiệm thu dự án
```

---

## 🚀 HƯỚNG DẪN TRIỂN KHAI LÊN GITHUB PAGES

Website được thiết kế chuyên biệt để hoạt động trơn tru trên **GitHub Pages** bằng đường dẫn tương đối, không cần cấu hình build phức tạp:

### Bước 1: Khởi tạo và đẩy mã nguồn lên GitHub
Mở terminal trong thư mục dự án và chạy:
```bash
git init
git add .
git commit -m "feat: complete theme library with 113 local sites for GitHub Pages"
git branch -M main
git remote add origin https://github.com/<tai-khoan-cua-ban>/theme-library.git
git push -u origin main
```

### Bước 2: Kích hoạt GitHub Pages
1. Truy cập vào kho chứa (repository) của bạn trên GitHub.
2. Nhấn vào tab **Settings** (ở thanh menu phía trên).
3. Ở thanh bên trái, chọn **Pages** (dưới mục *Code and automation*).
4. Tại phần **Build and deployment**:
   - Mục **Source**: Chọn **Deploy from a branch**.
   - Mục **Branch**: Chọn `main`, thư mục giữ nguyên `/ (root)`.
5. Nhấn nút **Save**.

### Bước 3: Truy cập website
- Sau 1 đến 2 phút, GitHub sẽ hiển thị đường dẫn website của bạn tại thông báo:
  `Your site is live at https://<tai-khoan-cua-ban>.github.io/theme-library/`
- Mở liên kết để trải nghiệm: Mọi thao tác nhấn vào card theme sẽ mở website độc lập tại `sites/<theme-id>/index.html` trực tiếp trên GitHub Pages.

---

## 💻 CHẠY TRỰC TIẾP TRÊN MÁY TÍNH (LOCAL)

Bạn có thể mở trực tiếp file `index.html` bằng trình duyệt (nhờ cơ chế fallback dữ liệu `themes-data.js`), hoặc khởi chạy local server:
```bash
# Sử dụng Python có sẵn:
python -m http.server 8080

# Hoặc sử dụng Node npx serve:
npx serve .
```
Truy cập: `http://localhost:8080`

---

## 📞 HỖ TRỢ VÀ TƯ VẤN THIẾT KẾ WEBSITE

- **Đơn vị vận hành:** Theme Library Hub
- **Hotline / Zalo tư vấn:** **0971183939**
- **Liên kết Zalo trực tiếp:** [https://zalo.me/0971183939](https://zalo.me/0971183939)
- **Hỗ trợ:** Tư vấn chọn mẫu, tùy biến giao diện doanh nghiệp, tích hợp thanh toán và tối ưu chuẩn SEO.
