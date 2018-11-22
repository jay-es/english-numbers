import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

type State = {
  isRandom: Boolean
  maxNum: Number
}

export default new Vuex.Store({
  state: {
    isRandom: false,
    maxNum: 20,
  } as State,
  mutations: {
    update(state: State, newState: State) {
      Object.assign(state, newState)
    },
  },
  actions: {},
})
