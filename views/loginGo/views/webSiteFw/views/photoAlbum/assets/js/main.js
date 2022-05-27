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
    src: './assets/img/5.20/img (1).jpg',
    title: '2022.5.20',
    clutterArr: [
      './assets/img/5.20/img (2).jpg',
      './assets/img/5.20/img (1).jpg',
      './assets/img/5.20/img (3).jpg',
      './assets/img/5.20/img (4).jpg',
      './assets/img/5.20/img (5).jpg',
      './assets/img/5.20/img (6).jpg',
      './assets/img/5.20/img (7).jpg',
      './assets/img/5.20/img (8).jpg',
      './assets/img/5.20/img (9).jpg',
      './assets/img/5.20/img (10).jpg',
      './assets/img/5.20/img (11).jpg',
      './assets/img/5.20/img (12).jpg',
      './assets/img/5.20/img (13).jpg',
      './assets/img/5.20/img (14).jpg',
      './assets/img/5.20/img (15).jpg',
      './assets/img/5.20/img (16).jpg',
      './assets/img/5.20/img (17).jpg',
      './assets/img/5.20/img (18).jpg',
      './assets/img/5.20/img (19).jpg',
      './assets/img/5.20/img (20).jpg',
      './assets/img/5.20/img (21).jpg',
      './assets/img/5.20/img (22).jpg',
      './assets/img/5.20/img (23).jpg',
      './assets/img/5.20/img (24).jpg',
      './assets/img/5.20/img (25).jpg',
      './assets/img/5.20/img (26).jpg',
    ]
  },
  {
    src: './assets/img/romance/img (1).png',
    title: '浪漫也许会迟到',
    clutterArr: [
      './assets/img/romance/img (1).jpg',
      './assets/img/romance/img (1).png',
      './assets/img/romance/img (2).jpg',
      './assets/img/romance/img (2).png',
      './assets/img/romance/img (3).jpg',
      './assets/img/romance/img (3).png',
      './assets/img/romance/img (4).jpg',
      './assets/img/romance/img (4).png',
      './assets/img/romance/img (5).jpg',
      './assets/img/romance/img (5).png',
      './assets/img/romance/img (6).jpg',
      './assets/img/romance/img (7).jpg',
      './assets/img/romance/img (8).jpg',
      './assets/img/romance/img (9).jpg',
      './assets/img/romance/img (10).jpg',
      './assets/img/romance/img (11).jpg',
      './assets/img/romance/img (12).jpg',
      './assets/img/romance/img (13).jpg',
      './assets/img/romance/img (14).jpg',
      './assets/img/romance/img (15).jpg',
      './assets/img/romance/img (16).jpg',
      './assets/img/romance/img (17).jpg',
      './assets/img/romance/img (18).jpg',
      './assets/img/romance/img (19).jpg',
      './assets/img/romance/img (20).jpg',
      './assets/img/romance/img (21).jpg',
      './assets/img/romance/img (22).jpg',
      './assets/img/romance/img (23).jpg',
      './assets/img/romance/img (24).jpg',
      './assets/img/romance/img (25).jpg',
      './assets/img/romance/img (26).jpg',
      './assets/img/romance/img (27).jpg',
      './assets/img/romance/img (28).jpg',
      './assets/img/romance/img (29).jpg',
      './assets/img/romance/img (30).jpg',
      './assets/img/romance/img (31).jpg',
      './assets/img/romance/img (32).jpg',
      './assets/img/romance/img (33).jpg',
      './assets/img/romance/img (34).jpg',
      './assets/img/romance/img (35).jpg',
      './assets/img/romance/img (36).jpg',
      './assets/img/romance/img (37).jpg',
      './assets/img/romance/img (38).jpg',
      './assets/img/romance/img (39).jpg',
      './assets/img/romance/img (40).jpg',
      './assets/img/romance/img (41).jpg',
      './assets/img/romance/img (42).jpg',
    ]
  }, {
    src: './assets/img/seeyoutomorrow/img (5).jpg',
    title: 'SEE YOU TOMORROW.',
    clutterArr: [
      './assets/img/seeyoutomorrow/img (2).jpg',
      './assets/img/seeyoutomorrow/img (1).jpg',
      './assets/img/seeyoutomorrow/img (3).jpg',
      './assets/img/seeyoutomorrow/img (4).jpg',
      './assets/img/seeyoutomorrow/img (5).jpg',
      './assets/img/seeyoutomorrow/img (6).jpg',
      './assets/img/seeyoutomorrow/img (7).jpg',
      './assets/img/seeyoutomorrow/img (8).jpg',
      './assets/img/seeyoutomorrow/img (9).jpg',
      './assets/img/seeyoutomorrow/img (10).jpg',
      './assets/img/seeyoutomorrow/img (11).jpg',
      './assets/img/seeyoutomorrow/img (12).jpg',
      './assets/img/seeyoutomorrow/img (13).jpg',
      './assets/img/seeyoutomorrow/img (14).jpg',
      './assets/img/seeyoutomorrow/img (15).jpg',
      './assets/img/seeyoutomorrow/img (16).jpg',
      './assets/img/seeyoutomorrow/img (17).jpg',
      './assets/img/seeyoutomorrow/img (18).jpg',
      './assets/img/seeyoutomorrow/img (19).jpg',
      './assets/img/seeyoutomorrow/img (20).jpg',
    ]
  },
  {
    src: './assets/img/baku/img (1).jpg',
    title: '坏坏巴库',
    clutterArr: [
      './assets/img/baku/img (1).jpg',
      './assets/img/baku/img (2).jpg',
      './assets/img/baku/img (3).jpg',
      './assets/img/baku/img (4).jpg',
      './assets/img/baku/img (5).jpg',
      './assets/img/baku/img (6).jpg',
      './assets/img/baku/img (7).jpg',
      './assets/img/baku/img (8).jpg',
      './assets/img/baku/img (9).jpg',
      './assets/img/baku/img (10).jpg',
      './assets/img/baku/img (11).jpg',
      './assets/img/baku/img (12).jpg',
      './assets/img/baku/img (13).jpg',
      './assets/img/baku/img (14).jpg',
      './assets/img/baku/img (15).jpg',
      './assets/img/baku/img (16).jpg',
      './assets/img/baku/img (17).jpg',
      './assets/img/baku/img (18).jpg',
      './assets/img/baku/img (19).jpg',
      './assets/img/baku/img (20).jpg',
      './assets/img/baku/img (21).jpg',
      './assets/img/baku/img (22).jpg',
      './assets/img/baku/img (23).jpg',
      './assets/img/baku/img (24).jpg',
      './assets/img/baku/img (25).jpg',
      './assets/img/baku/img (26).jpg',
      './assets/img/baku/img (27).jpg',
      './assets/img/baku/img (28).jpg',
      './assets/img/baku/img (29).jpg',
      './assets/img/baku/img (30).jpg',
      './assets/img/baku/img (31).jpg',
      './assets/img/baku/img (32).jpg',
      './assets/img/baku/img (33).jpg',
      './assets/img/baku/img (34).jpg',
      './assets/img/baku/img (35).jpg',
      './assets/img/baku/img (36).jpg',
      './assets/img/baku/img (37).jpg',
      './assets/img/baku/img (38).jpg',
      './assets/img/baku/img (39).jpg',
      './assets/img/baku/img (40).jpg',
      './assets/img/baku/img (41).jpg',
      './assets/img/baku/img (42).jpg',
      './assets/img/baku/img (43).jpg',
      './assets/img/baku/img (44).jpg',
      './assets/img/baku/img (45).jpg',
      './assets/img/baku/img (46).jpg',
      './assets/img/baku/img (47).jpg',
      './assets/img/baku/img (48).jpg',
      './assets/img/baku/img (49).jpg',
      './assets/img/baku/img (50).jpg',
      './assets/img/baku/img (51).jpg',
      './assets/img/baku/img (52).jpg',
      './assets/img/baku/img (53).jpg',
      './assets/img/baku/img (54).jpg',
      './assets/img/baku/img (55).jpg',
      './assets/img/baku/img (56).jpg',
      './assets/img/baku/img (57).jpg',
      './assets/img/baku/img (58).jpg',
      './assets/img/baku/img (59).jpg',
      './assets/img/baku/img (50).jpg',
      './assets/img/baku/img (61).jpg',
      './assets/img/baku/img (62).jpg',
      './assets/img/baku/img (63).jpg',
      './assets/img/baku/img (64).jpg',
      './assets/img/baku/img (65).jpg',
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
    shade_img.setAttribute('class', 'shade-img')
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
  if (this.scrollY >= 100) header.classList.add("scroll-header")
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
