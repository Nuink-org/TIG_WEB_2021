<template>
  <header class='section-header'>
    <div class='section-title'>
      {{ sectionTitle }}
    </div>
  </header>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const sectionTitle = computed(() => props.title.toUpperCase())

    return { sectionTitle }
  }
}
</script>

<style scoped lang='scss'>
.section {
  &-header {
    margin-bottom: 2rem;
  }

  &-title {
    display: inline-block;
    font-size: $font-size-section-header;
    font-weight: bold;
    border-bottom: 2px solid #fff;
  } 
}
</style>