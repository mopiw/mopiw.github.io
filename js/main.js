// dark mode

let getLocalStorage = localStorage.getItem('theme-mode')
let html = document.querySelector('html')
let getHtmlThemeMode = html.getAttribute('data-theme-mode')
const themeModeSwitch = document.querySelectorAll('.theme-mode-switch-icon')

function themeMode(mode, onload) {
  if (onload) {
    html.setAttribute('data-theme-mode', getLocalStorage)
    localStorage.setItem('theme-mode', getLocalStorage)
    window.onload = function () {
      window.CUSDIS.setTheme(getLocalStorage)
    }
  } else if (mode != '') {
    html.setAttribute('data-theme-mode', mode)
    localStorage.setItem('theme-mode', mode)
    window.CUSDIS.setTheme(mode)
  }
}

if (getLocalStorage === 'dark') {
  themeMode(getLocalStorage, true)
} else if (getLocalStorage === null) {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeMode('dark', true)
  }
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', function (e) {
    if (e.matches) {
      themeMode('dark')
    } else {
      themeMode('light')
    }
  })

for (const element of themeModeSwitch) {
  element.addEventListener('click', function (e) {
    if (this.classList[1] == 'to-dark') {
      themeMode('dark')
    } else if (this.classList[1] == 'to-light') {
      themeMode('light')
    }
  })
}

// posts images full width
const postP = document.querySelectorAll('.post-content p')
const postWidth = document.querySelector('.post-content').offsetWidth

for (const element of postP) {
  if (element.querySelector('img')) {
    element.classList.add('has-img')
    if (element.querySelector('img').offsetWidth >= postWidth) {
      element.classList.add('img-full')
    }
  }
}

// img alt
const imgAlt = document.querySelectorAll('.post-content img')
for (const element of imgAlt) {
  if (element.getAttribute('alt')) {
    element.insertAdjacentHTML(
      'afterend',
      `<span class="img-alt">${element.getAttribute('alt')}</span>`
    )
  }
}

// parvus init
const prvs = new Parvus()

// back top top
window.onscroll = function () {
  let top = document.documentElement.scrollTop
  const backToTop = document.querySelector('.back-to-top')

  if (top >= 600) {
    backToTop.style.opacity = '1'
  } else {
    backToTop.style.opacity = '0'
  }
}
