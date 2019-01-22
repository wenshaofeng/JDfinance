import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import MintUI from 'mint-ui'
import { setTitle } from './tools/util'
import 'mint-ui/lib/style.css'
import './mock/mockServer'
import store from './store/index.js'

Vue.use(VueAwesomeSwiper)
Vue.use(MintUI)
Vue.config.productionTip = false


router.beforeEach((to, from, next) => { 
    to.meta && setTitle(to.meta.title)
    next()
})

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App/>",
})
/* eslint-enable no-new */
