<template>
  <div id="home">
    <drawing />
    <landing />
    <concept />
    <about />
    <projects />
    <news />
    <gallery />
    <page-footer />
  </div>
</template>

<script>
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