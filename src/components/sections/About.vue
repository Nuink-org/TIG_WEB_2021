<template>
  <section-base
    :isWrapperFull="false"
    :isRight="true"
    bgImageName="about.jpeg"
    class="about"
  >
    <template #content>
      <div class="about-title">
        About
      </div>
      <div class="about-sentence">
        <div v-for="sentence in sentences"
          :key="sentence"
          class="about-paragraph"
        >
          {{ sentence }}
        </div>
      </div>
    </template>
  </section-base>
</template>

<script>
import SectionBase from '@/components/common/SectionBase.vue'
export default {
  components: {
    SectionBase
  },
  setup() {
    const sentences = [
      'Innovation World Festa (通称イノフェス)は筑波大学とラジオ局J-WAVEが主催する、テクノロジーと音楽のクリエイティブフェスです。',
      '例年は J-WAVE と共催していましたが今年はNu ink.単独で、イノフェスのサテライトイベントとして「Tsukuba Innovation Gallery」を開催します。'
    ]

    return { sentences }
  }
}
</script>

<style scoped lang='scss'>
.about {
  height: 100%;
  &-title {
    display: inline-block;
    font-family: $font-family-standard;
    font-size: $font-size-section-header;
    border-bottom: 2px solid #fff;
    font-weight: bold;
    margin-top: 14rem;
  }
  &-sentence {
    margin-top: 3rem;
    text-align: left;
    line-height: $sentence-height;
  }
  &-paragraph + &-paragraph {
    margin-top: $margin-paragraph;
  }
}
</style>