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
import Landing from '@/components/Landing.vue'
import Concept from '@/components/Concept.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import News from '@/components/News.vue'
import Gallery from '@/components/Gallery.vue'
import PageFooter from '@/components/PageFooter.vue'

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