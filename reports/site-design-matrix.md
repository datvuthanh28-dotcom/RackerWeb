# MA TRẬN ĐẶC TẢ THIẾT KẾ CHI TIẾT 113 DEMO WEBSITE (DVWEB)
## Comprehensive Master Design Brief & Specification Matrix

**Dự án:** DVWeb — Website Template Marketplace & Demo Ecosystem  
**Tác giả:** Principal UI/UX Designer & Senior Frontend Architect  
**Phạm vi:** 100% (113/113) Website Demo độc lập trong thư mục `sites/`  
**Ngày ban hành:** 15/10/2026  

---

## 1. Phương Pháp Luận & Khung Phân Bổ (Methodology)

Để loại bỏ hoàn toàn tình trạng 110 website rập khuôn một mẫu, Ma trận Thiết kế này áp dụng các nguyên tắc:
1. **Phân loại theo Niche thực tế:** Không dựa đơn thuần vào Category gốc của catalog (vốn có lỗi chính tả và thiếu sót), mà phân tích theo đúng tên thương hiệu và ngành nghề kinh doanh cốt lõi (ví dụ: `#MS112` là Trường Mầm non, `#MS76` là Dịch vụ Bảo vệ, `#MS38` là Xưởng Cơ khí khuôn mẫu).
2. **Gán 1 trong 12 Archetype chuyên biệt:** Mỗi website nhận một Archetype kiến trúc chuẩn xác với luồng hành vi (visitor journey) tương thích.
3. **Phân cấp ưu tiên triển khai (Redesign Priority):**
   - **P0 (Cấp bách - 46 Sites):** Các website đang bị lỗi rỗng tiêu đề `<h1></h1>` và lưới sản phẩm trống trơn.
   - **P1 (Ưu tiên cao - 45 Sites):** Các website thương mại chủ lực thuộc nhóm ngành lớn (Thời trang, Mỹ phẩm, Công nghệ, Bất động sản, Nội thất, Ô tô) đang dùng chung 4 card generic lặp lại.
   - **P2 (Ưu tiên trung bình - 19 Sites):** Các website ngành ngách (Thú cưng, Quà tặng, Gia dụng, Niche services).
   - **P3 (Đã tùy biến - 3 Sites):** `#MS40`, `#MS64`, `#MS01` — bảo vệ mã nguồn, bổ sung kiểm tra giao diện và nâng cấp trải nghiệm vi mô.

---

## 2. Bảng Tổng Hợp Danh Mục 113 Website Demo

| STT | Mã Theme | Theme ID | Ngành Catalog | Niche Cốt Lõi | Archetype Thiết Kế | Mức Ưu Tiên | Hiện Trạng Lỗi Cần Sửa |
| :---: | :---: | :--- | :--- | :--- | :--- | :---: | :--- |
| 1 | **MS40** | `auto-garage-demo-40` | Ô tô - Xe máy | Showroom Siêu Xe & Kỹ Thuật Nâng Cấp Hạng Sang | 12. Automotive & Showroom Experience | **P3** | Đã hoàn thiện mỹ mãn |
| 2 | **MS15** | `baby-demo-15` | Y tế | Nhà Thuốc Đạt Chuẩn GPP & Thiết Bị Y Tế Gia Đình | 07. Healthcare & Clinical Services | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 3 | **SKD-000** | `ban-do-noi-that` | Nội thất | Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian | 04. Architecture & Interior Showcase | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 4 | **MS99** | `ban-my-pham-cham-soc-sac-dep-web-99` | Mỹ phẩm | Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da | 03. Beauty & Cosmetics Atelier | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 5 | **MS84** | `blog-tin-tuc-demo-84` | Doanh nghiệp | Dịch Vụ Chuyên Nghiệp | 06. Corporate & Professional Services | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 6 | **MS17** | `building-demo-17` | Khac | Bất Động Sản Nghỉ Dưỡng & Căn Hộ Đô Thị Sinh Thái | 04. Architecture & Real Estate | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 7 | **MS102** | `cat-toc-phong-cach-nam-nu-web-102` | Spa - Làm đẹp | Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da | 03. Beauty & Cosmetics Atelier | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 8 | **MS78** | `cho-thue-trang-phuc-demo-78` | Thời trang | Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế | 01. Premium E-Commerce Storefront | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 9 | **MS13** | `computer-demo-13` | Công nghệ | Thiết Bị Công Nghệ Cao, Laptop & Phụ Kiện Gaming | 10. Tech Specs & Digital Solutions | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 10 | **MS61** | `cong-ty-dong-phuc-demo-61` | Thời trang | Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế | 01. Premium E-Commerce Storefront | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 11 | **MS90** | `cong-ty-du-lich-demo-90` | Du lịch | Lữ Hành Quốc Tế & Kỳ Nghỉ Trọn Gói Cao Cấp | 05. Tourism & Destination Explorer | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 12 | **MS72** | `cong-ty-du-lich-skdtravel-demo-72` | Du lịch | Lữ Hành Quốc Tế & Kỳ Nghỉ Trọn Gói Cao Cấp | 05. Tourism & Destination Explorer | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 13 | **MS70** | `cong-ty-san-xuat-bao-bi-demo-70` | Doanh nghiệp | Sản Xuất Bao Bì Giấy Sóng & Màng Ghép Công Nghiệp (Tân Phát) | 06. Corporate & Industrial B2B | **Completed (Pilot)** | ĐÃ HOÀN THIỆN XUẤT SẮC (Phase 2 Pilot) |
| 14 | **MS01** | `cosmetic-demo-01` | Mỹ phẩm | Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da | 03. Beauty & Cosmetics Atelier | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 15 | **MS05** | `cosmetic-demo-05` | Mỹ phẩm | Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da | 03. Beauty & Cosmetics Atelier | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 16 | **MS37** | `cua-hang-banh-ngot-demo-37` | Thực phẩm | Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền | 09. Culinary & Gastronomy Experience | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 17 | **MS89** | `cua-hang-di-dong-demo-89` | Công nghệ | Thiết Bị Công Nghệ Cao, Laptop & Phụ Kiện Gaming | 10. Tech Specs & Digital Solutions | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 18 | **MS68** | `cua-hang-do-cong-nghe-demo-68` | Công nghệ | Thiết Bị Công Nghệ Cao, Laptop & Phụ Kiện Gaming | 10. Tech Specs & Digital Solutions | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 19 | **MS58** | `cua-hang-hoa-demo-58` | Tổ chức sự kiện | Studio Chụp Ảnh Nghệ Thuật & Thiết Kế Thiệp Cưới Cao Cấp | 11. Creative Portfolio & Agency | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 20 | **MS64** | `cua-hang-hoa-demo-64` | Tổ chức sự kiện | Tiệm Hoa Tươi Nghệ Thuật & Thiết Kế Hoa Sự Kiện | 03. Beauty & Boutique Atelier | **P3** | Đã hoàn thiện phong cách riêng |
| 21 | **MS85** | `cua-hang-hoa-tuoi-demo-85` | Dịch vụ | Studio Chụp Ảnh Nghệ Thuật & Thiết Kế Thiệp Cưới Cao Cấp | 11. Creative Portfolio & Agency | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 22 | **MS62** | `cua-hang-my-pham-demo-62` | Mỹ phẩm | Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da | 03. Beauty & Cosmetics Atelier | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 23 | **MS33** | `cua-hang-thu-cung-demo-33` | Thú cưng | Hệ Thống Thức Ăn Hữu Cơ & Dịch Vụ Chăm Sóc Thú Cưng | 01. Premium E-Commerce Storefront | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 24 | **MS45** | `barbershop-demo-45` | Thời trang | Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế | 01. Premium E-Commerce Storefront | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 25 | **MS76** | `dich-vu-bao-ve-demo-76` | Dịch vụ | Dịch Vụ Bảo Vệ Mục Tiêu & Vệ Sĩ An Ninh Chuyên Nghiệp | 06. Corporate & Industrial B2B | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 26 | **MS38** | `dich-vu-gia-cong-co-khi-demo-38` | Khac | Xưởng Cơ Khí Chính Xác & Gia Công Chi Tiết Máy CNC | 06. Corporate & Industrial B2B | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 27 | **MS44** | `dich-vu-in-an-va-thiet-ke-demo-44` | Khac | Xưởng In Ấn Bao Bì & Thiết Kế Ấn Phẩm Nhận Diện Thương Hiệu | 06. Corporate & Industrial B2B | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 28 | **MS47** | `dich-vu-sua-chua-co-nhiet-dien-lanh-demo-47` | Khac | Dịch Vụ Kỹ Thuật Công Nghiệp & Thi Công Cơ Điện Lạnh | 06. Corporate & Industrial B2B | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 29 | **MS87** | `dich-vu-thiep-cuoi-demo-87` | Dịch vụ | Studio Chụp Ảnh Nghệ Thuật & Thiết Kế Thiệp Cưới Cao Cấp | 11. Creative Portfolio & Agency | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 30 | **MS22** | `dien-thoai-iphone-ontech-demo-22` | Công nghệ | Thiết Bị Công Nghệ Cao, Laptop & Phụ Kiện Gaming | 10. Tech Specs & Digital Solutions | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 31 | **MS32** | `do-dien-gia-dung-demo-32` | Công nghệ | Thiết Bị Công Nghệ Cao, Laptop & Phụ Kiện Gaming | 10. Tech Specs & Digital Solutions | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 32 | **MS97** | `dung-cu-choi-nhac-demo-97` | Nội thất | Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian | 04. Architecture & Interior Showcase | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 33 | **MS66** | `duoc-pham-viet-nam-demo-66` | Thực phẩm | Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền | 09. Culinary & Gastronomy Experience | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 34 | **MS01** | `fashion-demo-01` | Khac | Thời Trang May Đo & Thiết Kế Đương Đại (Atelier Lookbook) | 02. Editorial Fashion & Lifestyle | **P3** | Đã hoàn thiện bố cục tốt |
| 35 | **MS11** | `fashion-demo-11` | Thời trang | Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế | 01. Premium E-Commerce Storefront | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 36 | **MS16** | `fashion-demo-16` | Thời trang | Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế | 01. Premium E-Commerce Storefront | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 37 | **MS63** | `fashion-demo-63` | Studio | Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế | 01. Premium E-Commerce Storefront | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 38 | **MS14** | `flower-demo-14` | Tổ chức sự kiện | Dịch Vụ Chuyên Nghiệp | 06. Corporate & Professional Services | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 39 | **MS07** | `food-demo-07` | Khac | Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền | 09. Culinary & Gastronomy Experience | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 40 | **MS12** | `food-demo-12` | Ẩm thực - Nhà hàng | Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền | 09. Culinary & Gastronomy Experience | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 41 | **MS03** | `furniture-demo-03` | Khac | Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian | 04. Architecture & Interior Showcase | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 42 | **MS10** | `furniture-demo-10` | Khac | Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian | 04. Architecture & Interior Showcase | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 43 | **MS25** | `furniture-demo-25` | Gia dụng | Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian | 04. Architecture & Interior Showcase | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 44 | **MS112** | `giao-duc-mam-non-demo-112` | Giáo dục | Trường Mầm Non Song Ngữ & Giáo Dục Thể Chất Toàn Diện | 08. Education & Academy Hub | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 45 | **MS80** | `hair-salon-demo-80` | Spa - Làm đẹp | Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da | 03. Beauty & Cosmetics Atelier | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 46 | **MS59** | `he-thong-cham-soc-me-va-be-momibi-demo-59` | Spa - Làm đẹp | Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da | 03. Beauty & Cosmetics Atelier | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 47 | **MS93** | `kien-truc-xay-dung-demo-93` | Doanh nghiệp | Dịch Vụ Kỹ Thuật Công Nghiệp & Thi Công Cơ Điện Lạnh | 06. Corporate & Industrial B2B | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 48 | **MS48** | `landing-page-bat-dong-san-demo-48` | Doanh nghiệp | Bất Động Sản Nghỉ Dưỡng & Căn Hộ Đô Thị Sinh Thái | 04. Architecture & Real Estate | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 49 | **MS49** | `landing-page-thuc-pham-chuc-nang-demo-49` | Y tế | Nhà Thuốc Đạt Chuẩn GPP & Thiết Bị Y Tế Gia Đình | 07. Healthcare & Clinical Services | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 50 | **MS67** | `mam-non-tri-tam-demo-67` | Giáo dục | Trường Mầm Non Song Ngữ & Giáo Dục Thể Chất Toàn Diện | 08. Education & Academy Hub | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 51 | **MS08** | `media-demo-08` | Doanh nghiệp | Studio Chụp Ảnh Nghệ Thuật & Thiết Kế Thiệp Cưới Cao Cấp | 11. Creative Portfolio & Agency | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 52 | **MS100** | `my-pham-cham-soc-sac-dep-web-100` | Mỹ phẩm | Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da | 03. Beauty & Cosmetics Atelier | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 53 | **MS26** | `resort-nha-hang-demo-26` | Du lịch | Lữ Hành Quốc Tế & Kỳ Nghỉ Trọn Gói Cao Cấp | 05. Tourism & Destination Explorer | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 54 | **MS28** | `nha-hang-quan-an-halu-demo-28` | Ẩm thực - Nhà hàng | Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền | 09. Culinary & Gastronomy Experience | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 55 | **MS34** | `nha-khoa-aspen-demo-34` | Y tế | Nhà Thuốc Đạt Chuẩn GPP & Thiết Bị Y Tế Gia Đình | 07. Healthcare & Clinical Services | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 56 | **MS51** | `nha-thuoc-medimall-demo-51` | Y tế | Nhà Thuốc Đạt Chuẩn GPP & Thiết Bị Y Tế Gia Đình | 07. Healthcare & Clinical Services | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 57 | **MS27** | `noi-that-mycool-demo-27` | Nội thất | Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian | 04. Architecture & Interior Showcase | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 58 | **MS36** | `phu-tung-o-to-xe-may-demo-36` | Ô tô - Xe máy | Showroom Mua Bán Xe & Trung Tâm Chăm Sóc Xe Chuyên Nghiệp | 12. Automotive & Showroom Experience | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 59 | **MS79** | `san-go-cao-cap-demo-79` | Nội thất | Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian | 04. Architecture & Interior Showcase | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 60 | **MS77** | `sieu-thi-nem-demo-77` | Nội thất | Siêu Thị Nệm Cao Su Thiên Nhiên & Chăm Sóc Giấc Ngủ | 04. Architecture & Interior Showcase | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 61 | **MS43** | `son-nuoc-demo-43` | Khac | Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da | 03. Beauty & Cosmetics Atelier | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 62 | **MS18** | `spa-demo-18` | Mỹ phẩm | Spa Trị Liệu, Dưỡng Sinh & Chăm Sóc Sức Khỏe Thượng Lưu | 03. Beauty & Cosmetics Atelier | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 63 | **MS20** | `tap-hoa-thuc-pham-nest-20` | Ẩm thực - Nhà hàng | Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền | 09. Culinary & Gastronomy Experience | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 64 | **MS81** | `the-gioi-dong-ho-demo-81` | Thời trang | Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế | 01. Premium E-Commerce Storefront | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 65 | **MS39** | `the-gioi-gia-dung-online-demo-39` | Nội thất | Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian | 04. Architecture & Interior Showcase | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 66 | **MS83** | `the-gioi-nem-demo-83` | Nội thất | Siêu Thị Nệm Cao Su Thiên Nhiên & Chăm Sóc Giấc Ngủ | 04. Architecture & Interior Showcase | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 67 | **MS71** | `the-gioi-ruou-ngoai-demo-71` | Thực phẩm | Hầm Rượu Vang & Rượu Ngoại Nhập Khẩu Thượng Hạng | 09. Culinary & Gastronomy Experience | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 68 | **MS75** | `the-gioi-tattoo-demo-75` | Spa - Làm đẹp | Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da | 03. Beauty & Cosmetics Atelier | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 69 | **MS30** | `thiep-cuoi-demo-30` | Tổ chức sự kiện | Studio Chụp Ảnh Nghệ Thuật & Thiết Kế Thiệp Cưới Cao Cấp | 11. Creative Portfolio & Agency | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 70 | **MS35** | `thiet-ke-noi-that-demo-35` | Nội thất | Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian | 04. Architecture & Interior Showcase | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 71 | **MS91** | `thuc-an-cho-thu-cung` | Thú cưng | Hệ Thống Thức Ăn Hữu Cơ & Dịch Vụ Chăm Sóc Thú Cưng | 01. Premium E-Commerce Storefront | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 72 | **MS29** | `thuc-pham-sam-dong-trung-demo-29` | Y tế | Nhà Thuốc Đạt Chuẩn GPP & Thiết Bị Y Tế Gia Đình | 07. Healthcare & Clinical Services | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 73 | **MS65** | `tong-kho-ket-sat-demo-65` | Nội thất | Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian | 04. Architecture & Interior Showcase | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 74 | **MS41** | `tra-sua-demo-41` | Thực phẩm | Chuỗi Trà & Cà Phê Thảo Mộc / Đồ Uống Trẻ Trung | 09. Culinary & Gastronomy Experience | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 75 | **MS19** | `trang-suc-thoi-trang-demo-19` | Thời trang | Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế | 01. Premium E-Commerce Storefront | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 76 | **MS73** | `trang-suc-cao-cap-demo-73` | Thời trang | Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế | 01. Premium E-Commerce Storefront | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 77 | **MS86** | `trung-tam-can-thiep-som-demo-86` | Doanh nghiệp | Dịch Vụ Chuyên Nghiệp | 06. Corporate & Professional Services | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 78 | **MS74** | `trung-tam-day-boi-demo-74` | Giáo dục | Học Viện Đào Tạo Kỹ Năng & Ngoại Ngữ Chuẩn Quốc Tế | 08. Education & Academy Hub | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 79 | **MS88** | `trung-tam-day-lai-xe-demo-88` | Giáo dục | Trung Tâm Đào Tạo Sát Hạch Lái Xe Ô Tô Các Hạng (B1, B2, C) | 08. Education & Academy Hub | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 80 | **MS60** | `trung-tam-day-yoga-demo-60` | Dịch vụ | Trung Tâm Thể Dục Thể Hình Fitness, Yoga & Xe Đạp Thể Thao | 08. Education & Academy Hub | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 81 | **MS46** | `trung-tam-ngoai-ngu-demo-46` | Doanh nghiệp | Học Viện Đào Tạo Kỹ Năng & Ngoại Ngữ Chuẩn Quốc Tế | 08. Education & Academy Hub | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 82 | **MS82** | `trung-tam-the-duc-the-hinh-demo-82` | Thể thao | Trung Tâm Thể Dục Thể Hình Fitness, Yoga & Xe Đạp Thể Thao | 08. Education & Academy Hub | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 83 | **MS42** | `van-tai-logistics-demo-42` | Vận tải | Dịch Vụ Vận Tải Quốc Tế & Quản Lý Chuỗi Cung Ứng Logistics | 06. Corporate & Industrial B2B | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 84 | **MS92** | `van-tai-logistics` | Doanh nghiệp | Dịch Vụ Vận Tải Quốc Tế & Quản Lý Chuỗi Cung Ứng Logistics | 06. Corporate & Industrial B2B | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 85 | **MS110** | `website-ban-banh-trung-thu-demo-110` | Thực phẩm | Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền | 09. Culinary & Gastronomy Experience | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 86 | **MS107** | `website-ban-dac-san-demo-107` | Thực phẩm | Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền | 09. Culinary & Gastronomy Experience | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 87 | **MS53** | `website-ban-do-an-nhanh-demo-53` | Thực phẩm | Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền | 09. Culinary & Gastronomy Experience | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 88 | **MS95** | `website-ban-gom-su-tach-tra-demo-95` | Nội thất | Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian | 04. Architecture & Interior Showcase | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 89 | **MS117** | `website-ban-hoa-tuoi-demo-117` | Quà tặng | Studio Chụp Ảnh Nghệ Thuật & Thiết Kế Thiệp Cưới Cao Cấp | 11. Creative Portfolio & Agency | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 90 | **MS52** | `website-ban-rem-cua-demo-52` | Nội thất | Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian | 04. Architecture & Interior Showcase | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 91 | **MS115** | `website-ban-sim-va-bien-so-demo-115` | Khác | Dịch Vụ Chuyên Nghiệp | 06. Corporate & Professional Services | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 92 | **MS113** | `website-ban-xe-hoi-demo-113` | Ô tô - Xe máy | Showroom Mua Bán Xe & Trung Tâm Chăm Sóc Xe Chuyên Nghiệp | 12. Automotive & Showroom Experience | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 93 | **MS96** | `website-bat-dong-san-demo-96` | Bất động sản | Bất Động Sản Nghỉ Dưỡng & Căn Hộ Đô Thị Sinh Thái | 04. Architecture & Real Estate | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 94 | **MS94** | `website-cho-thue-xe-o-to-demo-94` | Công nghệ | Thiết Bị Công Nghệ Cao, Laptop & Phụ Kiện Gaming | 10. Tech Specs & Digital Solutions | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 95 | **MS56** | `website-cua-hang-me-va-be-demo-56` | Mỹ phẩm | Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da | 03. Beauty & Cosmetics Atelier | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 96 | **MS55** | `website-cua-hang-phan-phoi-vai-jean-demo-55` | Thời trang | Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế | 01. Premium E-Commerce Storefront | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 97 | **MS104** | `website-dai-ly-o-to-vinfast-web-104` | Ô tô - Xe máy | Showroom Mua Bán Xe & Trung Tâm Chăm Sóc Xe Chuyên Nghiệp | 12. Automotive & Showroom Experience | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 98 | **SKD-000** | `website-garage-o-to-web-98` | Ô tô - Xe máy | Showroom Mua Bán Xe & Trung Tâm Chăm Sóc Xe Chuyên Nghiệp | 12. Automotive & Showroom Experience | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 99 | **MS109** | `website-gio-cha-demo-109` | Thực phẩm | Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền | 09. Culinary & Gastronomy Experience | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 100 | **MS111** | `website-nha-thuoc-sikido-demo-111` | Y tế | Nhà Thuốc Đạt Chuẩn GPP & Thiết Bị Y Tế Gia Đình | 07. Healthcare & Clinical Services | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 101 | **MS108** | `website-noi-that-xay-dung-demo-108` | Nội thất | Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian | 04. Architecture & Interior Showcase | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 102 | **MS105** | `website-noi-y-cao-cap-demo-105` | Thời trang | Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế | 01. Premium E-Commerce Storefront | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 103 | **MS103** | `website-quan-ly-tour-du-lich-lu-hanh-web-103` | Du lịch | Lữ Hành Quốc Tế & Kỳ Nghỉ Trọn Gói Cao Cấp | 05. Tourism & Destination Explorer | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 104 | **MS57** | `website-shop-tra-thao-moc-demo-57` | Thực phẩm | Chuỗi Trà & Cà Phê Thảo Mộc / Đồ Uống Trẻ Trung | 09. Culinary & Gastronomy Experience | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 105 | **MS116** | `website-thiet-ke-xay-dung-san-vuon-demo-116` | Doanh nghiệp | Dịch Vụ Kỹ Thuật Công Nghiệp & Thi Công Cơ Điện Lạnh | 06. Corporate & Industrial B2B | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 106 | **MS114** | `website-thoi-trang-quan-ao-nam-nu-demo-114` | Thời trang | Thời Trang Nam & Phong Cách Quý Ông Hiện Đại | 01. Premium E-Commerce Storefront | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 107 | **MS54** | `website-tiem-cafe-tinh-demo-54` | Thực phẩm | Xưởng Rang Cà Phê Mộc & Tiệm Cà Phê Specialty Đương Đại | 09. Culinary & Gastronomy Experience | **Completed (Pilot)** | ĐÃ HOÀN THIỆN XUẤT SẮC (Phase 2 Pilot) |
| 108 | **MS106** | `website-trung-tam-spa-cao-cap-demo-106` | Spa - Làm đẹp | Spa Trị Liệu, Dưỡng Sinh & Chăm Sóc Sức Khỏe Thượng Lưu | 03. Beauty & Cosmetics Atelier | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 109 | **MS04** | `studio-wedding-demo-04` | Thời trang | Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế | 01. Premium E-Commerce Storefront | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 110 | **MS23** | `xay-dung-driller-demo-23` | Gia dụng | Dịch Vụ Kỹ Thuật Công Nghiệp & Thi Công Cơ Điện Lạnh | 06. Corporate & Industrial B2B | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 111 | **MS50** | `xay-dung-nha-pho-demo-50` | Bất động sản | Bất Động Sản Nghỉ Dưỡng & Căn Hộ Đô Thị Sinh Thái | 04. Architecture & Real Estate | **P1** | Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài |
| 112 | **MS21** | `xe-dap-the-thao-electric-bicycle-21` | Thể thao | Trung Tâm Thể Dục Thể Hình Fitness, Yoga & Xe Đạp Thể Thao | 08. Education & Academy Hub | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |
| 113 | **MS69** | `yen-sao-nguyen-chat-demo-69` | Thực phẩm | Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền | 09. Culinary & Gastronomy Experience | **P0** | Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng |


