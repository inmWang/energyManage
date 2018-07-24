import Vue from 'vue';
import Router from 'vue-router';
const login = r =>
  require.ensure([], () => r(require('../pages/login/login')), 'login');
const main = r =>
  require.ensure([], () => r(require('../pages/main/index')), 'main');
const home = r =>
  require.ensure([], () => r(require('../pages/home/index')), 'home');
const general = r =>
  require.ensure([], () => r(require('../pages/general/index')), 'general');
Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'main',
      component: main,
      redirect: 'home/index',
      children: [{
        path: '/home/index',
        component: home,
        meta: {
          requireAuth: true
        }
      }, {
        path: '/general/index',
        component: general,
        meta: {
          requireAuth: true
        }
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
