// import Vue from 'vue';
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'

export default (Vue, ...params) => {
  params.filter(el => typeof el === 'object')
    .map(le => Vue.use(le))

  // Import plugin that don't need to be configured in main.js
  Vue.use(VueMaterial)
  Vue.use(VueRouter)
  Vue.use(VeeValidate)
  Vue.use(VueResource)
}
