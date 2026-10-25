/**
 * Dữ liệu xe và dịch vụ chính thức - Auto Garage Demo 40
 * Tương thích 100% tiếng Việt UTF-8
 */

const CAR_PRODUCTS = [
  {
    id: "car-01",
    name: "Sedan Thể Thao Luxury S-Class",
    category: "sedan",
    categoryName: "Sedan Hạng Sang",
    price: 2450000000,
    priceDisplay: "2.450.000.000 ₫",
    originalPrice: "2.650.000.000 ₫",
    image: "assets/car-sedan.jpg",
    gallery: [
      "assets/car-sedan.jpg",
      "assets/car-interior.jpg",
      "assets/hero-showroom.jpg"
    ],
    badge: "Bán chạy nhất",
    status: "Sẵn xe giao ngay",
    rating: 5,
    reviewsCount: 38,
    shortDesc: "Đẳng cấp doanh nhân với động cơ Twin-Turbo V6 3.0L, nội thất da Nappa thủ công và gói công nghệ lái tự động cấp 3.",
    specs: {
      "Động cơ": "3.0L V6 Turbocharge + Mild Hybrid 48V",
      "Công suất cực đại": "367 mã lực @ 5500 vòng/phút",
      "Mô-men xoắn": "500 Nm @ 1600 - 4500 vòng/phút",
      "Hộp số": "Tự động 9 cấp 9G-TRONIC",
      "Dẫn động": "4 bánh toàn thời gian 4MATIC",
      "Tăng tốc 0-100 km/h": "5.1 giây",
      "Mức tiêu hao nhiên liệu": "8.2 lít / 100km (hỗn hợp)",
      "Số chỗ ngồi": "5 chỗ rộng rãi",
      "Bảo hành": "3 năm không giới hạn kilomet"
    },
    features: [
      "Hệ thống treo khí nén chủ động Airmatic êm ái tuyệt đối",
      "Màn hình OLED trung tâm 12.8 inch kết nối Apple CarPlay & Android Auto",
      "Dàn âm thanh vòm Burmester High-End 3D 15 loa công suất 710W",
      "Hệ thống hỗ trợ giữ làn, phanh khẩn cấp chủ động và camera 360 3D"
    ]
  },
  {
    id: "car-02",
    name: "SUV Điện Địa Hình Flagship EV-9",
    category: "suv",
    categoryName: "SUV Đa Dụng",
    price: 1890000000,
    priceDisplay: "1.890.000.000 ₫",
    originalPrice: "1.990.000.000 ₫",
    image: "assets/car-suv.jpg",
    gallery: [
      "assets/car-suv.jpg",
      "assets/car-interior.jpg",
      "assets/hero-showroom.jpg"
    ],
    badge: "Công nghệ Điện Mới",
    status: "Sẵn xe lái thử",
    rating: 5,
    reviewsCount: 24,
    shortDesc: "SUV thuần điện 7 chỗ thông minh, phạm vi hoạt động 540km mỗi lần sạc đầy, sạc siêu nhanh 10-80% trong 22 phút.",
    specs: {
      "Hệ truyền động": "Dual Motor AWD (Mô-tơ điện kép)",
      "Công suất cực đại": "429 mã lực",
      "Mô-men xoắn": "700 Nm tức thì",
      "Dung lượng pin": "99.8 kWh Lithium-ion",
      "Tầm vận hành": "541 km (chuẩn WLTP)",
      "Chuẩn sạc nhanh": "DC 350kW (10-80% trong 24 phút)",
      "Hệ thống dẫn động": "AWD thông minh thích ứng đa địa hình",
      "Số chỗ ngồi": "7 chỗ (băng ghế 2 cơ trưởng)",
      "Bảo hành pin": "8 năm hoặc 160.000 km"
    },
    features: [
      "Hệ thống lái thông minh bán tự động ADAS Level 2+",
      "Cửa sổ trời toàn cảnh kép Panoramic Sunroof chống tia UV 99%",
      "Cốp điện thông minh chống kẹt dung tích tối đa 2.318 lít",
      "Nguồn cấp điện ngoài V2L 3.6kW cấp nguồn cho thiết bị cắm trại"
    ]
  },
  {
    id: "car-03",
    name: "Coupe Thể Thao GT-R Apex Edition",
    category: "coupe",
    categoryName: "Coupe Thể Thao",
    price: 3850000000,
    priceDisplay: "3.850.000.000 ₫",
    originalPrice: "4.100.000.000 ₫",
    image: "assets/car-coupe.jpg",
    gallery: [
      "assets/car-coupe.jpg",
      "assets/car-interior.jpg",
      "assets/car-porsche.jpg"
    ],
    badge: "Bản giới hạn",
    status: "Chỉ còn 2 chiếc",
    rating: 5,
    reviewsCount: 19,
    shortDesc: "Siêu phẩm coupe khí động học đường đua, ống xả Titanium âm thanh gầm rú uy lực cùng khung gầm sợi Carbon nguyên khối.",
    specs: {
      "Động cơ": "3.8L V6 Twin-Turbocharged DOHC",
      "Công suất cực đại": "565 mã lực @ 6800 vòng/phút",
      "Mô-men xoắn": "633 Nm @ 3300 - 5800 vòng/phút",
      "Hộp số": "Ly hợp kép 6 cấp GR6",
      "Hệ dẫn động": "AWD ATTESA E-TS phân bổ lực chủ động",
      "Tăng tốc 0-100 km/h": "2.9 giây (kích hoạt Launch Control)",
      "Tốc độ tối đa": "315 km/h",
      "Trọng lượng khô": "1.745 kg",
      "Bảo hành": "3 năm hoặc 100.000 km"
    },
    features: [
      "Cánh gió sau Carbon cỡ lớn tăng lực ép xuống đường 100kg ở tốc độ cao",
      "Ghế đua thể thao Recaro bọc da Alcantara chỉnh điện",
      "Hệ thống phanh gốm Carbon Brembo 6 piston trước và 4 piston sau",
      "3 chế độ vận hành đặc biệt: Normal, Save và R-Mode đường đua"
    ]
  },
  {
    id: "car-04",
    name: "Porsche 911 Carrera GTS Đỏ Ruby",
    category: "coupe",
    categoryName: "Coupe Thể Thao",
    price: 5200000000,
    priceDisplay: "5.200.000.000 ₫",
    originalPrice: "5.450.000.000 ₫",
    image: "assets/car-porsche.jpg",
    gallery: [
      "assets/car-porsche.jpg",
      "assets/car-coupe.jpg",
      "assets/car-interior.jpg"
    ],
    badge: "Siêu xe nhập khẩu",
    status: "Sẵn xe showroom",
    rating: 5,
    reviewsCount: 31,
    shortDesc: "Biểu tượng tốc độ nước Đức, trang bị gói Sport Chrono Package trứ danh, vi sai chống trượt PTV Plus và hệ thống đánh lái bánh sau.",
    specs: {
      "Động cơ": "3.0L Boxer 6 xi-lanh Twin-Turbo",
      "Công suất cực đại": "480 mã lực @ 6500 vòng/phút",
      "Mô-men xoắn": "570 Nm @ 2300 - 5000 vòng/phút",
      "Hộp số": "Tự động ly hợp kép PDK 8 cấp",
      "Dẫn động": "Cầu sau RWD thể thao chuẩn mực",
      "Tăng tốc 0-100 km/h": "3.4 giây",
      "Tốc độ tối đa": "311 km/h",
      "Bộ mâm": "20/21 inch Turbo S đen nhám Center Lock",
      "Bảo hành": "4 năm chính hãng Porsche"
    },
    features: [
      "Hệ thống kiểm soát khung gầm thể thao chủ động PASM hạ thấp 10mm",
      "Ống xả thể thao Sport Exhaust tùy chỉnh van âm thanh bằng nút bấm",
      "Vô lăng thể thao GT bọc da tích hợp nút chuyển chế độ lái xoay tròn",
      "Đèn pha LED Matrix tối tân với hệ thống Porsche Dynamic Light System Plus"
    ]
  },
  {
    id: "car-05",
    name: "BMW M-Performance Sedan M3 Competition",
    category: "sedan",
    categoryName: "Sedan Hạng Sang",
    price: 3600000000,
    priceDisplay: "3.600.000.000 ₫",
    originalPrice: "3.790.000.000 ₫",
    image: "assets/car-bmw.jpg",
    gallery: [
      "assets/car-bmw.jpg",
      "assets/car-interior.jpg",
      "assets/car-sedan.jpg"
    ],
    badge: "Động cơ hiệu năng cao",
    status: "Sẵn xe giao ngay",
    rating: 5,
    reviewsCount: 42,
    shortDesc: "Động cơ M TwinPower Turbo 510 mã lực, mui xe sợi Carbon siêu nhẹ và thiết kế lưới tản nhiệt quả thận kép uy lực đặc trưng.",
    specs: {
      "Động cơ": "3.0L I6 BMW M TwinPower Turbo",
      "Công suất cực đại": "510 mã lực @ 6250 vòng/phút",
      "Mô-men xoắn": "650 Nm @ 2750 - 5500 vòng/phút",
      "Hộp số": "Tự động 8 cấp M Steptronic với Drivelogic",
      "Dẫn động": "M xDrive thông minh (chuyển đổi 4WD sang 2WD thuần khiết)",
      "Tăng tốc 0-100 km/h": "3.5 giây",
      "Tốc độ tối đa": "290 km/h (gói M Driver's)",
      "Khung gầm": "Hệ thống treo thích ứng Adaptive M Suspension",
      "Bảo hành": "3 năm hoặc 200.000 km"
    },
    features: [
      "Màn hình cong kép BMW Curved Display chạy hệ điều hành iDrive 8.5",
      "Mui xe và ốp gương chiếu hậu bằng sợi Carbon cường lực",
      "Ghế đua M Carbon Bucket Seat ôm sát cơ thể khi ôm cua gắt",
      "Chức năng M Drift Analyser đo góc trượt và chấm điểm tay lái lụa"
    ]
  },
  {
    id: "srv-01",
    name: "Gói Bảo Dưỡng Đại Tu Định Kỳ 20.000 - 40.000 KM",
    category: "service",
    categoryName: "Dịch Vụ & Bảo Dưỡng",
    price: 3500000,
    priceDisplay: "3.500.000 ₫",
    originalPrice: "4.200.000 ₫",
    image: "assets/service-maintenance.jpg",
    gallery: [
      "assets/service-maintenance.jpg",
      "assets/service-tuning.jpg"
    ],
    badge: "Khuyên dùng",
    status: "Đặt lịch phục vụ ngay",
    rating: 5,
    reviewsCount: 156,
    shortDesc: "Kiểm tra toàn diện 68 hạng mục động cơ, gầm, hệ thống phanh, thay dầu nhớt tổng hợp toàn phần Mobil1/Castrol chuẩn hãng.",
    specs: {
      "Thời gian thực hiện": "120 - 180 phút",
      "Hạng mục kiểm tra": "68 điểm kỹ thuật theo tiêu chuẩn hãng",
      "Vật tư thay thế": "Dầu động cơ chính hãng, lọc dầu, lọc gió động cơ, lọc gió cabin",
      "Thiết bị chẩn đoán": "Máy đọc lỗi chuyên dụng OBD-II đa năng",
      "Bảo hành dịch vụ": "6 tháng hoặc 10.000 km",
      "Miễn phí": "Rửa xe hút bụi và khử mùi ion âm toàn xe"
    },
    features: [
      "Kiểm tra tình trạng má phanh, đĩa phanh và dầu phanh DOT4",
      "Kiểm tra áp suất lốp, cân mâm bấm chì 4 bánh",
      "Đo dung lượng bình ắc quy và kiểm tra dòng sạc máy phát",
      "Tặng phiếu giảm giá 15% cho lần thay lốp hoặc bảo dưỡng kế tiếp"
    ]
  },
  {
    id: "srv-02",
    name: "Gói Độ Phanh Hiệu Năng Cao Brembo 6 Piston",
    category: "service",
    categoryName: "Nâng Cấp & Đồ Chơi",
    price: 45000000,
    priceDisplay: "45.000.000 ₫",
    originalPrice: "52.000.000 ₫",
    image: "assets/service-tuning.jpg",
    gallery: [
      "assets/service-tuning.jpg",
      "assets/service-maintenance.jpg"
    ],
    badge: "Chính hãng Italy",
    status: "Có sẵn heo dầu các màu",
    rating: 5,
    reviewsCount: 47,
    shortDesc: "Nâng cấp cụm phanh thể thao Brembo monoblock nguyên khối, đĩa phanh tản nhiệt lỗ khoan 380mm, gia tăng lực hãm an toàn tuyệt đối.",
    specs: {
      "Xuất xứ": "Brembo Racing Italy 100% Chính Hãng",
      "Cấu hình trước": "Cùm phanh đúc 6 piston đối xứng",
      "Đĩa phanh": "Đĩa thép tản nhiệt khoan lỗ 380mm x 34mm",
      "Dây dầu": "Dây bọc thép không gỉ Hel Performance",
      "Màu sắc": "Đỏ Ferrari, Vàng Acid, Xanh Neon, Đen Bóng",
      "Thời gian thi công": "1 ngày làm việc",
      "Bảo hành": "2 năm đổi mới nếu có lỗi kỹ thuật"
    },
    features: [
      "Rút ngắn quãng đường phanh khẩn cấp từ 100km/h về 0 đến 25%",
      "Triệt tiêu hoàn toàn hiện tượng mất phanh do quá nhiệt khi đổ đèo",
      "Tăng tính thẩm mỹ thể thao nổi bật sau nan hoa mâm xe",
      "Cân chỉnh áp suất dầu bằng máy ép thủy lực chuyên dụng"
    ]
  },
  {
    id: "srv-03",
    name: "Gói Dán Phim Bảo Vệ Sơn PPF & Phủ Ceramic 9H",
    category: "service",
    categoryName: "Chăm Sóc & Detailing",
    price: 28000000,
    priceDisplay: "28.000.000 ₫",
    originalPrice: "34.000.000 ₫",
    image: "assets/service-detailing.jpg",
    gallery: [
      "assets/service-detailing.jpg",
      "assets/banner.webp"
    ],
    badge: "Bảo hành 5 năm",
    status: "Thi công phòng lạnh",
    rating: 5,
    reviewsCount: 89,
    shortDesc: "Phim PPF TPU cao cấp tự phục hồi vết xước khi gặp nhiệt độ ấm, phủ lớp Ceramic 9H siêu kỵ nước chống ố sơn và tia UV.",
    specs: {
      "Chất liệu phim": "TPU (Thermoplastic Polyurethane) độ dày 8.5 mil",
      "Khả năng tự hồi phục": "Vết xước xoáy tự lành dưới ánh nắng hoặc nước ấm",
      "Độ bóng": "Gia tăng độ bóng sâu của lớp sơn xe lên 35%",
      "Phủ gốm Ceramic": "Ceramic Matrix 9H chống tia UV và mưa axit",
      "Thời gian thi công": "2 ngày trong phòng kín đạt chuẩn vô trùng",
      "Bảo hành lớp phim": "5 năm không ố vàng, không bong tróc góc cạnh"
    },
    features: [
      "Chống đá văng làm trầy xước sơn mui trước và cản xe khi đi cao tốc",
      "Hiệu ứng lá sen chống bám nước và bùn đất, rửa xe dễ dàng hơn 70%",
      "Cắt phim bằng máy Plotter CNC theo chuẩn form từng dòng xe, không dùng dao cắt trên thân xe",
      "Tặng 3 lần bảo dưỡng làm bóng lớp PPF định kỳ miễn phí"
    ]
  }
];

