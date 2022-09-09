//    <!-- Script Buy btn -->

const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modalClose = document.querySelector(".js-modal-close");

//Hàm hiển thị modal mua vé(thêm class open vào modal)
function showBuyTickets() {
  modal.classList.add("open");
}

// Gỡ bỏ class open của modal
function hideBuyTickets() {
  modal.classList.remove("open");
}

// Lặp từng thẻ Btn và nghe 'click'
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets); //click vao bien buyBtn => chay ham showBuyTickets
}
// Nghe 'click' vào btn-close
modalClose.addEventListener("click", hideBuyTickets);

modal.addEventListener("click", hideBuyTickets);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

// <!-- script menu header -->

var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;

// đóng/mở moblie-menu
mobileMenu.onclick = function () {
  var isClosed = header.clientHeight === headerHeight;
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

// Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.onclick = function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}

//Slider show
const sliderMain = document.querySelector(".slider-wrapper");
const sliderItems = document.querySelectorAll(".slider");
var index = 0;

function handleSlider() {
  index++;
  if (index >= sliderItems.length) {
    index = 0;
  }
  sliderMain.style.left = `${index * -100}%`;
}

setInterval(function () {
  handleSlider();
}, 3000);
