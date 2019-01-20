import Vue from "vue"
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
            }
        },
        {  // 白条
            path: "/Ious",
            name: "ious",
            component: () => import("../ious"),
            meta: {
                title: '白条'
            }
        },
        {   //众筹
            path: "/Raise",
            name: "raise",
            component: () => import('../raise'),
            meta:{
                title:'众筹'
            }
        },
        {  //下载页
            path: '/Download',
            name: 'download',
            component: () => import('../special/download.vue'),
            meta:{
                title:'下载APP'
            }
        }
    ],
})
