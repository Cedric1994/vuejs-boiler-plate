import * as themes from '@/assets/js/themes'

export default function (themeName) {
  const themeToApply = themes[themeName]
  for (let key in themeToApply) {
    document.documentElement.style.setProperty(key, themeToApply[key])
  }
}
