// import VueMaterial from 'vue-material'
// import VueResource from 'vue-resource'
// import VeeValidate from 'vee-validate'

export default (Vue, ...params) => {
  params.filter(el => !!el)
    .map(le => Vue.use(le))

  // Import plugin that don't need to be configured in main.js
  // Vue.use(VueMaterial)
  // Vue.use(VeeValidate)
  // Vue.use(VueResource)
}
