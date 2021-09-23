import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      landingAnimCompleted: false
    }
  },
  mutations: {
    completeLandingAnim(state) {
      state.landingAnimCompleted = true
    }
  },
  actions: {
  },
})