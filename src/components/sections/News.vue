<template>
  <section-base
    :isWrapperFull="false"
    class="news"
  >
    <template #content>
      <div class="news-title">
        NEWS
      </div>
      <div class="news-content">
        <div class="news-list">
          <news-item v-for="news in newsList"
            :key="news.content"
            :date="news.date"
            :content="news.content"
          />
        </div>
        <div class="news-twitter" v-if="isTweetLoaded">
          <div class="news-twitter__wrapper">
            <blockquote >
              <a 
                class="twitter-timeline"
                data-width="400"
                data-height="700"
                data-theme="light"
                :href="tweetSrc">
                  Tweets by NuinkTSUKUBA
              </a> 
            </blockquote>
          </div>
        </div>
      </div>
    </template>
  </section-base>
</template>

<script>
import { onMounted, ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import SectionBase from '@/components/common/SectionBase.vue'
import NewsItem from '@/components/news/NewsItem.vue'
import { gsap, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin)
export default {  
  components: { 
    SectionBase,
    NewsItem
  },
  setup() {
    const store = useStore()
    const isResponsive = computed(() => store.state.isResponsiveTablet)
    const isTweetLoaded = ref(false)
    const tweetSrc = 'https://twitter.com/NuinkTSUKUBA?ref_src=twsrc%5Etfw'
    const newsList = [
      {
        date: '2021.10.24',
        content: 'TSUKUBA INNOVATION GALLERYのwebサイトを公開しました。'
      },
      {
        date: '2021.10.24',
        content: '企画「知識人と歩く筑波大学」を公開しました。'
      }
    ]

    const setupTwitter = () => {
      // scriptタグを生成
      // tweet埋め込むために必要
      // vue-tweet-embedを使いたかったが、Vueのバージョンの違いから上手くいかなかった
      const twitterScript = document.createElement('script')
      twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      twitterScript.setAttribute('async', 'true')
      document.head.appendChild(twitterScript)
      isTweetLoaded.value = true
    }

    const setAnimation = () => {
      gsap.from('.news-title', {
        scrollTrigger: {
          trigger: '.news',
          start: 'top center'
        },
        ease: 'ease-in',
        duration: 1.68,
        opacity: 0,
      })
      gsap.from(CSSRulePlugin.getRule('.news-title::before'), {
        scrollTrigger: {
          trigger: '.news',
          start: 'top center'
        },
        ease: Power2.easeInOut,
        opacity: 0,
        transform: 'translate(-100%, 0%)',
        duration: 1.618,
        delay: 0.18
      })
      gsap.from('.news-item', {
        scrollTrigger: {
          trigger: '.news',
          start: 'top center'
        },
        ease: 'ease-out',
        duration: 1.68,
        opacity: 0,
        stagger: 0.618,
        delay: 1
      })
      const newsTwitterDealy = isResponsive.value ? 1 + newsList.length : 1
      gsap.from('.news-twitter', {
        scrollTrigger: {
          trigger: '.news',
          start: 'top center'
        },
        ease: 'ease-out',
        duration: 1.68,
        opacity: 0,
        delay: newsTwitterDealy
      })
    }

    watch(
      isTweetLoaded, 
      (newIsTweetLoaded, oldIsTweetLoaded) => {
      if (newIsTweetLoaded && !oldIsTweetLoaded) {
        setTimeout(() => {
          setAnimation()
        }, 1000)
      }
    })

    onMounted(() => {
      setupTwitter()
    })

    return { isTweetLoaded, newsList, tweetSrc }
  }
}
</script>

<style lang='scss'>
.news {
  &-title {
    text-align: center;
    opacity: 1;
    display: inline-block;
    font-family: $font-family-standard;
    font-size: $font-size-section-header;
    font-weight: bold;
    margin-bottom: $margin-section-header-bottom;
    position: relative;
    &::before {
      content: "";
      opacity: 1;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(0%, 0%);
      border-bottom: 2px solid #fff;
    }
  }
  &-content {
    display: flex;
    justify-content: flex-end;
    @include respond(tablet) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  &-list {
    width: 60%;
  }
  &-twitter {
    width: 40%;
    opacity: 1;
    @include respond(tablet) {
      margin: 1.23rem auto 0;
    }
    &__wrapper {
      width: 80%;
      margin: 0 auto;
      @include respond(tablet) {
        display: flex;
        margin: 0;
        width: 100%;
        justify-content: center;
        align-items: center;
      }
    }
  }
  &-list, &-twitter {
    @include respond(tablet) {
      width: 100%;
      max-width: 550px;
    }
  }
}
</style>
