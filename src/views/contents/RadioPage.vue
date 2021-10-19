<template>
  <div id="radio-page">
    <content-page-template
      :videoSrc="videoSrc"
      :contentGenre="contentGenre"
      :contentTitle="contentTitle"
      :contentDescriptions="contentDescriptions"
    >
      <template #body>
      </template>
    </content-page-template>
  </div>
</template>

<script>
import ContentPageTemplate from '@/components/template/ContentPageTemplate.vue'
export default {
  components: {
    ContentPageTemplate
  },
  setup() {
    const videoSrc = "https://www.youtube.com/embed/q48xVf-AbmA"
    const contentGenre = "Radio"
    const contentTitle = "ラジオ"
    const contentDescriptions = [""]
    
    return { videoSrc, contentGenre, contentTitle, contentDescriptions }
  }
}
</script>