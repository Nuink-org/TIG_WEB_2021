<template>
  <section-base
    :isWrapperFull="true"
    class="about"
  >
    <template #content>
      <div class="about-description__bg" ref="descriptionBgRef">
        <div class="about-description">
          <div class="about-title" v-if="isBgShown">
            <img src="@/assets/images/whiteLogo.png">
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
    const descriptionBgRef = ref(null)
    const sentences = [
      '筑波大学とラジオ局J-WAVEが主催する、テクノロジーと音楽の祭典「INNOVATION WORLD FESTA (イノフェス)」。例年Nu ink.はイノフェスで企画・運営に携わっています。',
      '今年はNu ink.初の試みとして、イノフェスのサテライトイベントを開催します！その名も「TSUKUBA INNOVATION GALLERY (TIG)」 。GALLERYには「部屋と部屋を結ぶ廊下の機能を兼ねる部屋」という意味があり、「イベントを通じて人や学問を結びたい」という思いが込められています。',
      '筑波大学ならではの企画やイノフェスの裏側まで、分野も団体も横断したコンテンツをお届けします。ぜひご覧ください！！'
    ]

    const showBg = () => {
      isBgShown.value = true
    }

    const handleResizing = () => {
      if (!isBgShown.value) return

      const windowWidth = window.innerWidth
      descriptionBgRef.value.style.width = windowWidth
    }

    const setAnimation = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.about-description__bg',
          start: 'top center'
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
    }

    onMounted(() => {
      setAnimation()
      window.addEventListener('resize', handleResizing)
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
  overflow-x: hidden;
  &-description__bg {
    width: 100%;
    background-color: #000000aa;
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
  }
  &-description {
    width: 80%;
    opacity: 1;
  }
  &-title, &-sentence {
    color: #fff;
  }
  &-title {
    // display: inline-block;
    // font-family: $font-family-standard;
    // font-size: $font-size-section-header;
    // border-bottom: 2px solid #000;
    // font-weight: bold;
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    img {
      width: 100%;
      height: auto;
    }
  }
  &-sentence {
    max-width: 600px;
    margin: 3rem auto 0;
    text-align: center;
    line-height: $about-sentence-height;
    @include respond(phone) {
      line-height: 1.85rem;
    }
  }
  &-paragraph + &-paragraph {
    margin-top: $margin-paragraph;
  }
}
</style>