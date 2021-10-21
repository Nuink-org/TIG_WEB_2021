<template>
  <div id="radio-page">
    <content-page-template
      :videoSrc="videoSrc"
      :contentGenre="contentGenre"
      :contentTitle="contentTitle"
      :contentDescriptions="contentDescriptions"
    >
      <template #body>
        <div class="radio__collaboration">
          <div class="radio__collaboration-yobinori">
            <div class="radio__collaboration-yobinoriProfile yobinori">
              <img src="@/assets/images/yobinori.jpg">
            </div>
            <div class="radio__collaboration-yobinoriDescription">
              <div class="radio__collaboration-yobinoriDescription-title">
                <a href="https://www.youtube.com/c/yobinori/featured">ヨビノリ</a>
              </div>
              <div class="radio__collaboration-yobinoriDescription-sentence">
                予備校のノリで学ぶ「大学の数学・物理」のチャンネルでは大学講座（大学レベルの理系科目）と高校講座（受験レベルの理系科目）の授業動画をアップしており、他にも理系の高校生・大学生に向けた情報提供を行っています。
              </div>
            </div>
          </div>
          <div class="radio__collaboration-yobinori">
            <div class="radio__collaboration-yobinoriProfile">
              <img src="@/assets/images/yobinori_takumi.jpg">
            </div>
            <div class="radio__collaboration-yobinoriDescription">
              <div class="radio__collaboration-yobinoriDescription-title">
                <a href="https://twitter.com/Yobinori?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">ヨビノリたくみ</a>
              </div>
              <div class="radio__collaboration-yobinoriDescription-sentence">
                ヨビノリの顔。東京大学大学院卒業。博士課程進学とともに6年続けた予備校講師をやめ、科学のアウトリーチ活動の一環としてYouTubeチャンネル「ヨビノリ」の創設を決意。学生時代は理論物理学を専攻しており、学部では「物理化学」を、大学院では「生物物理」を研究。
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
    const contentGenre = "Radio"
    const contentTitle = "学生からの手紙"
    const contentDescriptions = [
      "コロナ禍で大きく形を変えた教育。対面授業とオンライン授業、それぞれにメリットやデメリットがある中で、これからの授業はどうなっていくのか。私たちに身近な存在である教育からイノベーションについて考えるべく、授業をテーマに学生から「手紙」を募集しました。", 
      "企画スタートから3ヶ月、zoomで学生からの質問に答えてくださったのは、 Youtubeで数学・物理の解説動画を配信されているヨビノリたくみさん。大学での勉強方法、授業の作り方、未来の教育についてなど、幅広くお話しいただきました！"
    ]
    
    return { videoSrc, contentGenre, contentTitle, contentDescriptions }
  }
}
</script>

<style lang="scss" scoped>
.radio__collaboration {
  margin-top: 4.32rem;
  border-top: 1px solid #888;
  &-yobinori {
    padding-top: 2.67rem;
    display: flex;
    justify-content: flex-start;
    &Profile {
      width: 120px;
      img {
        width: 100%;
        height: auto;
      }
    }
    &Description {
      color: #cecece;
      width: 100%;
      margin-left: 1.618rem;
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
  .yobinori {
    img {
      border-radius: 50%;
    }
  }
}
</style>
