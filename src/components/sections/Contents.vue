<template>
  <section-base
    :isLateReveal="true"
    :isWrapperFull="false"
    title="contents"
    class="contents"
  >
    <template #content>
      <contents-overview />
      <content-list 
        :contents="contents"
      />
    </template>
  </section-base>
</template>

<script>
import SectionBase from '@/components/common/SectionBase.vue'
import ContentsOverview from '@/components/contents/ContentsOverview.vue'
import ContentList from '@/components/contents/ContentList.vue'
export default {
  components: {
    SectionBase,
    ContentsOverview,
    ContentList
  },
  setup() {
    const contents = [
      {
        title: "Strolling in Tsukuba Univ. with Intellectuals",
        description: "持っている知識によって同じ景色も違って見える。筑波大学の教員はどのような視点から日常を見ているのだろうか。様々な知識人と共に筑波大学を歩くことで、新たな日常の見方を発見しよう！あなたならではの視点も募集中！",
        collaborators: [],
        isReleased: true,
        url: 'https://mimunojun.github.io/0808web/',
        imageName: 'tishiki_thumbnail.png',
      },
      {
        title: "Music Experiment",
        description: "人工知能を用いて楽曲を制作する自動作曲技術の紹介、実演を行う。情報技術によって創作が身近なものとなっていることを体感できる内容になっている。本イベントのコンセプト「New Normal」のもと新時代の音楽のあり方を紐解く!",
        collaborators: [],
        isReleased: false,
        url: '',
        imageName: '',
      },
      {
        title: "Radio",
        description: "今年度のオリンピックの総括も踏まえ、これからのオリンピックやスポーツ文化がどうあるべきかについて議論する。eスポーツの専門家に加えて、プロeスポーツ選手が一同を介す事で他に見ることのできない議論に注目!",
        collaborators: [
          "ヨビノリたくみ (教育系YouTuber)"
        ],
        isReleased: false,
        url: '',
        imageName: '',
      },
      {
        title: "Projection Mapping",
        description: "プロジェクションマッピングとストリートダンスの融合、その美しさをお伝えします。映像コンテンツでは味わいにくい臨場感を大切にしながら、私たちの思いも詰め込みました。唯一無二の作品となっておりますので、ぜひお楽しみください。",
        collaborators: [
          "TParty (筑波大学生により構成されるDigital Creative集団)",
          "土佐凛斗（筑波大学ダンスサークルRealjam）"
        ],
        isReleased: false,
        url: '',
        imageName: '',
      },
      {
        title: "Talk Session",
        description: "今年度のオリンピックの総括も踏まえ、これからのオリンピックやスポーツ文化がどうあるべきかについて議論する。eスポーツの専門家に加えて、プロeスポーツ選手が一同を介す事で他に見ることのできない議論に注目!",
        collaborators: [
          "山口 香 (筑波大学体育系教授)",
          "松井 崇 (筑波大学体育系助教)",
          "渡辺 謙 (早稲田大学 客員研究員)",
          "すいのこ (プロゲーマー兼ライター)"
        ],
        isReleased: false,
        url: '',
        imageName: '',
      }
    ]

    return { contents }
  }
}
</script>

<style scoped lang="scss">
.content-list {
  margin-top: 4rem;
}
</style>