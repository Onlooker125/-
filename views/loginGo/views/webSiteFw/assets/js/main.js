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
  spaceBetween: 32, //图片间的距离
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

function finalVideo() {
  // Video ends,icon change
  videoIcon.classList.remove("ri-pause-line")
  videoIcon.classList.add("ri-play-line")
}
// ended,whe the video ends
videoFile.addEventListener("ended", finalVideo)

/** ============== SHOW SCROLL UP =============== */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up")
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll")
  else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

/** =========== SCROLL SECTIONS ACTIVE LINK ============ */
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
  const scrollY = window.pageYOffset
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop
    sectionId = current.getAttribute("id")
    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link")
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link")
    }
  })
}
window.addEventListener("scroll", scrollActive)

/** ============= DARK LIGHT THEME ================== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem("selected-icon")

const getCurrentTheme = () => document.body.classList.contains(darkTheme)?"dark":"light"
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)?"ri-moon-line":"ri-sun-line"

if(selectedTheme){
  document.body.classList[selectedTheme === "dark" ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === "ri-moon-line" ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click',()=>{
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme',getCurrentTheme())
  localStorage.setItem('selected-icon',getCurrentIcon)
})
