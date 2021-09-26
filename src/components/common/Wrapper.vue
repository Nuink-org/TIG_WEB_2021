<template>
  <div class="wrapper" 
    :style="isBgImage ? {
      'background-image': `linear-gradient(to left, rgba(0, 0, 0, 0.16), rgba(255, 255, 255, 0.16)), url(${wrapperImage})`, 
      'background-size': 'cover'} 
      : ''"
  >
    <div class="wrapper-width" :class="wrapperClass">
      <slot />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    isFull: {
      type: Boolean,
      required: true
    },
    bgImageName: {
      type: String,
      default: '',
    }
  },
  setup(props) {
    const wrapperClass = computed(() => props.isFull ? 'wrapper-width__full' : 'wrapper-width__restricted')
    const isBgImage = computed(() => props.bgImageName !== '')
    const wrapperImage = computed(() => require(`@/assets/images/${props.bgImageName}`))

    return { wrapperClass, isBgImage, wrapperImage }
  }
}
</script>

<style scoped lang='scss'>
.wrapper {
  width: 100%;
  &-width {
    margin: 0 auto;
    &__full {
      width: 100%;
    }
    &__restricted {
      width: 75%;
      // max-width: $screen-size-restricted;
    }
  }
}
</style>