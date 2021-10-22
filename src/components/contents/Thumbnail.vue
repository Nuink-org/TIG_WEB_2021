<template>
  <div class="thumbnail">
    <img :src="imgSrc" alt="contentThumbnail">
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    imageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const imgSrc = computed(() => require(`@/assets/images/${props.imageName}`))

    return { imgSrc }
  }
}
</script>

<style scoped lang="scss">
.thumbnail {
  width: 30rem;
  @include respond(tablet) {
    width: 100%;
  }
  position: relative;
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%; // aspect ratio = 16:9
  }
  img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}
</style>