<template>
  <section-base
    :isWrapperFull="isResponsivePhone || false"
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
import { computed } from 'vue'
import { useStore } from 'vuex'
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
    const store = useStore()
    const isResponsivePhone = computed(() => store.state.isResponsivePhone)
    const contents = [
      {
        titleEN: "Behind the Scenes",
        titleJP: "新しい学校のリーダーズfeat. Nu ink.",
        description: "10/10に行われたイノフェスでのオープニングアクトの裏側を大公開！新しい学校のリーダーズの本番前の様子やライブを終えてのインタビュー、そしてNu ink.と映像制作メンバーの対談も収録されています！ぜひご覧ください",
        pageName: 'BehindTheScenes',
        collaborators: [],
        isReleased: false,
        imageName: '',
      },
      {
        titleEN: "Web Interaction",
        titleJP: "知識人と歩く筑波大学",
        description: "持っている知識によって同じ景色も違って見える。筑波大学の教員はどのような視点から日常を見ているのだろうか。様々な知識人と共に筑波大学を歩くことで、新たな日常の見方を発見しよう！あなたならではの視点も募集中！",
        aTagLink: 'https://nuink.github.io/TisikijinWEB/',
        collaborators: [],
        isReleased: true,
        imageName: 'tisikizin_thumbnail.png',
      },
      {
        titleEN: "Music Experiment",
        titleJP: "人工知能と音楽　New Normalな音楽のあり方",
        description: "人工知能を用いて楽曲を制作する自動作曲技術の紹介、実演を行う。情報技術によって創作が身近なものとなっていることを体感できる内容になっている。本イベントのコンセプト「New Normal」のもと新時代の音楽のあり方を紐解く!",
        pageName: 'MusicExperiment',
        collaborators: [],
        isReleased: false,
        imageName: '',
      },
      {
        titleEN: "Radio",
        titleJP: "ラジオ",
        description: "今年度のオリンピックの総括も踏まえ、これからのオリンピックやスポーツ文化がどうあるべきかについて議論する。eスポーツの専門家に加えて、プロeスポーツ選手が一同を介す事で他に見ることのできない議論に注目!",
        pageName: 'Radio',
        collaborators: [
          "ヨビノリたくみ (教育系YouTuber)"
        ],
        isReleased: false,
        imageName: '',
      },
      {
        titleEN: "Projection Mapping",
        titleJP: "プロジェクションマッピング",
        description: "プロジェクションマッピングとストリートダンスの融合、その美しさをお伝えします。映像コンテンツでは味わいにくい臨場感を大切にしながら、私たちの思いも詰め込みました。唯一無二の作品となっておりますので、ぜひお楽しみください。",
        pageName: 'ProjectionMapping',
        collaborators: [
          "TParty （筑波大学生により構成されるDigital Creative集団）",
          "土佐凛斗（筑波大学ダンスサークルRealjam）"
        ],
        isReleased: false,
        imageName: '',
      },
      {
        titleEN: "Talk Session",
        titleJP: "eスポーツから考えるこれからのスポーツの在り方",
        description: "今年度のオリンピックの総括も踏まえ、これからのオリンピックやスポーツ文化がどうあるべきかについて議論する。eスポーツの専門家に加えて、プロeスポーツ選手が一同を介す事で他に見ることのできない議論に注目!",
        pageName: 'TalkSession',
        collaborators: [
          "山口 香 (筑波大学体育系教授)",
          "松井 崇 (筑波大学体育系助教)",
          "渡辺 謙 (早稲田大学 客員研究員)",
          "すいのこ (プロゲーマー兼ライター)"
        ],
        isReleased: false,
        imageName: '',
      }
    ]

    return { isResponsivePhone, contents}
  }
}
</script>

<style scoped lang="scss">
.contents {
  background: linear-gradient(217deg, #019fe8ff, #019fe822 61.8%),
              linear-gradient(127deg, #fff000ff, #fff00022 61.8%),
              linear-gradient(53deg, #e2007eff, #e2007e22 61.8%),
              linear-gradient(240deg, #eeeeeeff, #eeeeee22 61.8%);
  background-color: #fff;
  overflow: hidden;
}
.content-list {
  margin-top: 4rem;
}
</style>