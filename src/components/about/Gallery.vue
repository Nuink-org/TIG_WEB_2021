<template>
  <div class="gallery" v-if="isMounted">
    <div class="gallery__first">
      <gallery-image-list :imageFiles="imageFiles.slice(0, 5)" :imageHeight="imageHeight"/>
      <gallery-image-list :imageFiles="imageFiles.slice(0, 5)" :imageHeight="imageHeight"/>
    </div>
    <div class="gallery__second">
      <gallery-image-list :imageFiles="imageFiles.slice(5, 10)" :imageHeight="imageHeight"/>
      <gallery-image-list :imageFiles="imageFiles.slice(5, 10)" :imageHeight="imageHeight"/>
    </div>
    <div class="gallery__third">
      <gallery-image-list :imageFiles="imageFiles.slice(10, 15)" :imageHeight="imageHeight"/>
      <gallery-image-list :imageFiles="imageFiles.slice(10, 15)" :imageHeight="imageHeight"/>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import GalleryImageList from '@/components/about/GalleryImageList.vue'
export default {
  components: {
    GalleryImageList
  },
  setup() {
    const imageHeight = ref(0)
    const isMounted = ref(false)
    const imageFiles = Array.from({length: 15}, (v, i) => `gallery${i+1}.jpeg`)

    onMounted(() => {
      const windowHeight = window.outerHeight
      imageHeight.value = windowHeight / 3
      
      isMounted.value = true
    })

    return { imageHeight, imageFiles, isMounted }
  }
}
</script>

<style scoped lang="scss">
.gallery {
  &__first, &__second, &__third {
    display: flex;
  }
  &__first {
    .gallery-image__list {
      &:first-child {
        animation: left-to-right-1 50s linear -25s infinite;
      }
      &:last-child {
        animation: left-to-right-2 50s linear infinite;
      }
    }
  }
  &__second {
    .gallery-image__list {
      &:first-child {
        animation: right-to-left-1 54s linear -27s infinite;
      }
      &:last-child {
        animation: right-to-left-2 54s linear infinite;
      }
    }
  }
  &__third {
    .gallery-image__list {
      &:first-child {
        animation: left-to-right-1 46s linear -23s infinite;
      }
      &:last-child {
        animation: left-to-right-2 46s linear infinite;
      }
    }
  }
  max-width: 100vw;
  overflow: hidden;
}
@keyframes left-to-right-1 {
  0% {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes left-to-right-2 {
  0% {
    transform: translateX(0);
  }
  to {
    transform: translateX(-200%);
  }
}
@keyframes right-to-left-1 {
  0% {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}
@keyframes right-to-left-2 {
  0% {
    transform: translateX(-200%);
  }
  to {
    transform: translateX(0);
  }
}
</style>