<template lang="html">
    <div>
        <raise-header></raise-header>
        <raise-slider></raise-slider>
        <raise-daily></raise-daily>
        <raise-in></raise-in>
        <raise-more></raise-more>
        <raise-footer cname='rfooter'></raise-footer>
        <raise-navbar></raise-navbar>
    </div>
</template>

<script>
    /* 聚合组件------众筹 */
    import RaiseHeader from '../public/header' //顶部header
    import RaiseSlider from './rSlider.vue' //文字轮播
    import RaiseDaily from './daily.vue' //每日签到
    import RaiseIn from './in.vue' //In货推荐
    import RaiseMore from './more.vue' //更多福利
    import RaiseFooter from '../public/footer' //底部footer
    import RaiseNavbar from '../public/navbar.vue' //底部导航栏
    

    export default {
        components: {
            RaiseHeader,
            RaiseSlider,
            RaiseDaily,
            RaiseIn,
            RaiseMore,
            RaiseFooter,
            RaiseNavbar,
        }
    }
</script>

<style lang="scss">
     .rfooter{
		margin-top: 0px!important;
		ul{
			li:first-child{
				display: none;
			}
		}
	}
</style>
