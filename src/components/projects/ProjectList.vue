<template>
  <div class="project-list">
    <project
      v-for="(p, idx) in projects"
      :key="p.title"
      :order="idx+1"
      :title="p.title"
      :description="p.description"
      :collaborators="p.collaborators"
    > 
      <template #thumbnail>
        <upcoming-board />
      </template>
    </project>
  </div>
</template>

<script>
import Project from '@/components/projects/Project.vue'
import UpcomingBoard from '@/components/projects/UpcomingBoard.vue'
export default {
  components: {
    Project,
    UpcomingBoard
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
  margin-top: 4rem;
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