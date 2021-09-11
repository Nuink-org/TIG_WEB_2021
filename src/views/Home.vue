<template>
  <div id="home">
    <section class="landing-wrapper">
      <landing />
    </section>
    <section class="concept-wrapper">
      <concept />
    </section>
    <section class="about-wrapper">
      <about />
    </section>
    <section class="projects-wrapper">
      <projects />
    </section>
    <section class="news-wrapper">
      <news />
    </section>
    <section class="gallery-wrapper">
      <gallery />
    </section>
    <section class="footer-wrapper">
      <page-footer />
    </section>
  </div>
</template>

<script>
import Landing from '@/components/sections/Landing.vue'
import Concept from '@/components/sections/Concept.vue'
import About from '@/components/sections/About.vue'
import Projects from '@/components/sections/Projects.vue'
import News from '@/components/sections/News.vue'
import Gallery from '@/components/sections/Gallery.vue'
import PageFooter from '@/components/sections/PageFooter.vue'

export default {
  components: {
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

<style scoped lang="scss">
</style>