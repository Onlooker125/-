/** =========== 菜单显示 ============= */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close")

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
}

/** =========== 菜单隐藏 ============ */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}

// 循环输出 swiper
var imgArr = [
  {
    src: './assets/img/home.jpg',
    title: 'WE',
    clutterArr: [
      './assets/img/home.jpg',
      './assets/img/home2.jpg',
      './assets/img/home3.jpg', './assets/img/home.jpg',
      './assets/img/home2.jpg',
      './assets/img/home3.jpg', './assets/img/home.jpg',
      './assets/img/home2.jpg',
      './assets/img/home3.jpg', './assets/img/home.jpg',
      './assets/img/home2.jpg',
      './assets/img/home3.jpg', './assets/img/home.jpg',
      './assets/img/home2.jpg',
      './assets/img/home3.jpg', './assets/img/home.jpg',
      './assets/img/home2.jpg',
      './assets/img/home3.jpg', './assets/img/home.jpg',
      './assets/img/home2.jpg',
      './assets/img/home3.jpg', './assets/img/home.jpg',
      './assets/img/home2.jpg',
      './assets/img/home3.jpg', './assets/img/home.jpg',
      './assets/img/home2.jpg',
      './assets/img/home3.jpg',
    ]
  },
  {
    src: './assets/img/home2.jpg',
    title: 'HYY',
    clutterArr: [
      './assets/img/home.jpg',
      './assets/img/home2.jpg',
      './assets/img/home3.jpg',
    ]
  },
  {
    src: './assets/img/home3.jpg',
    title: 'CLUTTER',
    clutterArr: [
      './assets/img/home.jpg',
      './assets/img/home2.jpg',
      './assets/img/home3.jpg',
    ]
  },
]
var swiper = document.getElementsByClassName('swiper-wrapper')
var photo_gather = document.createElement('section')
var body = document.getElementById('body')
body.appendChild(photo_gather)
for (let i = 0; i < imgArr.length; i++) {
  var tempDiv = document.createElement('div')
  tempDiv.setAttribute('class', 'swiper-slide')
  var tempImg = document.createElement('img')
  tempImg.src = imgArr[i].src
  var tempTitle = document.createElement('h2')
  tempTitle.innerHTML = imgArr[i].title
  tempTitle.setAttribute('class', 'swiper-title')
  tempDiv.appendChild(tempTitle)
  tempDiv.appendChild(tempImg)
  swiper[0].appendChild(tempDiv)

  // 添加导航下拉菜单
  var nav_photo = document.getElementById('nav__photo-clutter')
  var nav_photo_li = document.createElement('li')
  var nav_a = document.createElement('a')
  nav_a.setAttribute('href', '#' + imgArr[i].title)
  nav_photo_li.setAttribute('class', 'nav__link')
  nav_a.innerHTML = imgArr[i].title
  nav_photo_li.appendChild(nav_a)
  nav_photo.appendChild(nav_photo_li)

  // 增加相册
  photo_gather.setAttribute('class', 'photo_gather')
  photo_gather.setAttribute('id', 'photo__clutter')
  var photo_clutter_box = document.createElement('div')
  var photo_title = document.createElement('h1')
  var photo_list = document.createElement('div')
  photo_title.innerHTML = imgArr[i].title
  photo_clutter_box.setAttribute('id', imgArr[i].title)
  photo_clutter_box.setAttribute('class', 'box')
  photo_title.setAttribute('class', 'photo_title')
  photo_list.setAttribute('class', 'photo_list')
  photo_clutter_box.appendChild(photo_title)
  photo_gather.appendChild(photo_clutter_box)

  // 单个相册增加照片
  imgArr[i].clutterArr.forEach((item) => {
    var img = document.createElement('img')
    img.src = item
    var shade = document.getElementById('shade')
    var shade_img = document.createElement('img')
    shade_img.setAttribute('class','shade-img')
    shade.addEventListener('click', () => {
      shade.classList.remove('shade')
      shade_img.parentNode.removeChild(shade_img)
    })
    img.addEventListener('click', () => {
      shade.classList.add('shade')
      shade_img.src = item
      shade.appendChild(shade_img)
    })
    photo_list.appendChild(img)
  })
  photo_clutter_box.appendChild(photo_list)
}

// 每张轮播图的事件
var swiper_click = document.getElementsByClassName('swiper-slide')
for (let i = 0; i < swiper_click.length; i++) {
  swiper_click[i].addEventListener('click', () => {
    var imgTitle = imgArr[i].title
    window.location.href = '#' + imgTitle
  })
}
console.log(swiper_click)



/** =============== 导航下拉 ===================== */
var nav_item = document.getElementsByClassName('nav__item')
nav_item[1].addEventListener('mouseenter', () => {
  nav_photo.classList.add("sublist-show");
})
nav_item[1].addEventListener('mouseleave', () => {
  nav_photo.classList.remove("sublist-show");
})
/** =============== END 导航下拉 ===================== */

/** =============== 滚动变换naver ================= */
function scrollHeader() {
  const header = document.getElementById("header")
  if (this.scrollY >= 100) { header.classList.add("scroll-header"); console.log('100') }
  else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)
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




/** =========== 点击菜单项后缩回菜单 ============ */
const navLink = document.querySelectorAll(".nav__link")
console.log('navlink', navLink)
function linkAction() {
  navMenu.classList.remove("show-menu")
}
// 给每个navLink添加单击事件，并绑定回调
navLink.forEach((n) => n.addEventListener("click", linkAction))

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
