<template>
  <section-base
    :isWrapperFull="true"
    title="gallery"
    class="gallery"
  >
    <template #content>
      <gallery-image-list :imageFiles="imageFiles.slice(0, imageFiles.length / 2)" />
      <gallery-image-list :imageFiles="imageFiles.slice(imageFiles.length / 2, imageFiles.length)" />
    </template>
  </section-base>
</template>

<script>
import SectionBase from '@/components/common/SectionBase.vue'
import GalleryImageList from '@/components/gallery/GalleryImageList.vue'
export default {
  components: {
    SectionBase,
    GalleryImageList
  },
  setup() {
    const imageFiles = Array.from({length: 8}, (v, i) => `gallery${i+1}.jpeg`)

    return { imageFiles }
  }
}
</script>

<style scoped lang='scss'>

</style>