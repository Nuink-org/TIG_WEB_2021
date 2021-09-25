<template>
  <header class="section-header">
    <div class="section-title">
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
  &-title {
    color: $color-title;
    display: inline-block;
    font-family: $font-family-standard;
    font-size: $font-size-section-header;
    font-weight: bold;
    border-bottom: 2px solid #fff;
  } 
}
</style>