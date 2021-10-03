<template>
  <div class="news-item">
    <div class="news-item__date">
      <div class="news-item__dateText">
        {{ date }}
      </div>
    </div>
    <div class="news-item__content">
      <div class="news-item__contentText">
        {{ content }}
      </div>
    </div>
  </div>   
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.news-item {
  font-size: $font-size-section-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
  line-height: 2rem;
  @include respond(phone) {
    line-height: 1.4rem;
    font-size: 0.95em;
  }
  &__date {
    width: 10rem;
  }
  &__content {
    width: 100%;
  }
  & + & {
    margin-top: 1.23rem;
  }
}
</style>