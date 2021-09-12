<template>
  <div class="project-list">
    <project
      v-for="(p, idx) in projects"
      :key="p.title"
      :order="idx+1"
      :title="p.title"
      :description="p.description"
      :collaborators="p.collaborators"
      :isReleased="p.isReleased"
      :projectUrl="p.projectUrl"
      :imageName="p.imageName"
    /> 
  </div>
</template>

<script>
import Project from '@/components/projects/Project.vue'
export default {
  components: {
    Project,
  },
  props: {
    projects: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
.project-list {
  .project {
    &:nth-child(2n+1) {
      margin-right: auto;
    }
    &:nth-child(2n) {
      margin-left: auto;
    }
  }
}
</style>