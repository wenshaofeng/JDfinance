<template lang="html">
    <div>
        <raise-header></raise-header>
        <raise-footer></raise-footer>
        <raise-navbar></raise-navbar>
    </div>
</template>

<script>
    /* 聚合组件------众筹 */
    import RaiseHeader from '../public/header' //顶部header
    import RaiseFooter from '../public/footer' //底部footer
    import RaiseNavbar from '../public/navbar.vue' //底部导航栏
    

    export default {
        components: {
            RaiseHeader,
            RaiseFooter,
            RaiseNavbar,
        }
    }
</script>