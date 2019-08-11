import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'es6-promise/auto'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './../node_modules/sass-loader/lib/loader.js'

import styles from '@/assets/sb-admin-2.min.module.css'
import sassStyles from '@/assets/style.module.scss';

var unirest = require('unirest');
var req = unirest("GET", "https://apiv2.wiseconn.com/farms");
req.headers({
  "api_key": "9Ev6ftyEbHhylMoKFaok",
  "Accept": "application/json"
});
req.end(function (res) {
  if (res.error) throw new Error(res.error);
  console.log(res.body);
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
