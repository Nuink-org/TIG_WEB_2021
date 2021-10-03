import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      isLandingAnimCompleted: false,
      isResponsiveTablet: false,
      isResponsivePhone: false
    }
  },
  mutations: {
    completeLandingAnim(state) {
      state.isLandingAnimCompleted = true
    },
    addResponsivenessTablet(state, payload) {
      state.isResponsiveTablet = payload.width <= 960 ? true : false // 960はタブレット閾値
    },
    addResponsivenessPhone(state, payload) {
      state.isResponsivePhone = payload.width <= 560 ? true : false
    }
  },
  actions: {
  },
})