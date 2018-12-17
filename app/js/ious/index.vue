<template lang="html">
    <div>
        <ious-header></ious-header>
        <ious-slider></ious-slider>
        <ious-welfare></ious-welfare>
        <ious-service></ious-service>
        <ious-footer></ious-footer>
        <ious-navbar></ious-navbar>
    </div>
</template>

<script>
    /* 聚合组件------白条 */
    import IousHeader from '../public/header' //顶部header
    import IousSlider from './iSlider.vue' //轮播图
    import IousWelfare from './welfare.vue' //白条福利
    import IousService from './moreService.vue' //白条福利
    import IousFooter from '../public/footer' //底部footer
    import IousNavbar from '../public/navbar.vue' //底部导航栏
    

    export default {
        components: {
            IousHeader,
            IousSlider,
            IousWelfare,
            IousService,
            IousFooter,
            IousNavbar,
        }
    }
</script>