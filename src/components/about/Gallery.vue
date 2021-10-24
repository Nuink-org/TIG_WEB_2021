<template>
  <div class="gallery">
    <div class="gallery__first">
      <gallery-image-list :imageFiles="imageFiles.slice(0, imageCount)" :imageHeight="imageHeight"/>
      <gallery-image-list :imageFiles="imageFiles.slice(0, imageCount)" :imageHeight="imageHeight"/>
    </div>
    <div class="gallery__second">
      <gallery-image-list :imageFiles="imageFiles.slice(imageCount, imageCount*2)" :imageHeight="imageHeight"/>
      <gallery-image-list :imageFiles="imageFiles.slice(imageCount, imageCount*2)" :imageHeight="imageHeight"/>
    </div>
    <div class="gallery__third">
      <gallery-image-list :imageFiles="imageFiles.slice(imageCount*2, imageCount*3)" :imageHeight="imageHeight"/>
      <gallery-image-list :imageFiles="imageFiles.slice(imageCount*2, imageCount*3)" :imageHeight="imageHeight"/>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import GalleryImageList from '@/components/about/GalleryImageList.vue'
export default {
  components: {
    GalleryImageList
  },
  setup() {
    const store = useStore()
    const imageHeight = ref(0)
    const imageFiles = Array.from({length: 15}, (v, i) => `gallery${i+1}.jpeg`)
    const imageCount = ref(0)
    const isScrollable = computed(() => store.state.isScrollable)

    onMounted(() => {
      const windowHeight = window.outerHeight
      imageHeight.value = windowHeight / 3

      const windowSize = window.innerWidth
      imageCount.value = windowSize <= 767 ? 3 : 5 // スマホの場合は読み込む画像の数を少なくする

      setTimeout(() => {
        document.querySelectorAll('.lazy-load').forEach(el => {
          el.src = el.getAttribute('data-src')
        })
        store.commit('activateScrolling')
      }, 1000)
    })

    return { imageHeight, imageFiles, imageCount, isScrollable }
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