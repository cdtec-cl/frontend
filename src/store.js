import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login : false
  },
  mutations: {
    log_set(state){
      state.login = state
    }
    
  },
  actions: {

  }
})
