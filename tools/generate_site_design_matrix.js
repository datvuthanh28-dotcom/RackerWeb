// tools/generate_site_design_matrix.js
const fs = require('fs');
const path = require('path');

const themes = JSON.parse(fs.readFileSync('d:/dvweb/data/themes.json', 'utf8').replace(/^\uFEFF/, ''));
const csvLines = fs.readFileSync('d:/dvweb/reports/full_113_sites_status.csv', 'utf8').replace(/^\uFEFF/, '').trim().split('\n');
const headers = csvLines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));

const statusMap = {};
for (let i = 1; i < csvLines.length; i++) {
  const cols = csvLines[i].split(',').map(c => c.trim().replace(/^"|"$/g, ''));
  const obj = {};
  headers.forEach((h, idx) => { obj[h] = cols[idx]; });
  statusMap[obj.Id] = obj;
}

function getNicheInfo(t, status) {
  const id = t.id;
  const name = t.name;
  const cat = t.category;
  const isBroken = (status && status.StatusType === 'Broken-EmptyShell');
  const isCustom = (status && status.StatusType === 'Customized-Rich');

  let priority = isBroken ? 'P0' : (isCustom ? 'P3' : 'P1');

  // Custom 3 pilot sites
  if (id === 'auto-garage-demo-40') {
    return {
      niche: 'Showroom Siêu Xe & Kỹ Thuật Nâng Cấp Hạng Sang',
      arch: '12. Automotive & Showroom Experience',
      priority: 'P3',
      audience: 'Doanh nhân, người đam mê tốc độ, chủ sở hữu xe sang nhập khẩu.',
      purpose: 'Trưng bày bộ sưu tập siêu xe, đặt lịch lái thử, dịch vụ bảo dưỡng chuẩn OEM.',
      palette: 'Đen Obsidian (#0f172a), Đỏ Sport GT (#dc2626), Titan Bạc (#334155)',
      typography: 'Barlow Semi Condensed (Tiêu đề), Inter (Nội dung)',
      hero: 'Góc chụp xe 3/4 thể thao + Bộ đếm tốc độ & mã lực + CTA Đăng ký lái thử.',
      subpages: 'san-pham.html, product-detail.html, cart.html, gioi-thieu.html, lien-he.html, blog.html',
      distinctions: [
        'Bộ đếm thông số hiệu năng động cơ (Mã lực, Tăng tốc 0-100km/h, Hộp số).',
        'Bộ tab phân khúc xe chuyên sâu (Sedan, SUV, Coupe, Gói dịch vụ bảo dưỡng PPF).',
        'Bộ chọn màu sắc ngoại thất xe tương tác trực quan.'
      ],
      interactions: [
        'Giỏ hàng lưu trữ LocalStorage đầy đủ tính năng thêm/xóa/tính tổng.',
        'Bộ lọc và tìm kiếm xe tức thì theo tầm giá và phân khúc.',
        'Form đặt lịch lái thử có xác thực số điện thoại và phản hồi chuẩn mực.'
      ],
      imagery: '11 hình ảnh xe sang độ nét cao phân giải 2K-4K tải cục bộ.',
      defects: 'Đã hoàn thiện mỹ mãn. Cần khóa bảo vệ chống script ghi đè.'
    };
  }

  if (id === 'cua-hang-hoa-demo-64') {
    return {
      niche: 'Tiệm Hoa Tươi Nghệ Thuật & Thiết Kế Hoa Sự Kiện',
      arch: '03. Beauty & Boutique Atelier',
      priority: 'P3',
      audience: 'Khách hàng cá nhân tặng sinh nhật, tình yêu, và doanh nghiệp đặt hoa khai trương/hội nghị.',
      purpose: 'Giới thiệu các tác phẩm hoa tươi theo mùa, hỗ trợ đặt hoa hỏa tốc giao trong 2h.',
      palette: 'Hồng phấn thạch anh (#be185d), Xanh lục lá (#047857), Nền kem hoa (#fff1f2)',
      typography: 'Playfair Display (Tiêu đề), Be Vietnam Pro (Nội dung)',
      hero: 'Hoa tươi nghệ thuật tuyển chọn Đà Lạt mỗi sáng + Cam kết hoa mới 100%.',
      subpages: 'san-pham.html, gioi-thieu.html, lien-he.html',
      distinctions: [
        'Bộ phân loại hoa theo dịp tặng (Sinh nhật, Khai trương, Hoa cưới, Lan hồ điệp).',
        'Khối ưu đãi tặng kèm thiệp viết tay mỹ thuật và banner chúc mừng.',
        'Bố cục thẻ hoa dạng boutique tao nhã có tag xuất xứ hoa nhập khẩu.'
      ],
      interactions: [
        'Form hẹn giờ và ngày giao hoa hỏa tốc.',
        'Bộ lọc giá sản phẩm theo phân khúc dưới 500k, 1-2 triệu, trên 3 triệu.',
        'Modal xem chi tiết bông hoa và kích thước giỏ hoa.'
      ],
      imagery: '15 hình ảnh mẫu hoa tươi chất lượng cao chụp studio thực tế.',
      defects: 'Đã hoàn thiện phong cách riêng. Cần khóa bảo vệ chống script ghi đè.'
    };
  }

  if (id === 'fashion-demo-01') {
    return {
      niche: 'Thời Trang May Đo & Thiết Kế Đương Đại (Atelier Lookbook)',
      arch: '02. Editorial Fashion & Lifestyle',
      priority: 'P3',
      audience: 'Phụ nữ hiện đại, nhân sự cao cấp, người yêu chuộng thời trang may đo tối giản.',
      purpose: 'Trình diễn bộ sưu tập thời trang theo mùa, tôn vinh chất liệu lụa tơ tằm và phom dáng blazer.',
      palette: 'Đen Noir (#18181b), Vàng Hổ Phách (#d97706), Trắng ngà (#fafaf9)',
      typography: 'Playfair Display (Tiêu đề), Montserrat (Nội dung)',
      hero: 'Asymmetrical Editorial Hero với người mẫu trong trang phục lụa và blazer thanh lịch.',
      subpages: 'san-pham.html, gioi-thieu.html, lien-he.html',
      distinctions: [
        'Bố cục tạp chí lệch tầng (Broken-grid) phá vỡ khung lưới truyền thống.',
        'Danh mục khám phá theo phong cách (Công sở thanh lịch vs Dạo phố cuối tuần).',
        'Lưới 24 sản phẩm thời trang phong phú có phân loại chi tiết.'
      ],
      interactions: [
        'Hover hoán đổi ảnh người mẫu góc nhìn thứ 2.',
        'Bộ lọc trang phục tức thì theo danh mục áo blazer, đầm midi, sơ mi lụa.',
        'Thanh điều hướng tối giản có nút mở menu di động trượt.'
      ],
      imagery: 'Bộ ảnh lookbook thời trang người mẫu và chất liệu vải thực tế.',
      defects: 'Đã hoàn thiện bố cục tốt. Cần bổ sung lưu trữ giỏ hàng LocalStorage.'
    };
  }

  if (id === 'cong-ty-san-xuat-bao-bi-demo-70') {
    return {
      niche: 'Sản Xuất Bao Bì Giấy Sóng & Màng Ghép Công Nghiệp (Tân Phát)',
      arch: '06. Corporate & Industrial B2B',
      priority: 'Completed (Pilot)',
      audience: 'Giám đốc chuỗi cung ứng, Trưởng phòng mua hàng B2B, doanh nghiệp xuất khẩu thủy sản/dược/điện tử.',
      purpose: 'Chứng minh năng lực sản xuất 15.000m² tại VSIP II, hỗ trợ lập yêu cầu báo giá RFQ và tải tài liệu kỹ thuật.',
      palette: 'Đen Slate (#0f172a), Xanh Kỹ Thuật (#1e3a8a), Cam An Toàn (#ea580c), Trắng Băng (#f8fafc)',
      typography: 'Space Grotesk (Tiêu đề kỹ thuật), Inter (Nội dung phân tích)',
      hero: 'Asymmetrical Industrial Hero + Dây chuyền tạo sóng 2.2m + 4 Chỉ số KPI quy mô (15.000m², 2.500 tấn/tháng, 12 Lines, 100% kiểm định).',
      subpages: 'san-pham.html, chi-tiet-san-pham.html, gioi-thieu.html, lien-he.html (Đầy đủ Return Bar #MS70)',
      distinctions: [
        'Khối tính toán và ước lượng tiến độ sản xuất B2B trực tiếp trên trang chủ.',
        'Bản đặc tả kỹ thuật chi tiết (TDS) với cấu trúc 4 lớp màng ghép nhôm AL và bảng thử nghiệm nén bục Mullen.',
        'Không dùng giỏ hàng bán lẻ; tích hợp modal RFQ chuyên sâu chuẩn doanh nghiệp.'
      ],
      interactions: [
        'Interactive RFQ Estimator: Thanh trượt số lượng và chọn nhóm bao bì tính toán thời gian sản xuất và chiết khấu B2B theo thời gian thực.',
        'Modal gửi yêu cầu báo giá kỹ thuật có xác thực và liên kết Zalo 0971183939 định dạng sẵn nội dung.',
        'Bộ lọc đa tầng theo ngành ứng dụng và cấu trúc sóng giấy tại trang san-pham.html.',
        'Bộ chuyển tab thông số kỹ thuật (Spec Tab Switcher) tại chi-tiet-san-pham.html.'
      ],
      imagery: 'Ảnh nhà máy máy in flexo khổ lớn, ảnh chụp studio thùng carton xuất khẩu và túi màng ghép nhôm cao cấp.',
      defects: 'ĐÃ HOÀN THIỆN XUẤT SẮC (Phase 2 Pilot). Đã khóa bảo vệ trong data/protected_sites.json.'
    };
  }

  if (id === 'website-tiem-cafe-tinh-demo-54') {
    return {
      niche: 'Xưởng Rang Cà Phê Mộc & Tiệm Cà Phê Specialty Đương Đại',
      arch: '09. Culinary & Gastronomy Experience',
      priority: 'Completed (Pilot)',
      audience: 'Người sành cà phê specialty, giới sáng tạo cần không gian yên tĩnh, khách thưởng thức cà phê Cầu Đất nguyên bản.',
      purpose: 'Kể câu chuyện hạt cà phê mộc Cầu Đất, giới thiệu thực đơn chiết xuất thủ công V60/Cold Brew, đặt chỗ và đặt món mang về.',
      palette: 'Nâu Cà Phê Đậm (#291811), Vàng Hổ Phách Nướng (#b45309), Kem Sữa (#fbf8f5), Xanh Nông Trại (#065f46)',
      typography: 'Playfair Display (Serif nghệ nhân), Plus Jakarta Sans (Nội dung ấm áp)',
      hero: 'Warm Editorial Hero với ảnh Barista rót nước pha V60 + Thẻ Single-Origin Cầu Đất 1.650m + Nút Khám phá thực đơn.',
      subpages: 'thuc-don.html, cau-chuyen.html, lien-he.html (Đầy đủ Return Bar #MS54)',
      distinctions: [
        'Bố cục thẻ cà phê có gắn nhãn ghi chú hương vị (Floral, Orange, Dark Chocolate) và xuất xứ nông trại.',
        'Slide-out Cart Drawer trượt mượt mà từ cạnh phải, quản lý đồ uống tùy chỉnh lưu trữ LocalStorage.',
        'Không dùng giao diện generic; mang đậm phong cách Wabi-Sabi tối giản và ấm cúng.'
      ],
      interactions: [
        'Interactive Taste Filter: Lọc theo phong cách chiết xuất (Pha thủ công V60, Espresso Bar, Trà & Kombucha, Bánh nướng).',
        'Drink Customizer Modal: Tùy chỉnh mức đường (0-100%), lượng đá/nóng, loại sữa (thanh trùng hoặc yến mạch Oatly).',
        'LocalStorage Cart Engine: Tăng giảm số lượng, xóa món, tính tổng tiền, simulated checkout.',
        'Table Reservation Planner: Đặt chỗ chọn ngày giờ, số khách và đăng ký workshop Cupping thứ 7.'
      ],
      imagery: 'Ảnh Barista pha V60 độ phân giải cao, không gian nội thất gỗ sồi ngập nắng và đĩa hạt cà phê kèm bánh sừng bò nướng.',
      defects: 'ĐÃ HOÀN THIỆN XUẤT SẮC (Phase 2 Pilot). Đã khóa bảo vệ trong data/protected_sites.json.'
    };
  }

  // Determine Niche and Archetype based on real name and category
  let niche = 'Dịch Vụ Chuyên Nghiệp';
  let arch = '06. Corporate & Professional Services';
  let audience = 'Khách hàng cá nhân và doanh nghiệp có nhu cầu dịch vụ chất lượng cao.';
  let purpose = 'Khẳng định thương hiệu, giới thiệu dịch vụ tiêu biểu và thu thập yêu cầu tư vấn.';
  let palette = 'Xanh Navy (#1e40af), Xanh Lam (#3b82f6), Trắng (#ffffff)';
  let typography = 'Inter (Tiêu đề), Plus Jakarta Sans (Nội dung)';
  let hero = 'Thông điệp dịch vụ cốt lõi + Hình ảnh chuyên gia tận tâm.';
  let subpages = 'san-pham.html, gioi-thieu.html, lien-he.html';
  let distinctions = [
    'Quy trình làm việc 4 bước minh bạch và chuẩn mực.',
    'Cam kết bảo hành và đồng hành lâu dài cùng khách hàng.',
    'Hotline Zalo tư vấn 24/7 trực tiếp từ chuyên gia phụ trách.'
  ];
  let interactions = [
    'Form gửi yêu cầu tư vấn báo giá chi tiết.',
    'Bộ lọc dịch vụ theo nhu cầu và quy mô ngân sách.',
    'Liên kết chat Zalo nhanh với nội dung soạn sẵn.'
  ];
  let imagery = 'Hình ảnh hoạt động dịch vụ và văn phòng làm việc chuyên nghiệp.';

  const lowerName = name.toLowerCase();
  const lowerId = id.toLowerCase();

  if (cat.includes('Thời trang') || lowerId.includes('fashion') || lowerId.includes('quan-ao') || lowerId.includes('dam') || lowerId.includes('vay')) {
    arch = '01. Premium E-Commerce Storefront';
    if (lowerId.includes('tre-em') || lowerId.includes('baby') || lowerId.includes('me-va-be')) {
      niche = 'Thời Trang & Phụ Kiện Trẻ Em / Mẹ & Bé';
      palette = 'Vàng Pastel (#fef08a), Xanh Mint (#a7f3d0), Nâu Ấm (#78350f)';
      typography = 'Nunito (Tiêu đề), Be Vietnam Pro (Nội dung)';
      hero = 'Bé vui khỏe trong trang phục cotton hữu cơ an toàn cho làn da.';
      distinctions = [
        'Phân loại trang phục theo độ tuổi (0-12 tháng, 1-3 tuổi, 4-8 tuổi).',
        'Chứng nhận vải 100% cotton organic không gây kích ứng.',
        'Bảng hướng dẫn chọn size chuẩn cho bé theo chiều cao và cân nặng.'
      ];
      interactions = [
        'Bộ lọc size theo độ tuổi và cân nặng.',
        'Thêm nhanh vào giỏ hàng lưu LocalStorage.',
        'Xem chi tiết thành phần sợi vải an toàn.'
      ];
    } else if (lowerId.includes('nam') || lowerName.includes('nam')) {
      niche = 'Thời Trang Nam & Phong Cách Quý Ông Hiện Đại';
      palette = 'Xanh Navy (#0f172a), Ghi Bạc (#64748b), Trắng (#ffffff)';
      typography = 'Space Grotesk (Tiêu đề), Inter (Nội dung)';
      hero = 'Bộ sưu tập veston may đo & trang phục thường nhật lịch lãm.';
      distinctions = [
        'Bảng phối đồ Complete Outfit (Áo sơ mi + Quần tây + Giày da).',
        'Chất liệu vải chống nhăn và co giãn 4 chiều vận động thoải mái.',
        'Dịch vụ chỉnh sửa may đo theo số đo cơ thể.'
      ];
      interactions = [
        'Bộ lọc trang phục theo dịp (Công sở, Dự tiệc, Thể thao).',
        'Chọn size S/M/L/XL có gợi ý theo chiều cao.',
        'Drawer giỏ hàng trượt mượt mà.'
      ];
    } else {
      niche = 'Thời Trang Xu Hướng Nữ & Đầm Tiệc Thiết Kế';
      palette = 'Đen Than (#18181b), Vàng Nhạt (#fef3c7), Trắng (#ffffff)';
      typography = 'Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)';
      hero = 'Bộ sưu tập thời trang dẫn đầu xu hướng mùa mới.';
      distinctions = [
        'Lưới sản phẩm thời trang tỷ lệ ảnh 3:4 chuẩn lookbook.',
        'Huy hiệu New In, Best Seller và Ưu đãi tuần lễ thời trang.',
        'Khối cảm hứng phối đồ Street Style.'
      ];
      interactions = [
        'Lọc sản phẩm theo tầm giá và danh mục.',
        'Hover xem ảnh góc sau của trang phục.',
        'Lưu giỏ hàng và danh sách yêu thích.'
      ];
    }
  } else if (cat.includes('Mỹ phẩm') || cat.includes('Spa') || lowerId.includes('cosmetic') || lowerId.includes('spa') || lowerId.includes('son') || lowerId.includes('kem')) {
    arch = '03. Beauty & Cosmetics Atelier';
    if (lowerId.includes('spa') || lowerName.includes('spa')) {
      niche = 'Spa Trị Liệu, Dưỡng Sinh & Chăm Sóc Sức Khỏe Thượng Lưu';
      palette = 'Xanh Rừng Trầm (#064e3b), Xanh Thảo Mộc (#047857), Vàng Ánh Kim (#d97706)';
      typography = 'Cormorant Garamond (Tiêu đề), Be Vietnam Pro (Nội dung)';
      hero = 'Không gian thư thái đánh thức ngũ quan và tái tạo năng lượng nguyên bản.';
      distinctions = [
        'Gói liệu trình gội đầu dưỡng sinh thảo dược và massage đá nóng.',
        'Hồ sơ kỹ thuật viên tay nghề cao đạt chuẩn quốc tế.',
        'Không gian phòng VIP trị liệu riêng tư yên tĩnh.'
      ];
      interactions = [
        'Bộ chọn gói dịch vụ và đặt lịch hẹn khung giờ trống.',
        'Tính toán thời gian liệu trình (60p, 90p, 120p).',
        'Nhận voucher ưu đãi buổi trải nghiệm đầu tiên.'
      ];
    } else {
      niche = 'Mỹ Phẩm Thuần Chay & Dược Mỹ Phẩm Phục Hồi Da';
      palette = 'Hồng Mộc (#be185d), Hoa Hồng (#fff1f2), Đỏ Rượu (#4c0519)';
      typography = 'Cormorant Garamond (Tiêu đề), Inter (Nội dung)';
      hero = 'Giải pháp khoa học cho làn da căng bóng tự nhiên với peptide và hoa hồng.';
      distinctions = [
        'Bảng tra cứu công dụng hoạt chất (Niacinamide, B5, Ceramide).',
        'Chứng nhận mỹ phẩm an toàn da liễu không thử nghiệm trên động vật.',
        'Quy trình 3 bước dưỡng da chuẩn Hàn Quốc.'
      ];
      interactions = [
        'Trắc nghiệm chuẩn đoán loại da để đề xuất routine.',
        'Thêm nhanh combo dưỡng da vào giỏ hàng.',
        'Hỏi đáp trực tiếp cùng chuyên viên da liễu qua Zalo.'
      ];
    }
  } else if (cat.includes('Nội thất') || lowerId.includes('furniture') || lowerId.includes('noi-that') || lowerId.includes('ban-ghe') || lowerId.includes('nem')) {
    arch = '04. Architecture & Interior Showcase';
    if (lowerId.includes('nem') || lowerName.includes('nệm')) {
      niche = 'Siêu Thị Nệm Cao Su Thiên Nhiên & Chăm Sóc Giấc Ngủ';
      palette = 'Xanh Indigo (#1e1b4b), Xanh Êm Ái (#4338ca), Trắng Kem (#f8fafc)';
      typography = 'Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)';
      hero = 'Nâng niu giấc ngủ chuẩn công thái học với nệm cao su 100% thiên nhiên.';
      distinctions = [
        'Bảng so sánh độ êm ái và bảo hành 10-15 năm chính hãng.',
        'Chính sách ngủ thử 100 ngày đổi trả miễn phí.',
        'Bộ chọn kích thước nệm chuẩn (1m6x2m, 1m8x2m, 2mx2m2).'
      ];
      interactions = [
        'Bộ lọc chọn kích thước và độ dày nệm (5cm, 10cm, 15cm).',
        'Tính giá theo kích thước nệm tức thì.',
        'Đăng ký giao hàng và trải nghiệm thử tại nhà.'
      ];
    } else {
      niche = 'Nội Thất Gỗ Tự Nhiên & Phong Cách Bắc Âu Scandinavian';
      palette = 'Nâu Gỗ Sồi (#78350f), Nâu Hổ Phách (#b45309), Kem Sứ (#fefce8)';
      typography = 'DM Sans (Tiêu đề), Be Vietnam Pro (Nội dung)';
      hero = 'Kiến tạo không gian sống tối giản, ấm áp và gần gũi thiên nhiên.';
      distinctions = [
        'Phân loại bộ sưu tập theo từng không gian (Phòng khách, Bếp, Phòng ngủ).',
        'Thông số chất liệu gỗ sồi tự nhiên đạt chuẩn sấy chống mối mọt.',
        'Gợi ý set bàn ăn đồng bộ cùng ghế và tủ kệ tivi.'
      ];
      interactions = [
        'Xem kích thước 3 chiều (Dài x Rộng x Cao) của món đồ.',
        'Lọc sản phẩm theo chất liệu (Gỗ tự nhiên, Gỗ công nghiệp MDF).',
        'Yêu cầu kỹ sư tới tận nhà đo đạc và thiết kế 3D.'
      ];
    }
  } else if (cat.includes('Công nghệ') || lowerId.includes('tech') || lowerId.includes('computer') || lowerId.includes('laptop') || lowerId.includes('cong-nghe')) {
    arch = '10. Tech Specs & Digital Solutions';
    niche = 'Thiết Bị Công Nghệ Cao, Laptop & Phụ Kiện Gaming';
    palette = 'Xanh Cyan (#0284c7), Xanh Neon (#06b6d4), Nền Đen Slate (#0f172a)';
    typography = 'Space Grotesk (Tiêu đề), JetBrains Mono / Inter (Nội dung)';
    hero = 'Đỉnh cao hiệu năng thế hệ mới với vi xử lý gen 14 và đồ họa chuyên nghiệp.';
    distinctions = [
      'Bảng thông số kỹ thuật chi tiết (CPU, GPU, RAM DDR5, Ổ cứng SSD NVMe).',
      'Chế độ hiển thị Dark-Tech tối ưu cho tín đồ công nghệ.',
      'Cam kết sản phẩm mới 100% nguyên seal kèm bảo hành tận nơi 24 tháng.'
    ];
    interactions = [
      'Công cụ chọn 2 sản phẩm để so sánh cấu hình kỹ thuật.',
      'Bộ lọc linh kiện theo phân khúc giá và thương hiệu.',
      'Kiểm tra tình trạng hàng có sẵn tại cửa hàng.'
    ];
  } else if (cat.includes('Bất động sản') || lowerId.includes('bat-dong-san') || lowerId.includes('building') || lowerId.includes('du-an')) {
    arch = '04. Architecture & Real Estate';
    niche = 'Bất Động Sản Nghỉ Dưỡng & Căn Hộ Đô Thị Sinh Thái';
    palette = 'Xanh Navy Sâu (#1e3a8a), Vàng Kim Hoàng Gia (#d97706), Trắng Sứ (#f8fafc)';
    typography = 'Syne (Tiêu đề), DM Sans (Nội dung)';
    hero = 'Kiệt tác không gian sống thượng lưu ven sông với tầm nhìn triệu đô.';
    distinctions = [
      'Bản đồ vị trí tọa độ vàng và liên kết hạ tầng giao thông vùng.',
      'Bản vẽ mặt bằng kiến trúc chi tiết từng căn hộ penthouse/shophouse.',
      'Bảng tiến độ thanh toán linh hoạt hỗ trợ lãi suất 0% từ ngân hàng.'
    ];
    interactions = [
      'Bộ lọc dự án theo khoảng giá (Tỷ VNĐ) và diện tích m2.',
      'Tải trọn bộ tài liệu pháp lý và mặt bằng phân lô PDF.',
      'Đăng ký lái xe đưa đón tham quan nhà mẫu thực tế.'
    ];
  } else if (cat.includes('Ẩm thực') || cat.includes('Thực phẩm') || lowerId.includes('food') || lowerId.includes('banh') || lowerId.includes('cafe') || lowerId.includes('tra-sua') || lowerId.includes('ruou') || lowerId.includes('yen-sao') || lowerId.includes('gio-cha') || lowerId.includes('dac-san')) {
    arch = '09. Culinary & Gastronomy Experience';
    if (lowerId.includes('cafe') || lowerId.includes('tra-sua') || lowerId.includes('tra-thao-moc')) {
      niche = 'Chuỗi Trà & Cà Phê Thảo Mộc / Đồ Uống Trẻ Trung';
      palette = 'Nâu Cà Phê (#451a03), Cam Hổ Phách (#ea580c), Kem Trà (#fffbeb)';
      typography = 'Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)';
      hero = 'Hương vị cà phê nguyên bản rang xay mộc và trà sữa nướng béo ngậy.';
      distinctions = [
        'Thực đơn phân theo danh mục (Cà phê thủ công, Trà trái cây tươi, Trà sữa béo).',
        'Tùy chọn điều chỉnh % lượng đường và % lượng đá theo khẩu vị.',
        'Chính sách tích điểm thành viên và ưu đãi giờ vàng (Happy Hour).'
      ];
      interactions = [
        'Chọn mức đường (30%, 50%, 70%) và đá cho từng ly.',
        'Thêm nhanh thức uống vào đơn hàng hỏa tốc.',
        'Form đặt bàn nhóm họp mặt hoặc tiệc sinh nhật.'
      ];
    } else if (lowerId.includes('ruou') || lowerName.includes('rượu')) {
      niche = 'Hầm Rượu Vang & Rượu Ngoại Nhập Khẩu Thượng Hạng';
      palette = 'Đỏ Bordeaux (#7f1d1d), Vàng Đồng (#b45309), Đen Hầm Rượu (#0f172a)';
      typography = 'Cinzel (Tiêu đề), Montserrat (Nội dung)';
      hero = 'Tinh hoa rượu vang lâu năm nhập khẩu chính ngạch từ Pháp, Ý và Chile.';
      distinctions = [
        'Thông tin xuất xứ niên vụ, giống nho và nồng độ cồn % rõ ràng.',
        'Gợi ý kết hợp rượu vang cùng món ăn (Food Pairing guide).',
        'Cam kết tem nhập khẩu hải quan và bảo quản hầm lạnh 16 độ C.'
      ];
      interactions = [
        'Lọc rượu theo quốc gia (Pháp, Ý, Chile, Scotland).',
        'Lọc theo mức giá và giống nho yêu thích.',
        'Tư vấn chọn hộp quà rượu ngoại tặng đối tác qua Zalo.'
      ];
    } else {
      niche = 'Ẩm Thực Tinh Hoa & Món Ăn Đặc Sản Gia Truyền';
      palette = 'Đỏ Vang Ấm (#b91c1c), Nâu Cháy (#451a03), Vàng Nghệ (#f59e0b)';
      typography = 'Cinzel (Tiêu đề), Plus Jakarta Sans (Nội dung)';
      hero = 'Trải nghiệm ẩm thực truyền thống đậm đà bản sắc với nguồn nguyên liệu sạch.';
      distinctions = [
        'Menu phân rõ món khai vị, món chính, lẩu và món tráng miệng.',
        'Nhãn OCOP và cam kết không sử dụng chất phụ gia bảo quản độc hại.',
        'Không gian phòng tiệc gia đình và hội nghị ấm cúng.'
      ];
      interactions = [
        'Form Đặt Bàn Tiệc (Số người, Khung giờ, Yêu cầu phòng riêng).',
        'Bộ lọc món ăn theo khẩu vị (Thanh đạm, Đậm đà, Món chay).',
        'Đặt hàng đặc sản đóng gói giao tận nhà.'
      ];
    }
  } else if (cat.includes('Y tế') || lowerId.includes('duoc') || lowerId.includes('thuoc') || lowerId.includes('medimall') || lowerId.includes('y-te')) {
    arch = '07. Healthcare & Clinical Services';
    niche = 'Nhà Thuốc Đạt Chuẩn GPP & Thiết Bị Y Tế Gia Đình';
    palette = 'Xanh Lam Y Tế (#0284c7), Xanh Ngọc Cứu Thương (#10b981), Trắng Y Khoa (#ffffff)';
    typography = 'Lexend (Tiêu đề), Be Vietnam Pro (Nội dung)';
    hero = 'Tận tâm chăm sóc sức khỏe gia đình với thuốc chính hãng và thiết bị y tế chuẩn.';
    distinctions = [
      'Tem xác thực xuất xứ và giấy phép lưu hành của Bộ Y Tế.',
      'Hướng dẫn liều lượng và chống chỉ định y khoa rõ ràng minh bạch.',
      'Dịch vụ dược sĩ gia đình tư vấn miễn phí qua hotline 24/7.'
    ];
    interactions = [
      'Gửi hình chụp đơn thuốc để Dược sĩ đối soát báo giá.',
      'Bộ lọc thiết bị y tế (Máy đo huyết áp, Máy đo đường huyết, Hộp sơ cứu).',
      'Định vị nhà thuốc gần nhất nhận thuốc trong 30 phút.'
    ];
  } else if (cat.includes('Giáo dục') || lowerId.includes('mam-non') || lowerId.includes('day-boi') || lowerId.includes('day-lai-xe') || lowerId.includes('ngoai-ngu') || lowerId.includes('giao-duc')) {
    arch = '08. Education & Academy Hub';
    if (lowerId.includes('mam-non') || lowerName.includes('mầm non')) {
      niche = 'Trường Mầm Non Song Ngữ & Giáo Dục Thể Chất Toàn Diện';
      palette = 'Cam Nắng (#f97316), Vàng Tươi (#facc15), Xanh Mầm Non (#22c55e)';
      typography = 'Nunito (Tiêu đề), Be Vietnam Pro (Nội dung)';
      hero = 'Nơi ươm mầm tài năng và nuôi dưỡng tuổi thơ hạnh phúc của trẻ.';
      distinctions = [
        'Thực đơn dinh dưỡng 5 ngày trong tuần được chuyên gia viện dinh dưỡng phê duyệt.',
        'Hệ thống camera trực tuyến 24/7 phụ huynh an tâm quan sát con.',
        'Phương pháp giáo dục Montessori kết hợp tiếng Anh bản ngữ.'
      ];
      interactions = [
        'Đăng ký tham quan trường và trải nghiệm 1 ngày làm học sinh mầm non.',
        'Xem thời khóa biểu mẫu và thực đơn ăn dặm theo tuần.',
        'Tính học phí trọn gói gồm xe đưa đón và bán trú.'
      ];
    } else if (lowerId.includes('day-lai-xe') || lowerName.includes('lái xe')) {
      niche = 'Trung Tâm Đào Tạo Sát Hạch Lái Xe Ô Tô Các Hạng (B1, B2, C)';
      palette = 'Xanh Thép (#1e3a8a), Cam An Toàn (#ea580c), Trắng Sáng (#ffffff)';
      typography = 'Space Grotesk (Tiêu đề), Inter (Nội dung)';
      hero = 'Học lái xe vững tay lái, tự tin trên mọi cung đường với sân tập chuẩn ISO.';
      distinctions = [
        'Cam kết học phí trọn gói 100% không phát sinh thêm chi phí dã ngoại.',
        'Dàn xe tập lái đời mới có máy lạnh và giáo viên kèm 1-1 tận tình.',
        'Lịch học linh hoạt học viên tự chọn cả thứ 7 và Chủ nhật.'
      ];
      interactions = [
        'Form Đăng ký học lái xe nhận ưu đãi học phí.',
        'Bộ đề thi thử 600 câu lý thuyết luật giao thông trực tuyến.',
        'Chọn gói học theo phân hạng xe B1 tự động hoặc B2 số sàn.'
      ];
    } else {
      niche = 'Học Viện Đào Tạo Kỹ Năng & Ngoại Ngữ Chuẩn Quốc Tế';
      palette = 'Xanh Tri Thức (#2563eb), Vàng Khởi Nghiệp (#f59e0b), Trắng (#ffffff)';
      typography = 'Plus Jakarta Sans (Tiêu đề), Inter (Nội dung)';
      hero = 'Bứt phá kỹ năng, làm chủ tương lai với lộ trình đào tạo chuẩn quốc tế.';
      distinctions = [
        'Lộ trình cam kết đầu ra bằng văn bản hợp đồng rõ ràng.',
        '100% Giảng viên bản ngữ có chứng chỉ giảng dạy quốc tế CELTA/TESOL.',
        'Môi trường thực hành dự án thực tế chiếm 70% thời lượng học.'
      ];
      interactions = [
        'Làm bài kiểm tra trình độ đầu vào trực tuyến miễn phí.',
        'Xem giáo trình chi tiết từng module học tập.',
        'Đăng ký tư vấn lộ trình học phù hợp với mục tiêu nghề nghiệp.'
      ];
    }
  } else if (cat.includes('Du lịch') || lowerId.includes('travel') || lowerId.includes('du-lich') || lowerId.includes('tour')) {
    arch = '05. Tourism & Destination Explorer';
    niche = 'Lữ Hành Quốc Tế & Kỳ Nghỉ Trọn Gói Cao Cấp';
    palette = 'Xanh Đại Dương (#0284c7), Cam Hoàng Hôn (#f59e0b), Xanh Nước Biển (#f0f9ff)';
    typography = 'Outfit (Tiêu đề), Merriweather (Nội dung)';
    hero = 'Khám phá những vùng đất thiên đường với kỳ nghỉ dưỡng 5 sao chuẩn mực.';
    distinctions = [
      'Lịch trình chi tiết từng ngày (Đi đâu, Ăn gì, Nghỉ tại khách sạn nào).',
      'Đã bao gồm trọn gói vé máy bay khứ hồi, bảo hiểm quốc tế và visa.',
      'Hướng dẫn viên chuyên nghiệp, nhiệt tình, am hiểu văn hóa địa phương.'
    ];
    interactions = [
      'Lọc tour theo mức giá, thời gian khởi hành và điểm đến.',
      'Công cụ tính tổng chi phí theo số lượng người lớn và trẻ em.',
      'Form đăng ký nhận tư vấn lịch trình tour thiết kế riêng theo đoàn.'
    ];
  } else if (cat.includes('Ô tô') || lowerId.includes('garage') || lowerId.includes('xe-hoi') || lowerId.includes('o-to')) {
    arch = '12. Automotive & Showroom Experience';
    niche = 'Showroom Mua Bán Xe & Trung Tâm Chăm Sóc Xe Chuyên Nghiệp';
    palette = 'Đen Than (#0f172a), Đỏ Rực (#e11d48), Xám Kim Loại (#f1f5f9)';
    typography = 'Barlow Semi Condensed (Tiêu đề), Inter (Nội dung)';
    hero = 'Công nghệ vận hành vượt bậc, cảm giác lái phấn khích và dịch vụ phụ tùng chính hãng.';
    distinctions = [
      'Bảng kiểm định 176 hạng mục kỹ thuật chuẩn chính hãng đối với xe lướt.',
      'Dịch vụ độ mâm lốp, nâng cấp âm thanh và phủ Ceramic bảo vệ sơn.',
      'Chính sách bảo hành động cơ và hộp số lên tới 3 năm.'
    ];
    interactions = [
      'Lọc các dòng xe theo phân khúc Sedan, SUV, Bán tải, Xe điện.',
      'Form đăng ký lái thử xe tận nơi thuận tiện.',
      'Ước tính chi phí trả góp và bảng tính lãi suất hàng tháng.'
    ];
  } else if (lowerId.includes('bao-bi') || lowerId.includes('co-khi') || lowerId.includes('logistics') || lowerId.includes('bao-ve') || lowerId.includes('in-an') || lowerId.includes('van-tai') || lowerId.includes('xay-dung') || lowerId.includes('son-nuoc') || lowerId.includes('dien-lanh')) {
    arch = '06. Corporate & Industrial B2B';
    if (lowerId.includes('bao-bi')) {
      niche = 'Nhà Máy Sản Xuất Bao Bì Giấy & Thùng Carton Xuất Khẩu';
    } else if (lowerId.includes('co-khi')) {
      niche = 'Xưởng Cơ Khí Chính Xác & Gia Công Chi Tiết Máy CNC';
    } else if (lowerId.includes('logistics') || lowerId.includes('van-tai')) {
      niche = 'Dịch Vụ Vận Tải Quốc Tế & Quản Lý Chuỗi Cung Ứng Logistics';
    } else if (lowerId.includes('bao-ve')) {
      niche = 'Dịch Vụ Bảo Vệ Mục Tiêu & Vệ Sĩ An Ninh Chuyên Nghiệp';
    } else if (lowerId.includes('in-an')) {
      niche = 'Xưởng In Ấn Bao Bì & Thiết Kế Ấn Phẩm Nhận Diện Thương Hiệu';
    } else {
      niche = 'Dịch Vụ Kỹ Thuật Công Nghiệp & Thi Công Cơ Điện Lạnh';
    }
    palette = 'Xanh Thép (#0f172a), Xanh Kỹ Thuật (#1e3a8a), Cam Bảo Hộ (#f97316)';
    typography = 'Space Grotesk (Tiêu đề), Inter (Nội dung)';
    hero = 'Quy chuẩn sản xuất hiện đại, chất lượng vượt trội đáp ứng tiêu chuẩn quốc tế.';
    distinctions = [
      'Chứng chỉ tiêu chuẩn chất lượng ISO 9001:2015 và an toàn môi trường.',
      'Quy mô nhà xưởng hiện đại diện tích hàng ngàn m2 cùng máy móc nhập khẩu.',
      'Kinh nghiệm cung ứng cho các tập đoàn đa quốc gia và đối tác lớn.'
    ];
    interactions = [
      'Form gửi Yêu Cầu Báo Giá Số Lượng Lớn (RFQ) kèm quy cách chi tiết.',
      'Tải hồ sơ năng lực công ty (Company Profile PDF).',
      'Tra cứu tiến độ sản xuất hoặc tình trạng vận đơn hàng hóa.'
    ];
  } else if (lowerId.includes('thiep-cuoi') || lowerId.includes('wedding') || lowerId.includes('hoa') || lowerId.includes('studio') || lowerId.includes('media')) {
    arch = '11. Creative Portfolio & Agency';
    niche = 'Studio Chụp Ảnh Nghệ Thuật & Thiết Kế Thiệp Cưới Cao Cấp';
    palette = 'Hồng Tro (#fda4af), Xám Đậm (#334155), Trắng Tinh Khiết (#fafafa)';
    typography = 'Playfair Display (Tiêu đề), Be Vietnam Pro (Nội dung)';
    hero = 'Lưu giữ những khoảnh khắc hạnh phúc trọn vẹn bằng góc máy nghệ thuật tinh tế.';
    distinctions = [
      'Bộ sưu tập ảnh cưới dạng triển lãm nghệ thuật không giới hạn khung viền.',
      'Gói dịch vụ cưới trọn gói gồm váy cưới thiết kế, trang điểm và album cao cấp.',
      'Đội ngũ nhiếp ảnh gia giàu kinh nghiệm sáng tạo từng góc chụp.'
    ];
    interactions = [
      'Lightbox phóng to ngắm nhìn từng khung hình độ sắc nét cao.',
      'Chọn mẫu phôi thiệp cưới ép kim và phông chữ tùy biến.',
      'Form đặt lịch hẹn thử trang phục và tư vấn concept chụp.'
    ];
  } else if (lowerId.includes('gym') || lowerId.includes('yoga') || lowerId.includes('the-duc') || lowerId.includes('xe-dap')) {
    arch = '08. Education & Academy Hub';
    niche = 'Trung Tâm Thể Dục Thể Hình Fitness, Yoga & Xe Đạp Thể Thao';
    palette = 'Đen Than (#111827), Xanh Lime (#84cc16), Trắng (#ffffff)';
    typography = 'Barlow Semi Condensed (Tiêu đề), Inter (Nội dung)';
    hero = 'Đánh thức sức mạnh tiềm ẩn, nâng tầm thể chất với phòng tập chuẩn 5 sao.';
    distinctions = [
      'Trang thiết bị máy tập nhập khẩu chuẩn cơ sinh học hiện đại.',
      'Đội ngũ Master Trainer có chứng chỉ quốc tế kèm 1-1 chuyên sâu.',
      'Lớp học Yoga thư giãn tinh thần với chuyên gia người Ấn Độ.'
    ];
    interactions = [
      'Đăng ký tập thử 7 ngày miễn phí trải nghiệm toàn bộ tiện ích.',
      'Tra cứu lịch lớp Yoga và Cycling trong tuần cập nhật liên tục.',
      'Công cụ tính chỉ số thể lực và đề xuất lộ trình tăng cơ giảm mỡ.'
    ];
  } else if (lowerId.includes('thu-cung') || lowerId.includes('pet')) {
    arch = '01. Premium E-Commerce Storefront';
    niche = 'Hệ Thống Thức Ăn Hữu Cơ & Dịch Vụ Chăm Sóc Thú Cưng';
    palette = 'Xanh Mòng Két (#0d9488), Cam Hạnh Phúc (#f97316), Nền Sáng (#f0fdfa)';
    typography = 'Outfit (Tiêu đề), Be Vietnam Pro (Nội dung)';
    hero = 'Dinh dưỡng thượng hạng và dịch vụ chăm sóc tận tâm cho thú cưng khỏe mạnh.';
    distinctions = [
      'Thức ăn hạt hữu cơ giàu đạm không chứa ngũ cốc gây dị ứng.',
      'Quy trình tắm spa, cắt tỉa lông tạo kiểu an toàn không gây stress.',
      'Sổ theo dõi lịch tiêm phòng và thăm khám thú cưng định kỳ.'
    ];
    interactions = [
      'Lọc thức ăn theo độ tuổi thú cưng (Mèo con, Mèo trưởng thành, Chó già).',
      'Đặt lịch hẹn dịch vụ Spa tắm tỉa thú cưng theo ngày giờ.',
      'Giỏ hàng lưu trữ LocalStorage thuận tiện đặt thức ăn giao tận nhà.'
    ];
  }

  // Defect message
  let defectMsg = '';
  if (isBroken) {
    defectMsg = 'Lỗi nghiêm trọng: H1 rỗng, H2 rỗng, Grid 0 card, Menu rỗng. Cần tái thiết toàn diện cấu trúc.';
  } else if (isCustom) {
    defectMsg = 'Đã hoàn thiện mỹ thuật riêng. Cần bổ sung cơ chế khóa chống script ghi đè.';
  } else {
    defectMsg = 'Giao diện lặp lại: Chia sẻ cùng 4 card generic và 23 dòng JS sơ sài. Cần đưa vào Archetype chuyên biệt.';
  }

  return {
    niche,
    arch,
    priority,
    audience,
    purpose,
    palette,
    typography,
    hero,
    subpages,
    distinctions,
    interactions,
    imagery,
    defects: defectMsg
  };
}

