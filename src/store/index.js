import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      isLandingAnimCompleted: false,
      isDrawingOn: false,
      isResponsiveTablet: false,
      isResponsivePhone: false,
      scrollTopPos: 0,
      timeDiff: 0,
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
    },
    setScrollTopPos(state, payload) {
      state.scrollTopPos = payload.scrollTopPos
    },
    setTimeDiff(state, payload) {
      state.timeDiff = payload.diff
    }
  },
  actions: {
  },
})