---

## 3. Đặc Tả Thiết Kế Chi Tiết Từng Website Demo (113 Demos)

---

### [Website #1] MS40 — Auto Garage - demo 40 (ID: `auto-garage-demo-40`)
- **Ngành nghề Catalog:** Ô tô - Xe máy | **Niche xác định:** Showroom Siêu Xe & Kỹ Thuật Nâng Cấp Hạng Sang
- **Archetype Kiến Trúc:** 12. Automotive & Showroom Experience
- **Mức độ ưu tiên:** **P3** | **Trạng thái kỹ thuật hiện tại:** Customized-Rich
- **Đối tượng mục tiêu & Mục đích:** Doanh nhân, người đam mê tốc độ, chủ sở hữu xe sang nhập khẩu. Trưng bày bộ sưu tập siêu xe, đặt lịch lái thử, dịch vụ bảo dưỡng chuẩn OEM.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Obsidian (#0f172a), Đỏ Sport GT (#dc2626), Titan Bạc (#334155)
  - **Typography:** Barlow Semi Condensed (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Góc chụp xe 3/4 thể thao + Bộ đếm tốc độ & mã lực + CTA Đăng ký lái thử.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, product-detail.html, cart.html, gioi-thieu.html, lien-he.html, blog.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bộ đếm thông số hiệu năng động cơ (Mã lực, Tăng tốc 0-100km/h, Hộp số).
- Bộ tab phân khúc xe chuyên sâu (Sedan, SUV, Coupe, Gói dịch vụ bảo dưỡng PPF).
- Bộ chọn màu sắc ngoại thất xe tương tác trực quan.
- **Tương tác Frontend độc quyền:**
- Giỏ hàng lưu trữ LocalStorage đầy đủ tính năng thêm/xóa/tính tổng.
- Bộ lọc và tìm kiếm xe tức thì theo tầm giá và phân khúc.
- Form đặt lịch lái thử có xác thực số điện thoại và phản hồi chuẩn mực.
- **Yêu cầu Nội dung & Hình ảnh:** 11 hình ảnh xe sang độ nét cao phân giải 2K-4K tải cục bộ.
- **Lỗi hiện tại cần khắc phục:** Đã hoàn thiện mỹ mãn. Cần khóa bảo vệ chống script ghi đè.

---

### [Website #2] MS15 — Baby demo 15 (ID: `baby-demo-15`)
- **Ngành nghề Catalog:** Y tế | **Niche xác định:** Nhà Thuốc Đạt Chuẩn GPP & Thiết Bị Y Tế Gia Đình
- **Archetype Kiến Trúc:** 07. Healthcare & Clinical Services
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Lam Y Tế (#0284c7), Xanh Ngọc Cứu Thương (#10b981), Trắng Y Khoa (#ffffff)
  - **Typography:** Lexend (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Tận tâm chăm sóc sức khỏe gia đình với thuốc chính hãng và thiết bị y tế chuẩn.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Tem xác thực xuất xứ và giấy phép lưu hành của Bộ Y Tế.
- Hướng dẫn liều lượng và chống chỉ định y khoa rõ ràng minh bạch.
- Dịch vụ dược sĩ gia đình tư vấn miễn phí qua hotline 24/7.
- **Tương tác Frontend độc quyền:**
- Gửi hình chụp đơn thuốc để Dược sĩ đối soát báo giá.
- Bộ lọc thiết bị y tế (Máy đo huyết áp, Máy đo đường huyết, Hộp sơ cứu).
- Định vị nhà thuốc gần nhất nhận thuốc trong 30 phút.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #3] SKD-000 — Bán Đồ Nội thất (ID: `ban-do-noi-that`)
- **Ngành nghề Catalog:** Nội thất | **Niche xác định:** Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian
- **Archetype Kiến Trúc:** 04. Architecture & Interior Showcase
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Nâu Gỗ Sồi (#78350f), Nâu Hổ Phách (#b45309), Kem Sứ (#fefce8)
  - **Typography:** DM Sans (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Kiến tạo không gian sống tối giản, ấm áp và gần gũi thiên nhiên.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Phân loại bộ sưu tập theo từng không gian (Phòng khách, Bếp, Phòng ngủ).
- Thông số chất liệu gỗ sồi tự nhiên đạt chuẩn sấy chống mối mọt.
- Gợi ý set bàn ăn đồng bộ cùng ghế và tủ kệ tivi.
- **Tương tác Frontend độc quyền:**
- Xem kích thước 3 chiều (Dài x Rộng x Cao) của món đồ.
- Lọc sản phẩm theo chất liệu (Gỗ tự nhiên, Gỗ công nghiệp MDF).
- Yêu cầu kỹ sư tới tận nhà đo đạc và thiết kế 3D.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #4] MS99 — Bán mỹ phẩm chăm sóc sắc đẹp - web 99 (ID: `ban-my-pham-cham-soc-sac-dep-web-99`)
- **Ngành nghề Catalog:** Mỹ phẩm | **Niche xác định:** Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da
- **Archetype Kiến Trúc:** 03. Beauty & Cosmetics Atelier
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng Mộc (#be185d), Hoa Hồng (#fff1f2), Đỏ Rượu (#4c0519)
  - **Typography:** Cormorant Garamond (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Giải pháp khoa học cho làn da căng bóng tự nhiên với peptide và hoa hồng.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng tra cứu công dụng hoạt chất (Niacinamide, B5, Ceramide).
- Chứng nhận mỹ phẩm an toàn da liễu không thử nghiệm trên động vật.
- Quy trình 3 bước dưỡng da chuẩn Hàn Quốc.
- **Tương tác Frontend độc quyền:**
- Trắc nghiệm chuẩn đoán loại da để đề xuất routine.
- Thêm nhanh combo dưỡng da vào giỏ hàng.
- Hỏi đáp trực tiếp cùng chuyên viên da liễu qua Zalo.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #5] MS84 — Blog tin tức - demo 84 (ID: `blog-tin-tuc-demo-84`)
- **Ngành nghề Catalog:** Doanh nghiệp | **Niche xác định:** Dịch Vụ Chuyên Nghiệp
- **Archetype Kiến Trúc:** 06. Corporate & Professional Services
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Navy (#1e40af), Xanh Lam (#3b82f6), Trắng (#ffffff)
  - **Typography:** Inter (Tiêu đề), Plus Jakarta Sans (Nội dung)
  - **Bố cục Hero:** Thông điệp dịch vụ cốt lõi + Hình ảnh chuyên gia tận tâm.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Quy trình làm việc 4 bước minh bạch và chuẩn mực.
- Cam kết bảo hành và đồng hành lâu dài cùng khách hàng.
- Hotline Zalo tư vấn 24/7 trực tiếp từ chuyên gia phụ trách.
- **Tương tác Frontend độc quyền:**
- Form gửi yêu cầu tư vấn báo giá chi tiết.
- Bộ lọc dịch vụ theo nhu cầu và quy mô ngân sách.
- Liên kết chat Zalo nhanh với nội dung soạn sẵn.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #6] MS17 — Building demo 17 (ID: `building-demo-17`)
- **Ngành nghề Catalog:** Khac | **Niche xác định:** Bất Động Sản Nghỉ Dưỡng & Căn Hộ Đô Thị Sinh Thái
- **Archetype Kiến Trúc:** 04. Architecture & Real Estate
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Navy Sâu (#1e3a8a), Vàng Kim Hoàng Gia (#d97706), Trắng Sứ (#f8fafc)
  - **Typography:** Syne (Tiêu đề), DM Sans (Nội dung)
  - **Bố cục Hero:** Kiệt tác không gian sống thượng lưu ven sông với tầm nhìn triệu đô.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bản đồ vị trí tọa độ vàng và liên kết hạ tầng giao thông vùng.
- Bản vẽ mặt bằng kiến trúc chi tiết từng căn hộ penthouse/shophouse.
- Bảng tiến độ thanh toán linh hoạt hỗ trợ lãi suất 0% từ ngân hàng.
- **Tương tác Frontend độc quyền:**
- Bộ lọc dự án theo khoảng giá (Tỷ VNĐ) và diện tích m2.
- Tải trọn bộ tài liệu pháp lý và mặt bằng phân lô PDF.
- Đăng ký lái xe đưa đón tham quan nhà mẫu thực tế.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #7] MS102 — Cắt tóc phong cách nam nữ - web 102 (ID: `cat-toc-phong-cach-nam-nu-web-102`)
- **Ngành nghề Catalog:** Spa - Làm đẹp | **Niche xác định:** Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da
- **Archetype Kiến Trúc:** 03. Beauty & Cosmetics Atelier
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng Mộc (#be185d), Hoa Hồng (#fff1f2), Đỏ Rượu (#4c0519)
  - **Typography:** Cormorant Garamond (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Giải pháp khoa học cho làn da căng bóng tự nhiên với peptide và hoa hồng.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng tra cứu công dụng hoạt chất (Niacinamide, B5, Ceramide).
- Chứng nhận mỹ phẩm an toàn da liễu không thử nghiệm trên động vật.
- Quy trình 3 bước dưỡng da chuẩn Hàn Quốc.
- **Tương tác Frontend độc quyền:**
- Trắc nghiệm chuẩn đoán loại da để đề xuất routine.
- Thêm nhanh combo dưỡng da vào giỏ hàng.
- Hỏi đáp trực tiếp cùng chuyên viên da liễu qua Zalo.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #8] MS78 — Cho thuê trang phục - demo 78 (ID: `cho-thue-trang-phuc-demo-78`)
- **Ngành nghề Catalog:** Thời trang | **Niche xác định:** Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế
- **Archetype Kiến Trúc:** 01. Premium E-Commerce Storefront
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#18181b), Vàng Nhạt (#fef3c7), Trắng (#ffffff)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Bộ sưu tập thời trang dẫn đầu xu hướng mùa mới.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lưới sản phẩm thời trang tỷ lệ ảnh 3:4 chuẩn lookbook.
- Huy hiệu New In, Best Seller và Ưu đãi tuần lễ thời trang.
- Khối cảm hứng phối đồ Street Style.
- **Tương tác Frontend độc quyền:**
- Lọc sản phẩm theo tầm giá và danh mục.
- Hover xem ảnh góc sau của trang phục.
- Lưu giỏ hàng và danh sách yêu thích.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #9] MS13 — Computer Demo 13 (ID: `computer-demo-13`)
- **Ngành nghề Catalog:** Công nghệ | **Niche xác định:** Thiết Bị Công Nghệ Cao, Laptop & Phụ Kiện Gaming
- **Archetype Kiến Trúc:** 10. Tech Specs & Digital Solutions
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Cyan (#0284c7), Xanh Neon (#06b6d4), Nền Đen Slate (#0f172a)
  - **Typography:** Space Grotesk (Tiêu đề), JetBrains Mono / Inter (Nội dung)
  - **Bố cục Hero:** Đỉnh cao hiệu năng thế hệ mới với vi xử lý gen 14 và đồ họa chuyên nghiệp.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng thông số kỹ thuật chi tiết (CPU, GPU, RAM DDR5, Ổ cứng SSD NVMe).
- Chế độ hiển thị Dark-Tech tối ưu cho tín đồ công nghệ.
- Cam kết sản phẩm mới 100% nguyên seal kèm bảo hành tận nơi 24 tháng.
- **Tương tác Frontend độc quyền:**
- Công cụ chọn 2 sản phẩm để so sánh cấu hình kỹ thuật.
- Bộ lọc linh kiện theo phân khúc giá và thương hiệu.
- Kiểm tra tình trạng hàng có sẵn tại cửa hàng.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #10] MS61 — Công ty đồng phục - demo 61 (ID: `cong-ty-dong-phuc-demo-61`)
- **Ngành nghề Catalog:** Thời trang | **Niche xác định:** Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế
- **Archetype Kiến Trúc:** 01. Premium E-Commerce Storefront
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#18181b), Vàng Nhạt (#fef3c7), Trắng (#ffffff)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Bộ sưu tập thời trang dẫn đầu xu hướng mùa mới.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lưới sản phẩm thời trang tỷ lệ ảnh 3:4 chuẩn lookbook.
- Huy hiệu New In, Best Seller và Ưu đãi tuần lễ thời trang.
- Khối cảm hứng phối đồ Street Style.
- **Tương tác Frontend độc quyền:**
- Lọc sản phẩm theo tầm giá và danh mục.
- Hover xem ảnh góc sau của trang phục.
- Lưu giỏ hàng và danh sách yêu thích.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #11] MS90 — Công ty du lịch - demo 90 (ID: `cong-ty-du-lich-demo-90`)
- **Ngành nghề Catalog:** Du lịch | **Niche xác định:** Lữ Hành Quốc Tế & Kỳ Nghỉ Trọn Gói Cao Cấp
- **Archetype Kiến Trúc:** 05. Tourism & Destination Explorer
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Đại Dương (#0284c7), Cam Hoàng Hôn (#f59e0b), Xanh Nước Biển (#f0f9ff)
  - **Typography:** Outfit (Tiêu đề), Merriweather (Nội dung)
  - **Bố cục Hero:** Khám phá những vùng đất thiên đường với kỳ nghỉ dưỡng 5 sao chuẩn mực.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lịch trình chi tiết từng ngày (Đi đâu, Ăn gì, Nghỉ tại khách sạn nào).
- Đã bao gồm trọn gói vé máy bay khứ hồi, bảo hiểm quốc tế và visa.
- Hướng dẫn viên chuyên nghiệp, nhiệt tình, am hiểu văn hóa địa phương.
- **Tương tác Frontend độc quyền:**
- Lọc tour theo mức giá, thời gian khởi hành và điểm đến.
- Công cụ tính tổng chi phí theo số lượng người lớn và trẻ em.
- Form đăng ký nhận tư vấn lịch trình tour thiết kế riêng theo đoàn.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #12] MS72 — Công ty du lịch skdtravel - demo 72 (ID: `cong-ty-du-lich-skdtravel-demo-72`)
- **Ngành nghề Catalog:** Du lịch | **Niche xác định:** Lữ Hành Quốc Tế & Kỳ Nghỉ Trọn Gói Cao Cấp
- **Archetype Kiến Trúc:** 05. Tourism & Destination Explorer
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Đại Dương (#0284c7), Cam Hoàng Hôn (#f59e0b), Xanh Nước Biển (#f0f9ff)
  - **Typography:** Outfit (Tiêu đề), Merriweather (Nội dung)
  - **Bố cục Hero:** Khám phá những vùng đất thiên đường với kỳ nghỉ dưỡng 5 sao chuẩn mực.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lịch trình chi tiết từng ngày (Đi đâu, Ăn gì, Nghỉ tại khách sạn nào).
- Đã bao gồm trọn gói vé máy bay khứ hồi, bảo hiểm quốc tế và visa.
- Hướng dẫn viên chuyên nghiệp, nhiệt tình, am hiểu văn hóa địa phương.
- **Tương tác Frontend độc quyền:**
- Lọc tour theo mức giá, thời gian khởi hành và điểm đến.
- Công cụ tính tổng chi phí theo số lượng người lớn và trẻ em.
- Form đăng ký nhận tư vấn lịch trình tour thiết kế riêng theo đoàn.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #13] MS70 — Tân Phát Packaging — Bao Bì Công Nghiệp (ID: `cong-ty-san-xuat-bao-bi-demo-70`)
- **Ngành nghề Catalog:** Doanh nghiệp | **Niche xác định:** Sản Xuất Bao Bì Giấy Sóng & Màng Ghép Công Nghiệp (Tân Phát)
- **Archetype Kiến Trúc:** 06. Corporate & Industrial B2B
- **Mức độ ưu tiên:** **Completed (Pilot)** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Giám đốc chuỗi cung ứng, Trưởng phòng mua hàng B2B, doanh nghiệp xuất khẩu thủy sản/dược/điện tử. Chứng minh năng lực sản xuất 15.000m² tại VSIP II, hỗ trợ lập yêu cầu báo giá RFQ và tải tài liệu kỹ thuật.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Slate (#0f172a), Xanh Kỹ Thuật (#1e3a8a), Cam An Toàn (#ea580c), Trắng Băng (#f8fafc)
  - **Typography:** Space Grotesk (Tiêu đề kỹ thuật), Inter (Nội dung phân tích)
  - **Bố cục Hero:** Asymmetrical Industrial Hero + Dây chuyền tạo sóng 2.2m + 4 Chỉ số KPI quy mô (15.000m², 2.500 tấn/tháng, 12 Lines, 100% kiểm định).
- **Hệ thống Trang con & Điều hướng:** san-pham.html, chi-tiet-san-pham.html, gioi-thieu.html, lien-he.html (Đầy đủ Return Bar #MS70) (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Khối tính toán và ước lượng tiến độ sản xuất B2B trực tiếp trên trang chủ.
- Bản đặc tả kỹ thuật chi tiết (TDS) với cấu trúc 4 lớp màng ghép nhôm AL và bảng thử nghiệm nén bục Mullen.
- Không dùng giỏ hàng bán lẻ; tích hợp modal RFQ chuyên sâu chuẩn doanh nghiệp.
- **Tương tác Frontend độc quyền:**
- Interactive RFQ Estimator: Thanh trượt số lượng và chọn nhóm bao bì tính toán thời gian sản xuất và chiết khấu B2B theo thời gian thực.
- Modal gửi yêu cầu báo giá kỹ thuật có xác thực và liên kết Zalo 0971183939 định dạng sẵn nội dung.
- Bộ lọc đa tầng theo ngành ứng dụng và cấu trúc sóng giấy tại trang san-pham.html.
- Bộ chuyển tab thông số kỹ thuật (Spec Tab Switcher) tại chi-tiet-san-pham.html.
- **Yêu cầu Nội dung & Hình ảnh:** Ảnh nhà máy máy in flexo khổ lớn, ảnh chụp studio thùng carton xuất khẩu và túi màng ghép nhôm cao cấp.
- **Lỗi hiện tại cần khắc phục:** ĐÃ HOÀN THIỆN XUẤT SẮC (Phase 2 Pilot). Đã khóa bảo vệ trong data/protected_sites.json.

---

### [Website #14] MS01 — Cosmetic demo 01 (ID: `cosmetic-demo-01`)
- **Ngành nghề Catalog:** Mỹ phẩm | **Niche xác định:** Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da
- **Archetype Kiến Trúc:** 03. Beauty & Cosmetics Atelier
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng Mộc (#be185d), Hoa Hồng (#fff1f2), Đỏ Rượu (#4c0519)
  - **Typography:** Cormorant Garamond (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Giải pháp khoa học cho làn da căng bóng tự nhiên với peptide và hoa hồng.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng tra cứu công dụng hoạt chất (Niacinamide, B5, Ceramide).
- Chứng nhận mỹ phẩm an toàn da liễu không thử nghiệm trên động vật.
- Quy trình 3 bước dưỡng da chuẩn Hàn Quốc.
- **Tương tác Frontend độc quyền:**
- Trắc nghiệm chuẩn đoán loại da để đề xuất routine.
- Thêm nhanh combo dưỡng da vào giỏ hàng.
- Hỏi đáp trực tiếp cùng chuyên viên da liễu qua Zalo.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #15] MS05 — Cosmetic demo 05 (ID: `cosmetic-demo-05`)
- **Ngành nghề Catalog:** Mỹ phẩm | **Niche xác định:** Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da
- **Archetype Kiến Trúc:** 03. Beauty & Cosmetics Atelier
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng Mộc (#be185d), Hoa Hồng (#fff1f2), Đỏ Rượu (#4c0519)
  - **Typography:** Cormorant Garamond (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Giải pháp khoa học cho làn da căng bóng tự nhiên với peptide và hoa hồng.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng tra cứu công dụng hoạt chất (Niacinamide, B5, Ceramide).
- Chứng nhận mỹ phẩm an toàn da liễu không thử nghiệm trên động vật.
- Quy trình 3 bước dưỡng da chuẩn Hàn Quốc.
- **Tương tác Frontend độc quyền:**
- Trắc nghiệm chuẩn đoán loại da để đề xuất routine.
- Thêm nhanh combo dưỡng da vào giỏ hàng.
- Hỏi đáp trực tiếp cùng chuyên viên da liễu qua Zalo.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #16] MS37 — Cửa hàng bánh ngọt - demo 37 (ID: `cua-hang-banh-ngot-demo-37`)
- **Ngành nghề Catalog:** Thực phẩm | **Niche xác định:** Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền
- **Archetype Kiến Trúc:** 09. Culinary & Gastronomy Experience
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đỏ Vang Ấm (#b91c1c), Nâu Cháy (#451a03), Vàng Nghệ (#f59e0b)
  - **Typography:** Cinzel (Tiêu đề), Plus Jakarta Sans (Nội dung)
  - **Bố cục Hero:** Trải nghiệm ẩm thực truyền thống đậm đà bản sắc với nguồn nguyên liệu sạch.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Menu phân rõ món khai vị, món chính, lẩu và món tráng miệng.
- Nhãn OCOP và cam kết không sử dụng chất phụ gia bảo quản độc hại.
- Không gian phòng tiệc gia đình và hội nghị ấm cúng.
- **Tương tác Frontend độc quyền:**
- Form Đặt Bàn Tiệc (Số người, Khung giờ, Yêu cầu phòng riêng).
- Bộ lọc món ăn theo khẩu vị (Thanh đạm, Đậm đà, Món chay).
- Đặt hàng đặc sản đóng gói giao tận nhà.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #17] MS89 — Cửa hàng di động - demo 89 (ID: `cua-hang-di-dong-demo-89`)
- **Ngành nghề Catalog:** Công nghệ | **Niche xác định:** Thiết Bị Công Nghệ Cao, Laptop & Phụ Kiện Gaming
- **Archetype Kiến Trúc:** 10. Tech Specs & Digital Solutions
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Cyan (#0284c7), Xanh Neon (#06b6d4), Nền Đen Slate (#0f172a)
  - **Typography:** Space Grotesk (Tiêu đề), JetBrains Mono / Inter (Nội dung)
  - **Bố cục Hero:** Đỉnh cao hiệu năng thế hệ mới với vi xử lý gen 14 và đồ họa chuyên nghiệp.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng thông số kỹ thuật chi tiết (CPU, GPU, RAM DDR5, Ổ cứng SSD NVMe).
- Chế độ hiển thị Dark-Tech tối ưu cho tín đồ công nghệ.
- Cam kết sản phẩm mới 100% nguyên seal kèm bảo hành tận nơi 24 tháng.
- **Tương tác Frontend độc quyền:**
- Công cụ chọn 2 sản phẩm để so sánh cấu hình kỹ thuật.
- Bộ lọc linh kiện theo phân khúc giá và thương hiệu.
- Kiểm tra tình trạng hàng có sẵn tại cửa hàng.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #18] MS68 — Cửa hàng đồ công nghệ - demo 68 (ID: `cua-hang-do-cong-nghe-demo-68`)
- **Ngành nghề Catalog:** Công nghệ | **Niche xác định:** Thiết Bị Công Nghệ Cao, Laptop & Phụ Kiện Gaming
- **Archetype Kiến Trúc:** 10. Tech Specs & Digital Solutions
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Cyan (#0284c7), Xanh Neon (#06b6d4), Nền Đen Slate (#0f172a)
  - **Typography:** Space Grotesk (Tiêu đề), JetBrains Mono / Inter (Nội dung)
  - **Bố cục Hero:** Đỉnh cao hiệu năng thế hệ mới với vi xử lý gen 14 và đồ họa chuyên nghiệp.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng thông số kỹ thuật chi tiết (CPU, GPU, RAM DDR5, Ổ cứng SSD NVMe).
- Chế độ hiển thị Dark-Tech tối ưu cho tín đồ công nghệ.
- Cam kết sản phẩm mới 100% nguyên seal kèm bảo hành tận nơi 24 tháng.
- **Tương tác Frontend độc quyền:**
- Công cụ chọn 2 sản phẩm để so sánh cấu hình kỹ thuật.
- Bộ lọc linh kiện theo phân khúc giá và thương hiệu.
- Kiểm tra tình trạng hàng có sẵn tại cửa hàng.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #19] MS58 — Cửa hàng hoa - demo 58 (ID: `cua-hang-hoa-demo-58`)
- **Ngành nghề Catalog:** Tổ chức sự kiện | **Niche xác định:** Studio Chụp Ảnh Nghệ Thuật & Thiết Kế Thiệp Cưới Cao Cấp
- **Archetype Kiến Trúc:** 11. Creative Portfolio & Agency
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng Tro (#fda4af), Xám Đậm (#334155), Trắng Tinh Khiết (#fafafa)
  - **Typography:** Playfair Display (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Lưu giữ những khoảnh khắc hạnh phúc trọn vẹn bằng góc máy nghệ thuật tinh tế.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bộ sưu tập ảnh cưới dạng triển lãm nghệ thuật không giới hạn khung viền.
- Gói dịch vụ cưới trọn gói gồm váy cưới thiết kế, trang điểm và album cao cấp.
- Đội ngũ nhiếp ảnh gia giàu kinh nghiệm sáng tạo từng góc chụp.
- **Tương tác Frontend độc quyền:**
- Lightbox phóng to ngắm nhìn từng khung hình độ sắc nét cao.
- Chọn mẫu phôi thiệp cưới ép kim và phông chữ tùy biến.
- Form đặt lịch hẹn thử trang phục và tư vấn concept chụp.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #20] MS64 — Cửa hàng hoa - demo 64 (ID: `cua-hang-hoa-demo-64`)
- **Ngành nghề Catalog:** Tổ chức sự kiện | **Niche xác định:** Tiệm Hoa Tươi Nghệ Thuật & Thiết Kế Hoa Sự Kiện
- **Archetype Kiến Trúc:** 03. Beauty & Boutique Atelier
- **Mức độ ưu tiên:** **P3** | **Trạng thái kỹ thuật hiện tại:** Customized-Rich
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân tặng sinh nhật, tình yêu, và doanh nghiệp đặt hoa khai trương/hội nghị. Giới thiệu các tác phẩm hoa tươi theo mùa, hỗ trợ đặt hoa hỏa tốc giao trong 2h.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng phấn thạch anh (#be185d), Xanh lục lá (#047857), Nền kem hoa (#fff1f2)
  - **Typography:** Playfair Display (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Hoa tươi nghệ thuật tuyển chọn Đà Lạt mỗi sáng + Cam kết hoa mới 100%.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bộ phân loại hoa theo dịp tặng (Sinh nhật, Khai trương, Hoa cưới, Lan hồ điệp).
- Khối ưu đãi tặng kèm thiệp viết tay mỹ thuật và banner chúc mừng.
- Bố cục thẻ hoa dạng boutique tao nhã có tag xuất xứ hoa nhập khẩu.
- **Tương tác Frontend độc quyền:**
- Form hẹn giờ và ngày giao hoa hỏa tốc.
- Bộ lọc giá sản phẩm theo phân khúc dưới 500k, 1-2 triệu, trên 3 triệu.
- Modal xem chi tiết bông hoa và kích thước giỏ hoa.
- **Yêu cầu Nội dung & Hình ảnh:** 15 hình ảnh mẫu hoa tươi chất lượng cao chụp studio thực tế.
- **Lỗi hiện tại cần khắc phục:** Đã hoàn thiện phong cách riêng. Cần khóa bảo vệ chống script ghi đè.

---

### [Website #21] MS85 — Cửa hàng hoa tươi - demo 85 (ID: `cua-hang-hoa-tuoi-demo-85`)
- **Ngành nghề Catalog:** Dịch vụ | **Niche xác định:** Studio Chụp Ảnh Nghệ Thuật & Thiết Kế Thiệp Cưới Cao Cấp
- **Archetype Kiến Trúc:** 11. Creative Portfolio & Agency
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng Tro (#fda4af), Xám Đậm (#334155), Trắng Tinh Khiết (#fafafa)
  - **Typography:** Playfair Display (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Lưu giữ những khoảnh khắc hạnh phúc trọn vẹn bằng góc máy nghệ thuật tinh tế.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bộ sưu tập ảnh cưới dạng triển lãm nghệ thuật không giới hạn khung viền.
- Gói dịch vụ cưới trọn gói gồm váy cưới thiết kế, trang điểm và album cao cấp.
- Đội ngũ nhiếp ảnh gia giàu kinh nghiệm sáng tạo từng góc chụp.
- **Tương tác Frontend độc quyền:**
- Lightbox phóng to ngắm nhìn từng khung hình độ sắc nét cao.
- Chọn mẫu phôi thiệp cưới ép kim và phông chữ tùy biến.
- Form đặt lịch hẹn thử trang phục và tư vấn concept chụp.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #22] MS62 — Cửa hàng mỹ phẩm - demo 62 (ID: `cua-hang-my-pham-demo-62`)
- **Ngành nghề Catalog:** Mỹ phẩm | **Niche xác định:** Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da
- **Archetype Kiến Trúc:** 03. Beauty & Cosmetics Atelier
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng Mộc (#be185d), Hoa Hồng (#fff1f2), Đỏ Rượu (#4c0519)
  - **Typography:** Cormorant Garamond (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Giải pháp khoa học cho làn da căng bóng tự nhiên với peptide và hoa hồng.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng tra cứu công dụng hoạt chất (Niacinamide, B5, Ceramide).
- Chứng nhận mỹ phẩm an toàn da liễu không thử nghiệm trên động vật.
- Quy trình 3 bước dưỡng da chuẩn Hàn Quốc.
- **Tương tác Frontend độc quyền:**
- Trắc nghiệm chuẩn đoán loại da để đề xuất routine.
- Thêm nhanh combo dưỡng da vào giỏ hàng.
- Hỏi đáp trực tiếp cùng chuyên viên da liễu qua Zalo.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #23] MS33 — Cửa hàng thú cưng - demo 33 (ID: `cua-hang-thu-cung-demo-33`)
- **Ngành nghề Catalog:** Thú cưng | **Niche xác định:** Hệ Thống Thức Ăn Hữu Cơ & Dịch Vụ Chăm Sóc Thú Cưng
- **Archetype Kiến Trúc:** 01. Premium E-Commerce Storefront
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Mòng Két (#0d9488), Cam Hạnh Phúc (#f97316), Nền Sáng (#f0fdfa)
  - **Typography:** Outfit (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Dinh dưỡng thượng hạng và dịch vụ chăm sóc tận tâm cho thú cưng khỏe mạnh.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Thức ăn hạt hữu cơ giàu đạm không chứa ngũ cốc gây dị ứng.
- Quy trình tắm spa, cắt tỉa lông tạo kiểu an toàn không gây stress.
- Sổ theo dõi lịch tiêm phòng và thăm khám thú cưng định kỳ.
- **Tương tác Frontend độc quyền:**
- Lọc thức ăn theo độ tuổi thú cưng (Mèo con, Mèo trưởng thành, Chó già).
- Đặt lịch hẹn dịch vụ Spa tắm tỉa thú cưng theo ngày giờ.
- Giỏ hàng lưu trữ LocalStorage thuận tiện đặt thức ăn giao tận nhà.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #24] MS45 — demo 45 (ID: `barbershop-demo-45`)
- **Ngành nghề Catalog:** Thời trang | **Niche xác định:** Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế
- **Archetype Kiến Trúc:** 01. Premium E-Commerce Storefront
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#18181b), Vàng Nhạt (#fef3c7), Trắng (#ffffff)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Bộ sưu tập thời trang dẫn đầu xu hướng mùa mới.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lưới sản phẩm thời trang tỷ lệ ảnh 3:4 chuẩn lookbook.
- Huy hiệu New In, Best Seller và Ưu đãi tuần lễ thời trang.
- Khối cảm hứng phối đồ Street Style.
- **Tương tác Frontend độc quyền:**
- Lọc sản phẩm theo tầm giá và danh mục.
- Hover xem ảnh góc sau của trang phục.
- Lưu giỏ hàng và danh sách yêu thích.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #25] MS76 — Dịch vụ bảo vệ - demo 76 (ID: `dich-vu-bao-ve-demo-76`)
- **Ngành nghề Catalog:** Dịch vụ | **Niche xác định:** Dịch Vụ Bảo Vệ Mục Tiêu & Vệ Sĩ An Ninh Chuyên Nghiệp
- **Archetype Kiến Trúc:** 06. Corporate & Industrial B2B
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Thép (#0f172a), Xanh Kỹ Thuật (#1e3a8a), Cam Bảo Hộ (#f97316)
  - **Typography:** Space Grotesk (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Quy chuẩn sản xuất hiện đại, chất lượng vượt trội đáp ứng tiêu chuẩn quốc tế.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Chứng chỉ tiêu chuẩn chất lượng ISO 9001:2015 và an toàn môi trường.
- Quy mô nhà xưởng hiện đại diện tích hàng ngàn m2 cùng máy móc nhập khẩu.
- Kinh nghiệm cung ứng cho các tập đoàn đa quốc gia và đối tác lớn.
- **Tương tác Frontend độc quyền:**
- Form gửi Yêu Cầu Báo Giá Số Lượng Lớn (RFQ) kèm quy cách chi tiết.
- Tải hồ sơ năng lực công ty (Company Profile PDF).
- Tra cứu tiến độ sản xuất hoặc tình trạng vận đơn hàng hóa.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #26] MS38 — Dịch vụ gia công - cơ khí - demo 38 (ID: `dich-vu-gia-cong-co-khi-demo-38`)
- **Ngành nghề Catalog:** Khac | **Niche xác định:** Xưởng Cơ Khí Chính Xác & Gia Công Chi Tiết Máy CNC
- **Archetype Kiến Trúc:** 06. Corporate & Industrial B2B
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Thép (#0f172a), Xanh Kỹ Thuật (#1e3a8a), Cam Bảo Hộ (#f97316)
  - **Typography:** Space Grotesk (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Quy chuẩn sản xuất hiện đại, chất lượng vượt trội đáp ứng tiêu chuẩn quốc tế.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Chứng chỉ tiêu chuẩn chất lượng ISO 9001:2015 và an toàn môi trường.
- Quy mô nhà xưởng hiện đại diện tích hàng ngàn m2 cùng máy móc nhập khẩu.
- Kinh nghiệm cung ứng cho các tập đoàn đa quốc gia và đối tác lớn.
- **Tương tác Frontend độc quyền:**
- Form gửi Yêu Cầu Báo Giá Số Lượng Lớn (RFQ) kèm quy cách chi tiết.
- Tải hồ sơ năng lực công ty (Company Profile PDF).
- Tra cứu tiến độ sản xuất hoặc tình trạng vận đơn hàng hóa.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #27] MS44 — Dịch vụ in ấn và thiết kế - demo 44 (ID: `dich-vu-in-an-va-thiet-ke-demo-44`)
- **Ngành nghề Catalog:** Khac | **Niche xác định:** Xưởng In Ấn Bao Bì & Thiết Kế Ấn Phẩm Nhận Diện Thương Hiệu
- **Archetype Kiến Trúc:** 06. Corporate & Industrial B2B
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Thép (#0f172a), Xanh Kỹ Thuật (#1e3a8a), Cam Bảo Hộ (#f97316)
  - **Typography:** Space Grotesk (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Quy chuẩn sản xuất hiện đại, chất lượng vượt trội đáp ứng tiêu chuẩn quốc tế.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Chứng chỉ tiêu chuẩn chất lượng ISO 9001:2015 và an toàn môi trường.
- Quy mô nhà xưởng hiện đại diện tích hàng ngàn m2 cùng máy móc nhập khẩu.
- Kinh nghiệm cung ứng cho các tập đoàn đa quốc gia và đối tác lớn.
- **Tương tác Frontend độc quyền:**
- Form gửi Yêu Cầu Báo Giá Số Lượng Lớn (RFQ) kèm quy cách chi tiết.
- Tải hồ sơ năng lực công ty (Company Profile PDF).
- Tra cứu tiến độ sản xuất hoặc tình trạng vận đơn hàng hóa.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #28] MS47 — Dịch vụ sửa chữa Cơ Nhiệt - Điện Lạnh - demo 47 (ID: `dich-vu-sua-chua-co-nhiet-dien-lanh-demo-47`)
- **Ngành nghề Catalog:** Khac | **Niche xác định:** Dịch Vụ Kỹ Thuật Công Nghiệp & Thi Công Cơ Điện Lạnh
- **Archetype Kiến Trúc:** 06. Corporate & Industrial B2B
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Thép (#0f172a), Xanh Kỹ Thuật (#1e3a8a), Cam Bảo Hộ (#f97316)
  - **Typography:** Space Grotesk (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Quy chuẩn sản xuất hiện đại, chất lượng vượt trội đáp ứng tiêu chuẩn quốc tế.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Chứng chỉ tiêu chuẩn chất lượng ISO 9001:2015 và an toàn môi trường.
- Quy mô nhà xưởng hiện đại diện tích hàng ngàn m2 cùng máy móc nhập khẩu.
- Kinh nghiệm cung ứng cho các tập đoàn đa quốc gia và đối tác lớn.
- **Tương tác Frontend độc quyền:**
- Form gửi Yêu Cầu Báo Giá Số Lượng Lớn (RFQ) kèm quy cách chi tiết.
- Tải hồ sơ năng lực công ty (Company Profile PDF).
- Tra cứu tiến độ sản xuất hoặc tình trạng vận đơn hàng hóa.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #29] MS87 — Dịch vụ thiệp cưới - demo 87 (ID: `dich-vu-thiep-cuoi-demo-87`)
- **Ngành nghề Catalog:** Dịch vụ | **Niche xác định:** Studio Chụp Ảnh Nghệ Thuật & Thiết Kế Thiệp Cưới Cao Cấp
- **Archetype Kiến Trúc:** 11. Creative Portfolio & Agency
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng Tro (#fda4af), Xám Đậm (#334155), Trắng Tinh Khiết (#fafafa)
  - **Typography:** Playfair Display (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Lưu giữ những khoảnh khắc hạnh phúc trọn vẹn bằng góc máy nghệ thuật tinh tế.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bộ sưu tập ảnh cưới dạng triển lãm nghệ thuật không giới hạn khung viền.
- Gói dịch vụ cưới trọn gói gồm váy cưới thiết kế, trang điểm và album cao cấp.
- Đội ngũ nhiếp ảnh gia giàu kinh nghiệm sáng tạo từng góc chụp.
- **Tương tác Frontend độc quyền:**
- Lightbox phóng to ngắm nhìn từng khung hình độ sắc nét cao.
- Chọn mẫu phôi thiệp cưới ép kim và phông chữ tùy biến.
- Form đặt lịch hẹn thử trang phục và tư vấn concept chụp.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #30] MS22 — Điện thoại iphone ontech demo 22 (ID: `dien-thoai-iphone-ontech-demo-22`)
- **Ngành nghề Catalog:** Công nghệ | **Niche xác định:** Thiết Bị Công Nghệ Cao, Laptop & Phụ Kiện Gaming
- **Archetype Kiến Trúc:** 10. Tech Specs & Digital Solutions
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Cyan (#0284c7), Xanh Neon (#06b6d4), Nền Đen Slate (#0f172a)
  - **Typography:** Space Grotesk (Tiêu đề), JetBrains Mono / Inter (Nội dung)
  - **Bố cục Hero:** Đỉnh cao hiệu năng thế hệ mới với vi xử lý gen 14 và đồ họa chuyên nghiệp.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng thông số kỹ thuật chi tiết (CPU, GPU, RAM DDR5, Ổ cứng SSD NVMe).
- Chế độ hiển thị Dark-Tech tối ưu cho tín đồ công nghệ.
- Cam kết sản phẩm mới 100% nguyên seal kèm bảo hành tận nơi 24 tháng.
- **Tương tác Frontend độc quyền:**
- Công cụ chọn 2 sản phẩm để so sánh cấu hình kỹ thuật.
- Bộ lọc linh kiện theo phân khúc giá và thương hiệu.
- Kiểm tra tình trạng hàng có sẵn tại cửa hàng.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #31] MS32 — Đồ điện gia dụng demo 32 (ID: `do-dien-gia-dung-demo-32`)
- **Ngành nghề Catalog:** Công nghệ | **Niche xác định:** Thiết Bị Công Nghệ Cao, Laptop & Phụ Kiện Gaming
- **Archetype Kiến Trúc:** 10. Tech Specs & Digital Solutions
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Cyan (#0284c7), Xanh Neon (#06b6d4), Nền Đen Slate (#0f172a)
  - **Typography:** Space Grotesk (Tiêu đề), JetBrains Mono / Inter (Nội dung)
  - **Bố cục Hero:** Đỉnh cao hiệu năng thế hệ mới với vi xử lý gen 14 và đồ họa chuyên nghiệp.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng thông số kỹ thuật chi tiết (CPU, GPU, RAM DDR5, Ổ cứng SSD NVMe).
- Chế độ hiển thị Dark-Tech tối ưu cho tín đồ công nghệ.
- Cam kết sản phẩm mới 100% nguyên seal kèm bảo hành tận nơi 24 tháng.
- **Tương tác Frontend độc quyền:**
- Công cụ chọn 2 sản phẩm để so sánh cấu hình kỹ thuật.
- Bộ lọc linh kiện theo phân khúc giá và thương hiệu.
- Kiểm tra tình trạng hàng có sẵn tại cửa hàng.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #32] MS97 — Dụng cụ chơi nhạc - demo 97 (ID: `dung-cu-choi-nhac-demo-97`)
- **Ngành nghề Catalog:** Nội thất | **Niche xác định:** Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian
- **Archetype Kiến Trúc:** 04. Architecture & Interior Showcase
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Nâu Gỗ Sồi (#78350f), Nâu Hổ Phách (#b45309), Kem Sứ (#fefce8)
  - **Typography:** DM Sans (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Kiến tạo không gian sống tối giản, ấm áp và gần gũi thiên nhiên.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Phân loại bộ sưu tập theo từng không gian (Phòng khách, Bếp, Phòng ngủ).
- Thông số chất liệu gỗ sồi tự nhiên đạt chuẩn sấy chống mối mọt.
- Gợi ý set bàn ăn đồng bộ cùng ghế và tủ kệ tivi.
- **Tương tác Frontend độc quyền:**
- Xem kích thước 3 chiều (Dài x Rộng x Cao) của món đồ.
- Lọc sản phẩm theo chất liệu (Gỗ tự nhiên, Gỗ công nghiệp MDF).
- Yêu cầu kỹ sư tới tận nhà đo đạc và thiết kế 3D.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #33] MS66 — Dược phẩm Việt Nam - demo 66 (ID: `duoc-pham-viet-nam-demo-66`)
- **Ngành nghề Catalog:** Thực phẩm | **Niche xác định:** Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền
- **Archetype Kiến Trúc:** 09. Culinary & Gastronomy Experience
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đỏ Vang Ấm (#b91c1c), Nâu Cháy (#451a03), Vàng Nghệ (#f59e0b)
  - **Typography:** Cinzel (Tiêu đề), Plus Jakarta Sans (Nội dung)
  - **Bố cục Hero:** Trải nghiệm ẩm thực truyền thống đậm đà bản sắc với nguồn nguyên liệu sạch.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Menu phân rõ món khai vị, món chính, lẩu và món tráng miệng.
- Nhãn OCOP và cam kết không sử dụng chất phụ gia bảo quản độc hại.
- Không gian phòng tiệc gia đình và hội nghị ấm cúng.
- **Tương tác Frontend độc quyền:**
- Form Đặt Bàn Tiệc (Số người, Khung giờ, Yêu cầu phòng riêng).
- Bộ lọc món ăn theo khẩu vị (Thanh đạm, Đậm đà, Món chay).
- Đặt hàng đặc sản đóng gói giao tận nhà.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #34] MS01 — Fashion Demo 01 (ID: `fashion-demo-01`)
- **Ngành nghề Catalog:** Khac | **Niche xác định:** Thời Trang May Đo & Thiết Kế Đương Đại (Atelier Lookbook)
- **Archetype Kiến Trúc:** 02. Editorial Fashion & Lifestyle
- **Mức độ ưu tiên:** **P3** | **Trạng thái kỹ thuật hiện tại:** Customized-Rich
- **Đối tượng mục tiêu & Mục đích:** Phụ nữ hiện đại, nhân sự cao cấp, người yêu chuộng thời trang may đo tối giản. Trình diễn bộ sưu tập thời trang theo mùa, tôn vinh chất liệu lụa tơ tằm và phom dáng blazer.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Noir (#18181b), Vàng Hổ Phách (#d97706), Trắng ngà (#fafaf9)
  - **Typography:** Playfair Display (Tiêu đề), Montserrat (Nội dung)
  - **Bố cục Hero:** Asymmetrical Editorial Hero với người mẫu trong trang phục lụa và blazer thanh lịch.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bố cục tạp chí lệch tầng (Broken-grid) phá vỡ khung lưới truyền thống.
- Danh mục khám phá theo phong cách (Công sở thanh lịch vs Dạo phố cuối tuần).
- Lưới 24 sản phẩm thời trang phong phú có phân loại chi tiết.
- **Tương tác Frontend độc quyền:**
- Hover hoán đổi ảnh người mẫu góc nhìn thứ 2.
- Bộ lọc trang phục tức thì theo danh mục áo blazer, đầm midi, sơ mi lụa.
- Thanh điều hướng tối giản có nút mở menu di động trượt.
- **Yêu cầu Nội dung & Hình ảnh:** Bộ ảnh lookbook thời trang người mẫu và chất liệu vải thực tế.
- **Lỗi hiện tại cần khắc phục:** Đã hoàn thiện bố cục tốt. Cần bổ sung lưu trữ giỏ hàng LocalStorage.

---

### [Website #35] MS11 — Fashion Demo 11 (ID: `fashion-demo-11`)
- **Ngành nghề Catalog:** Thời trang | **Niche xác định:** Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế
- **Archetype Kiến Trúc:** 01. Premium E-Commerce Storefront
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#18181b), Vàng Nhạt (#fef3c7), Trắng (#ffffff)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Bộ sưu tập thời trang dẫn đầu xu hướng mùa mới.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lưới sản phẩm thời trang tỷ lệ ảnh 3:4 chuẩn lookbook.
- Huy hiệu New In, Best Seller và Ưu đãi tuần lễ thời trang.
- Khối cảm hứng phối đồ Street Style.
- **Tương tác Frontend độc quyền:**
- Lọc sản phẩm theo tầm giá và danh mục.
- Hover xem ảnh góc sau của trang phục.
- Lưu giỏ hàng và danh sách yêu thích.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #36] MS16 — Fashion Demo 16 (ID: `fashion-demo-16`)
- **Ngành nghề Catalog:** Thời trang | **Niche xác định:** Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế
- **Archetype Kiến Trúc:** 01. Premium E-Commerce Storefront
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#18181b), Vàng Nhạt (#fef3c7), Trắng (#ffffff)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Bộ sưu tập thời trang dẫn đầu xu hướng mùa mới.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lưới sản phẩm thời trang tỷ lệ ảnh 3:4 chuẩn lookbook.
- Huy hiệu New In, Best Seller và Ưu đãi tuần lễ thời trang.
- Khối cảm hứng phối đồ Street Style.
- **Tương tác Frontend độc quyền:**
- Lọc sản phẩm theo tầm giá và danh mục.
- Hover xem ảnh góc sau của trang phục.
- Lưu giỏ hàng và danh sách yêu thích.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #37] MS63 — Fashion demo 63 (ID: `fashion-demo-63`)
- **Ngành nghề Catalog:** Studio | **Niche xác định:** Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế
- **Archetype Kiến Trúc:** 01. Premium E-Commerce Storefront
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#18181b), Vàng Nhạt (#fef3c7), Trắng (#ffffff)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Bộ sưu tập thời trang dẫn đầu xu hướng mùa mới.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lưới sản phẩm thời trang tỷ lệ ảnh 3:4 chuẩn lookbook.
- Huy hiệu New In, Best Seller và Ưu đãi tuần lễ thời trang.
- Khối cảm hứng phối đồ Street Style.
- **Tương tác Frontend độc quyền:**
- Lọc sản phẩm theo tầm giá và danh mục.
- Hover xem ảnh góc sau của trang phục.
- Lưu giỏ hàng và danh sách yêu thích.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #38] MS14 — Flower demo 14 (ID: `flower-demo-14`)
- **Ngành nghề Catalog:** Tổ chức sự kiện | **Niche xác định:** Dịch Vụ Chuyên Nghiệp
- **Archetype Kiến Trúc:** 06. Corporate & Professional Services
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Navy (#1e40af), Xanh Lam (#3b82f6), Trắng (#ffffff)
  - **Typography:** Inter (Tiêu đề), Plus Jakarta Sans (Nội dung)
  - **Bố cục Hero:** Thông điệp dịch vụ cốt lõi + Hình ảnh chuyên gia tận tâm.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Quy trình làm việc 4 bước minh bạch và chuẩn mực.
- Cam kết bảo hành và đồng hành lâu dài cùng khách hàng.
- Hotline Zalo tư vấn 24/7 trực tiếp từ chuyên gia phụ trách.
- **Tương tác Frontend độc quyền:**
- Form gửi yêu cầu tư vấn báo giá chi tiết.
- Bộ lọc dịch vụ theo nhu cầu và quy mô ngân sách.
- Liên kết chat Zalo nhanh với nội dung soạn sẵn.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #39] MS07 — Food demo 07 (ID: `food-demo-07`)
- **Ngành nghề Catalog:** Khac | **Niche xác định:** Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền
- **Archetype Kiến Trúc:** 09. Culinary & Gastronomy Experience
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đỏ Vang Ấm (#b91c1c), Nâu Cháy (#451a03), Vàng Nghệ (#f59e0b)
  - **Typography:** Cinzel (Tiêu đề), Plus Jakarta Sans (Nội dung)
  - **Bố cục Hero:** Trải nghiệm ẩm thực truyền thống đậm đà bản sắc với nguồn nguyên liệu sạch.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Menu phân rõ món khai vị, món chính, lẩu và món tráng miệng.
- Nhãn OCOP và cam kết không sử dụng chất phụ gia bảo quản độc hại.
- Không gian phòng tiệc gia đình và hội nghị ấm cúng.
- **Tương tác Frontend độc quyền:**
- Form Đặt Bàn Tiệc (Số người, Khung giờ, Yêu cầu phòng riêng).
- Bộ lọc món ăn theo khẩu vị (Thanh đạm, Đậm đà, Món chay).
- Đặt hàng đặc sản đóng gói giao tận nhà.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #40] MS12 — Food demo 12 (ID: `food-demo-12`)
- **Ngành nghề Catalog:** Ẩm thực - Nhà hàng | **Niche xác định:** Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền
- **Archetype Kiến Trúc:** 09. Culinary & Gastronomy Experience
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đỏ Vang Ấm (#b91c1c), Nâu Cháy (#451a03), Vàng Nghệ (#f59e0b)
  - **Typography:** Cinzel (Tiêu đề), Plus Jakarta Sans (Nội dung)
  - **Bố cục Hero:** Trải nghiệm ẩm thực truyền thống đậm đà bản sắc với nguồn nguyên liệu sạch.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Menu phân rõ món khai vị, món chính, lẩu và món tráng miệng.
- Nhãn OCOP và cam kết không sử dụng chất phụ gia bảo quản độc hại.
- Không gian phòng tiệc gia đình và hội nghị ấm cúng.
- **Tương tác Frontend độc quyền:**
- Form Đặt Bàn Tiệc (Số người, Khung giờ, Yêu cầu phòng riêng).
- Bộ lọc món ăn theo khẩu vị (Thanh đạm, Đậm đà, Món chay).
- Đặt hàng đặc sản đóng gói giao tận nhà.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #41] MS03 — Furniture demo 03 (ID: `furniture-demo-03`)
- **Ngành nghề Catalog:** Khac | **Niche xác định:** Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian
- **Archetype Kiến Trúc:** 04. Architecture & Interior Showcase
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Nâu Gỗ Sồi (#78350f), Nâu Hổ Phách (#b45309), Kem Sứ (#fefce8)
  - **Typography:** DM Sans (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Kiến tạo không gian sống tối giản, ấm áp và gần gũi thiên nhiên.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Phân loại bộ sưu tập theo từng không gian (Phòng khách, Bếp, Phòng ngủ).
- Thông số chất liệu gỗ sồi tự nhiên đạt chuẩn sấy chống mối mọt.
- Gợi ý set bàn ăn đồng bộ cùng ghế và tủ kệ tivi.
- **Tương tác Frontend độc quyền:**
- Xem kích thước 3 chiều (Dài x Rộng x Cao) của món đồ.
- Lọc sản phẩm theo chất liệu (Gỗ tự nhiên, Gỗ công nghiệp MDF).
- Yêu cầu kỹ sư tới tận nhà đo đạc và thiết kế 3D.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #42] MS10 — Furniture demo 10 (ID: `furniture-demo-10`)
- **Ngành nghề Catalog:** Khac | **Niche xác định:** Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian
- **Archetype Kiến Trúc:** 04. Architecture & Interior Showcase
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Nâu Gỗ Sồi (#78350f), Nâu Hổ Phách (#b45309), Kem Sứ (#fefce8)
  - **Typography:** DM Sans (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Kiến tạo không gian sống tối giản, ấm áp và gần gũi thiên nhiên.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Phân loại bộ sưu tập theo từng không gian (Phòng khách, Bếp, Phòng ngủ).
- Thông số chất liệu gỗ sồi tự nhiên đạt chuẩn sấy chống mối mọt.
- Gợi ý set bàn ăn đồng bộ cùng ghế và tủ kệ tivi.
- **Tương tác Frontend độc quyền:**
- Xem kích thước 3 chiều (Dài x Rộng x Cao) của món đồ.
- Lọc sản phẩm theo chất liệu (Gỗ tự nhiên, Gỗ công nghiệp MDF).
- Yêu cầu kỹ sư tới tận nhà đo đạc và thiết kế 3D.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #43] MS25 — Furniture demo 25 (ID: `furniture-demo-25`)
- **Ngành nghề Catalog:** Gia dụng | **Niche xác định:** Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian
- **Archetype Kiến Trúc:** 04. Architecture & Interior Showcase
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Nâu Gỗ Sồi (#78350f), Nâu Hổ Phách (#b45309), Kem Sứ (#fefce8)
  - **Typography:** DM Sans (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Kiến tạo không gian sống tối giản, ấm áp và gần gũi thiên nhiên.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Phân loại bộ sưu tập theo từng không gian (Phòng khách, Bếp, Phòng ngủ).
- Thông số chất liệu gỗ sồi tự nhiên đạt chuẩn sấy chống mối mọt.
- Gợi ý set bàn ăn đồng bộ cùng ghế và tủ kệ tivi.
- **Tương tác Frontend độc quyền:**
- Xem kích thước 3 chiều (Dài x Rộng x Cao) của món đồ.
- Lọc sản phẩm theo chất liệu (Gỗ tự nhiên, Gỗ công nghiệp MDF).
- Yêu cầu kỹ sư tới tận nhà đo đạc và thiết kế 3D.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #44] MS112 — giáo dục mầm non - demo 112 (ID: `giao-duc-mam-non-demo-112`)
- **Ngành nghề Catalog:** Giáo dục | **Niche xác định:** Trường Mầm Non Song Ngữ & Giáo Dục Thể Chất Toàn Diện
- **Archetype Kiến Trúc:** 08. Education & Academy Hub
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Cam Nắng (#f97316), Vàng Tươi (#facc15), Xanh Mầm Non (#22c55e)
  - **Typography:** Nunito (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Nơi ươm mầm tài năng và nuôi dưỡng tuổi thơ hạnh phúc của trẻ.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Thực đơn dinh dưỡng 5 ngày trong tuần được chuyên gia viện dinh dưỡng phê duyệt.
- Hệ thống camera trực tuyến 24/7 phụ huynh an tâm quan sát con.
- Phương pháp giáo dục Montessori kết hợp tiếng Anh bản ngữ.
- **Tương tác Frontend độc quyền:**
- Đăng ký tham quan trường và trải nghiệm 1 ngày làm học sinh mầm non.
- Xem thời khóa biểu mẫu và thực đơn ăn dặm theo tuần.
- Tính học phí trọn gói gồm xe đưa đón và bán trú.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #45] MS80 — Hair salon - demo 80 (ID: `hair-salon-demo-80`)
- **Ngành nghề Catalog:** Spa - Làm đẹp | **Niche xác định:** Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da
- **Archetype Kiến Trúc:** 03. Beauty & Cosmetics Atelier
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng Mộc (#be185d), Hoa Hồng (#fff1f2), Đỏ Rượu (#4c0519)
  - **Typography:** Cormorant Garamond (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Giải pháp khoa học cho làn da căng bóng tự nhiên với peptide và hoa hồng.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng tra cứu công dụng hoạt chất (Niacinamide, B5, Ceramide).
- Chứng nhận mỹ phẩm an toàn da liễu không thử nghiệm trên động vật.
- Quy trình 3 bước dưỡng da chuẩn Hàn Quốc.
- **Tương tác Frontend độc quyền:**
- Trắc nghiệm chuẩn đoán loại da để đề xuất routine.
- Thêm nhanh combo dưỡng da vào giỏ hàng.
- Hỏi đáp trực tiếp cùng chuyên viên da liễu qua Zalo.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #46] MS59 — Hệ thống chăm sóc mẹ và bé Momibi - demo 59 (ID: `he-thong-cham-soc-me-va-be-momibi-demo-59`)
- **Ngành nghề Catalog:** Spa - Làm đẹp | **Niche xác định:** Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da
- **Archetype Kiến Trúc:** 03. Beauty & Cosmetics Atelier
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng Mộc (#be185d), Hoa Hồng (#fff1f2), Đỏ Rượu (#4c0519)
  - **Typography:** Cormorant Garamond (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Giải pháp khoa học cho làn da căng bóng tự nhiên với peptide và hoa hồng.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng tra cứu công dụng hoạt chất (Niacinamide, B5, Ceramide).
- Chứng nhận mỹ phẩm an toàn da liễu không thử nghiệm trên động vật.
- Quy trình 3 bước dưỡng da chuẩn Hàn Quốc.
- **Tương tác Frontend độc quyền:**
- Trắc nghiệm chuẩn đoán loại da để đề xuất routine.
- Thêm nhanh combo dưỡng da vào giỏ hàng.
- Hỏi đáp trực tiếp cùng chuyên viên da liễu qua Zalo.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #47] MS93 — Kiến trúc xây dựng - demo 93 (ID: `kien-truc-xay-dung-demo-93`)
- **Ngành nghề Catalog:** Doanh nghiệp | **Niche xác định:** Dịch Vụ Kỹ Thuật Công Nghiệp & Thi Công Cơ Điện Lạnh
- **Archetype Kiến Trúc:** 06. Corporate & Industrial B2B
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Thép (#0f172a), Xanh Kỹ Thuật (#1e3a8a), Cam Bảo Hộ (#f97316)
  - **Typography:** Space Grotesk (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Quy chuẩn sản xuất hiện đại, chất lượng vượt trội đáp ứng tiêu chuẩn quốc tế.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Chứng chỉ tiêu chuẩn chất lượng ISO 9001:2015 và an toàn môi trường.
- Quy mô nhà xưởng hiện đại diện tích hàng ngàn m2 cùng máy móc nhập khẩu.
- Kinh nghiệm cung ứng cho các tập đoàn đa quốc gia và đối tác lớn.
- **Tương tác Frontend độc quyền:**
- Form gửi Yêu Cầu Báo Giá Số Lượng Lớn (RFQ) kèm quy cách chi tiết.
- Tải hồ sơ năng lực công ty (Company Profile PDF).
- Tra cứu tiến độ sản xuất hoặc tình trạng vận đơn hàng hóa.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #48] MS48 — Landing Page - Bất động sản - demo 48 (ID: `landing-page-bat-dong-san-demo-48`)
- **Ngành nghề Catalog:** Doanh nghiệp | **Niche xác định:** Bất Động Sản Nghỉ Dưỡng & Căn Hộ Đô Thị Sinh Thái
- **Archetype Kiến Trúc:** 04. Architecture & Real Estate
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Navy Sâu (#1e3a8a), Vàng Kim Hoàng Gia (#d97706), Trắng Sứ (#f8fafc)
  - **Typography:** Syne (Tiêu đề), DM Sans (Nội dung)
  - **Bố cục Hero:** Kiệt tác không gian sống thượng lưu ven sông với tầm nhìn triệu đô.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bản đồ vị trí tọa độ vàng và liên kết hạ tầng giao thông vùng.
- Bản vẽ mặt bằng kiến trúc chi tiết từng căn hộ penthouse/shophouse.
- Bảng tiến độ thanh toán linh hoạt hỗ trợ lãi suất 0% từ ngân hàng.
- **Tương tác Frontend độc quyền:**
- Bộ lọc dự án theo khoảng giá (Tỷ VNĐ) và diện tích m2.
- Tải trọn bộ tài liệu pháp lý và mặt bằng phân lô PDF.
- Đăng ký lái xe đưa đón tham quan nhà mẫu thực tế.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #49] MS49 — Landing Page - Thực phẩm chức năng - demo 49 (ID: `landing-page-thuc-pham-chuc-nang-demo-49`)
- **Ngành nghề Catalog:** Y tế | **Niche xác định:** Nhà Thuốc Đạt Chuẩn GPP & Thiết Bị Y Tế Gia Đình
- **Archetype Kiến Trúc:** 07. Healthcare & Clinical Services
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Lam Y Tế (#0284c7), Xanh Ngọc Cứu Thương (#10b981), Trắng Y Khoa (#ffffff)
  - **Typography:** Lexend (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Tận tâm chăm sóc sức khỏe gia đình với thuốc chính hãng và thiết bị y tế chuẩn.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Tem xác thực xuất xứ và giấy phép lưu hành của Bộ Y Tế.
- Hướng dẫn liều lượng và chống chỉ định y khoa rõ ràng minh bạch.
- Dịch vụ dược sĩ gia đình tư vấn miễn phí qua hotline 24/7.
- **Tương tác Frontend độc quyền:**
- Gửi hình chụp đơn thuốc để Dược sĩ đối soát báo giá.
- Bộ lọc thiết bị y tế (Máy đo huyết áp, Máy đo đường huyết, Hộp sơ cứu).
- Định vị nhà thuốc gần nhất nhận thuốc trong 30 phút.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #50] MS67 — Mầm non Trí Tâm - demo 67 (ID: `mam-non-tri-tam-demo-67`)
- **Ngành nghề Catalog:** Giáo dục | **Niche xác định:** Trường Mầm Non Song Ngữ & Giáo Dục Thể Chất Toàn Diện
- **Archetype Kiến Trúc:** 08. Education & Academy Hub
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Cam Nắng (#f97316), Vàng Tươi (#facc15), Xanh Mầm Non (#22c55e)
  - **Typography:** Nunito (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Nơi ươm mầm tài năng và nuôi dưỡng tuổi thơ hạnh phúc của trẻ.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Thực đơn dinh dưỡng 5 ngày trong tuần được chuyên gia viện dinh dưỡng phê duyệt.
- Hệ thống camera trực tuyến 24/7 phụ huynh an tâm quan sát con.
- Phương pháp giáo dục Montessori kết hợp tiếng Anh bản ngữ.
- **Tương tác Frontend độc quyền:**
- Đăng ký tham quan trường và trải nghiệm 1 ngày làm học sinh mầm non.
- Xem thời khóa biểu mẫu và thực đơn ăn dặm theo tuần.
- Tính học phí trọn gói gồm xe đưa đón và bán trú.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #51] MS08 — Media demo 08 (ID: `media-demo-08`)
- **Ngành nghề Catalog:** Doanh nghiệp | **Niche xác định:** Studio Chụp Ảnh Nghệ Thuật & Thiết Kế Thiệp Cưới Cao Cấp
- **Archetype Kiến Trúc:** 11. Creative Portfolio & Agency
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng Tro (#fda4af), Xám Đậm (#334155), Trắng Tinh Khiết (#fafafa)
  - **Typography:** Playfair Display (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Lưu giữ những khoảnh khắc hạnh phúc trọn vẹn bằng góc máy nghệ thuật tinh tế.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bộ sưu tập ảnh cưới dạng triển lãm nghệ thuật không giới hạn khung viền.
- Gói dịch vụ cưới trọn gói gồm váy cưới thiết kế, trang điểm và album cao cấp.
- Đội ngũ nhiếp ảnh gia giàu kinh nghiệm sáng tạo từng góc chụp.
- **Tương tác Frontend độc quyền:**
- Lightbox phóng to ngắm nhìn từng khung hình độ sắc nét cao.
- Chọn mẫu phôi thiệp cưới ép kim và phông chữ tùy biến.
- Form đặt lịch hẹn thử trang phục và tư vấn concept chụp.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #52] MS100 — Mỹ phẩm chăm sóc sắc đẹp - web 100 (ID: `my-pham-cham-soc-sac-dep-web-100`)
- **Ngành nghề Catalog:** Mỹ phẩm | **Niche xác định:** Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da
- **Archetype Kiến Trúc:** 03. Beauty & Cosmetics Atelier
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng Mộc (#be185d), Hoa Hồng (#fff1f2), Đỏ Rượu (#4c0519)
  - **Typography:** Cormorant Garamond (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Giải pháp khoa học cho làn da căng bóng tự nhiên với peptide và hoa hồng.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng tra cứu công dụng hoạt chất (Niacinamide, B5, Ceramide).
- Chứng nhận mỹ phẩm an toàn da liễu không thử nghiệm trên động vật.
- Quy trình 3 bước dưỡng da chuẩn Hàn Quốc.
- **Tương tác Frontend độc quyền:**
- Trắc nghiệm chuẩn đoán loại da để đề xuất routine.
- Thêm nhanh combo dưỡng da vào giỏ hàng.
- Hỏi đáp trực tiếp cùng chuyên viên da liễu qua Zalo.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #53] MS26 — nhà hàng - demo 26 (ID: `resort-nha-hang-demo-26`)
- **Ngành nghề Catalog:** Du lịch | **Niche xác định:** Lữ Hành Quốc Tế & Kỳ Nghỉ Trọn Gói Cao Cấp
- **Archetype Kiến Trúc:** 05. Tourism & Destination Explorer
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Đại Dương (#0284c7), Cam Hoàng Hôn (#f59e0b), Xanh Nước Biển (#f0f9ff)
  - **Typography:** Outfit (Tiêu đề), Merriweather (Nội dung)
  - **Bố cục Hero:** Khám phá những vùng đất thiên đường với kỳ nghỉ dưỡng 5 sao chuẩn mực.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lịch trình chi tiết từng ngày (Đi đâu, Ăn gì, Nghỉ tại khách sạn nào).
- Đã bao gồm trọn gói vé máy bay khứ hồi, bảo hiểm quốc tế và visa.
- Hướng dẫn viên chuyên nghiệp, nhiệt tình, am hiểu văn hóa địa phương.
- **Tương tác Frontend độc quyền:**
- Lọc tour theo mức giá, thời gian khởi hành và điểm đến.
- Công cụ tính tổng chi phí theo số lượng người lớn và trẻ em.
- Form đăng ký nhận tư vấn lịch trình tour thiết kế riêng theo đoàn.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #54] MS28 — Nhà hàng quán ăn Halu - demo 28 (ID: `nha-hang-quan-an-halu-demo-28`)
- **Ngành nghề Catalog:** Ẩm thực - Nhà hàng | **Niche xác định:** Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền
- **Archetype Kiến Trúc:** 09. Culinary & Gastronomy Experience
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đỏ Vang Ấm (#b91c1c), Nâu Cháy (#451a03), Vàng Nghệ (#f59e0b)
  - **Typography:** Cinzel (Tiêu đề), Plus Jakarta Sans (Nội dung)
  - **Bố cục Hero:** Trải nghiệm ẩm thực truyền thống đậm đà bản sắc với nguồn nguyên liệu sạch.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Menu phân rõ món khai vị, món chính, lẩu và món tráng miệng.
- Nhãn OCOP và cam kết không sử dụng chất phụ gia bảo quản độc hại.
- Không gian phòng tiệc gia đình và hội nghị ấm cúng.
- **Tương tác Frontend độc quyền:**
- Form Đặt Bàn Tiệc (Số người, Khung giờ, Yêu cầu phòng riêng).
- Bộ lọc món ăn theo khẩu vị (Thanh đạm, Đậm đà, Món chay).
- Đặt hàng đặc sản đóng gói giao tận nhà.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #55] MS34 — Nha khoa Aspen - demo 34 (ID: `nha-khoa-aspen-demo-34`)
- **Ngành nghề Catalog:** Y tế | **Niche xác định:** Nhà Thuốc Đạt Chuẩn GPP & Thiết Bị Y Tế Gia Đình
- **Archetype Kiến Trúc:** 07. Healthcare & Clinical Services
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Lam Y Tế (#0284c7), Xanh Ngọc Cứu Thương (#10b981), Trắng Y Khoa (#ffffff)
  - **Typography:** Lexend (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Tận tâm chăm sóc sức khỏe gia đình với thuốc chính hãng và thiết bị y tế chuẩn.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Tem xác thực xuất xứ và giấy phép lưu hành của Bộ Y Tế.
- Hướng dẫn liều lượng và chống chỉ định y khoa rõ ràng minh bạch.
- Dịch vụ dược sĩ gia đình tư vấn miễn phí qua hotline 24/7.
- **Tương tác Frontend độc quyền:**
- Gửi hình chụp đơn thuốc để Dược sĩ đối soát báo giá.
- Bộ lọc thiết bị y tế (Máy đo huyết áp, Máy đo đường huyết, Hộp sơ cứu).
- Định vị nhà thuốc gần nhất nhận thuốc trong 30 phút.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #56] MS51 — Nhà thuốc - medimall - demo 51 (ID: `nha-thuoc-medimall-demo-51`)
- **Ngành nghề Catalog:** Y tế | **Niche xác định:** Nhà Thuốc Đạt Chuẩn GPP & Thiết Bị Y Tế Gia Đình
- **Archetype Kiến Trúc:** 07. Healthcare & Clinical Services
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Lam Y Tế (#0284c7), Xanh Ngọc Cứu Thương (#10b981), Trắng Y Khoa (#ffffff)
  - **Typography:** Lexend (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Tận tâm chăm sóc sức khỏe gia đình với thuốc chính hãng và thiết bị y tế chuẩn.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Tem xác thực xuất xứ và giấy phép lưu hành của Bộ Y Tế.
- Hướng dẫn liều lượng và chống chỉ định y khoa rõ ràng minh bạch.
- Dịch vụ dược sĩ gia đình tư vấn miễn phí qua hotline 24/7.
- **Tương tác Frontend độc quyền:**
- Gửi hình chụp đơn thuốc để Dược sĩ đối soát báo giá.
- Bộ lọc thiết bị y tế (Máy đo huyết áp, Máy đo đường huyết, Hộp sơ cứu).
- Định vị nhà thuốc gần nhất nhận thuốc trong 30 phút.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #57] MS27 — Nội thất MyCool demo 27 (ID: `noi-that-mycool-demo-27`)
- **Ngành nghề Catalog:** Nội thất | **Niche xác định:** Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian
- **Archetype Kiến Trúc:** 04. Architecture & Interior Showcase
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Nâu Gỗ Sồi (#78350f), Nâu Hổ Phách (#b45309), Kem Sứ (#fefce8)
  - **Typography:** DM Sans (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Kiến tạo không gian sống tối giản, ấm áp và gần gũi thiên nhiên.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Phân loại bộ sưu tập theo từng không gian (Phòng khách, Bếp, Phòng ngủ).
- Thông số chất liệu gỗ sồi tự nhiên đạt chuẩn sấy chống mối mọt.
- Gợi ý set bàn ăn đồng bộ cùng ghế và tủ kệ tivi.
- **Tương tác Frontend độc quyền:**
- Xem kích thước 3 chiều (Dài x Rộng x Cao) của món đồ.
- Lọc sản phẩm theo chất liệu (Gỗ tự nhiên, Gỗ công nghiệp MDF).
- Yêu cầu kỹ sư tới tận nhà đo đạc và thiết kế 3D.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #58] MS36 — Phụ tùng ô tô xe máy - demo 36 (ID: `phu-tung-o-to-xe-may-demo-36`)
- **Ngành nghề Catalog:** Ô tô - Xe máy | **Niche xác định:** Showroom Mua Bán Xe & Trung Tâm Chăm Sóc Xe Chuyên Nghiệp
- **Archetype Kiến Trúc:** 12. Automotive & Showroom Experience
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#0f172a), Đỏ Rực (#e11d48), Xám Kim Loại (#f1f5f9)
  - **Typography:** Barlow Semi Condensed (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Công nghệ vận hành vượt bậc, cảm giác lái phấn khích và dịch vụ phụ tùng chính hãng.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng kiểm định 176 hạng mục kỹ thuật chuẩn chính hãng đối với xe lướt.
- Dịch vụ độ mâm lốp, nâng cấp âm thanh và phủ Ceramic bảo vệ sơn.
- Chính sách bảo hành động cơ và hộp số lên tới 3 năm.
- **Tương tác Frontend độc quyền:**
- Lọc các dòng xe theo phân khúc Sedan, SUV, Bán tải, Xe điện.
- Form đăng ký lái thử xe tận nơi thuận tiện.
- Ước tính chi phí trả góp và bảng tính lãi suất hàng tháng.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #59] MS79 — Sàn gỗ cao cấp - demo 79 (ID: `san-go-cao-cap-demo-79`)
- **Ngành nghề Catalog:** Nội thất | **Niche xác định:** Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian
- **Archetype Kiến Trúc:** 04. Architecture & Interior Showcase
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Nâu Gỗ Sồi (#78350f), Nâu Hổ Phách (#b45309), Kem Sứ (#fefce8)
  - **Typography:** DM Sans (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Kiến tạo không gian sống tối giản, ấm áp và gần gũi thiên nhiên.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Phân loại bộ sưu tập theo từng không gian (Phòng khách, Bếp, Phòng ngủ).
- Thông số chất liệu gỗ sồi tự nhiên đạt chuẩn sấy chống mối mọt.
- Gợi ý set bàn ăn đồng bộ cùng ghế và tủ kệ tivi.
- **Tương tác Frontend độc quyền:**
- Xem kích thước 3 chiều (Dài x Rộng x Cao) của món đồ.
- Lọc sản phẩm theo chất liệu (Gỗ tự nhiên, Gỗ công nghiệp MDF).
- Yêu cầu kỹ sư tới tận nhà đo đạc và thiết kế 3D.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #60] MS77 — Siêu thị nệm - demo 77 (ID: `sieu-thi-nem-demo-77`)
- **Ngành nghề Catalog:** Nội thất | **Niche xác định:** Siêu Thị Nệm Cao Su Thiên Nhiên & Chăm Sóc Giấc Ngủ
- **Archetype Kiến Trúc:** 04. Architecture & Interior Showcase
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Indigo (#1e1b4b), Xanh Êm Ái (#4338ca), Trắng Kem (#f8fafc)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Nâng niu giấc ngủ chuẩn công thái học với nệm cao su 100% thiên nhiên.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng so sánh độ êm ái và bảo hành 10-15 năm chính hãng.
- Chính sách ngủ thử 100 ngày đổi trả miễn phí.
- Bộ chọn kích thước nệm chuẩn (1m6x2m, 1m8x2m, 2mx2m2).
- **Tương tác Frontend độc quyền:**
- Bộ lọc chọn kích thước và độ dày nệm (5cm, 10cm, 15cm).
- Tính giá theo kích thước nệm tức thì.
- Đăng ký giao hàng và trải nghiệm thử tại nhà.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #61] MS43 — Sơn nước - demo 43 (ID: `son-nuoc-demo-43`)
- **Ngành nghề Catalog:** Khac | **Niche xác định:** Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da
- **Archetype Kiến Trúc:** 03. Beauty & Cosmetics Atelier
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng Mộc (#be185d), Hoa Hồng (#fff1f2), Đỏ Rượu (#4c0519)
  - **Typography:** Cormorant Garamond (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Giải pháp khoa học cho làn da căng bóng tự nhiên với peptide và hoa hồng.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng tra cứu công dụng hoạt chất (Niacinamide, B5, Ceramide).
- Chứng nhận mỹ phẩm an toàn da liễu không thử nghiệm trên động vật.
- Quy trình 3 bước dưỡng da chuẩn Hàn Quốc.
- **Tương tác Frontend độc quyền:**
- Trắc nghiệm chuẩn đoán loại da để đề xuất routine.
- Thêm nhanh combo dưỡng da vào giỏ hàng.
- Hỏi đáp trực tiếp cùng chuyên viên da liễu qua Zalo.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #62] MS18 — Spa demo 18 (ID: `spa-demo-18`)
- **Ngành nghề Catalog:** Mỹ phẩm | **Niche xác định:** Spa Trị Liệu, Dưỡng Sinh & Chăm Sóc Sức Khỏe Thượng Lưu
- **Archetype Kiến Trúc:** 03. Beauty & Cosmetics Atelier
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Rừng Trầm (#064e3b), Xanh Thảo Mộc (#047857), Vàng Ánh Kim (#d97706)
  - **Typography:** Cormorant Garamond (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Không gian thư thái đánh thức ngũ quan và tái tạo năng lượng nguyên bản.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Gói liệu trình gội đầu dưỡng sinh thảo dược và massage đá nóng.
- Hồ sơ kỹ thuật viên tay nghề cao đạt chuẩn quốc tế.
- Không gian phòng VIP trị liệu riêng tư yên tĩnh.
- **Tương tác Frontend độc quyền:**
- Bộ chọn gói dịch vụ và đặt lịch hẹn khung giờ trống.
- Tính toán thời gian liệu trình (60p, 90p, 120p).
- Nhận voucher ưu đãi buổi trải nghiệm đầu tiên.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #63] MS20 — Tạp hóa - Thực Phẩm Nest 20 (ID: `tap-hoa-thuc-pham-nest-20`)
- **Ngành nghề Catalog:** Ẩm thực - Nhà hàng | **Niche xác định:** Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền
- **Archetype Kiến Trúc:** 09. Culinary & Gastronomy Experience
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đỏ Vang Ấm (#b91c1c), Nâu Cháy (#451a03), Vàng Nghệ (#f59e0b)
  - **Typography:** Cinzel (Tiêu đề), Plus Jakarta Sans (Nội dung)
  - **Bố cục Hero:** Trải nghiệm ẩm thực truyền thống đậm đà bản sắc với nguồn nguyên liệu sạch.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Menu phân rõ món khai vị, món chính, lẩu và món tráng miệng.
- Nhãn OCOP và cam kết không sử dụng chất phụ gia bảo quản độc hại.
- Không gian phòng tiệc gia đình và hội nghị ấm cúng.
- **Tương tác Frontend độc quyền:**
- Form Đặt Bàn Tiệc (Số người, Khung giờ, Yêu cầu phòng riêng).
- Bộ lọc món ăn theo khẩu vị (Thanh đạm, Đậm đà, Món chay).
- Đặt hàng đặc sản đóng gói giao tận nhà.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #64] MS81 — Thế giới đồng hồ - demo 81 (ID: `the-gioi-dong-ho-demo-81`)
- **Ngành nghề Catalog:** Thời trang | **Niche xác định:** Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế
- **Archetype Kiến Trúc:** 01. Premium E-Commerce Storefront
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#18181b), Vàng Nhạt (#fef3c7), Trắng (#ffffff)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Bộ sưu tập thời trang dẫn đầu xu hướng mùa mới.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lưới sản phẩm thời trang tỷ lệ ảnh 3:4 chuẩn lookbook.
- Huy hiệu New In, Best Seller và Ưu đãi tuần lễ thời trang.
- Khối cảm hứng phối đồ Street Style.
- **Tương tác Frontend độc quyền:**
- Lọc sản phẩm theo tầm giá và danh mục.
- Hover xem ảnh góc sau của trang phục.
- Lưu giỏ hàng và danh sách yêu thích.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #65] MS39 — Thế giới gia dụng online - demo 39 (ID: `the-gioi-gia-dung-online-demo-39`)
- **Ngành nghề Catalog:** Nội thất | **Niche xác định:** Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian
- **Archetype Kiến Trúc:** 04. Architecture & Interior Showcase
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Nâu Gỗ Sồi (#78350f), Nâu Hổ Phách (#b45309), Kem Sứ (#fefce8)
  - **Typography:** DM Sans (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Kiến tạo không gian sống tối giản, ấm áp và gần gũi thiên nhiên.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Phân loại bộ sưu tập theo từng không gian (Phòng khách, Bếp, Phòng ngủ).
- Thông số chất liệu gỗ sồi tự nhiên đạt chuẩn sấy chống mối mọt.
- Gợi ý set bàn ăn đồng bộ cùng ghế và tủ kệ tivi.
- **Tương tác Frontend độc quyền:**
- Xem kích thước 3 chiều (Dài x Rộng x Cao) của món đồ.
- Lọc sản phẩm theo chất liệu (Gỗ tự nhiên, Gỗ công nghiệp MDF).
- Yêu cầu kỹ sư tới tận nhà đo đạc và thiết kế 3D.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #66] MS83 — Thế giới nệm - demo 83 (ID: `the-gioi-nem-demo-83`)
- **Ngành nghề Catalog:** Nội thất | **Niche xác định:** Siêu Thị Nệm Cao Su Thiên Nhiên & Chăm Sóc Giấc Ngủ
- **Archetype Kiến Trúc:** 04. Architecture & Interior Showcase
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Indigo (#1e1b4b), Xanh Êm Ái (#4338ca), Trắng Kem (#f8fafc)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Nâng niu giấc ngủ chuẩn công thái học với nệm cao su 100% thiên nhiên.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng so sánh độ êm ái và bảo hành 10-15 năm chính hãng.
- Chính sách ngủ thử 100 ngày đổi trả miễn phí.
- Bộ chọn kích thước nệm chuẩn (1m6x2m, 1m8x2m, 2mx2m2).
- **Tương tác Frontend độc quyền:**
- Bộ lọc chọn kích thước và độ dày nệm (5cm, 10cm, 15cm).
- Tính giá theo kích thước nệm tức thì.
- Đăng ký giao hàng và trải nghiệm thử tại nhà.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #67] MS71 — Thế giới rượu ngoại - demo 71 (ID: `the-gioi-ruou-ngoai-demo-71`)
- **Ngành nghề Catalog:** Thực phẩm | **Niche xác định:** Hầm Rượu Vang & Rượu Ngoại Nhập Khẩu Thượng Hạng
- **Archetype Kiến Trúc:** 09. Culinary & Gastronomy Experience
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đỏ Bordeaux (#7f1d1d), Vàng Đồng (#b45309), Đen Hầm Rượu (#0f172a)
  - **Typography:** Cinzel (Tiêu đề), Montserrat (Nội dung)
  - **Bố cục Hero:** Tinh hoa rượu vang lâu năm nhập khẩu chính ngạch từ Pháp, Ý và Chile.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Thông tin xuất xứ niên vụ, giống nho và nồng độ cồn % rõ ràng.
- Gợi ý kết hợp rượu vang cùng món ăn (Food Pairing guide).
- Cam kết tem nhập khẩu hải quan và bảo quản hầm lạnh 16 độ C.
- **Tương tác Frontend độc quyền:**
- Lọc rượu theo quốc gia (Pháp, Ý, Chile, Scotland).
- Lọc theo mức giá và giống nho yêu thích.
- Tư vấn chọn hộp quà rượu ngoại tặng đối tác qua Zalo.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #68] MS75 — Thế giới tattoo - demo 75 (ID: `the-gioi-tattoo-demo-75`)
- **Ngành nghề Catalog:** Spa - Làm đẹp | **Niche xác định:** Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da
- **Archetype Kiến Trúc:** 03. Beauty & Cosmetics Atelier
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng Mộc (#be185d), Hoa Hồng (#fff1f2), Đỏ Rượu (#4c0519)
  - **Typography:** Cormorant Garamond (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Giải pháp khoa học cho làn da căng bóng tự nhiên với peptide và hoa hồng.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng tra cứu công dụng hoạt chất (Niacinamide, B5, Ceramide).
- Chứng nhận mỹ phẩm an toàn da liễu không thử nghiệm trên động vật.
- Quy trình 3 bước dưỡng da chuẩn Hàn Quốc.
- **Tương tác Frontend độc quyền:**
- Trắc nghiệm chuẩn đoán loại da để đề xuất routine.
- Thêm nhanh combo dưỡng da vào giỏ hàng.
- Hỏi đáp trực tiếp cùng chuyên viên da liễu qua Zalo.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #69] MS30 — Thiệp cưới demo 30 (ID: `thiep-cuoi-demo-30`)
- **Ngành nghề Catalog:** Tổ chức sự kiện | **Niche xác định:** Studio Chụp Ảnh Nghệ Thuật & Thiết Kế Thiệp Cưới Cao Cấp
- **Archetype Kiến Trúc:** 11. Creative Portfolio & Agency
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng Tro (#fda4af), Xám Đậm (#334155), Trắng Tinh Khiết (#fafafa)
  - **Typography:** Playfair Display (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Lưu giữ những khoảnh khắc hạnh phúc trọn vẹn bằng góc máy nghệ thuật tinh tế.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bộ sưu tập ảnh cưới dạng triển lãm nghệ thuật không giới hạn khung viền.
- Gói dịch vụ cưới trọn gói gồm váy cưới thiết kế, trang điểm và album cao cấp.
- Đội ngũ nhiếp ảnh gia giàu kinh nghiệm sáng tạo từng góc chụp.
- **Tương tác Frontend độc quyền:**
- Lightbox phóng to ngắm nhìn từng khung hình độ sắc nét cao.
- Chọn mẫu phôi thiệp cưới ép kim và phông chữ tùy biến.
- Form đặt lịch hẹn thử trang phục và tư vấn concept chụp.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #70] MS35 — Thiết kế nội thất - demo 35 (ID: `thiet-ke-noi-that-demo-35`)
- **Ngành nghề Catalog:** Nội thất | **Niche xác định:** Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian
- **Archetype Kiến Trúc:** 04. Architecture & Interior Showcase
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Nâu Gỗ Sồi (#78350f), Nâu Hổ Phách (#b45309), Kem Sứ (#fefce8)
  - **Typography:** DM Sans (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Kiến tạo không gian sống tối giản, ấm áp và gần gũi thiên nhiên.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Phân loại bộ sưu tập theo từng không gian (Phòng khách, Bếp, Phòng ngủ).
- Thông số chất liệu gỗ sồi tự nhiên đạt chuẩn sấy chống mối mọt.
- Gợi ý set bàn ăn đồng bộ cùng ghế và tủ kệ tivi.
- **Tương tác Frontend độc quyền:**
- Xem kích thước 3 chiều (Dài x Rộng x Cao) của món đồ.
- Lọc sản phẩm theo chất liệu (Gỗ tự nhiên, Gỗ công nghiệp MDF).
- Yêu cầu kỹ sư tới tận nhà đo đạc và thiết kế 3D.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #71] MS91 — Thức ăn cho thú cưng - demo 91 (ID: `thuc-an-cho-thu-cung`)
- **Ngành nghề Catalog:** Thú cưng | **Niche xác định:** Hệ Thống Thức Ăn Hữu Cơ & Dịch Vụ Chăm Sóc Thú Cưng
- **Archetype Kiến Trúc:** 01. Premium E-Commerce Storefront
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Mòng Két (#0d9488), Cam Hạnh Phúc (#f97316), Nền Sáng (#f0fdfa)
  - **Typography:** Outfit (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Dinh dưỡng thượng hạng và dịch vụ chăm sóc tận tâm cho thú cưng khỏe mạnh.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Thức ăn hạt hữu cơ giàu đạm không chứa ngũ cốc gây dị ứng.
- Quy trình tắm spa, cắt tỉa lông tạo kiểu an toàn không gây stress.
- Sổ theo dõi lịch tiêm phòng và thăm khám thú cưng định kỳ.
- **Tương tác Frontend độc quyền:**
- Lọc thức ăn theo độ tuổi thú cưng (Mèo con, Mèo trưởng thành, Chó già).
- Đặt lịch hẹn dịch vụ Spa tắm tỉa thú cưng theo ngày giờ.
- Giỏ hàng lưu trữ LocalStorage thuận tiện đặt thức ăn giao tận nhà.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #72] MS29 — Thực Phẩm Sâm - Đông Trùng - Demo 29 (ID: `thuc-pham-sam-dong-trung-demo-29`)
- **Ngành nghề Catalog:** Y tế | **Niche xác định:** Nhà Thuốc Đạt Chuẩn GPP & Thiết Bị Y Tế Gia Đình
- **Archetype Kiến Trúc:** 07. Healthcare & Clinical Services
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Lam Y Tế (#0284c7), Xanh Ngọc Cứu Thương (#10b981), Trắng Y Khoa (#ffffff)
  - **Typography:** Lexend (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Tận tâm chăm sóc sức khỏe gia đình với thuốc chính hãng và thiết bị y tế chuẩn.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Tem xác thực xuất xứ và giấy phép lưu hành của Bộ Y Tế.
- Hướng dẫn liều lượng và chống chỉ định y khoa rõ ràng minh bạch.
- Dịch vụ dược sĩ gia đình tư vấn miễn phí qua hotline 24/7.
- **Tương tác Frontend độc quyền:**
- Gửi hình chụp đơn thuốc để Dược sĩ đối soát báo giá.
- Bộ lọc thiết bị y tế (Máy đo huyết áp, Máy đo đường huyết, Hộp sơ cứu).
- Định vị nhà thuốc gần nhất nhận thuốc trong 30 phút.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #73] MS65 — Tổng kho két sắt - demo 65 (ID: `tong-kho-ket-sat-demo-65`)
- **Ngành nghề Catalog:** Nội thất | **Niche xác định:** Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian
- **Archetype Kiến Trúc:** 04. Architecture & Interior Showcase
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Nâu Gỗ Sồi (#78350f), Nâu Hổ Phách (#b45309), Kem Sứ (#fefce8)
  - **Typography:** DM Sans (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Kiến tạo không gian sống tối giản, ấm áp và gần gũi thiên nhiên.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Phân loại bộ sưu tập theo từng không gian (Phòng khách, Bếp, Phòng ngủ).
- Thông số chất liệu gỗ sồi tự nhiên đạt chuẩn sấy chống mối mọt.
- Gợi ý set bàn ăn đồng bộ cùng ghế và tủ kệ tivi.
- **Tương tác Frontend độc quyền:**
- Xem kích thước 3 chiều (Dài x Rộng x Cao) của món đồ.
- Lọc sản phẩm theo chất liệu (Gỗ tự nhiên, Gỗ công nghiệp MDF).
- Yêu cầu kỹ sư tới tận nhà đo đạc và thiết kế 3D.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #74] MS41 — Trà sữa - demo 41 (ID: `tra-sua-demo-41`)
- **Ngành nghề Catalog:** Thực phẩm | **Niche xác định:** Chuỗi Trà & Cà Phê Thảo Mộc / Đồ Uống Trẻ Trung
- **Archetype Kiến Trúc:** 09. Culinary & Gastronomy Experience
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Nâu Cà Phê (#451a03), Cam Hổ Phách (#ea580c), Kem Trà (#fffbeb)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Hương vị cà phê nguyên bản rang xay mộc và trà sữa nướng béo ngậy.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Thực đơn phân theo danh mục (Cà phê thủ công, Trà trái cây tươi, Trà sữa béo).
- Tùy chọn điều chỉnh % lượng đường và % lượng đá theo khẩu vị.
- Chính sách tích điểm thành viên và ưu đãi giờ vàng (Happy Hour).
- **Tương tác Frontend độc quyền:**
- Chọn mức đường (30%, 50%, 70%) và đá cho từng ly.
- Thêm nhanh thức uống vào đơn hàng hỏa tốc.
- Form đặt bàn nhóm họp mặt hoặc tiệc sinh nhật.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #75] MS19 — Trang sức - thời trang demo 19 (ID: `trang-suc-thoi-trang-demo-19`)
- **Ngành nghề Catalog:** Thời trang | **Niche xác định:** Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế
- **Archetype Kiến Trúc:** 01. Premium E-Commerce Storefront
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#18181b), Vàng Nhạt (#fef3c7), Trắng (#ffffff)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Bộ sưu tập thời trang dẫn đầu xu hướng mùa mới.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lưới sản phẩm thời trang tỷ lệ ảnh 3:4 chuẩn lookbook.
- Huy hiệu New In, Best Seller và Ưu đãi tuần lễ thời trang.
- Khối cảm hứng phối đồ Street Style.
- **Tương tác Frontend độc quyền:**
- Lọc sản phẩm theo tầm giá và danh mục.
- Hover xem ảnh góc sau của trang phục.
- Lưu giỏ hàng và danh sách yêu thích.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #76] MS73 — Trang sức cao cấp - demo 73 (ID: `trang-suc-cao-cap-demo-73`)
- **Ngành nghề Catalog:** Thời trang | **Niche xác định:** Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế
- **Archetype Kiến Trúc:** 01. Premium E-Commerce Storefront
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#18181b), Vàng Nhạt (#fef3c7), Trắng (#ffffff)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Bộ sưu tập thời trang dẫn đầu xu hướng mùa mới.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lưới sản phẩm thời trang tỷ lệ ảnh 3:4 chuẩn lookbook.
- Huy hiệu New In, Best Seller và Ưu đãi tuần lễ thời trang.
- Khối cảm hứng phối đồ Street Style.
- **Tương tác Frontend độc quyền:**
- Lọc sản phẩm theo tầm giá và danh mục.
- Hover xem ảnh góc sau của trang phục.
- Lưu giỏ hàng và danh sách yêu thích.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #77] MS86 — Trung tâm can thiệp sớm - demo 86 (ID: `trung-tam-can-thiep-som-demo-86`)
- **Ngành nghề Catalog:** Doanh nghiệp | **Niche xác định:** Dịch Vụ Chuyên Nghiệp
- **Archetype Kiến Trúc:** 06. Corporate & Professional Services
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Navy (#1e40af), Xanh Lam (#3b82f6), Trắng (#ffffff)
  - **Typography:** Inter (Tiêu đề), Plus Jakarta Sans (Nội dung)
  - **Bố cục Hero:** Thông điệp dịch vụ cốt lõi + Hình ảnh chuyên gia tận tâm.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Quy trình làm việc 4 bước minh bạch và chuẩn mực.
- Cam kết bảo hành và đồng hành lâu dài cùng khách hàng.
- Hotline Zalo tư vấn 24/7 trực tiếp từ chuyên gia phụ trách.
- **Tương tác Frontend độc quyền:**
- Form gửi yêu cầu tư vấn báo giá chi tiết.
- Bộ lọc dịch vụ theo nhu cầu và quy mô ngân sách.
- Liên kết chat Zalo nhanh với nội dung soạn sẵn.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #78] MS74 — Trung tâm dạy bơi - demo 74 (ID: `trung-tam-day-boi-demo-74`)
- **Ngành nghề Catalog:** Giáo dục | **Niche xác định:** Học Viện Đào Tạo Kỹ Năng & Ngoại Ngữ Chuẩn Quốc Tế
- **Archetype Kiến Trúc:** 08. Education & Academy Hub
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Tri Thức (#2563eb), Vàng Khởi Nghiệp (#f59e0b), Trắng (#ffffff)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Bứt phá kỹ năng, làm chủ tương lai với lộ trình đào tạo chuẩn quốc tế.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lộ trình cam kết đầu ra bằng văn bản hợp đồng rõ ràng.
- 100% Giảng viên bản ngữ có chứng chỉ giảng dạy quốc tế CELTA/TESOL.
- Môi trường thực hành dự án thực tế chiếm 70% thời lượng học.
- **Tương tác Frontend độc quyền:**
- Làm bài kiểm tra trình độ đầu vào trực tuyến miễn phí.
- Xem giáo trình chi tiết từng module học tập.
- Đăng ký tư vấn lộ trình học phù hợp với mục tiêu nghề nghiệp.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #79] MS88 — Trung tâm dạy lái xe - demo 88 (ID: `trung-tam-day-lai-xe-demo-88`)
- **Ngành nghề Catalog:** Giáo dục | **Niche xác định:** Trung Tâm Đào Tạo Sát Hạch Lái Xe Ô Tô Các Hạng (B1, B2, C)
- **Archetype Kiến Trúc:** 08. Education & Academy Hub
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Thép (#1e3a8a), Cam An Toàn (#ea580c), Trắng Sáng (#ffffff)
  - **Typography:** Space Grotesk (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Học lái xe vững tay lái, tự tin trên mọi cung đường với sân tập chuẩn ISO.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Cam kết học phí trọn gói 100% không phát sinh thêm chi phí dã ngoại.
- Dàn xe tập lái đời mới có máy lạnh và giáo viên kèm 1-1 tận tình.
- Lịch học linh hoạt học viên tự chọn cả thứ 7 và Chủ nhật.
- **Tương tác Frontend độc quyền:**
- Form Đăng ký học lái xe nhận ưu đãi học phí.
- Bộ đề thi thử 600 câu lý thuyết luật giao thông trực tuyến.
- Chọn gói học theo phân hạng xe B1 tự động hoặc B2 số sàn.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #80] MS60 — Trung tâm dạy yoga - demo 60 (ID: `trung-tam-day-yoga-demo-60`)
- **Ngành nghề Catalog:** Dịch vụ | **Niche xác định:** Trung Tâm Thể Dục Thể Hình Fitness, Yoga & Xe Đạp Thể Thao
- **Archetype Kiến Trúc:** 08. Education & Academy Hub
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#111827), Xanh Lime (#84cc16), Trắng (#ffffff)
  - **Typography:** Barlow Semi Condensed (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Đánh thức sức mạnh tiềm ẩn, nâng tầm thể chất với phòng tập chuẩn 5 sao.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Trang thiết bị máy tập nhập khẩu chuẩn cơ sinh học hiện đại.
- Đội ngũ Master Trainer có chứng chỉ quốc tế kèm 1-1 chuyên sâu.
- Lớp học Yoga thư giãn tinh thần với chuyên gia người Ấn Độ.
- **Tương tác Frontend độc quyền:**
- Đăng ký tập thử 7 ngày miễn phí trải nghiệm toàn bộ tiện ích.
- Tra cứu lịch lớp Yoga và Cycling trong tuần cập nhật liên tục.
- Công cụ tính chỉ số thể lực và đề xuất lộ trình tăng cơ giảm mỡ.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #81] MS46 — Trung tâm Ngoại ngữ - demo 46 (ID: `trung-tam-ngoai-ngu-demo-46`)
- **Ngành nghề Catalog:** Doanh nghiệp | **Niche xác định:** Học Viện Đào Tạo Kỹ Năng & Ngoại Ngữ Chuẩn Quốc Tế
- **Archetype Kiến Trúc:** 08. Education & Academy Hub
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Tri Thức (#2563eb), Vàng Khởi Nghiệp (#f59e0b), Trắng (#ffffff)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Bứt phá kỹ năng, làm chủ tương lai với lộ trình đào tạo chuẩn quốc tế.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lộ trình cam kết đầu ra bằng văn bản hợp đồng rõ ràng.
- 100% Giảng viên bản ngữ có chứng chỉ giảng dạy quốc tế CELTA/TESOL.
- Môi trường thực hành dự án thực tế chiếm 70% thời lượng học.
- **Tương tác Frontend độc quyền:**
- Làm bài kiểm tra trình độ đầu vào trực tuyến miễn phí.
- Xem giáo trình chi tiết từng module học tập.
- Đăng ký tư vấn lộ trình học phù hợp với mục tiêu nghề nghiệp.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #82] MS82 — Trung tâm thể dục thể hình - demo 82 (ID: `trung-tam-the-duc-the-hinh-demo-82`)
- **Ngành nghề Catalog:** Thể thao | **Niche xác định:** Trung Tâm Thể Dục Thể Hình Fitness, Yoga & Xe Đạp Thể Thao
- **Archetype Kiến Trúc:** 08. Education & Academy Hub
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#111827), Xanh Lime (#84cc16), Trắng (#ffffff)
  - **Typography:** Barlow Semi Condensed (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Đánh thức sức mạnh tiềm ẩn, nâng tầm thể chất với phòng tập chuẩn 5 sao.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Trang thiết bị máy tập nhập khẩu chuẩn cơ sinh học hiện đại.
- Đội ngũ Master Trainer có chứng chỉ quốc tế kèm 1-1 chuyên sâu.
- Lớp học Yoga thư giãn tinh thần với chuyên gia người Ấn Độ.
- **Tương tác Frontend độc quyền:**
- Đăng ký tập thử 7 ngày miễn phí trải nghiệm toàn bộ tiện ích.
- Tra cứu lịch lớp Yoga và Cycling trong tuần cập nhật liên tục.
- Công cụ tính chỉ số thể lực và đề xuất lộ trình tăng cơ giảm mỡ.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #83] MS42 — Vận tải - Logistics - demo 42 (ID: `van-tai-logistics-demo-42`)
- **Ngành nghề Catalog:** Vận tải | **Niche xác định:** Dịch Vụ Vận Tải Quốc Tế & Quản Lý Chuỗi Cung Ứng Logistics
- **Archetype Kiến Trúc:** 06. Corporate & Industrial B2B
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Thép (#0f172a), Xanh Kỹ Thuật (#1e3a8a), Cam Bảo Hộ (#f97316)
  - **Typography:** Space Grotesk (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Quy chuẩn sản xuất hiện đại, chất lượng vượt trội đáp ứng tiêu chuẩn quốc tế.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Chứng chỉ tiêu chuẩn chất lượng ISO 9001:2015 và an toàn môi trường.
- Quy mô nhà xưởng hiện đại diện tích hàng ngàn m2 cùng máy móc nhập khẩu.
- Kinh nghiệm cung ứng cho các tập đoàn đa quốc gia và đối tác lớn.
- **Tương tác Frontend độc quyền:**
- Form gửi Yêu Cầu Báo Giá Số Lượng Lớn (RFQ) kèm quy cách chi tiết.
- Tải hồ sơ năng lực công ty (Company Profile PDF).
- Tra cứu tiến độ sản xuất hoặc tình trạng vận đơn hàng hóa.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #84] MS92 — Vận tải logistics - demo 92 (ID: `van-tai-logistics`)
- **Ngành nghề Catalog:** Doanh nghiệp | **Niche xác định:** Dịch Vụ Vận Tải Quốc Tế & Quản Lý Chuỗi Cung Ứng Logistics
- **Archetype Kiến Trúc:** 06. Corporate & Industrial B2B
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Thép (#0f172a), Xanh Kỹ Thuật (#1e3a8a), Cam Bảo Hộ (#f97316)
  - **Typography:** Space Grotesk (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Quy chuẩn sản xuất hiện đại, chất lượng vượt trội đáp ứng tiêu chuẩn quốc tế.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Chứng chỉ tiêu chuẩn chất lượng ISO 9001:2015 và an toàn môi trường.
- Quy mô nhà xưởng hiện đại diện tích hàng ngàn m2 cùng máy móc nhập khẩu.
- Kinh nghiệm cung ứng cho các tập đoàn đa quốc gia và đối tác lớn.
- **Tương tác Frontend độc quyền:**
- Form gửi Yêu Cầu Báo Giá Số Lượng Lớn (RFQ) kèm quy cách chi tiết.
- Tải hồ sơ năng lực công ty (Company Profile PDF).
- Tra cứu tiến độ sản xuất hoặc tình trạng vận đơn hàng hóa.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #85] MS110 — Website bán bánh trung thu - demo 110 (ID: `website-ban-banh-trung-thu-demo-110`)
- **Ngành nghề Catalog:** Thực phẩm | **Niche xác định:** Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền
- **Archetype Kiến Trúc:** 09. Culinary & Gastronomy Experience
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đỏ Vang Ấm (#b91c1c), Nâu Cháy (#451a03), Vàng Nghệ (#f59e0b)
  - **Typography:** Cinzel (Tiêu đề), Plus Jakarta Sans (Nội dung)
  - **Bố cục Hero:** Trải nghiệm ẩm thực truyền thống đậm đà bản sắc với nguồn nguyên liệu sạch.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Menu phân rõ món khai vị, món chính, lẩu và món tráng miệng.
- Nhãn OCOP và cam kết không sử dụng chất phụ gia bảo quản độc hại.
- Không gian phòng tiệc gia đình và hội nghị ấm cúng.
- **Tương tác Frontend độc quyền:**
- Form Đặt Bàn Tiệc (Số người, Khung giờ, Yêu cầu phòng riêng).
- Bộ lọc món ăn theo khẩu vị (Thanh đạm, Đậm đà, Món chay).
- Đặt hàng đặc sản đóng gói giao tận nhà.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #86] MS107 — Website bán đặc sản - demo 107 (ID: `website-ban-dac-san-demo-107`)
- **Ngành nghề Catalog:** Thực phẩm | **Niche xác định:** Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền
- **Archetype Kiến Trúc:** 09. Culinary & Gastronomy Experience
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đỏ Vang Ấm (#b91c1c), Nâu Cháy (#451a03), Vàng Nghệ (#f59e0b)
  - **Typography:** Cinzel (Tiêu đề), Plus Jakarta Sans (Nội dung)
  - **Bố cục Hero:** Trải nghiệm ẩm thực truyền thống đậm đà bản sắc với nguồn nguyên liệu sạch.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Menu phân rõ món khai vị, món chính, lẩu và món tráng miệng.
- Nhãn OCOP và cam kết không sử dụng chất phụ gia bảo quản độc hại.
- Không gian phòng tiệc gia đình và hội nghị ấm cúng.
- **Tương tác Frontend độc quyền:**
- Form Đặt Bàn Tiệc (Số người, Khung giờ, Yêu cầu phòng riêng).
- Bộ lọc món ăn theo khẩu vị (Thanh đạm, Đậm đà, Món chay).
- Đặt hàng đặc sản đóng gói giao tận nhà.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #87] MS53 — website bán đồ ăn nhanh - demo 53 (ID: `website-ban-do-an-nhanh-demo-53`)
- **Ngành nghề Catalog:** Thực phẩm | **Niche xác định:** Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền
- **Archetype Kiến Trúc:** 09. Culinary & Gastronomy Experience
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đỏ Vang Ấm (#b91c1c), Nâu Cháy (#451a03), Vàng Nghệ (#f59e0b)
  - **Typography:** Cinzel (Tiêu đề), Plus Jakarta Sans (Nội dung)
  - **Bố cục Hero:** Trải nghiệm ẩm thực truyền thống đậm đà bản sắc với nguồn nguyên liệu sạch.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Menu phân rõ món khai vị, món chính, lẩu và món tráng miệng.
- Nhãn OCOP và cam kết không sử dụng chất phụ gia bảo quản độc hại.
- Không gian phòng tiệc gia đình và hội nghị ấm cúng.
- **Tương tác Frontend độc quyền:**
- Form Đặt Bàn Tiệc (Số người, Khung giờ, Yêu cầu phòng riêng).
- Bộ lọc món ăn theo khẩu vị (Thanh đạm, Đậm đà, Món chay).
- Đặt hàng đặc sản đóng gói giao tận nhà.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #88] MS95 — Website bán gốm sứ tách trà - demo 95 (ID: `website-ban-gom-su-tach-tra-demo-95`)
- **Ngành nghề Catalog:** Nội thất | **Niche xác định:** Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian
- **Archetype Kiến Trúc:** 04. Architecture & Interior Showcase
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Nâu Gỗ Sồi (#78350f), Nâu Hổ Phách (#b45309), Kem Sứ (#fefce8)
  - **Typography:** DM Sans (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Kiến tạo không gian sống tối giản, ấm áp và gần gũi thiên nhiên.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Phân loại bộ sưu tập theo từng không gian (Phòng khách, Bếp, Phòng ngủ).
- Thông số chất liệu gỗ sồi tự nhiên đạt chuẩn sấy chống mối mọt.
- Gợi ý set bàn ăn đồng bộ cùng ghế và tủ kệ tivi.
- **Tương tác Frontend độc quyền:**
- Xem kích thước 3 chiều (Dài x Rộng x Cao) của món đồ.
- Lọc sản phẩm theo chất liệu (Gỗ tự nhiên, Gỗ công nghiệp MDF).
- Yêu cầu kỹ sư tới tận nhà đo đạc và thiết kế 3D.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #89] MS117 — Website bán hoa tươi - demo 117 (ID: `website-ban-hoa-tuoi-demo-117`)
- **Ngành nghề Catalog:** Quà tặng | **Niche xác định:** Studio Chụp Ảnh Nghệ Thuật & Thiết Kế Thiệp Cưới Cao Cấp
- **Archetype Kiến Trúc:** 11. Creative Portfolio & Agency
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng Tro (#fda4af), Xám Đậm (#334155), Trắng Tinh Khiết (#fafafa)
  - **Typography:** Playfair Display (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Lưu giữ những khoảnh khắc hạnh phúc trọn vẹn bằng góc máy nghệ thuật tinh tế.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bộ sưu tập ảnh cưới dạng triển lãm nghệ thuật không giới hạn khung viền.
- Gói dịch vụ cưới trọn gói gồm váy cưới thiết kế, trang điểm và album cao cấp.
- Đội ngũ nhiếp ảnh gia giàu kinh nghiệm sáng tạo từng góc chụp.
- **Tương tác Frontend độc quyền:**
- Lightbox phóng to ngắm nhìn từng khung hình độ sắc nét cao.
- Chọn mẫu phôi thiệp cưới ép kim và phông chữ tùy biến.
- Form đặt lịch hẹn thử trang phục và tư vấn concept chụp.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #90] MS52 — Website Bán rèm cửa - demo 52 (ID: `website-ban-rem-cua-demo-52`)
- **Ngành nghề Catalog:** Nội thất | **Niche xác định:** Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian
- **Archetype Kiến Trúc:** 04. Architecture & Interior Showcase
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Nâu Gỗ Sồi (#78350f), Nâu Hổ Phách (#b45309), Kem Sứ (#fefce8)
  - **Typography:** DM Sans (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Kiến tạo không gian sống tối giản, ấm áp và gần gũi thiên nhiên.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Phân loại bộ sưu tập theo từng không gian (Phòng khách, Bếp, Phòng ngủ).
- Thông số chất liệu gỗ sồi tự nhiên đạt chuẩn sấy chống mối mọt.
- Gợi ý set bàn ăn đồng bộ cùng ghế và tủ kệ tivi.
- **Tương tác Frontend độc quyền:**
- Xem kích thước 3 chiều (Dài x Rộng x Cao) của món đồ.
- Lọc sản phẩm theo chất liệu (Gỗ tự nhiên, Gỗ công nghiệp MDF).
- Yêu cầu kỹ sư tới tận nhà đo đạc và thiết kế 3D.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #91] MS115 — Website bán sim và biển số - demo 115 (ID: `website-ban-sim-va-bien-so-demo-115`)
- **Ngành nghề Catalog:** Khác | **Niche xác định:** Dịch Vụ Chuyên Nghiệp
- **Archetype Kiến Trúc:** 06. Corporate & Professional Services
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Navy (#1e40af), Xanh Lam (#3b82f6), Trắng (#ffffff)
  - **Typography:** Inter (Tiêu đề), Plus Jakarta Sans (Nội dung)
  - **Bố cục Hero:** Thông điệp dịch vụ cốt lõi + Hình ảnh chuyên gia tận tâm.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Quy trình làm việc 4 bước minh bạch và chuẩn mực.
- Cam kết bảo hành và đồng hành lâu dài cùng khách hàng.
- Hotline Zalo tư vấn 24/7 trực tiếp từ chuyên gia phụ trách.
- **Tương tác Frontend độc quyền:**
- Form gửi yêu cầu tư vấn báo giá chi tiết.
- Bộ lọc dịch vụ theo nhu cầu và quy mô ngân sách.
- Liên kết chat Zalo nhanh với nội dung soạn sẵn.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #92] MS113 — website bán xe hơi - demo 113 (ID: `website-ban-xe-hoi-demo-113`)
- **Ngành nghề Catalog:** Ô tô - Xe máy | **Niche xác định:** Showroom Mua Bán Xe & Trung Tâm Chăm Sóc Xe Chuyên Nghiệp
- **Archetype Kiến Trúc:** 12. Automotive & Showroom Experience
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#0f172a), Đỏ Rực (#e11d48), Xám Kim Loại (#f1f5f9)
  - **Typography:** Barlow Semi Condensed (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Công nghệ vận hành vượt bậc, cảm giác lái phấn khích và dịch vụ phụ tùng chính hãng.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng kiểm định 176 hạng mục kỹ thuật chuẩn chính hãng đối với xe lướt.
- Dịch vụ độ mâm lốp, nâng cấp âm thanh và phủ Ceramic bảo vệ sơn.
- Chính sách bảo hành động cơ và hộp số lên tới 3 năm.
- **Tương tác Frontend độc quyền:**
- Lọc các dòng xe theo phân khúc Sedan, SUV, Bán tải, Xe điện.
- Form đăng ký lái thử xe tận nơi thuận tiện.
- Ước tính chi phí trả góp và bảng tính lãi suất hàng tháng.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #93] MS96 — Website bất động sản - demo 96 (ID: `website-bat-dong-san-demo-96`)
- **Ngành nghề Catalog:** Bất động sản | **Niche xác định:** Bất Động Sản Nghỉ Dưỡng & Căn Hộ Đô Thị Sinh Thái
- **Archetype Kiến Trúc:** 04. Architecture & Real Estate
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Navy Sâu (#1e3a8a), Vàng Kim Hoàng Gia (#d97706), Trắng Sứ (#f8fafc)
  - **Typography:** Syne (Tiêu đề), DM Sans (Nội dung)
  - **Bố cục Hero:** Kiệt tác không gian sống thượng lưu ven sông với tầm nhìn triệu đô.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bản đồ vị trí tọa độ vàng và liên kết hạ tầng giao thông vùng.
- Bản vẽ mặt bằng kiến trúc chi tiết từng căn hộ penthouse/shophouse.
- Bảng tiến độ thanh toán linh hoạt hỗ trợ lãi suất 0% từ ngân hàng.
- **Tương tác Frontend độc quyền:**
- Bộ lọc dự án theo khoảng giá (Tỷ VNĐ) và diện tích m2.
- Tải trọn bộ tài liệu pháp lý và mặt bằng phân lô PDF.
- Đăng ký lái xe đưa đón tham quan nhà mẫu thực tế.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #94] MS94 — Website Cho thuê xe ô tô - demo 94 (ID: `website-cho-thue-xe-o-to-demo-94`)
- **Ngành nghề Catalog:** Công nghệ | **Niche xác định:** Thiết Bị Công Nghệ Cao, Laptop & Phụ Kiện Gaming
- **Archetype Kiến Trúc:** 10. Tech Specs & Digital Solutions
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Cyan (#0284c7), Xanh Neon (#06b6d4), Nền Đen Slate (#0f172a)
  - **Typography:** Space Grotesk (Tiêu đề), JetBrains Mono / Inter (Nội dung)
  - **Bố cục Hero:** Đỉnh cao hiệu năng thế hệ mới với vi xử lý gen 14 và đồ họa chuyên nghiệp.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng thông số kỹ thuật chi tiết (CPU, GPU, RAM DDR5, Ổ cứng SSD NVMe).
- Chế độ hiển thị Dark-Tech tối ưu cho tín đồ công nghệ.
- Cam kết sản phẩm mới 100% nguyên seal kèm bảo hành tận nơi 24 tháng.
- **Tương tác Frontend độc quyền:**
- Công cụ chọn 2 sản phẩm để so sánh cấu hình kỹ thuật.
- Bộ lọc linh kiện theo phân khúc giá và thương hiệu.
- Kiểm tra tình trạng hàng có sẵn tại cửa hàng.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #95] MS56 — Website cửa hàng mẹ và bé - demo 56 (ID: `website-cua-hang-me-va-be-demo-56`)
- **Ngành nghề Catalog:** Mỹ phẩm | **Niche xác định:** Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da
- **Archetype Kiến Trúc:** 03. Beauty & Cosmetics Atelier
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Hồng Mộc (#be185d), Hoa Hồng (#fff1f2), Đỏ Rượu (#4c0519)
  - **Typography:** Cormorant Garamond (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Giải pháp khoa học cho làn da căng bóng tự nhiên với peptide và hoa hồng.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng tra cứu công dụng hoạt chất (Niacinamide, B5, Ceramide).
- Chứng nhận mỹ phẩm an toàn da liễu không thử nghiệm trên động vật.
- Quy trình 3 bước dưỡng da chuẩn Hàn Quốc.
- **Tương tác Frontend độc quyền:**
- Trắc nghiệm chuẩn đoán loại da để đề xuất routine.
- Thêm nhanh combo dưỡng da vào giỏ hàng.
- Hỏi đáp trực tiếp cùng chuyên viên da liễu qua Zalo.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #96] MS55 — Website Cửa hàng phân phối vải Jean - demo 55 (ID: `website-cua-hang-phan-phoi-vai-jean-demo-55`)
- **Ngành nghề Catalog:** Thời trang | **Niche xác định:** Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế
- **Archetype Kiến Trúc:** 01. Premium E-Commerce Storefront
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#18181b), Vàng Nhạt (#fef3c7), Trắng (#ffffff)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Bộ sưu tập thời trang dẫn đầu xu hướng mùa mới.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lưới sản phẩm thời trang tỷ lệ ảnh 3:4 chuẩn lookbook.
- Huy hiệu New In, Best Seller và Ưu đãi tuần lễ thời trang.
- Khối cảm hứng phối đồ Street Style.
- **Tương tác Frontend độc quyền:**
- Lọc sản phẩm theo tầm giá và danh mục.
- Hover xem ảnh góc sau của trang phục.
- Lưu giỏ hàng và danh sách yêu thích.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #97] MS104 — Website đại lý ô tô VinFast - web 104 (ID: `website-dai-ly-o-to-vinfast-web-104`)
- **Ngành nghề Catalog:** Ô tô - Xe máy | **Niche xác định:** Showroom Mua Bán Xe & Trung Tâm Chăm Sóc Xe Chuyên Nghiệp
- **Archetype Kiến Trúc:** 12. Automotive & Showroom Experience
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#0f172a), Đỏ Rực (#e11d48), Xám Kim Loại (#f1f5f9)
  - **Typography:** Barlow Semi Condensed (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Công nghệ vận hành vượt bậc, cảm giác lái phấn khích và dịch vụ phụ tùng chính hãng.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng kiểm định 176 hạng mục kỹ thuật chuẩn chính hãng đối với xe lướt.
- Dịch vụ độ mâm lốp, nâng cấp âm thanh và phủ Ceramic bảo vệ sơn.
- Chính sách bảo hành động cơ và hộp số lên tới 3 năm.
- **Tương tác Frontend độc quyền:**
- Lọc các dòng xe theo phân khúc Sedan, SUV, Bán tải, Xe điện.
- Form đăng ký lái thử xe tận nơi thuận tiện.
- Ước tính chi phí trả góp và bảng tính lãi suất hàng tháng.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #98] SKD-000 — Website Garage ô tô - web 98 (ID: `website-garage-o-to-web-98`)
- **Ngành nghề Catalog:** Ô tô - Xe máy | **Niche xác định:** Showroom Mua Bán Xe & Trung Tâm Chăm Sóc Xe Chuyên Nghiệp
- **Archetype Kiến Trúc:** 12. Automotive & Showroom Experience
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#0f172a), Đỏ Rực (#e11d48), Xám Kim Loại (#f1f5f9)
  - **Typography:** Barlow Semi Condensed (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Công nghệ vận hành vượt bậc, cảm giác lái phấn khích và dịch vụ phụ tùng chính hãng.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng kiểm định 176 hạng mục kỹ thuật chuẩn chính hãng đối với xe lướt.
- Dịch vụ độ mâm lốp, nâng cấp âm thanh và phủ Ceramic bảo vệ sơn.
- Chính sách bảo hành động cơ và hộp số lên tới 3 năm.
- **Tương tác Frontend độc quyền:**
- Lọc các dòng xe theo phân khúc Sedan, SUV, Bán tải, Xe điện.
- Form đăng ký lái thử xe tận nơi thuận tiện.
- Ước tính chi phí trả góp và bảng tính lãi suất hàng tháng.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #99] MS109 — Website giò chả - demo 109 (ID: `website-gio-cha-demo-109`)
- **Ngành nghề Catalog:** Thực phẩm | **Niche xác định:** Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền
- **Archetype Kiến Trúc:** 09. Culinary & Gastronomy Experience
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đỏ Vang Ấm (#b91c1c), Nâu Cháy (#451a03), Vàng Nghệ (#f59e0b)
  - **Typography:** Cinzel (Tiêu đề), Plus Jakarta Sans (Nội dung)
  - **Bố cục Hero:** Trải nghiệm ẩm thực truyền thống đậm đà bản sắc với nguồn nguyên liệu sạch.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Menu phân rõ món khai vị, món chính, lẩu và món tráng miệng.
- Nhãn OCOP và cam kết không sử dụng chất phụ gia bảo quản độc hại.
- Không gian phòng tiệc gia đình và hội nghị ấm cúng.
- **Tương tác Frontend độc quyền:**
- Form Đặt Bàn Tiệc (Số người, Khung giờ, Yêu cầu phòng riêng).
- Bộ lọc món ăn theo khẩu vị (Thanh đạm, Đậm đà, Món chay).
- Đặt hàng đặc sản đóng gói giao tận nhà.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #100] MS111 — Website nhà thuốc sikido - demo 111 (ID: `website-nha-thuoc-sikido-demo-111`)
- **Ngành nghề Catalog:** Y tế | **Niche xác định:** Nhà Thuốc Đạt Chuẩn GPP & Thiết Bị Y Tế Gia Đình
- **Archetype Kiến Trúc:** 07. Healthcare & Clinical Services
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Lam Y Tế (#0284c7), Xanh Ngọc Cứu Thương (#10b981), Trắng Y Khoa (#ffffff)
  - **Typography:** Lexend (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Tận tâm chăm sóc sức khỏe gia đình với thuốc chính hãng và thiết bị y tế chuẩn.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Tem xác thực xuất xứ và giấy phép lưu hành của Bộ Y Tế.
- Hướng dẫn liều lượng và chống chỉ định y khoa rõ ràng minh bạch.
- Dịch vụ dược sĩ gia đình tư vấn miễn phí qua hotline 24/7.
- **Tương tác Frontend độc quyền:**
- Gửi hình chụp đơn thuốc để Dược sĩ đối soát báo giá.
- Bộ lọc thiết bị y tế (Máy đo huyết áp, Máy đo đường huyết, Hộp sơ cứu).
- Định vị nhà thuốc gần nhất nhận thuốc trong 30 phút.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #101] MS108 — Website nội thất xây dựng - demo 108 (ID: `website-noi-that-xay-dung-demo-108`)
- **Ngành nghề Catalog:** Nội thất | **Niche xác định:** Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian
- **Archetype Kiến Trúc:** 04. Architecture & Interior Showcase
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Nâu Gỗ Sồi (#78350f), Nâu Hổ Phách (#b45309), Kem Sứ (#fefce8)
  - **Typography:** DM Sans (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Kiến tạo không gian sống tối giản, ấm áp và gần gũi thiên nhiên.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Phân loại bộ sưu tập theo từng không gian (Phòng khách, Bếp, Phòng ngủ).
- Thông số chất liệu gỗ sồi tự nhiên đạt chuẩn sấy chống mối mọt.
- Gợi ý set bàn ăn đồng bộ cùng ghế và tủ kệ tivi.
- **Tương tác Frontend độc quyền:**
- Xem kích thước 3 chiều (Dài x Rộng x Cao) của món đồ.
- Lọc sản phẩm theo chất liệu (Gỗ tự nhiên, Gỗ công nghiệp MDF).
- Yêu cầu kỹ sư tới tận nhà đo đạc và thiết kế 3D.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #102] MS105 — Website nội y cao cấp - demo 105 (ID: `website-noi-y-cao-cap-demo-105`)
- **Ngành nghề Catalog:** Thời trang | **Niche xác định:** Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế
- **Archetype Kiến Trúc:** 01. Premium E-Commerce Storefront
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#18181b), Vàng Nhạt (#fef3c7), Trắng (#ffffff)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Bộ sưu tập thời trang dẫn đầu xu hướng mùa mới.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lưới sản phẩm thời trang tỷ lệ ảnh 3:4 chuẩn lookbook.
- Huy hiệu New In, Best Seller và Ưu đãi tuần lễ thời trang.
- Khối cảm hứng phối đồ Street Style.
- **Tương tác Frontend độc quyền:**
- Lọc sản phẩm theo tầm giá và danh mục.
- Hover xem ảnh góc sau của trang phục.
- Lưu giỏ hàng và danh sách yêu thích.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #103] MS103 — Website quản lý tour du lịch lữ hành - web 103 (ID: `website-quan-ly-tour-du-lich-lu-hanh-web-103`)
- **Ngành nghề Catalog:** Du lịch | **Niche xác định:** Lữ Hành Quốc Tế & Kỳ Nghỉ Trọn Gói Cao Cấp
- **Archetype Kiến Trúc:** 05. Tourism & Destination Explorer
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Đại Dương (#0284c7), Cam Hoàng Hôn (#f59e0b), Xanh Nước Biển (#f0f9ff)
  - **Typography:** Outfit (Tiêu đề), Merriweather (Nội dung)
  - **Bố cục Hero:** Khám phá những vùng đất thiên đường với kỳ nghỉ dưỡng 5 sao chuẩn mực.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lịch trình chi tiết từng ngày (Đi đâu, Ăn gì, Nghỉ tại khách sạn nào).
- Đã bao gồm trọn gói vé máy bay khứ hồi, bảo hiểm quốc tế và visa.
- Hướng dẫn viên chuyên nghiệp, nhiệt tình, am hiểu văn hóa địa phương.
- **Tương tác Frontend độc quyền:**
- Lọc tour theo mức giá, thời gian khởi hành và điểm đến.
- Công cụ tính tổng chi phí theo số lượng người lớn và trẻ em.
- Form đăng ký nhận tư vấn lịch trình tour thiết kế riêng theo đoàn.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #104] MS57 — Website shop trà thảo mộc - demo 57 (ID: `website-shop-tra-thao-moc-demo-57`)
- **Ngành nghề Catalog:** Thực phẩm | **Niche xác định:** Chuỗi Trà & Cà Phê Thảo Mộc / Đồ Uống Trẻ Trung
- **Archetype Kiến Trúc:** 09. Culinary & Gastronomy Experience
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Nâu Cà Phê (#451a03), Cam Hổ Phách (#ea580c), Kem Trà (#fffbeb)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Hương vị cà phê nguyên bản rang xay mộc và trà sữa nướng béo ngậy.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Thực đơn phân theo danh mục (Cà phê thủ công, Trà trái cây tươi, Trà sữa béo).
- Tùy chọn điều chỉnh % lượng đường và % lượng đá theo khẩu vị.
- Chính sách tích điểm thành viên và ưu đãi giờ vàng (Happy Hour).
- **Tương tác Frontend độc quyền:**
- Chọn mức đường (30%, 50%, 70%) và đá cho từng ly.
- Thêm nhanh thức uống vào đơn hàng hỏa tốc.
- Form đặt bàn nhóm họp mặt hoặc tiệc sinh nhật.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #105] MS116 — Website thiết kế xây dựng sân vườn - demo 116 (ID: `website-thiet-ke-xay-dung-san-vuon-demo-116`)
- **Ngành nghề Catalog:** Doanh nghiệp | **Niche xác định:** Dịch Vụ Kỹ Thuật Công Nghiệp & Thi Công Cơ Điện Lạnh
- **Archetype Kiến Trúc:** 06. Corporate & Industrial B2B
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Thép (#0f172a), Xanh Kỹ Thuật (#1e3a8a), Cam Bảo Hộ (#f97316)
  - **Typography:** Space Grotesk (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Quy chuẩn sản xuất hiện đại, chất lượng vượt trội đáp ứng tiêu chuẩn quốc tế.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Chứng chỉ tiêu chuẩn chất lượng ISO 9001:2015 và an toàn môi trường.
- Quy mô nhà xưởng hiện đại diện tích hàng ngàn m2 cùng máy móc nhập khẩu.
- Kinh nghiệm cung ứng cho các tập đoàn đa quốc gia và đối tác lớn.
- **Tương tác Frontend độc quyền:**
- Form gửi Yêu Cầu Báo Giá Số Lượng Lớn (RFQ) kèm quy cách chi tiết.
- Tải hồ sơ năng lực công ty (Company Profile PDF).
- Tra cứu tiến độ sản xuất hoặc tình trạng vận đơn hàng hóa.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #106] MS114 — Website thời trang quần áo nam nữ - demo 114 (ID: `website-thoi-trang-quan-ao-nam-nu-demo-114`)
- **Ngành nghề Catalog:** Thời trang | **Niche xác định:** Thời Trang Nam & Phong Cách Quý Ông Hiện Đại
- **Archetype Kiến Trúc:** 01. Premium E-Commerce Storefront
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Navy (#0f172a), Ghi Bạc (#64748b), Trắng (#ffffff)
  - **Typography:** Space Grotesk (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Bộ sưu tập veston may đo & trang phục thường nhật lịch lãm.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bảng phối đồ Complete Outfit (Áo sơ mi + Quần tây + Giày da).
- Chất liệu vải chống nhăn và co giãn 4 chiều vận động thoải mái.
- Dịch vụ chỉnh sửa may đo theo số đo cơ thể.
- **Tương tác Frontend độc quyền:**
- Bộ lọc trang phục theo dịp (Công sở, Dự tiệc, Thể thao).
- Chọn size S/M/L/XL có gợi ý theo chiều cao.
- Drawer giỏ hàng trượt mượt mà.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #107] MS54 — Tình Cafe — Specialty Coffee Roasters (ID: `website-tiem-cafe-tinh-demo-54`)
- **Ngành nghề Catalog:** Thực phẩm | **Niche xác định:** Xưởng Rang Cà Phê Mộc & Tiệm Cà Phê Specialty Đương Đại
- **Archetype Kiến Trúc:** 09. Culinary & Gastronomy Experience
- **Mức độ ưu tiên:** **Completed (Pilot)** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Người sành cà phê specialty, giới sáng tạo cần không gian yên tĩnh, khách thưởng thức cà phê Cầu Đất nguyên bản. Kể câu chuyện hạt cà phê mộc Cầu Đất, giới thiệu thực đơn chiết xuất thủ công V60/Cold Brew, đặt chỗ và đặt món mang về.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Nâu Cà Phê Đậm (#291811), Vàng Hổ Phách Nướng (#b45309), Kem Sữa (#fbf8f5), Xanh Nông Trại (#065f46)
  - **Typography:** Playfair Display (Serif nghệ nhân), Plus Jakarta Sans (Nội dung ấm áp)
  - **Bố cục Hero:** Warm Editorial Hero với ảnh Barista rót nước pha V60 + Thẻ Single-Origin Cầu Đất 1.650m + Nút Khám phá thực đơn.
- **Hệ thống Trang con & Điều hướng:** thuc-don.html, cau-chuyen.html, lien-he.html (Đầy đủ Return Bar #MS54) (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bố cục thẻ cà phê có gắn nhãn ghi chú hương vị (Floral, Orange, Dark Chocolate) và xuất xứ nông trại.
- Slide-out Cart Drawer trượt mượt mà từ cạnh phải, quản lý đồ uống tùy chỉnh lưu trữ LocalStorage.
- Không dùng giao diện generic; mang đậm phong cách Wabi-Sabi tối giản và ấm cúng.
- **Tương tác Frontend độc quyền:**
- Interactive Taste Filter: Lọc theo phong cách chiết xuất (Pha thủ công V60, Espresso Bar, Trà & Kombucha, Bánh nướng).
- Drink Customizer Modal: Tùy chỉnh mức đường (0-100%), lượng đá/nóng, loại sữa (thanh trùng hoặc yến mạch Oatly).
- LocalStorage Cart Engine: Tăng giảm số lượng, xóa món, tính tổng tiền, simulated checkout.
- Table Reservation Planner: Đặt chỗ chọn ngày giờ, số khách và đăng ký workshop Cupping thứ 7.
- **Yêu cầu Nội dung & Hình ảnh:** Ảnh Barista pha V60 độ phân giải cao, không gian nội thất gỗ sồi ngập nắng và đĩa hạt cà phê kèm bánh sừng bò nướng.
- **Lỗi hiện tại cần khắc phục:** ĐÃ HOÀN THIỆN XUẤT SẮC (Phase 2 Pilot). Đã khóa bảo vệ trong data/protected_sites.json.

---

### [Website #108] MS106 — Website trung tâm spa cao cấp - demo 106 (ID: `website-trung-tam-spa-cao-cap-demo-106`)
- **Ngành nghề Catalog:** Spa - Làm đẹp | **Niche xác định:** Spa Trị Liệu, Dưỡng Sinh & Chăm Sóc Sức Khỏe Thượng Lưu
- **Archetype Kiến Trúc:** 03. Beauty & Cosmetics Atelier
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Rừng Trầm (#064e3b), Xanh Thảo Mộc (#047857), Vàng Ánh Kim (#d97706)
  - **Typography:** Cormorant Garamond (Tiêu đề), Be Vietnam Pro (Nội dung)
  - **Bố cục Hero:** Không gian thư thái đánh thức ngũ quan và tái tạo năng lượng nguyên bản.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Gói liệu trình gội đầu dưỡng sinh thảo dược và massage đá nóng.
- Hồ sơ kỹ thuật viên tay nghề cao đạt chuẩn quốc tế.
- Không gian phòng VIP trị liệu riêng tư yên tĩnh.
- **Tương tác Frontend độc quyền:**
- Bộ chọn gói dịch vụ và đặt lịch hẹn khung giờ trống.
- Tính toán thời gian liệu trình (60p, 90p, 120p).
- Nhận voucher ưu đãi buổi trải nghiệm đầu tiên.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #109] MS04 — Wedding - demo 04 (ID: `studio-wedding-demo-04`)
- **Ngành nghề Catalog:** Thời trang | **Niche xác định:** Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế
- **Archetype Kiến Trúc:** 01. Premium E-Commerce Storefront
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#18181b), Vàng Nhạt (#fef3c7), Trắng (#ffffff)
  - **Typography:** Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Bộ sưu tập thời trang dẫn đầu xu hướng mùa mới.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Lưới sản phẩm thời trang tỷ lệ ảnh 3:4 chuẩn lookbook.
- Huy hiệu New In, Best Seller và Ưu đãi tuần lễ thời trang.
- Khối cảm hứng phối đồ Street Style.
- **Tương tác Frontend độc quyền:**
- Lọc sản phẩm theo tầm giá và danh mục.
- Hover xem ảnh góc sau của trang phục.
- Lưu giỏ hàng và danh sách yêu thích.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #110] MS23 — Xây dựng Driller demo 23 (ID: `xay-dung-driller-demo-23`)
- **Ngành nghề Catalog:** Gia dụng | **Niche xác định:** Dịch Vụ Kỹ Thuật Công Nghiệp & Thi Công Cơ Điện Lạnh
- **Archetype Kiến Trúc:** 06. Corporate & Industrial B2B
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Thép (#0f172a), Xanh Kỹ Thuật (#1e3a8a), Cam Bảo Hộ (#f97316)
  - **Typography:** Space Grotesk (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Quy chuẩn sản xuất hiện đại, chất lượng vượt trội đáp ứng tiêu chuẩn quốc tế.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Chứng chỉ tiêu chuẩn chất lượng ISO 9001:2015 và an toàn môi trường.
- Quy mô nhà xưởng hiện đại diện tích hàng ngàn m2 cùng máy móc nhập khẩu.
- Kinh nghiệm cung ứng cho các tập đoàn đa quốc gia và đối tác lớn.
- **Tương tác Frontend độc quyền:**
- Form gửi Yêu Cầu Báo Giá Số Lượng Lớn (RFQ) kèm quy cách chi tiết.
- Tải hồ sơ năng lực công ty (Company Profile PDF).
- Tra cứu tiến độ sản xuất hoặc tình trạng vận đơn hàng hóa.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #111] MS50 — Xây dựng nhà phố - demo 50 (ID: `xay-dung-nha-pho-demo-50`)
- **Ngành nghề Catalog:** Bất động sản | **Niche xác định:** Bất Động Sản Nghỉ Dưỡng & Căn Hộ Đô Thị Sinh Thái
- **Archetype Kiến Trúc:** 04. Architecture & Real Estate
- **Mức độ ưu tiên:** **P1** | **Trạng thái kỹ thuật hiện tại:** Generic-4Cards
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Xanh Navy Sâu (#1e3a8a), Vàng Kim Hoàng Gia (#d97706), Trắng Sứ (#f8fafc)
  - **Typography:** Syne (Tiêu đề), DM Sans (Nội dung)
  - **Bố cục Hero:** Kiệt tác không gian sống thượng lưu ven sông với tầm nhìn triệu đô.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Bản đồ vị trí tọa độ vàng và liên kết hạ tầng giao thông vùng.
- Bản vẽ mặt bằng kiến trúc chi tiết từng căn hộ penthouse/shophouse.
- Bảng tiến độ thanh toán linh hoạt hỗ trợ lãi suất 0% từ ngân hàng.
- **Tương tác Frontend độc quyền:**
- Bộ lọc dự án theo khoảng giá (Tỷ VNĐ) và diện tích m2.
- Tải trọn bộ tài liệu pháp lý và mặt bằng phân lô PDF.
- Đăng ký lái xe đưa đón tham quan nhà mẫu thực tế.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.

---

### [Website #112] MS21 — Xe Đạp - Thể Thao Electric Bicycle 21 (ID: `xe-dap-the-thao-electric-bicycle-21`)
- **Ngành nghề Catalog:** Thể thao | **Niche xác định:** Trung Tâm Thể Dục Thể Hình Fitness, Yoga & Xe Đạp Thể Thao
- **Archetype Kiến Trúc:** 08. Education & Academy Hub
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đen Than (#111827), Xanh Lime (#84cc16), Trắng (#ffffff)
  - **Typography:** Barlow Semi Condensed (Tiêu đề), Inter (Nội dung)
  - **Bố cục Hero:** Đánh thức sức mạnh tiềm ẩn, nâng tầm thể chất với phòng tập chuẩn 5 sao.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Trang thiết bị máy tập nhập khẩu chuẩn cơ sinh học hiện đại.
- Đội ngũ Master Trainer có chứng chỉ quốc tế kèm 1-1 chuyên sâu.
- Lớp học Yoga thư giãn tinh thần với chuyên gia người Ấn Độ.
- **Tương tác Frontend độc quyền:**
- Đăng ký tập thử 7 ngày miễn phí trải nghiệm toàn bộ tiện ích.
- Tra cứu lịch lớp Yoga và Cycling trong tuần cập nhật liên tục.
- Công cụ tính chỉ số thể lực và đề xuất lộ trình tăng cơ giảm mỡ.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.

---

### [Website #113] MS69 — Yến sào nguyên chất - demo 69 (ID: `yen-sao-nguyen-chat-demo-69`)
- **Ngành nghề Catalog:** Thực phẩm | **Niche xác định:** Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền
- **Archetype Kiến Trúc:** 09. Culinary & Gastronomy Experience
- **Mức độ ưu tiên:** **P0** | **Trạng thái kỹ thuật hiện tại:** Broken-EmptyShell
- **Đối tượng mục tiêu & Mục đích:** Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao. Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** Đỏ Vang Ấm (#b91c1c), Nâu Cháy (#451a03), Vàng Nghệ (#f59e0b)
  - **Typography:** Cinzel (Tiêu đề), Plus Jakarta Sans (Nội dung)
  - **Bố cục Hero:** Trải nghiệm ẩm thực truyền thống đậm đà bản sắc với nguồn nguyên liệu sạch.
- **Hệ thống Trang con & Điều hướng:** san-pham.html, gioi-thieu.html, lien-he.html (kèm `.library-return-bar`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
- Menu phân rõ món khai vị, món chính, lẩu và món tráng miệng.
- Nhãn OCOP và cam kết không sử dụng chất phụ gia bảo quản độc hại.
- Không gian phòng tiệc gia đình và hội nghị ấm cúng.
- **Tương tác Frontend độc quyền:**
- Form Đặt Bàn Tiệc (Số người, Khung giờ, Yêu cầu phòng riêng).
- Bộ lọc món ăn theo khẩu vị (Thanh đạm, Đậm đà, Món chay).
- Đặt hàng đặc sản đóng gói giao tận nhà.
- **Yêu cầu Nội dung & Hình ảnh:** Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.
- **Lỗi hiện tại cần khắc phục:** Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.
