<template>
  <wrapper :isFull="isWrapperFull" class="section-base">
    <div class="section-base__wrapper" :class="{'section-base__wrapperRight': isRight}">
      <div v-if="isTitleNeeded" class="section-base__header">
        <section-header :title="title" />
      </div>
      <div class="section-base__content">
        <slot name="content" />
      </div>
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
    isRight: {
      type: Boolean,
      default: false,
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
  &__wrapper {
    width: 100%
  }
  &__wrapperRight {
    width: 40%;
    margin-left: auto;
  }
  &__header {
    margin-bottom: 2rem;
  }
  &__content {
    color: #fff;
  }
  & + & {
    margin-top: 4rem;
  }
}
</style>