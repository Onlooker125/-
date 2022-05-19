const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
)
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul")
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a")

const header = document.querySelector(".header.container")
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  mobile_menu.classList.toggle("active")
})

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c"
  } else {
    header.style.backgroundColor = "transparent"
  }
})

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    mobile_menu.classList.toggle("active")
  })
})

/** 作品集轮播图 **/
var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  loop: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94
  },
  pagination: {
    el: ".swiper-pagination"
  }
})

/** login弹窗 弃用，换成连接形式*/
// var loginDialog = document.getElementById('loginDialog')
// var goLogin = document.getElementById('goLogin')
// var shade = document.getElementById('shade')
// goLogin.addEventListener('click', () => {
//   loginDialog.classList.toggle('active')
//   shade.classList.toggle('active')
// })
// shade.addEventListener('click', () => {
//   loginDialog.classList.toggle('active')
//   shade.classList.toggle('active')
// })
/** 以上END */