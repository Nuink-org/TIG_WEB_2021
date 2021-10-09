<template>
  <section-base
    :isWrapperFull="false"
    title="news"
    class="news"
  >
    <template #content>
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
import { onMounted, ref } from 'vue'
import SectionBase from '@/components/common/SectionBase.vue'
import NewsItem from '@/components/news/NewsItem.vue'
export default {  
  components: { 
    SectionBase,
    NewsItem
  },
  setup() {
    const isTweetLoaded = ref(false)
    const tweetSrc = 'https://twitter.com/NuinkTSUKUBA?ref_src=twsrc%5Etfw'
    onMounted(() => {
      // scriptタグを生成
      // tweet埋め込むために必要
      // vue-tweet-embedを使いたかったが、Vueのバージョンの違いから上手くいかなかった
      const twitterScript = document.createElement('script')
      twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      twitterScript.setAttribute('async', 'true')
      document.head.appendChild(twitterScript)
      isTweetLoaded.value = true
    })

    const newsList = [
      {
        date: '2021.10.24',
        content: 'Tsukuba Innovation Galleryのwebサイトを公開しました。'
      },
      {
        date: '2021.10.24',
        content: '企画「知識人と歩く筑波大学」を公開しました。'
      }
    ]

    return { isTweetLoaded, newsList, tweetSrc }
  }
}
</script>

<style scoped lang='scss'>
.news {
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
