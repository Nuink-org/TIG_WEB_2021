<template>
  <section-base
    :isLateReveal="true"
    :isWrapperFull="true"
    class="concept"
  >
    <template #content>
      <div class="concept-title">
        New Normal
      </div>
      <div class="concept-subTitle">
        ～新たなありかたの模索～
      </div>
      <div class="concept-sentence">
        コロナ禍において<br>
        不要不急と切り捨てられてきた<br>
        エンタメや文化・芸術が<br>
        新しい日常においてどうあるべきかを<br>
        テクノロジーの視点から<br>
        見つめ直し、想像し、<br>
        体験できる場を創出する
      </div>
    </template>
  </section-base>
</template>

<script>
import SectionBase from '../common/SectionBase.vue'
export default {
  components: { 
    SectionBase 
  },
}
</script>

<style scoped lang='scss'>
.concept {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-title {
    font-family: $font-family-standard;
    font-size: $font-size-concept-title;
    font-weight: bold;
  }
  &-subTitle {
    font-size: $font-size-concept-subTitle;
  }
  &-sentence {
    margin-top: 2rem;
    line-height: 3rem;
  }
}
</style>