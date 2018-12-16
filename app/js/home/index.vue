<template lang="html">
  <div>
    <home-header></home-header>
    <home-slider></home-slider>
    <home-novice></home-novice>
    <home-borrow></home-borrow>
    <home-money></home-money>
    <home-product></home-product>
    <home-life></home-life>
    <home-footer></home-footer>
    <home-navbar></home-navbar>
  </div>
</template>

<script>
  /* 聚合组件------首页 */
  import HomeHeader from '../public/header' //顶部header
  import HomeSlider from './hslider' //轮播图 
  import HomeNovice from './novice' //新手特权
  import HomeBorrow from './borrow' // 极速借贷
  import HomeMoney from './money' // 理财精选
  import HomeProduct from './product' // 新品推荐
  import HomeLife from './life' //生活服务
  import HomeFooter from '../public/footer' //底部footer
  import HomeNavbar from '../public/navbar.vue' //底部导航栏
  export default {
    components: {
      HomeHeader,
      HomeSlider,
      HomeNovice,
      HomeBorrow,
      HomeMoney,
      HomeProduct,
      HomeLife,
      HomeFooter,
      HomeNavbar
    }
  }
</script>

<style lang="scss" module>

</style>