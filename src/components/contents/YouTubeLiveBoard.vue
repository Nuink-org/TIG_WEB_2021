<template>
  <div class="youtube-liveBoard" v-if="isLivePublished">
    <div class="youtube-liveBoard__wrapper" ref="liveBoard">
      <iframe
        :style="{height: `${iframeHeight}px`}"
        :src="videoSrc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      />
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const videoSrc = "https://www.youtube.com/embed/PSgG9dCOAbQ"
    const liveBoard = ref(null)
    const iframeHeight = ref(0)
    const isLivePublished = computed(() => store.state.timeDiff <= 0)

    const calculateIframeHeight = () => {
      const topWidth = liveBoard.value.offsetWidth
      iframeHeight.value = topWidth * 9 / 16
    }

    watch(isLivePublished, () => {
      setTimeout(calculateIframeHeight, 1000)
    })

    onMounted(() => {
      if (isLivePublished.value) {
        calculateIframeHeight()
      }
    })

    return { videoSrc, liveBoard, iframeHeight, isLivePublished }
  }
}
</script>

<style lang="scss" scoped>
.youtube-liveBoard {
  opacity: 1;
  color: #000;
  background-color: #fffe;
  width: 100%;
  margin: 3rem 0;
  text-align: center;
  position: relative;
  @include respond(phone) {
    width: 90%;
    margin: 3rem auto;
  }
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%; 
  }
  &__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    iframe {
      vertical-align: bottom;
      width: 100%;
    }
  }
  
}
</style>