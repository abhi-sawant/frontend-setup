let currentTheme = 'light'

window.addEventListener('load', () => {
  const theme = localStorage.getItem('theme')
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
    currentTheme = 'dark'
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    currentTheme = 'light'
  }
})

function themeSwitcher() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', currentTheme)
  localStorage.setItem('theme', currentTheme)
}
