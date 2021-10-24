<template>
  <div id="projection-mapping-page">
    <content-page-template
      :videoSrc="videoSrc"
      :contentGenre="contentGenre"
      :contentTitle="contentTitle"
      :contentDescriptions="contentDescriptions"
    >
      <template #body>
        <collaboration-list :collaborators="collaborators" />
      </template>
    </content-page-template>
  </div>
</template>

<script>
import ContentPageTemplate from '@/components/template/ContentPageTemplate.vue'
import CollaborationList from '@/components/contents/CollaborationList.vue'
export default {
  components: {
    ContentPageTemplate,
    CollaborationList
  },
  setup() {
    const videoSrc = ""
    const contentGenre = "Projection Mapping"
    const contentTitle = "筑波大生による映像作品「シブキ」"
    const contentDescriptions = [
      "「ダンスとプロジェクションマッピングの融合」をコンセプトに、筑波大学クリエイティブ集団 TParty と共に映像作品を作り上げました。繊細なプロジェクションマッピングやオーディオビジュアルは必見です。", 
      "企画はNu ink.・制作はTPartyが担い、企画段階を含めると制作に5か月ほど要しました。新型コロナウイルス感染拡大の影響により、撮影延期なども余儀なくされましたが、無事に完成しました。", 
      "映像の美しさだけでなく、臨場感や込められたメッセージにも注目です。"
    ]
    const collaborators = [{
      imageSize: 120,
      imageName: 'tparty-logo.png',
      link: 'https://twitter.com/tparty_tsukuba',
      name: 'TParty',
      sentence: 'テクノロジーを中心にオーディオビジュアル、バイオアート、メディアアート、デザインなど様々な領域で制作活動を行う筑波大学生が集まる団体',
      isTParty: true
    }]
    
    return { videoSrc, contentGenre, contentTitle, contentDescriptions, collaborators }
  }
}
</script>
