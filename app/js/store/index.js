import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isLogined : JSON.parse( localStorage.getItem('login') || 'false') 
    },
    mutations:{
        handleLogin(state) {
            state.isLogined = true
            localStorage.setItem('login',JSON.stringify(state.isLogined))       
        },
        handleLogout(state) {
            state.isLogined = false
            localStorage.setItem('login',JSON.stringify(state.isLogined))       
        }
    }
  })
