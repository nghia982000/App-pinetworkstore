const products = [
  {
    name: "Macbook Pro M4",
    price: "423π",
    image: "img/macbook_9__4.png",
    sold:176,
  },
  {
    name: "Macbook Air M1",
    price: "354π",
    image: "img/macbook-air.webp",
    sold:135,
  },
  {
    name: "Iphone 16 promax",
    price: "366π",
    image: "img/iphone16.webp",
    sold:321,
  },
  {
    name: " Iphone 15 promax",
    price: "356π",
    image: "img/iphone15.webp",
    sold:246,
  },
  {
    name: "Samsung S24 Ultra",
    price: "345π",
    image: "img/s24ultras.webp",
    sold:142,
  },
  {
    name: "Samsung zfold 6",
    price: "290π",
    image: "img/zphone6.jpg",
    sold:145,
  },
  {
    name: "Iphone 14 promax",
    price: "220π",
    image: "img/14promax.jpg",
    sold:723,
  },
  {
    name: "Honor magic v3",
    price: "231π",
    image: "img/honor.jpg",
    sold:220,
  },
  {
    name: "Samsung Tab S10",
    price: "303π",
    image: "img/galaxytab.jpg",
    sold:265,
  },
  {
    name: "IPad Pro M4",
    price: "308π",
    image: "img/ipadm4.jpg",
    sold:234,
  },
  {
    name: "OPPO Find N3",
    price: "280π",
    image: "img/findx.jpg",
    sold:321,
  },
  {
    name: "Apple Watch Series 10",
    price: "101π",
    image: "img/apple-watch.jpg",
    sold:412,
  },
  {
    name: "Samsung S23 Ultra",
    price: "398π",
    image: "img/s23unltra.jpg",
    sold:336,
  },
];

function displayProducts() {
  const productContainer = document.getElementById("product-list");

  productContainer.innerHTML = products
    .map(
      (product) => `
    <div class="product">
        <div class="product-img" style="background-image: url(${product.image});">
        </div>
        <div class="product-name">
        ${product.name}
        </div>
        <div class="product-price">
            <p>${product.price}</p>
            <button>Mua ngay</button>
        </div>
        <span style="font-size: 12px; color:#783a8c">Đã bán ${product.sold} sản phẩm</span>
    </div>
  `
    )
    .join("");
}

document.querySelector(".products").addEventListener("click", () => {
  window.location.href = "wallet.html";
});

function redirectWallet() {
  window.location.href = "wallet.html";
}

function convert() {
  const piAmount = parseFloat(document.getElementById("piAmount").value);
  const currency = document.getElementById("currency").value;

  const piToUsd = 2;
  const piToVnd = 50000;

  let result = "";

  if (isNaN(piAmount) || piAmount <= 0) {
    result = "Vui lòng nhập số PI hợp lệ.";
  } else {
    if (currency === "usd") {
      result = `${(piAmount * piToUsd).toLocaleString()} `;
    } else if (currency === "vnd") {
      result = ` ${(piAmount * piToVnd).toLocaleString()}`;
    }
  }
  document.getElementById("result").innerText = result;
}

function updateLogo() {
  const currency = document.getElementById("currency").value;
  const currencyLogo = document.getElementById("currencyLogo");

  if (currency === "usd") {
    currencyLogo.src = "./img/logo-usd.png";
    currencyLogo.alt = "USD Logo";
  } else if (currency === "vnd") {
    currencyLogo.src = "./img/logo-vnd.jpg";
    currencyLogo.alt = "VND Logo";
  }
}

const feedbackData = [
  { star:"4" ,name: "Văn Đức", comment: "Thật sự ấn tượng với việc dùng Pi để giao dịch!" },
  { star:"5",name: "TranthiHoa", comment: "Mua hàng bằng Pi rất dễ dàng và nhanh chóng." },
  { star:"4",name: "Hải 34", comment: "Một bước tiến lớn cho cộng đồng Pi!" },
  { star:"5",name: "Phạm Văn H", comment: "Hệ thống chuyển đổi rất đáng tin cậy." },
  { star:"4",name: "Hoàng Lam7798", comment: "Mua sắm bằng Pi giúp tiết kiệm đáng kể, rất tiện lợi." },
  { star:"5",name: "NgVăn Minh", comment: "Tôi sẽ giới thiệu bạn bè tham gia giao dịch bằng Pi." },
  { star:"4",name: "Trần Thị Ngọc", comment: "Sản phẩm đa dạng và giá cả hợp lý khi mua bằng Pi." },
  { star:"5",name: "Levananh", comment: "Tuyệt vời! Chuyển đổi Pi rất nhanh, không gặp bất kỳ trở ngại nào." },
  { star:"4",name: "PhQuỳnh", comment: "Cảm ơn shop đã hỗ trợ giao dịch bằng Pi. Rất hài lòng!" },
  { star:"5",name: "Hoàng Văn S", comment: "Dịch vụ thật chuyên nghiệp, Pi có giá trị thực sự!" },
  { star:"4",name: "NguyễnThanh", comment: "Tôi rất ấn tượng với cách shop tận dụng Pi trong giao dịch." },
  { star:"4",name: "Văn Tùng", comment: "Mua sản phẩm bằng Pi vừa tiện lợi vừa hiện đại." },
  { star:"4",name: "Lethiyen111", comment: "Sử dụng Pi thật sự mang lại trải nghiệm mới mẻ!" },
  { star:"5",name: "Phạm Văn Vinh", comment: "Hỗ trợ chuyển đổi Pi thật sự rất tốt, cảm ơn shop!" },
  { star:"5",name: "Hoàng Xuân", comment: "Tôi rất hài lòng với chất lượng dịch vụ và sản phẩm." },
  { star:"4",name: "Yên Nguyenx", comment: "Shop làm rất tốt, tôi sẽ tiếp tục ủng hộ." },
  { star:"5",name: "TranvanHoang", comment: "Pi đang dần thay đổi cách chúng ta giao dịch. Tuyệt vời!" },
  { star:"5",name: "Lê BAo", comment: "Rất vui khi có thể sử dụng Pi để mua sắm thực tế." },
  { star:"4",name: "Phạm Cẩm 111", comment: "Dịch vụ đáng tin cậy và rất tiện ích." },
  { star:"5",name: "Hoàng", comment: "Đây là một bước tiến mới cho nền kinh tế số!" }
];


function showMoreFeedback() {
  const container = document.querySelector('.feedback-container');
  const button = document.querySelector('.show-more');

  feedbackData.forEach(feedback => {
      const feedbackElement = document.createElement('div');
      feedbackElement.className = 'feedback';
      feedbackElement.innerHTML = `
          <div class="name">
            <h4>${feedback.name}</h4><span class="star-icon">${feedback.star}★</span></h4>
          </div>
          <p>${feedback.comment}</p>
      `;
      container.insertBefore(feedbackElement, button);
  });

  button.style.display = 'none';
}

window.onload = displayProducts;
