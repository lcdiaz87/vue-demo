// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App'
import router from './router'
Vue.use(Vuex)

import store from './store'

import People from '@/components/People'
import Planet from '@/components/Planet'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VueAxios,
  axios,
  components: { App, People, Planet },
  template: '<App/>'
}) 
