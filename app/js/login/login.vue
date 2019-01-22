<template>
    <div>
        <mt-header :class="$style.loginHeader">
            <router-link to="/" slot="left">
                <mt-button :class="$style.back">返回</mt-button>
            </router-link>
        </mt-header>
        <div :class="$style.loginWrapper">
            <div :class="$style.loginBox">
                <input :class="$style.loginInput" type="text" v-model="username" placeholder="账号">
                <input :class="$style.loginInput" type="password" v-model="password" placeholder="密码">
                <mt-button :class="$style.loginBtn" size="large" type="primary" @click="handleLogin(username,password)">登录
                </mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        Toast
    } from "mint-ui";
    import axios from "axios";
    export default {
        name: "Login",
        components: {},
        props: {},
        data() {
            return {
                username: "",
                password: ""
            };
        },
        methods: {
            handleLogin(user, pwd) {
                var param = {
                    username: user,
                    password: pwd
                };
                console.log(user, pwd);
                axios
                    .get("/api/login", {
                        // params:param
                    })
                    .then(res => {
                        Toast({
                            message: "登录成功！",
                            iconClass: "icon icon-success",
                            className: "loginToast",
                            duration: 1500
                        });
                        this.username = "";
                        this.password = "";
                        this.$store.commit('handleLogin')
                        setTimeout(() => {
                            this.$router.push("/");
                        },1000)
                    });
            }
        }
    };
</script>

<style lang="scss">
    .loginToast {
        width: 300px;
        height: 75px;
    }

    .mint-toast-text {
        padding-bottom: 10px;
        font-size: 30px;
    }
</style>

<style lang="scss" module>
    .loginHeader {
        height: 80px;
        font-size: 28px;

        .back {
            height: 60px;
            padding: 10px 10px;
        }
    }

    .loginWrapper {
        background: white;
        height: 1000px;
        display: flex;
        align-items: center;
        justify-content: center;

        .loginBox {
            padding-top: 50px;
            margin: 0 auto;
            width: 100%;
            height: 300px;
            background: #aaa;
            display: flex;
            flex-wrap: wrap;
            border: 1px solid #ccc;

            .loginInput {
                margin: 0 auto;
                width: 400px;
                height: 50px;
                text-align: center;
                font-size: 30px;
            }

            .loginBtn {
                width: 600px;
                height: 60px;
                margin: 0 auto;
                font-size: 30px;
                border-radius: 20px;
            }
        }
    }
</style>