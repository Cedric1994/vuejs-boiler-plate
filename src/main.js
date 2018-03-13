// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
// import { Validator } from 'vee-validate'
import { sync } from 'vuex-router-sync'

// Import the configuration of your application vue
import plugins from './config/plugins'
// import directives from './config/directives'
// import validations from './config/validations'
// import theme from './config/theme'
import configRouter from './config/router'
import vuexStore from './vuex/store'

plugins(Vue, Vuex, VueRouter) // Declare the plugin we want to use
// directives(Vue) // Rehister all the directive
// theme(Vue)

// Directive to automatically validate imports
// More details: http://vee-validate.logaretm.com/
// validations(Validator)

const store = new Vuex.Store(vuexStore)
const router = configRouter(VueRouter)

// Syncronize the router and the store of VueX
sync(store, router)

import App from './App' // eslint-disable-line

new Vue({ // eslint-disable-line no-new
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
