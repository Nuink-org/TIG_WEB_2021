<template>
  <div class="content-info" :style="{height: revHeight, padding: padding}">
    <div class="content-info__title">
      {{ titleJP }}
    </div>
    <div class="content-info__description">
      {{ description }}
    </div>
    <!-- 協力者の表示は検討中 -->
    <!-- <div v-if="collaborators.length > 0" class="content-info__collaboration">
      協力者
      <div 
        v-for="colab in collaborators" 
        class="content-base__collaborators"
        :key="colab"
      >
        {{ colab }}
      </div>
    </div> -->
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    titleJP: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    infoHeight: {
      type: Number,
      required: true
    },
    paddingLeft: {
      type: Number,
      default: 0
    },
    paddingRight: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const revHeight = computed(() => `${props.infoHeight}px`)
    const padding = computed(() => `0 ${props.paddingRight}px 0 ${props.paddingLeft}px`)

    return { revHeight, padding }
  }
}
</script>

<style scoped lang="scss">
.content-info {
  text-align: left;
  &__title {
    font-size: 27px;
    font-weight: bold;
    line-height: 2rem;
  }
  &__description {
    margin-top: 1.618rem;
  }
  &__collaboration {
    margin-top: 1.2rem;
  }
}
</style>