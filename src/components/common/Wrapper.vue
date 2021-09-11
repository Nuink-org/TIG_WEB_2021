<template>
  <div class="wrapper" :class="wrapperClass">
    <slot />
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    isFull: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    const wrapperClass = computed(() => props.isFull ? 'wrapper-full' : 'wrapper-restricted')

    return { wrapperClass }
  }
}
</script>

<style scoped lang='scss'>
.wrapper {
  margin: 0 auto;
}
.wrapper-full {
  width: 100%;
}
.wrapper-restricted {
  max-width: $screen-size-restricted;
}
</style>