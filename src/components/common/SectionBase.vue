<template>
  <wrapper 
    :isFull="isWrapperFull" 
    class="section-base" 
    :style="visibility"
  >
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
import { useStore } from 'vuex'
import Wrapper from '@/components/common/Wrapper.vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
export default {
  components: {
    Wrapper,
    SectionHeader
  },
  props: {
    isLateReveal: {
      type: Boolean,
      default: false,
    },
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
    const store = useStore()
    const animCompleted = computed(() => store.state.landingAnimCompleted)
    const isTitleNeeded = computed(() => props.title !== '')
    const visibility = computed(() => {
      return props.isLateReveal && !animCompleted.value ? {display: 'none'} : {display: 'flex'}
    })

    return { visibility, isTitleNeeded }
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
    margin-bottom: $margin-section-header-bottom;
  }
  &__content {
    color: $color-content;
    font-size: $font-size-section-content;
    font-family: $font-family-jp;
  }
  & + & {
    margin-top: $margin-section;
  }
}
</style>