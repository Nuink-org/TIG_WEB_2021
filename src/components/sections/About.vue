<template>
  <section-base
    :isWrapperFull="true"
    class="about"
  >
    <template #content>
      <div class="about-description__bg" ref="descriptionBgRef">
        <div class="about-description">
          <div class="about-title" v-if="isBgShown">
            About
          </div>
          <div class="about-sentence" v-if="isBgShown">
            <div v-for="sentence in sentences"
              :key="sentence"
              class="about-paragraph"
            >
              {{ sentence }}
            </div>
          </div>
        </div>
      </div>
      <div class="about-gallery">
        <gallery />
      </div>
    </template>
  </section-base>
</template>

<script>
import { gsap, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { ref, onMounted } from 'vue'
import SectionBase from '@/components/common/SectionBase.vue'
import Gallery from '@/components/about/Gallery.vue'
export default {
  components: {
    SectionBase,
    Gallery
  },
  setup() {
    const isBgShown = ref(false)
    const descriptionBgRef = ref(0)
    const sentences = [
      'Innovation World Festa (通称イノフェス)は筑波大学とラジオ局J-WAVEが主催する、テクノロジーと音楽のクリエイティブフェスです。',
      '例年は J-WAVE と共催していましたが今年はNu ink.単独で、イノフェスのサテライトイベントとして「Tsukuba Innovation Gallery」を開催します。'
    ]

    const showBg = () => {
      isBgShown.value = true
    }

    const resizeDescriptionBgSize = () => {
      if (isBgShown.value === false) return
      const windowWidth = window.outerWidth
      descriptionBgRef.value.style.width = windowWidth * 0.618
    }

    onMounted(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.about-description__bg',
          start: 'top'
        },
      })
      tl.from('.about-description__bg', {
        width: '0px',
        ease: Power2.easeIn,
        duration: 0.618,
        onComplete: showBg
      })
      tl.from('.about-description', {
        opacity: 0,
        duration: 1.618,
        delay: 0.9,
      })
      window.addEventListener('resize', resizeDescriptionBgSize)
    })

    return { isBgShown, descriptionBgRef, sentences }
  }
}
</script>

<style scoped lang='scss'>
.about {
  background-color: #fff;
  padding: 0 !important;
  position: relative;
  &-description__bg {
    width: 61.8%;
    background-color: #ffffffdc;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: $layer-about;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include respond(phone) {
      left: 38.2%;
      right: 0%;
      transform: translate(0, -50%);
    }
  }
  &-description {
    width: 80%;
    opacity: 1;
  }
  &-title, &-sentence {
    color: #000;
  }
  &-title {
    display: inline-block;
    font-family: $font-family-standard;
    font-size: $font-size-section-header;
    border-bottom: 2px solid #000;
    font-weight: bold;
  }
  &-sentence {
    max-width: 600px;
    margin: 3rem auto 0;
    text-align: center;
    line-height: $sentence-height;
  }
  &-paragraph + &-paragraph {
    margin-top: $margin-paragraph;
  }
}
</style>