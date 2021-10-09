<template>
  <div class="gallery-image__list">
    <gallery-image v-for="file in imageFiles"
      :key="file"
      :filename="file"
      :imageHeight="imageHeight"
    />
  </div>
</template>

<script>
import GalleryImage from '@/components/about/GalleryImage.vue'
export default {
  components: {
    GalleryImage
  },
  props: {
    imageFiles: {
      type: Array,
      required: true
    },
    imageHeight: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.gallery-image__list {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>