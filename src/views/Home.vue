<template>
  <div id="home">
    <cursor />
    <drawing />
    <landing />
    <template v-if="animCompleted">
      <concept />
      <about />
      <contents />
      <news />
      <gallery />
      <page-footer />
    </template>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Cursor from '@/components/common/Cursor.vue'
import Drawing from '@/components/three/Drawing.vue'
import Landing from '@/components/sections/Landing.vue'
import Concept from '@/components/sections/Concept.vue'
import About from '@/components/sections/About.vue'
import Contents from '@/components/sections/Contents.vue'
import News from '@/components/sections/News.vue'
import Gallery from '@/components/sections/Gallery.vue'
import PageFooter from '@/components/sections/PageFooter.vue'
export default {
  components: {
    Cursor,
    Drawing,
    Landing,
    Concept,
    About,
    Contents,
    News,
    Gallery,
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
    const animCompleted = computed(() => store.state.landingAnimCompleted)

    return { animCompleted }
  }
}
</script>

<style scoped lang='scss'>
#home {
  position: relative;
  height: 100vh;
  // overflow-y: scroll;
  // -ms-overflow-style: none;
  // scrollbar-width: none;
  // &::-webkit-scrollbar {
  //   display: none;
  // }
}
</style>