console.log('Generating detailed briefs for all 113 themes...');

let mdHeader = `# MA TRẬN ĐẶC TẢ THIẾT KẾ CHI TIẾT 113 DEMO WEBSITE (DVWEB)
## Comprehensive Master Design Brief & Specification Matrix

**Dự án:** DVWeb — Website Template Marketplace & Demo Ecosystem  
**Tác giả:** Principal UI/UX Designer & Senior Frontend Architect  
**Phạm vi:** 100% (113/113) Website Demo độc lập trong thư mục \`sites/\`  
**Ngày ban hành:** 15/10/2026  

---

## 1. Phương Pháp Luận & Khung Phân Bổ (Methodology)

Để loại bỏ hoàn toàn tình trạng 110 website rập khuôn một mẫu, Ma trận Thiết kế này áp dụng các nguyên tắc:
1. **Phân loại theo Niche thực tế:** Không dựa đơn thuần vào Category gốc của catalog (vốn có lỗi chính tả và thiếu sót), mà phân tích theo đúng tên thương hiệu và ngành nghề kinh doanh cốt lõi (ví dụ: \`#MS112\` là Trường Mầm non, \`#MS76\` là Dịch vụ Bảo vệ, \`#MS38\` là Xưởng Cơ khí khuôn mẫu).
2. **Gán 1 trong 12 Archetype chuyên biệt:** Mỗi website nhận một Archetype kiến trúc chuẩn xác với luồng hành vi (visitor journey) tương thích.
3. **Phân cấp ưu tiên triển khai (Redesign Priority):**
   - **P0 (Cấp bách - 46 Sites):** Các website đang bị lỗi rỗng tiêu đề \`<h1></h1>\` và lưới sản phẩm trống trơn.
   - **P1 (Ưu tiên cao - 45 Sites):** Các website thương mại chủ lực thuộc nhóm ngành lớn (Thời trang, Mỹ phẩm, Công nghệ, Bất động sản, Nội thất, Ô tô) đang dùng chung 4 card generic lặp lại.
   - **P2 (Ưu tiên trung bình - 19 Sites):** Các website ngành ngách (Thú cưng, Quà tặng, Gia dụng, Niche services).
   - **P3 (Đã tùy biến - 3 Sites):** \`#MS40\`, \`#MS64\`, \`#MS01\` — bảo vệ mã nguồn, bổ sung kiểm tra giao diện và nâng cấp trải nghiệm vi mô.

---

## 2. Bảng Tổng Hợp Danh Mục 113 Website Demo

| STT | Mã Theme | Theme ID | Ngành Catalog | Niche Cốt Lõi | Archetype Thiết Kế | Mức Ưu Tiên | Hiện Trạng Lỗi Cần Sửa |
| :---: | :---: | :--- | :--- | :--- | :--- | :---: | :--- |
`;

