import Vue from "vue"
import store from '../store'
import Router from "vue-router"
//首页
import Home from "../home/index.vue"


import "../../css/reset.scss"
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {   //理财
            path: "/Money",
            name: "money",
            component: () => import('../money'),
            meta: {
                title: '理财'
            },
            beforeEnter: (to, from, next) => {
                console.log(store.state.isLogined);
                if (store.state.isLogined === true) {
                    console.log('已登录');
                    next()
                    console.log('nice');
                } else {
                    next('/login')
                }

            }
        },
        {  // 白条
            path: "/Ious",
            name: "ious",
            component: () => import("../ious"),
            meta: {
                title: '白条'
            },
            beforeEnter: (to, from, next) => {
                console.log(store.state.isLogined);
                if (store.state.isLogined === true) {
                    console.log('已登录');
                    next()
                    console.log('nice');
                } else {
                    next('/login')
                }

            }
        },
        {   //众筹
            path: "/Raise",
            name: "raise",
            component: () => import('../raise'),
            meta: {
                title: '众筹'
            },
            beforeEnter: (to, from, next) => {
                console.log(store.state.isLogined);
                if (store.state.isLogined === true) {
                    console.log('已登录');
                    next()
                    console.log('nice');
                } else {
                    next('/login')
                }

            }
        },
        {  //下载页
            path: '/Download',
            name: 'download',
            component: () => import('../special/download.vue'),
            meta: {
                title: '下载APP'
            }
        },
        {
            //登录页
            path: '/login',
            name: 'login',
            component: () => import('../login/login.vue'),
            beforeEnter: (to, from, next) => {
                if (!store.state.isLogined) {
                    next()
                }
                else {
                    next('/')
                }

            }
        }
    ],
})
