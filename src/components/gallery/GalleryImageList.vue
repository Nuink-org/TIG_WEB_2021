<template>
  <div class="gallery-image__list">
    <gallery-image v-for="file in imageFiles"
      :key="file"
      :filename="file"
    />
  </div>
</template>

<script>
import GalleryImage from '@/components/gallery/GalleryImage.vue'
export default {
  components: {
    GalleryImage
  },
  props: {
    imageFiles: {
      type: Array,
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
  overflow: hidden;
}
</style>