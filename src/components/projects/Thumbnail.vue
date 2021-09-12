<template>
  <div class="thumbnail">
    <a :href="url">
      <img :src="imgSrc" alt="projectThumbnail">
    </a>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
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
  position: relative;
  width: 100%;
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%; // aspect ratio = 16:9
  }
  a, img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>