<template>
  <div id="talk-session-page">
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
    const contentGenre = "Talk Session"
    const contentTitle = "eスポーツから考えるこれからのスポーツの在り方"
    const contentDescriptions = ["今年度のオリンピックの総括も踏まえ、これからのオリンピックやスポーツ文化がどうあるべきかについて議論する。eスポーツの専門家に加えて、プロeスポーツ選手が一同を介す事で他に見ることのできない議論に注目!"]
    
    return { videoSrc, contentGenre, contentTitle, contentDescriptions }
  }
}
</script>