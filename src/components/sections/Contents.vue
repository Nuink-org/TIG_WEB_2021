<template>
  <section-base
    :isWrapperFull="isResponsivePhone || false"
    class="contents"
  >
    <template #content>
      <div class="contents-title">
        CONTENTS
      </div>
      <contents-overview />
      <you-tube-live-board />
      <content-list
        :contents="contents"
      />
    </template>
  </section-base>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import SectionBase from '@/components/common/SectionBase.vue'
import YouTubeLiveBoard from '@/components/contents/YouTubeLiveBoard.vue'
import ContentsOverview from '@/components/contents/ContentsOverview.vue'
import ContentList from '@/components/contents/ContentList.vue'
import { gsap, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin)
export default {
  components: {
    SectionBase,
    YouTubeLiveBoard,
    ContentsOverview,
    ContentList
  },
  setup() {
    const store = useStore()
    const isResponsivePhone = computed(() => store.state.isResponsivePhone)
    const isLivePublished = computed(() => store.state.timeDiff <= 0)
    const contents = [
      {
        titleEN: "Behind the Scenes",
        titleJP: "新しい学校のリーダーズ feat. Nu ink.",
        description: "10/10に行われたイノフェスでのオープニングアクトの裏側を大公開！新しい学校のリーダーズの本番前の様子やライブを終えてのインタビュー、そしてNu ink.と映像制作メンバーの対談も収録されています。ぜひご覧ください！",
        pageName: 'BehindTheScenes',
        imageName: 'atarashi_gakko_thumbnail.jpg',
      },
      {
        titleEN: "Web Interaction",
        titleJP: "知識人と歩く筑波大学",
        description: "筑波大学の先生方は日常の景色を見て何を考えているのでしょうか？この企画では、実際に先生方から集めたモノの見方を、写真の中から探し出すことができます。筑波大学の貴重な昔の写真も見ることができるのでお楽しみに！",
        aTagLink: 'https://nuink.github.io/tsukuba_intellectual/',
        imageName: 'tisikizin_thumbnail.png',
      },
      {
        titleEN: "Music Experiment",
        titleJP: "人工知能と音楽 New Normalな音楽のあり方",
        description: "人工知能を用いて楽曲を制作する自動作曲技術の紹介、実演を行います。情報技術によって創作が身近なものとなっていることを体感できる内容に！本イベントのコンセプト「New Normal」のもと新時代の音楽のあり方を紐解きます!",
        pageName: 'MusicExperiment',
        imageName: 'music_experiment_thumbnail.jpg',
      },
      {
        titleEN: "Radio",
        titleJP: "学生からの手紙",
        description: "雙峰祭では、出張企画としてラジオ番組をお届け！パーソナリティにYouTuberのヨビノリたくみさんをお迎えし、学生の質問に答えて頂きました！「大学での効率的な勉強法は？」「講義はどこに注目して聴けばいい？」「未来の教育はどうなる？」などなど。気になる内容盛り沢山です！",
        pageName: 'Radio',
        imageName: 'radio_thumbnail.jpg',
      },
      {
        titleEN: "Projection Mapping",
        titleJP: "「シブキ」",
        description: " ダンスとプロジェクションマッピングの融合をコンセプトに、映像作品を作り上げました。映像の美しさはもちろん、オーディオビジュアルや眼前性、時代性など、見所盛りだくさんです！是非ご覧ください！",
        pageName: 'ProjectionMapping',
        imageName: 'projection_mapping_thumbnail1.png',
      },
      {
        titleEN: "Talk Session",
        titleJP: "eスポーツから考えるこれからのスポーツの在り方",
        description: "競技人口も増え、近年注目を集めるeスポーツ。今回はプロeスポーツ選手すいのこさんとeスポーツ研究者として筑波大学助教の松井先生、早稲田大学客員研究員の渡辺先生をお迎えして、eスポーツを起点にこれからのスポーツの在り方について議論します！",
        pageName: 'TalkSession',
        imageName: 'talksession_thumbnail.jpg',
      }
    ]

    const setAnimation = () => {
      gsap.from('.contents-title', {
        scrollTrigger: {
          trigger: '.contents',
          start: 'top center'
        },
        ease: 'ease-in',
        duration: 1.68,
        opacity: 0,
      })
      gsap.from(CSSRulePlugin.getRule('.contents-title::before'), {
        scrollTrigger: {
          trigger: '.contents',
          start: 'top center'
        },
        ease: Power2.easeOut,
        opacity: 0,
        transform: 'translate(-100%, 0%)',
        duration: 1.1,
        delay: 0.38
      })
      gsap.from('.contents-overview', {
        scrollTrigger: {
          trigger: '.contents',
          start: 'top center'
        },
        ease: 'ease-in',
        duration: 1.68,
        opacity: 0,
        delay: 1
      })
      if (isLivePublished.value) {
        gsap.from('.youtube-liveBoard', {
          scrollTrigger: {
            trigger: '.contents',
            start: 'top center'
          },
          ease: 'ease-in',
          duration: 1.68,
          opacity: 0,
          delay: 1
        })
      }
      for (let i = 0; i < contents.length; i++) {
        gsap.from(`.content-base__${i}`, {
            scrollTrigger: {
            trigger: `.content-base__${i}`,
            start: 'top center'
          },
          ease: 'ease-in',
          duration: 1.68,
          opacity: 0,
        })
      }
    }

    onMounted(() => {
      setTimeout(setAnimation, 1000)
    })

    return { isResponsivePhone, contents}
  }
}
</script>

<style lang="scss">
.contents {
  background: linear-gradient(217deg, #019fe8ff, #019fe822 61.8%),
              linear-gradient(127deg, #fff000ff, #fff00022 61.8%),
              linear-gradient(53deg, #e2007eff, #e2007e22 61.8%),
              linear-gradient(240deg, #eeeeeeff, #eeeeee22 61.8%);
  background-color: #fff;
  overflow: hidden;
  &-title {
    @include section-title;
  }
}
.content-list {
  margin-top: 4rem;
}
</style>