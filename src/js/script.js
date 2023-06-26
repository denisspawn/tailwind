const btn = document.getElementById('menu-btn')
const nav = document.getElementById('mobile-menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('slide')
})
