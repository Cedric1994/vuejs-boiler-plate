const app = {
  primary: {
    color: 'blue',
    hue: 600
  },
  accent: {
    color: 'orange',
    hue: 800
  },
  warn: {
    color: 'red',
    hue: 400
  },
  background: 'white'
}

export default (Vue) => {
  // Register our default theme for vue material
  Vue.material.registerTheme('default', app)
}
