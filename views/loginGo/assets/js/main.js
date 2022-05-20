var visibled = document.getElementById('ispasswordVisible')
var hidden = document.getElementById('ispasswordHidden')
var userInput = document.getElementById('user-input')
var passwordInput = document.getElementById('password-input')
var login = document.getElementById('login-go')
var hintLogin = document.getElementById('hintLogin')
var hintLoginText = document.getElementById('hintLoginText')

// 密码明文显示
visibled.addEventListener('click', () => {
  passwordInput.setAttribute('type', 'text');
  visibled.classList.toggle('active')
  hidden.classList.toggle('active')
})
hidden.addEventListener('click', () => {
  passwordInput.setAttribute('type', 'password');
  visibled.classList.toggle('active')
  hidden.classList.toggle('active')
})

// 验证提示
var hintLoginSetTimeout = null
function hintLoginVerify(text) {
  hintLogin.className = 'hint-login-active'
  hintLoginText.innerHTML = text
  hintLoginSetTimeout = setTimeout(() => {
    hintLogin.className = 'hint-login'
  }, 3000);
}

// 登录（密码固定）
login.addEventListener('click', () => {
  clearTimeout(hintLoginSetTimeout) // 修复一直点击登录提示框一直闪烁问题
  // if (userInput.value === '') {
  //   hintLoginVerify('账号不可为空，请输入')
  //   return
  // } else if (passwordInput.value === '') {
  //   hintLoginVerify('密码不可为空，请输入')
  //   return
  // } else if (userInput.value !== "huangyy") {
  //   hintLoginVerify("账号不正确，请重试")
  //   return
  // } else if (passwordInput.value !== "0116") {
  //   hintLoginVerify("密码不正确，请重试")
  //   return
  // }
  window.location.href = './views/webSiteFw/index.html'
})