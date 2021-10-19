<template>
  <div id="projection-mapping-page">
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
    const contentGenre = "Projection Mapping"
    const contentTitle = "プロジェクションマッピング"
    const contentDescriptions = ["プロジェクションマッピングとストリートダンスの融合、その美しさをお伝えします。映像コンテンツでは味わいにくい臨場感を大切にしながら、私たちの思いも詰め込みました。唯一無二の作品となっておりますので、ぜひお楽しみください。"]
    
    return { videoSrc, contentGenre, contentTitle, contentDescriptions }
  }
}
</script>