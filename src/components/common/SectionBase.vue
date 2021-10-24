<template>
  <wrapper
    :isFull="isWrapperFull"
    class="section-base" 
  >
    <div class="section-base__content">
      <slot name="content" />
    </div>
  </wrapper>
</template>

<script> 
import Wrapper from '@/components/common/Wrapper.vue'
export default {
  components: {
    Wrapper
  },
  props: {
    isWrapperFull: {
      type: Boolean,
      required: true
    },
  }
}
</script>

<style scoped lang='scss'>
.section-base {
  text-align: center;
  display: flex;
  width: 100%;
  &__content {
    color: $color-content;
    font-size: $font-size-section-content;
    font-family: $font-family-jp;
  }
  & + & {
    padding: $margin-section 0;
  }
}
</style>