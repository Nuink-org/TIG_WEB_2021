<template>
  <div class="wrapper" >
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
  },
  setup(props) {
    const wrapperClass = computed(() => props.isFull ? 'wrapper-width__full' : 'wrapper-width__restricted')

    return { wrapperClass}
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