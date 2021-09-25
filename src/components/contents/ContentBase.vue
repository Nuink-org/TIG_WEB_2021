<template>
  <div class="content-base">
    <div class="content-base__thumbnail">
      <div v-if="isReleased">
        <thumbnail
          :url="url"
          :imageName="imageName"
        />
      </div>
      <div v-else>
        <upcoming-board />
      </div>
    </div>
    <div class="content-base__title">
      {{ title }}
    </div>
    <div class="content-base__description">
      {{ description }}
    </div>
    <div v-if="collaborators.length > 0" class="content-base__collaboration">
      協力者
      <div 
        v-for="colab in collaborators" 
        class="content-base__collaborators"
        :key="colab"
      >
        {{ colab }}
      </div>
    </div>
  </div>
</template>

<script>
import UpcomingBoard from '@/components/contents/UpcomingBoard.vue'
import Thumbnail from '@/components/contents/Thumbnail.vue'
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
    url: {
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
.content-base {
  width: 40rem;
  line-height: $sentence-height;
  &__title {
    font-size: 27px;
    margin-top: 2rem;
    border-bottom: 1px solid #fff;
    line-height: 2rem;
  }
  &__description {
    margin-top: 1.2rem;
  }
  &__collaboration {
    margin-top: 1.2rem;
  }
  & + & {
    margin-top: 4rem;
  }
}
</style>