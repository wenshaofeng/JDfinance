<template lang="html">
    <div>
        <nav-header></nav-header>
        <home-slider></home-slider>
        <home-novice></home-novice>
        <home-borrow></home-borrow>
        <home-money></home-money>
    </div>
</template>


<script>
/* 聚合组件------首页 */ 
import NavHeader from '../public/header'  //顶部
import HomeSlider from './hslider' //轮播图 
import HomeNovice from './novice'  //新手特权
import HomeBorrow from './borrow'  // 极速借贷
import HomeMoney from './money'  // 理财精选

export default {
  components: {
    NavHeader,
    HomeSlider,
    HomeNovice, 
    HomeBorrow,
    HomeMoney
  }
}
</script>

<style lang="scss" module>
  
</style>
