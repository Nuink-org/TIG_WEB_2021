<template>
  <wrapper>
    <div class='news'>
      <section-header title="news" />
    </div>
  </wrapper>
</template>

<script>
import Wrapper from '@/components/common/Wrapper.vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
export default {
  components: { 
    Wrapper,
    SectionHeader 
  },
  setup() {}
}
</script>

<style scoped lang='scss'>
.news {
  text-align: center;
}
</style>