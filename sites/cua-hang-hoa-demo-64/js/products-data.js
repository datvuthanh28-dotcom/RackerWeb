/**
 * Flora Art - Cửa hàng hoa tươi MS64
 * Shared Product Catalog & Utility Data
 */

var FLOWER_PRODUCTS = [
  {
    id: "hoa-01",
    name: "Bó Hoa Hồng Đỏ Lãng Mạn",
    category: "Hoa tình yêu",
    categorySlug: "hoa-tinh-yeu",
    price: 650000,
    shortDesc: "24 bông hồng nhung đỏ Ecuador kết hợp lá bạc bạch đàn, giấy gói kraft phong cách cổ điển.",
    description: "Bó hoa hồng đỏ mang thông điệp tình yêu nồng nàn và bền chặt. Từng cành hoa được tuyển chọn kỹ lưỡng vào sáng sớm, bảo quản lạnh ở nhiệt độ tiêu chuẩn để đảm bảo độ bung nở hoàn hảo và hương thơm tự nhiên dài lâu.",
    image: "assets/images/bo-hoa-hong-do.jpg",
    alt: "Bó hoa hồng đỏ lãng mạn phong cách cổ điển",
    isFeatured: true,
    careTip: "Cắt vát gốc 45 độ, thay nước sạch mỗi ngày và đặt nơi thoáng mát tránh ánh nắng trực tiếp."
  },
  {
    id: "hoa-02",
    name: "Giỏ Hoa Sinh Nhật Tươi Thắm",
    category: "Hoa sinh nhật",
    categorySlug: "hoa-sinh-nhat",
    price: 580000,
    shortDesc: "Giỏ mây mộc mạc kết hợp hoa đồng tiền, hoa hồng vàng cam và cúc mẫu đơn tươi sáng.",
    description: "Món quà sinh nhật rực rỡ và đong đầy năng lượng tích cực. Thiết kế giỏ hoa xách tay tiện lợi, điểm xuyết hoa lá phụ mềm mại, phù hợp gửi gắm lời chúc tuổi mới bình an và ngập tràn niềm vui.",
    image: "assets/images/gio-hoa-sinh-nhat.jpg",
    alt: "Giỏ hoa sinh nhật rực rỡ chúc mừng tuổi mới",
    isFeatured: true,
    careTip: "Châm thêm 100ml nước mát trực tiếp vào miếng xốp cắm hoa mỗi buổi sáng."
  },
  {
    id: "hoa-03",
    name: "Giỏ Hoa Pastel Dịu Ngọt",
    category: "Hoa chúc mừng",
    categorySlug: "hoa-chuc-mung",
    price: 720000,
    shortDesc: "Sự kết hợp tinh tế giữa cẩm chướng kem, hồng phấn David Austin và baby trắng dịu dàng.",
    description: "Tông màu pastel thanh lịch mang đến cảm giác thư thái và ấm áp. Giỏ hoa thích hợp làm quà tặng tri ân thầy cô, kỷ niệm ngày phụ nữ, hoặc chúc mừng tân gia ấm cúng.",
    image: "assets/images/gio-hoa-pastel.jpg",
    alt: "Giỏ hoa cắm phối màu pastel thanh nhã",
    isFeatured: true,
    careTip: "Tưới nhẹ vào gốc xốp, giữ ở phòng điều hòa nhiệt độ từ 20-24 độ C."
  },
  {
    id: "hoa-04",
    name: "Bó Hoa Baby Trắng Tinh Khôi",
    category: "Hoa tình yêu",
    categorySlug: "hoa-tinh-yeu",
    price: 450000,
    shortDesc: "Bó hoa baby Hà Lan trắng muốt bồng bềnh như mây, gói giấy lụa mờ cao cấp.",
    description: "Hoa baby trắng tượng trưng cho sự thuần khiết, ngây thơ và tình cảm chân thành không vụ lợi. Hoa có thể phơi khô tự nhiên để giữ làm hoa khô kỷ niệm trong nhiều tháng mà vẫn giữ nguyên dáng vẻ đáng yêu.",
    image: "assets/images/hoa-baby-trang.jpg",
    alt: "Bó hoa baby trắng Hà Lan bồng bềnh tinh khôi",
    isFeatured: false,
    careTip: "Có thể cắm nước trong 5-7 ngày hoặc treo ngược nơi khô thoáng để làm hoa khô trang trí."
  },
  {
    id: "hoa-05",
    name: "Bình Hoa Cẩm Chướng Thanh Nhã",
    category: "Hoa để bàn",
    categorySlug: "hoa-de-ban",
    price: 520000,
    shortDesc: "Hoa cẩm chướng viền cánh hồng ngọc cắm bình gốm men mờ phong cách Bắc Âu tối giản.",
    description: "Cẩm chướng với cánh hoa dập dềnh kiêu sa là biểu tượng của lòng biết ơn và sự kính trọng. Thiết kế bình hoa nhỏ gọn phù hợp bàn trà, bàn làm việc hoặc quầy lễ tân.",
    image: "assets/images/hoa-cam-chuong.jpg",
    alt: "Bình hoa cẩm chướng để bàn thanh nhã",
    isFeatured: true,
    careTip: "Thay nước bình 2 ngày/lần, ngắt bỏ những lá ngập nước để giữ nước cắm luôn sạch."
  },
  {
    id: "hoa-06",
    name: "Bó Hoa Cưới Cầm Tay Cô Dâu",
    category: "Hoa cưới",
    categorySlug: "hoa-cuoi",
    price: 890000,
    shortDesc: "Hoa cưới dáng tròn phối hoa hồng trắng, mao lương trắng và lá bạc cuốn dải lụa satin.",
    description: "Thiết kế bó hoa cưới thanh tao tôn lên vẻ rạng ngời của cô dâu trong ngày trọng đại. Từng cành hoa được xử lý tỉ mỉ, đính ruy băng mềm mại vừa vặn tay cầm suốt buổi lễ.",
    image: "assets/images/hoa-cuoi-cam-tay.jpg",
    alt: "Bó hoa cưới cầm tay cô dâu phong cách hiện đại",
    isFeatured: true,
    careTip: "Cắm gốc trong ly nước nông trước giờ làm lễ; thấm khô phần gốc trước khi cầm."
  },
  {
    id: "hoa-07",
    name: "Bình Hoa Để Bàn Vintage",
    category: "Hoa để bàn",
    categorySlug: "hoa-de-ban",
    price: 680000,
    shortDesc: "Bình hoa nghệ thuật phối hoa cúc thạch thảo, hồng cổ và cành quả khô vintage trang nhã.",
    description: "Thiết kế bình hoa mang hơi thở hoài niệm, biến không gian phòng khách thành góc thưởng trà đầy thi vị. Màu sắc ấm áp, chiều cao vừa tầm mắt người ngồi trò chuyện.",
    image: "assets/images/hoa-de-ban-vintage.jpg",
    alt: "Bình hoa trang trí bàn trà phong cách vintage",
    isFeatured: false,
    careTip: "Thêm một chút đường hoặc gói dưỡng hoa vào nước để hoa nở bền và giữ cánh cứng cáp."
  },
  {
    id: "hoa-08",
    name: "Bó Hoa Hồng Trắng Tinh Khiết",
    category: "Hoa chúc mừng",
    categorySlug: "hoa-chuc-mung",
    price: 620000,
    shortDesc: "20 bông hồng trắng Đà Lạt tuyển loại 1, gói giấy xám tro tối giản phong cách Hàn Quốc.",
    description: "Màu trắng tinh khôi đại diện cho khởi đầu mới thuận lợi, sự trân quý và ngưỡng mộ. Thích hợp tặng lễ tốt nghiệp, tặng đối tác ngày ra mắt dự án mới hoặc các dịp kỷ niệm trang trọng.",
    image: "assets/images/hoa-hong-trang.jpg",
    alt: "Bó hoa hồng trắng tinh khôi gói kiểu Hàn Quốc",
    isFeatured: false,
    careTip: "Tránh xịt nước trực tiếp lên cánh hoa trắng để không làm thâm viền cánh."
  },
  {
    id: "hoa-09",
    name: "Bó Hoa Hướng Dương Rạng Rỡ",
    category: "Hoa sinh nhật",
    categorySlug: "hoa-sinh-nhat",
    price: 490000,
    shortDesc: "Hướng dương đại đóa kết hợp hoa baby trắng và lá dương xỉ, gói giấy craft nâu mộc.",
    description: "Hướng dương luôn vươn mình về phía mặt trời, là thông điệp mạnh mẽ về niềm tin, ý chí và sự kiên định. Món quà hoàn hảo chúc mừng thăng chức, tốt nghiệp hay sinh nhật bạn bè thân thiết.",
    image: "assets/images/hoa-huong-duong.jpg",
    alt: "Bó hoa hướng dương rạng rỡ trao gửi niềm tin",
    isFeatured: true,
    careTip: "Cắt gốc hàng ngày khoảng 1cm để cuống hoa hút nước dễ dàng."
  },
  {
    id: "hoa-10",
    name: "Kệ Hoa Khai Trương Phát Tài",
    category: "Hoa khai trương",
    categorySlug: "hoa-khai-truong",
    price: 1350000,
    shortDesc: "Kệ hoa gỗ 2 tầng phối đồng tiền đỏ cam, hồng phát tài và hướng dương hoành tráng.",
    description: "Kệ hoa khai trương mang ý nghĩa hồng phát, kinh doanh đại cát đại lợi. Bố cục tầng bậc vững chãi, sắc màu rực rỡ thu hút may mắn cho ngày khai trương cửa hàng, khánh thành công ty.",
    image: "assets/images/hoa-khai-truong.jpg",
    alt: "Kệ hoa khai trương phát tài phát lộc 2 tầng",
    isFeatured: true,
    careTip: "Tưới nước ẩm xốp cắm mỗi ngày để hoa giữ dáng rực rỡ suốt tuần lễ khai trương."
  },
  {
    id: "hoa-11",
    name: "Chậu Lan Hồ Điệp Hoàng Gia",
    category: "Hoa chúc mừng",
    categorySlug: "hoa-chuc-mung",
    price: 1650000,
    shortDesc: "Chậu sứ trắng 5 cành lan hồ điệp tím viền hồng nhập khẩu, đính nơ vàng sang trọng.",
    description: "Lan hồ điệp - biểu tượng của phú quý, tài lộc và cốt cách thanh cao. Hoa nở bền bỉ từ 4 đến 6 tuần, là món quà đẳng cấp dành tặng đối tác VIP, tân gia biệt thự hay mừng thọ ông bà.",
    image: "assets/images/hoa-lan-ho-diep.jpg",
    alt: "Chậu hoa lan hồ điệp hoàng gia 5 cành sang trọng",
    isFeatured: false,
    careTip: "Tưới nước vào gốc 1 lần/tuần (khoảng 150ml), không tưới lên hoa, đặt nơi có ánh sáng tán xạ nhẹ."
  },
  {
    id: "hoa-12",
    name: "Bình Hoa Lily Trắng Thơm Ngát",
    category: "Hoa để bàn",
    categorySlug: "hoa-de-ban",
    price: 590000,
    shortDesc: "Hoa lily trắng 5 tai nở bung đều, cắm cùng lá thiết mộc lan trong bình thủy tinh trong suốt.",
    description: "Hương thơm ngọt ngào đặc trưng của hoa lily lan tỏa khắp gian phòng, mang lại cảm giác bình yên và thư thái. Cành hoa dày dặn, búp hoa mập mạp tiếp tục nở dần trong nhiều ngày.",
    image: "assets/images/hoa-lily.jpg",
    alt: "Bình hoa lily trắng ngát hương thơm phòng",
    isFeatured: false,
    careTip: "Ngắt bỏ nhụy hoa khi vừa hé nở để phấn hoa không vương bẩn cánh và quần áo."
  },
  {
    id: "hoa-13",
    name: "Bó Hoa Mẫu Đơn Quý Phái",
    category: "Hoa tình yêu",
    categorySlug: "hoa-tinh-yeu",
    price: 980000,
    shortDesc: "Mẫu đơn hồng phấn nhập khẩu Hà Lan, cánh hoa mềm như lụa điểm lá khuynh diệp.",
    description: "Được mệnh danh là 'vua của các loài hoa', mẫu đơn toát lên vẻ vương giả, đài các và duyên dáng vô song. Món quà tuyệt hảo để thể hiện sự trân trọng tuyệt đối dành cho người phụ nữ bạn yêu thương.",
    image: "assets/images/hoa-mau-don.jpg",
    alt: "Bó hoa mẫu đơn hồng nhập khẩu quý phái",
    isFeatured: true,
    careTip: "Cắm bình nước nhiều, đặt nơi mát mẻ không có gió quạt thổi trực tiếp."
  },
  {
    id: "hoa-14",
    name: "Bó Hoa Tulip Hà Lan Hồng Phấn",
    category: "Hoa tình yêu",
    categorySlug: "hoa-tinh-yeu",
    price: 750000,
    shortDesc: "15 cành tulip hồng phấn nhập khẩu nguyên gốc Hà Lan, phối giấy gói thanh lịch.",
    description: "Hoa tulip mang vẻ đẹp tối giản hiện đại và kiêu kỳ. Khi cắm trong bình, cành hoa vẫn tiếp tục phát triển hướng về nguồn sáng, tạo nên dáng cắm uốn lượn tự nhiên vô cùng sống động.",
    image: "assets/images/hoa-tulip-hong.jpg",
    alt: "Bó hoa tulip Hà Lan hồng phấn thanh lịch",
    isFeatured: false,
    careTip: "Cho vài viên đá lạnh vào nước cắm bình để giữ cành tulip luôn đứng thẳng và hoa tươi lâu."
  }
];

/**
 * Vietnamese Accent Removal Helper for robust search
 */
function removeVietnameseTones(str) {
  if (!str) return "";
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Combining marks
  str = str.replace(/\u02C6|\u0306|\u031B/g, "");
  return str.trim();
}

/**
 * Currency formatter (e.g. 650000 -> 650.000₫)
 */
function formatCurrency(num) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);
}
