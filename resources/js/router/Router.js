import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Login from '../views/Auth/Login'
import Home from '../views/Home'
import Test from '../views/test'
const routes = [
    { path: '/', component: Login , name:'Login'},
    { path: '/home', component: Home , name:'Home'},
    { path: '/test', component: Test , name:'Test'},
    { path: '/*', component: Home , name:'Home'},
]
const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang:false,
    mode:'history'
});
router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/'];
    const authRequired = !publicPages.includes(to.path);
    const authNotRequired = publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('token');

    if (authRequired && !loggedIn) {
        return next('/');
    }
    if(authNotRequired && loggedIn){
        return next('/home');
    }
    next();
})
export default router
