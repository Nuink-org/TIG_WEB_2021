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
    const contentDescriptions = [
      "「ダンスとプロジェクションマッピングの融合」をコンセプトに、筑波大学クリエイティブ集団 TParty と共に映像作品を作り上げました。繊細なプロジェクションマッピングやオーディオビジュアルは必見です。", 
      "企画はNu ink.・制作はTPartyが担い、企画段階を含めると制作に5か月ほど要しました。新型コロナウイルス感染拡大の影響により、撮影延期なども余儀なくされましたが、無事に完成しました。", 
      "映像の美しさだけでなく、臨場感や込められたメッセージにも注目です。"
    ]    
    
    return { videoSrc, contentGenre, contentTitle, contentDescriptions }
  }
}
</script>