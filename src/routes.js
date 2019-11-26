import VueRouter from 'vue-router'
import Search from './Search'
import List from './List'
import NotFound from "./NotFound";

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Search
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/list',
      component: List,
    },
    {
      path: '*',
      component: NotFound
    },
  ],
  mode: 'history'
})
