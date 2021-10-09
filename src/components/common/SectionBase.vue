<template>
  <wrapper
    :isFull="isWrapperFull"
    class="section-base" 
  >
    <div v-if="isTitleNeeded" class="section-base__header">
      <section-header :title="title" />
    </div>
    <div class="section-base__content">
      <slot name="content" />
    </div>
  </wrapper>
</template>

<script> 
import { computed } from 'vue'
import Wrapper from '@/components/common/Wrapper.vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
export default {
  components: {
    Wrapper,
    SectionHeader
  },
  props: {
    isWrapperFull: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
  },
  setup(props) {
    const isTitleNeeded = computed(() => props.title !== '')

    return { isTitleNeeded }
  }
}
</script>

<style scoped lang='scss'>
.section-base {
  text-align: center;
  display: flex;
  width: 100%;
  &__header {
    margin-bottom: $margin-section-header-bottom;
  }
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