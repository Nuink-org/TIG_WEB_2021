<template>
  <div id="behind-the-scenes-page">
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
    const contentGenre = "Behind The Scenes"
    const contentTitle = "新しい学校のリーダーズ feat. Nu ink."
    const contentDescriptions = ["10/10に行われたイノフェスでのオープニングアクトの裏側を大公開！新しい学校のリーダーズの本番前の様子やライブを終えてのインタビュー、そしてNu ink.と映像制作メンバーの対談も収録されています！ぜひご覧ください"]
    
    return { videoSrc, contentGenre, contentTitle, contentDescriptions }
  }
}
</script>