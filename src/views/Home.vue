<template>
  <div id="home">
    <drawing />
    <landing />
    <div v-if="animCompleted">
      <concept />
      <about />
      <contents />
      <news />
      <gallery />
      <page-footer />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
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
    const store = useStore()
    const animCompleted = computed(() => store.state.landingAnimCompleted )

    return { animCompleted }
  }
}
</script>

<style scoped lang='scss'>
#home {
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>