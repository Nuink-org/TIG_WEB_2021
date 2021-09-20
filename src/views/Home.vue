<template>
  <div id="home">
    <drawing />
    <landing />
    <div v-if="animCompleted">
      <concept />
      <about />
      <projects />
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
import Projects from '@/components/sections/Projects.vue'
import News from '@/components/sections/News.vue'
import Gallery from '@/components/sections/Gallery.vue'
import PageFooter from '@/components/sections/PageFooter.vue'
export default {
  components: {
    Drawing,
    Landing,
    Concept,
    About,
    Projects,
    News,
    Gallery,
    PageFooter
  },
  setup() {
    const store = useStore()
    const animCompleted = computed(() => store.state.landingAnimCompleted )
    console.log(animCompleted.value)

    return { animCompleted }
  }
}
</script>

<style scoped lang="scss">
</style>