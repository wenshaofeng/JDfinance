import Vue from "vue"
import Router from "vue-router"
//首页
import Home from "../home/index.vue"
//理财
import Money from "../money/index.vue"
// 白条
import Ious from "../ious/index.vue"
// 众筹
import Raise from "../raise/index.vue"
//下载页
import DownLoad from '../special/download.vue'
import "../../css/reset.scss"
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/Money",
            name: "money",
            component: Money,
        },
        {
            path: "/Ious",
            name: "ious",
            component: Ious,
        },
        {
            path: "/Raise",
            name: "raise",
            component: Raise,
        },
        {
            path:'/Download',
            name:'download',
            component: DownLoad
        }
    ],
})
