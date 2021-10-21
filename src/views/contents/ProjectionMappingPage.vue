<template>
  <div id="projection-mapping-page">
    <content-page-template
      :videoSrc="videoSrc"
      :contentGenre="contentGenre"
      :contentTitle="contentTitle"
      :contentDescriptions="contentDescriptions"
    >
      <template #body>
        <div class="projection-mapping__collaboration">
          <div class="projection-mapping__collaboration-tparty">
            <div class="projection-mapping__collaboration-tpartyLogo">
              <img src="@/assets/images/tparty-logo.png">
            </div>
            <div class="projection-mapping__collaboration-tpartyDescription">
              <div class="projection-mapping__collaboration-tpartyDescription-title">
                <a href="https://twitter.com/tparty_tsukuba">TParty</a>
              </div>
              <div class="projection-mapping__collaboration-tpartyDescription-sentence">
                テクノロジーを中心にオーディオビジュアル、バイオアート、メディアアート、デザインなど様々な領域で制作活動を行う筑波大学生が集まる団体
              </div>
            </div>
          </div>
        </div>
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

<style lang="scss" scoped>
.projection-mapping__collaboration {
  margin-top: 4.32rem;
  border-top: 1px solid #888;
  &-tparty {
    padding-top: 2.67rem;
    display: flex;
    justify-content: flex-start;
    &Logo {
      width: 120px;
      img {
        width: 100%;
        height: auto;
      }
    }
    &Description {
      color: #cecece;
      width: 100%;
      margin: 1.618rem 0 1.618rem 1.618rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &-title {
        font-size: 16px;
        a {
          color: #cecece;
          text-decoration: none;
        }
      }
      &-sentence {
        font-size: 14px;
      }
    }
  }
}
</style>
