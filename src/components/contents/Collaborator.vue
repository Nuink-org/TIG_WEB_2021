<template>
  <div class="collaborator">
    <div class="collaborator__profile" :class="isYobinori ? 'yobinori': ''">
      <img :src="imageSrc" :style="{'width': `${imageSize}px`}">
    </div>
    <div class="collaborator__description" :class="isTParty ? 'tparty': ''">
      <div class="collaborator__description-name">
        <a :href="link">{{ name }}</a>
      </div>
      <div class="collaborator__description-sentence">
        {{ sentence }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    imageSize: {
      type: Number,
      required: true
    },
    imageName: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    sentence: {
      type: String,
      required: true
    },
    isTParty: {
      type: Boolean,
      default: false
    },
    isYobinori: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const imageSrc = computed(() => require(`@/assets/images/${props.imageName}`))

    return { imageSrc }
  }
}
</script>

<style lang="scss" scoped>
.collaborator {
  padding-top: 2.67rem;
  display: flex;
  justify-content: flex-start;
  &__profile {
    width: 160px;
    img {
      background-color: #fff;
      width: 100%;
      height: auto;
    }
  }
  &__description {
    color: #cecece;
    width: 100%;
    margin-left: 1.618rem;
    &-name {
      font-size: 16px;
      a {
        color: #cecece;
        text-decoration: none;
      }
    }
    &-sentence {
      margin-top: 1.618rem;
      font-size: 14px;
    }
  }
}
.tparty {
  margin-top: 1.618rem;
}
.yobinori {
  img {
    border-radius: 50%;
  }
}
</style>