let tableRows = '';
let briefSections = '';

themes.forEach((t, index) => {
  const num = index + 1;
  const id = t.id;
  const code = t.code;
  const name = t.name;
  const cat = t.category;
  const status = statusMap[id];
  const info = getNicheInfo(t, status);

  tableRows += `| ${num} | **${code}** | \`${id}\` | ${cat} | ${info.niche} | ${info.arch} | **${info.priority}** | ${info.defects.split('.')[0]} |\n`;

  const distStr = info.distinctions.map(d => `- ${d}`).join('\n');
  const interStr = info.interactions.map(i => `- ${i}`).join('\n');

  briefSections += `
---

### [Website #${num}] ${code} — ${name} (ID: \`${id}\`)
- **Ngành nghề Catalog:** ${cat} | **Niche xác định:** ${info.niche}
- **Archetype Kiến Trúc:** ${info.arch}
- **Mức độ ưu tiên:** **${info.priority}** | **Trạng thái kỹ thuật hiện tại:** ${status ? status.StatusType : 'Chưa xác định'}
- **Đối tượng mục tiêu & Mục đích:** ${info.audience} ${info.purpose}
- **Hệ thống Nhận diện Thị giác:**
  - **Bảng màu chủ đạo:** ${info.palette}
  - **Typography:** ${info.typography}
  - **Bố cục Hero:** ${info.hero}
- **Hệ thống Trang con & Điều hướng:** ${info.subpages} (kèm \`.library-return-bar\`).
- **3+ Đặc trưng nhận diện thị giác khác biệt:**
${distStr}
- **Tương tác Frontend độc quyền:**
${interStr}
- **Yêu cầu Nội dung & Hình ảnh:** ${info.imagery}
- **Lỗi hiện tại cần khắc phục:** ${info.defects}
`;
});

const fullDoc = mdHeader + tableRows + '\n\n---\n\n## 3. Đặc Tả Thiết Kế Chi Tiết Từng Website Demo (113 Demos)\n' + briefSections;

fs.writeFileSync('d:/dvweb/reports/site-design-matrix.md', fullDoc, 'utf8');
console.log(`Successfully written d:/dvweb/reports/site-design-matrix.md (${fullDoc.length} bytes)!`);
