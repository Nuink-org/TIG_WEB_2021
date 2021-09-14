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
        <div class="news-twitter" v-if="tweetLoaded">
          <div class="news-twitter__wrapper">
            <blockquote class="twitter-tweet">
              <p lang="ja" dir="ltr">
                【告知】<br>
                Nu ink.では、今秋11月5〜7日にイベント、TSUKUBA INNOVATION GALLERY (TIG) を開催する運びとなりました！<br>
                筑波大学の先生方をはじめ、多数のプロフェッショナルの協力のもとで、トークセッションやラジオ企画、音楽を使った実験など、他にも多くの企画を予定しております。 
                <a href="https://t.co/bUhwkVkvMJ">pic.twitter.com/bUhwkVkvMJ</a>
              </p>
                &mdash; Nu ink. @筑波大学 (@NuinkTSUKUBA) <a href="https://twitter.com/NuinkTSUKUBA/status/1422754169006419970?ref_src=twsrc%5Etfw">August 4, 2021</a>
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
    const tweetLoaded = ref(false)
    onMounted(() => {
      // scriptタグを生成
      // tweet埋め込むために必要
      // vue-tweet-embedを使いたかったが、Vueのバージョンの違いから上手くいかなかった
      const twitterScript = document.createElement('script')
      twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      twitterScript.setAttribute('async', 'true')
      document.head.appendChild(twitterScript)
      tweetLoaded.value = true
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

    return { tweetLoaded, newsList }
  }
}
</script>

<style scoped lang='scss'>
.news {
  &-content {
    display: flex;
    justify-content: flex-end;
  }
  &-list {
    width: 60%;
    // background-color: yellow;
  }
  &-twitter {
    width: 40%;
    &__wrapper {
      width: 80%;
      margin: 0 auto;
    }
  }
}
</style>