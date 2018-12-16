<template lang="html">
    <div>
        <money-header></money-header>
        <money-slider></money-slider>
        <money-cut></money-cut>
        <money-lc></money-lc>
        <money-zx></money-zx>
        <money-year></money-year>
        <money-footer></money-footer>
        <money-navbar></money-navbar>
    </div>
</template>

<script>
    /* 聚合组件------理财 */
    import MoneyHeader from '../public/header' //顶部header
    import MoneySlider from './mSlider.vue' //轮播图
    import MoneyCut from './cutdown.vue' //神卷满减
    import MoneyLc from './lcjx.vue' //理财精选
    import MoneyZx from './lczx.vue' //理财专享
    import MoneyYear from './yearLx.vue' //年度理财
    import MoneyFooter from '../public/footer' //底部footer
    import MoneyNavbar from '../public/navbar.vue' //底部导航栏
    
    export default {
        components: {
            MoneyHeader,
            MoneySlider,
            MoneyCut,
            MoneyLc,
            MoneyZx,
            MoneyYear,
            MoneyFooter,
            MoneyNavbar,
        }
    }
</script>

<style lang="scss" module>

</style>