import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// import modules from './modules'

Vue.use(Vuex)

state.total = state.list.length
state.running = state.list.filter(item => item.checked).length

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
})
