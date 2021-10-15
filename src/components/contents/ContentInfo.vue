<template>
  <div class="content-info" :style="{height: revHeight, padding: padding}">
    <div class="content-info__title">
      {{ titleJP }}
    </div>
    <div class="content-info__description">
      {{ description }}
    </div>
    <div class="content-info__detailLink">
      <router-link
        :to="{ name: pageName }"
      >
        詳細はこちら
      </router-link>
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
    pageName: {
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
  @include respond(tablet) {
    padding: 0 !important;
    height: 100% !important;
  }
  &__title {
    font-size: $font-size-content-overview;
    font-weight: bold;
    line-height: 2rem;
    @include respond(phone) {
      font-size: 1.618em;
    }
  }
  &__description, &__detailLink {
    margin-top: 1.618rem;
  }
  &__detailLink {
    a {
      color: #fff;
    }
  }
  &__collaboration {
    margin-top: 1.2rem;
  }
}
</style>