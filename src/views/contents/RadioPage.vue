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
    const contentTitle = "学生からの手紙"
    const contentDescriptions = [
      "コロナ禍で大きく形を変えた教育。対面授業とオンライン授業、それぞれにメリットやデメリットがある中で、これからの授業はどうなっていくのか。私たちに身近な存在である教育からイノベーションについて考えるべく、授業をテーマに学生から「手紙」を募集しました。", 
      "企画スタートから3ヶ月、zoomで学生からの質問に答えてくださったのは、 Youtubeで数学・物理の解説動画を配信されているヨビノリたくみさん。大学での勉強方法、授業の作り方、未来の教育についてなど、幅広くお話しいただきました！"
    ]
    
    return { videoSrc, contentGenre, contentTitle, contentDescriptions }
  }
}
</script>