/** =========== SHOW MENU ============= */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close")

/** =========== MENU SHOW ============= */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
}

/** =========== MENU HIDDEN ============ */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}

/** =========== REMOVE MENU MOBILE 点击菜单项后缩回菜单 ============ */
const navLink = document.querySelectorAll(".nav__link")
function linkAction() {
  navMenu.classList.remove("show-menu")
}
// 给每个navLink添加单击事件，并绑定回调
navLink.forEach((n) => n.addEventListener("click", linkAction))

/** ============= CHANGE BACKGROUND HEADER ================ */
function scrollHeader() {
  const header = document.getElementById("header")
  if (this.scrollY >= 100) header.classList.add("scroll-header")
  else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/** ================ SWIPER DISCOVER ================ */
var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlider: true,
  slidesPerView: "auto",
  loop: true, //循环轮播
  spaceBetween:32,    //图片间的距离
  coverflowEffect: {
    rotate: 0, //翻页的倾斜
  },
})

/** ================= VIDEO ==================== */
const videoFile = document.getElementById("video-file"),
  videoButton = document.getElementById("video-button"),
  videoIcon = document.getElementById("video-icon")

function playPause() {
  if (videoFile.paused) {
    // play video
    videoFile.play()
    // we change the icon
    videoIcon.classList.add("ri-pause-line")
    videoIcon.classList.remove("ri-play-line")
  } else {
    // pause video
    videoFile.pause()
    // we change the icon
    videoIcon.classList.remove("ri-pause-line")
    videoIcon.classList.add("ri-play-line")
  }
}
videoButton.addEventListener("click", playPause)

function finalVideo(){
  // Video ends,icon change
    videoIcon.classList.remove("ri-pause-line")
    videoIcon.classList.add("ri-play-line")
}
// ended,whe the video ends
videoFile.addEventListener("ended",finalVideo)