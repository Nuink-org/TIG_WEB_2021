<template>
  <div id="music-experiment-page">
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
    const contentGenre = "Music Experiment"
    const contentTitle = "人工知能と音楽　New Normalな音楽のあり方"
    const contentDescriptions = ["人工知能を用いて楽曲を制作する自動作曲技術の紹介、実演を行う。情報技術によって創作が身近なものとなっていることを体感できる内容になっている。本イベントのコンセプト「New Normal」のもと新時代の音楽のあり方を紐解く!"]
    
    return { videoSrc, contentGenre, contentTitle, contentDescriptions }
  }
}
</script>