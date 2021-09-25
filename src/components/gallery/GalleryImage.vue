<template>
  <div class="gallery-image">
    <img :src="imgSrc">
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    filename: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const imgSrc = computed(() => require(`@/assets/images/${props.filename}`))

    return { imgSrc }
  }
}
</script>

<style scoped lang="scss">
.gallery-image {
  height: 280px;
  img {
    width: auto;
    height: 100%;
  }
}
</style>