<template>
  <div class="content-pageTemplate">
    <div class="content-pageTemplate__top" ref="templateTop">
      <iframe
        :style="{height: `${iframeHeight}px`}"
        :src="videoSrc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      />
    </div>
    <div class="content-pageTemplate__body">
      <div class="content-pageTemplate__contentGenre">
        {{ contentGenre }}
      </div>
      <div class="content-pageTemplate__contentTitle">
        {{ contentTitle }}
      </div>
      <div class="content-pageTemplate__contentDescriptions">
        <div
          class="content-pageTemplate__contentDescription"
          v-for="(description, idx) in contentDescriptions"
          :key="idx"
        >
          {{ description }}
        </div>
      </div>
      <slot name="body" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  props: {
    videoSrc: {
      type: String,
      required: true,
    },
    contentGenre: {
      type: String,
      required: true,
    },
    contentTitle: {
      type: String,
      required: true
    },
    contentDescriptions: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const templateTop = ref(null)
    const iframeHeight = ref(0)

    onMounted(() => {
      const topWidth = templateTop.value.offsetWidth
      iframeHeight.value = topWidth * 9 / 16  
    })

    return { templateTop, iframeHeight }
  }
}
</script>

<style scoped lang="scss">
.content-pageTemplate {
  &__top {
    padding: 0;
    iframe {
      vertical-align: bottom;
      width: 100%;
    }
  }
  &__body {
    color: #fff;
    margin-top: 4.32rem;
    width: 100%;
    font-family: $font-family-jp;
  }
  &__contentGenre {
    color: #000;
    background-color: #fff;
    padding: 0 0.5rem;
    display: inline-block;
    font-size: $font-size-content-genre;
  }
  &__contentTitle {
    font-size: $font-size-content-page-title;
  }
  &__contentDescriptions {
    color: #cecece;
    font-size: $font-size-content-description;
    margin-top: 2.67rem;
  }
  &__contentDescription {
    line-height: 1.85rem;
    & + & {
      margin-top: 1.65rem;
    }
  }
}
</style>