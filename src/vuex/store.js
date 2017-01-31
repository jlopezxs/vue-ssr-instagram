import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const defaultState = {
  items: []
}

const inBrowser = typeof window !== 'undefined'

const state = (inBrowser && window.__INITIAL_STATE__) || defaultState

const mutations = {
  ITEMS_LIST: (state, items) => {
    state.items = items
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
