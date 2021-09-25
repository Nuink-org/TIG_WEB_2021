<template>
  <section-base
    :isWrapperFull="false"
    :isRight="true"
    title="about"
    class="about"
    :style="imgPadding"
  >
    <template #content>
      <div class="about-image">
        <img src="@/assets/images/about.jpeg" ref="imageRef">
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
import { computed, onMounted, ref } from 'vue'
import SectionBase from '@/components/common/SectionBase.vue'
export default {
  components: {
    SectionBase
  },
  setup() {
    const imageRef = ref(null)
    const imageHeight = ref(0)

    onMounted(() => {
      // 画像が読み込まれた後に高さを測る
      imageRef.value.addEventListener('load', () => {
        imageHeight.value = imageRef.value.clientHeight
      })
    })

    const imgPadding = computed(() => {
      // 画像の位置をabsoluteで指定しているため、余分にpadding-bottomする必要がある
      const paddingAmount = imageHeight.value * 0.382 
      return {'padding-bottom': paddingAmount.toString() + 'px'}
    })

    const sentences = [
      'Innovation World Festa (通称イノフェス)は筑波大学とラジオ局J-WAVEが主催する、テクノロジーと音楽のクリエイティブフェスです。',
      '例年は J-WAVE と共催していましたが今年はNu ink.単独で、イノフェスのサテライトイベントとして「Tsukuba Innovation Gallery」を開催します。'
    ]

    return { imageRef, imgPadding, sentences }
  }
}
</script>

<style scoped lang='scss'>
.about {
  margin-left: auto;
  position: relative;
  &-image {
    width: 1000px;
    position: absolute;
    top: -80px;
    left: -200px;
    z-index: $layer-about-image;

    img {
      width: 100%;
      height: auto;
    }
  }
  &-sentence {
    // margin-top: 4rem;
    text-align: left;
    line-height: $sentence-height;
  }
  &-paragraph + &-paragraph {
    margin-top: 3rem;
  }
}
</style>