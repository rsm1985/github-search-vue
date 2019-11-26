import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


import App from './App.vue'
import Repository from './Repository'


import Panel from './Panel'
import NotFound from './NotFound'

import router from './routes'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.component('Repository', Repository);
// Vue.component('Search', Search);
// Vue.component('List', List);
Vue.component('Panel', Panel);
Vue.component('NotFound', NotFound);

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
