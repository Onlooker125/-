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

/** ================== WECHAT DIALOG ====================== */
const wechat = document.getElementById('wechat')
const footerWechat = document.getElementById('footerWechat')
const wechatDialog = document.getElementById('wechatDialog')
wechat.addEventListener('click', () => {
  wechatDialog.classList.toggle('visible')
})
footerWechat.addEventListener('click', () => {
  wechatDialog.classList.toggle('visible')
})
wechatDialog.addEventListener('click', () => {
  wechatDialog.classList.toggle('visible')
})

/** ============= CHANGE BACKGROUND HEADER ================ */
function scrollHeader() {
  const header = document.getElementById("header")
  if (this.scrollY >= 100) header.classList.add("scroll-header")
  else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)
/** ================== EXPERIENCE =================== */
var show_three = document.getElementsByClassName('experience__number')
var daysComputed = function(time) {
  var oldTimeFormat = new Date(time.replace(/-/g, '/'));
  var nowDate = new Date();
  if(nowDate.getTime() - oldTimeFormat.getTime() > 0) {
      var times = nowDate.getTime() - oldTimeFormat.getTime();
      var days = parseInt(times / (60*60*24*1000));
      return days;
  } else {
      throw('传入时间不能大于当前日期');
  }
}
// 修改第二个
show_three[1].innerHTML = daysComputed('2022-02-19')
// 修改第三个
show_three[2].innerHTML = daysComputed('2014-10-10')


/** ================ SWIPER DISCOVER ================ */
var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  coverflowEffect: {
    rotate: 32, //翻页的倾斜
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
    const sectionTop = current.offsetTop - 50
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

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line"

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === "ri-moon-line" ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon)
})

/** =================SCROLL REVEAL ANIMATION ================ */
const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  reser: true, // 重复
})
sr.reveal(`.home__data, .home__social-link, .home__info, .discover__container,
           .experience__data, .experience__overlay, .place__card, .sponsor__content,
           .footer__data, .footer__rights, .subscribe__title,
           .section__title`, {
  origin: 'top',
  interval: 100,
})
sr.reveal(`.about__data, .video__description, .subscribe__description`, {
  origin: 'left'
})
sr.reveal(`.about__img-overlay, .video__content, .subscribe__form`, {
  origin: 'right',
  interval: 100
})

/** =============== swiper中循环添加图片 ================== */
var imgArr = [{
  src: './assets/img/discover1.jpg',
  title: '臭宝',
  text: '这是我家臭宝'
}, {
  src: './assets/img/discover2.jpg',
  title: '臭宝2',
  text: '这是我家臭宝2'
}, {
  src: './assets/img/discover3.jpg',
  title: '臭宝3',
  text: '这是我家臭宝3'
}, {
  src: './assets/img/home2.jpg',
  title: '臭宝4',
  text: '这是我家臭宝4'
},]
var wrapper = document.getElementById('wrapper')
for (i = 0; i < imgArr.length; i++) {
  var div = document.createElement('div') // 添加最外层div
  div.setAttribute('class', 'discover__card swiper-slide') // 设置div的属性
  // 插入img
  var img = document.createElement('img')
  img.src = imgArr[i].src
  // 插入文本div
  var textDiv = document.createElement('div')
  textDiv.setAttribute('class', 'discover__data')
  // 文本div中的h2
  var h2 = document.createElement('h2')
  h2.setAttribute('class', 'discover__title')
  h2.innerHTML = imgArr[i].title
  // 文本div中的span
  var span = document.createElement('span')
  span.setAttribute('class', 'discover__description')
  span.innerHTML = imgArr[i].text
  textDiv.appendChild(h2)
  textDiv.appendChild(span)
  div.appendChild(img)
  div.appendChild(textDiv)
  wrapper.appendChild(div)
}
/** =============== End swiper中循环添加图片 ================== */
