<template>
  <section-base
    :isWrapperFull="false"
    title="projects"
    class="projects"
  >
    <template #content>
      <projects-overview />
      <div class="projects-list">
        
      </div>
    </template>
  </section-base>
</template>

<script>
import SectionBase from '@/components/common/SectionBase.vue'
import ProjectsOverview from '@/components/projects/ProjectsOverview.vue'
export default {
  components: {
    SectionBase,
    ProjectsOverview
  },
  setup() {}
}
</script>

<style scoped lang='scss'>

</style>