<template>
  <div class="gallery-image" :style="{'height': `${imageHeight}px`}">
    <img class="lazy-load" :data-src="imgSrc">
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    filename: {
      type: String,
      required: true
    },
    imageHeight: {
      type: Number,
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
  min-height: 250px;
  max-height: 300px;
  img {
    transform: translateZ(0);
    width: auto;
    height: 100%;
  }
}
</style>