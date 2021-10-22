import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      isLandingAnimCompleted: false,
      isDrawingOn: false,
      isResponsiveTablet: false,
      isResponsivePhone: false
    }
  },
  mutations: {
    completeLandingAnim(state) {
      state.isLandingAnimCompleted = true
    },
    startDrawing(state) {
      state.isDrawingOn = true
    },
    addResponsivenessTablet(state, payload) {
      state.isResponsiveTablet = payload.width <= 1024 ? true : false // 1024はタブレット閾値
    },
    addResponsivenessPhone(state, payload) {
      state.isResponsivePhone = payload.width <= 768 ? true : false
    }
  },
  actions: {
  },
})