import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'
import store from "./stores/store";

window.axios = axios
axios.defaults.baseURL = 'http://onlineexam.test/api/v1/'
const cons_url = 'http://onlineexam.test/api/v1/'
Vue.use(Vuetify, axios);
const vuetify = new Vuetify();
const opts = {}
const vi = new Vuetify(opts)
export default {vi,cons_url}

Vue.component('AppHome', require('./views/AppHome.vue').default);

import router from './router/Router.js'
const app = new Vue({
    el: '#app',
    vuetify,
    router,
    store
});
