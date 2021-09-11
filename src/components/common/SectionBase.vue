<template>
  <wrapper :isFull="isWrapperFull">
    <div v-if="isTitleNeeded" class="section-header">
      <section-header :title="title" />
    </div>
    <div class="section-content">
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
    }
  },
  setup(props) {
    const isTitleNeeded = computed(() => props.title !== '')

    return { isTitleNeeded }
  }
}
</script>

<style scoped lang='scss'>
.section {
  &-header {
    margin-bottom: 2rem;
  }
  &-content {
    color: #fff;
  }
}
</style>