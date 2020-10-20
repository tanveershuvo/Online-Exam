import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Login from '../views/Auth/Login'
import Home from '../views/Home'
import ExamPaperList from '../views/ExamPaperList'
import AssignExamPaper from '../views/AssignExamPaper'
import AddQuestion from '../views/AddQuestion'
const routes = [
    { path: '/', component: Login , name:'Login'},
    { path: '/home', component: Home , name:'Home'},
    { path: '/exam-papers', component: ExamPaperList , name:'ExamPapers'},
    { path: '/assign-exam-paper', component: AssignExamPaper , name:'AssignExamPaper'},
    { path: '/add-question', component: AddQuestion , name:'AddQuestion'},
    { path: '/*', component: Home , name:''},
]
const router = new VueRouter({
    routes,
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
