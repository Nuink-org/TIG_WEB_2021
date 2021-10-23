<template>
  <div id="home" :class="{'un-scrollable': !isScrollable}">
    <cursor 
      v-if="!isResponsive"
    />
    <drawing
      v-if="isDrawingOn"
    />
    <landing />
    <template v-if="isAnimCompleted">
      <about />
      <contents />
      <news />
      <page-footer />
    </template>
  </div>
</template>

<script>
import { ref, watch, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import Cursor from '@/components/common/Cursor.vue'
import Drawing from '@/components/three/Drawing.vue'
import Landing from '@/components/sections/Landing.vue'
import About from '@/components/sections/About.vue'
import Contents from '@/components/sections/Contents.vue'
import News from '@/components/sections/News.vue'
import PageFooter from '@/components/sections/PageFooter.vue'
export default {
  components: {
    Cursor,
    Drawing,
    Landing,
    About,
    Contents,
    News,
    PageFooter
  },
  setup() {
    // const scrollPos = ref({ x: 0, y: 0 })
    // const displayPos = ref({ x: 0, y: 0 })
    // const easeScroll = () => {
    //   scrollPos.value.x = window.pageXOffset
    //   scrollPos.value.y = window.pageYOffset
    // }
    // onMounted(() => {
    //   window.addEventListener('scroll', easeScroll)
    // })
    
    // window.requestAnimationFrame(render)
    // function render() {
    //   displayPos.value.x = linearInterpolate(displayPos.value.x, scrollPos.value.x, 0.0618)
    //   displayPos.value.y = linearInterpolate(displayPos.value.y, scrollPos.value.y, 0.0618)
    //   displayPos.value.x = Math.floor(displayPos.value.x * 100) / 100
    //   displayPos.value.y = Math.floor(displayPos.value.y * 100) / 100

    //   window.requestAnimationFrame(render)
    // }
    // const linearInterpolate = (a, b, r) => (1 - r) * a + r * b

    // const transformStyle = computed(() => `translate3d(-${displayPos.value.x}, -${displayPos.value.y}px, 0px`)

    // return { transformStyle }
    const store = useStore()
    const isDrawingOn = computed(() => store.state.isDrawingOn)
    const isAnimCompleted = computed(() => store.state.isLandingAnimCompleted)
    const isScrollable = ref(false)
    const isResponsive = computed(() => store.state.isResponsiveTablet)

    watch(isAnimCompleted, () => {
      setTimeout(() => {
        isScrollable.value = true
      }, 100)
    })

    onMounted(() => {
      store.commit('addResponsivenessTablet', { width: window.outerWidth }) // init commit
      store.commit('addResponsivenessPhone', { width: window.outerWidth }) // init commit
      window.addEventListener('resize', () => {
        store.commit('addResponsivenessTablet', { width: window.outerWidth })
        store.commit('addResponsivenessPhone', { width: window.outerWidth }) 
      })
      if (isAnimCompleted.value) {
        isScrollable.value = true
      }
    })

    return { isDrawingOn, isAnimCompleted, isScrollable, isResponsive }
  }
}
</script>

<style scoped lang='scss'>
#home {
  position: relative;
  width: 100%;
  height: 100vh;
  // -ms-overflow-style: none;
  // scrollbar-width: none;
  // &::-webkit-scrollbar {
  //   display: none;
  // }
}
.un-scrollable {
  overflow: hidden;
}
</style>