<template>
    <div :class="$style.header">
        <span :class="$style.left" v-if="!login">
            <em>注册</em> &nbsp;| &nbsp; <em>
                <router-link tag="span" to="/login"> 登录 </router-link>
            </em>
        </span>
        <span :class="$style.left" v-if="login">
            <em>二狗子</em> &nbsp;| &nbsp; <em @click="handleClick">
                退出
            </em>
        </span>
        <btn :class="$style.btnDownload">
            <router-link to="/Download" tag="div"> APP下载</router-link>
        </btn>
    </div>
</template>

<script>
    import btn from "../core/btn"
    export default {
        name: 'NavHeader',
        components: {
            btn
        },
        props: {},
        computed: {
             login () {
                 return  this.$store.state.isLogined
             }                 
        },
        methods: {
            handleClick() {
                this.$store.commit('handleLogout')
                this.$router.push('/')
            }
        }

    }
</script>
<style lang="scss" module>
    .header {
        color: #666;
        height: 100px;
        line-height: 100px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        font-size: 32px;
        background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
        background-size: auto 50%;
        z-index: 100;

        .left {
            font-size: 28px;
            height: 30px;
            line-height: 30px;
            margin: 17px 0 0 18px;
        }

        .btnDownload {
            float: right;
            font-size: 24px;
            border-width: 0;
            height: 56px;
            line-height: 56px;
            min-width: 120px;
            padding: 0;
            border-radius: 4px;
            margin: 28px 24px 0 0;
        }
    }
</style>