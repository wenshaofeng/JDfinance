import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isLogined : false
    },
    mutations:{
        handleLogin(state) {
            state.isLogined = true
        },
        handleLogout(state) {
            state.isLogined = false
        }
    }
  })
