<template>
  <div id="music-experiment-page">
    <content-page-template
      :videoSrc="videoSrc"
      :contentGenre="contentGenre"
      :contentTitle="contentTitle"
      :contentDescriptions="contentDescriptions"
      :isOurs="true"
      :announceSentences="announceSentences"
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
    const videoSrc = ""
    const contentGenre = "Music Experiment"
    const contentTitle = "人工知能と音楽 New Normalな音楽のあり方"
    const contentDescriptions = [
      "“あの世界的アーティストの新曲を人工知能で生成?!”",
      "近年話題の人工知能の紹介、Open AI Jukeboxを用いた自動作曲のプログラムの実行の様子、生成された曲を披露します。作詞はNu ink.１年生2人が担当、プログラム実行はNu ink.2年生1人が担当しました。そして、完成した曲はあの世界的アーティストの声で再現されます。",
      "音楽に興味ある方、プログラミングに興味ある方、是非お楽しみください。"
    ]
    const announceSentences = [
      "※作品はイベント終了後もアーカイブとして",
      "期間を限り閲覧可能にする予定です。"
    ]
    
    return { videoSrc, contentGenre, contentTitle, contentDescriptions, announceSentences }
  }
}
</script>