const BLOG_ARTICLES = [
  {
    id: "blog-01",
    title: "Kinh nghiệm chọn mua xe ô tô đã qua sử dụng chuẩn chuyên gia 2026",
    date: "10/10/2026",
    author: "Kỹ sư trưởng Lê Hoàng Nam",
    category: "Cẩm nang ô tô",
    image: "assets/car-sedan.jpg",
    excerpt: "Những lưu ý cốt lõi khi kiểm tra khung gầm xe, hệ thống thủy kích ngập nước và cách đọc số đo cảm biến OBD-II để không bị hớ tiền tỉ.",
    readTime: "6 phút đọc"
  },
  {
    id: "blog-02",
    title: "So sánh công nghệ pin LFP và NMC trên dòng SUV điện thế hệ mới",
    date: "05/10/2026",
    author: "Chuyên gia kỹ thuật Đức Minh",
    category: "Công nghệ xe điện",
    image: "assets/car-suv.jpg",
    excerpt: "Pin thể rắn và pin NMC đem lại mật độ năng lượng vượt trội như thế nào, cùng lời khuyên bảo quản tuổi thọ pin trên 10 năm của nhà sản xuất.",
    readTime: "8 phút đọc"
  },
  {
    id: "blog-03",
    title: "Tại sao nên dán PPF bảo vệ sơn ngay từ khi mới nhận xe từ showroom?",
    date: "28/09/2026",
    author: "Master Detailing Quốc Huy",
    category: "Chăm sóc xe",
    image: "assets/service-detailing.jpg",
    excerpt: "Sơn zin của nhà máy là tài sản quý giá nhất trên vỏ xe. Tìm hiểu cơ chế màng TPU tự phục hồi vết xước khi tiếp xúc nhiệt độ môi trường.",
    readTime: "5 phút đọc"
  }
];
