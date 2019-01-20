import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { setTitle } from './tools/util'


Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
    to.meta && setTitle(to.meta.title)
    next()
})

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>",
})
/* eslint-enable no-new */
