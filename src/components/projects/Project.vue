<template>
  <div class="project">
    <div class="project-thumbnail">
      <div v-if="isReleased">
        <thumbnail
          :url="projectUrl"
          :imageName="imageName"
        />
      </div>
      <div v-else>
        <upcoming-board />
      </div>
    </div>
    <div class="project-title">
      {{ title }}
    </div>
    <div class="project-description">
      {{ description }}
    </div>
    <div v-if="collaborators.length > 0" class="project-collaboration">
      協力者
      <div 
        v-for="colab in collaborators" 
        class="project-collaborators"
        :key="colab"
      >
        {{ colab }}
      </div>
    </div>
  </div>
</template>

<script>
import UpcomingBoard from '@/components/projects/UpcomingBoard.vue'
import Thumbnail from '@/components/projects/Thumbnail.vue'
export default {
  components: {
    UpcomingBoard,
    Thumbnail
  },
  props: {
    order: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    collaborators: {
      type: Array,
      default: () => []
    },
    isReleased: {
      type: Boolean,
      default: false
    },
    projectUrl: {
      type: String,
      default: ''
    },
    imageName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.project {
  width: 40rem;
  &-title {
    margin-top: 2rem;
    border-bottom: 1px solid #fff;
    line-height: 2rem;
  }
  &-description {
    margin-top: 1.2rem;
  }
  &-collaboration {
    margin-top: 1.2rem;
  }
  & + & {
    margin-top: 4rem;
  }
}
</style>