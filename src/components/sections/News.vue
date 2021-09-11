<template>
  <div class="news">
    <section-base
      :isWrapperFull="false"
      title="news"
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
          <div class="news-twitter">
            Twitter
          </div>
        </div>
      </template>
    </section-base>
  </div>
</template>

<script>
import SectionBase from '@/components/common/SectionBase.vue'
import NewsItem from '@/components/news/NewsItem.vue'
export default {  
  components: { 
    SectionBase,
    NewsItem
  },
  setup() {
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

    return { newsList }
  }
}
</script>

<style scoped lang='scss'>
.news {
  text-align: center;

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
  }
}
</style>