<template>
  <div class="title-screen">
    <div class="title">
      <div class="title-tsukuba" 
        ref="titleTsukubaRef"
        :style="{transform: titleTsukubaTranslateY}"
      >
        <span class="title-tsukuba__head" ref="tsukubaInitialRef">T</span>
        <span class="title-hidden__tsukuba" v-for="(t, i) in revealTitles[0]"
          :key="i"
        >
          {{ t }}
        </span>
      </div>
      <div class="title-innovation" 
        ref="titleInnovationRef"
        :style="{transform: titleInnovationTranslateY}"
      >
        <span class="title-innovation__head" ref="innovationInitialRef">I</span>
        <span class="title-hidden__innovation" v-for="(t, i) in revealTitles[1]"
          :key="i"
        >
          {{ t }}
        </span>
      </div>
      <div class="title-gallery" 
        ref="titleGalleryRef"
        :style="{transform: titleGalleryTranslateY}"
      >
        <span class="title-gallery__head" ref="galleryInitialRef">G</span>
        <span class="title-hidden__gallery" v-for="(t, i) in revealTitles[2]"
          :key="i"
        >
          {{ t }}
        </span>
      </div>
    </div>
    <div class="date" ref="dateRef">
      2021.11.6-7
    </div>
    <div class="organizer" ref="organizerRef">
      <div class="presents">
        presented by
      </div>
      <div class="nu-ink">
        <span class="nu">Nu</span>&nbsp;<span class="ink">ink.</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import gsap from 'gsap'
export default {
  setup() {
    const vlineRef = ref(null)
    const titleTsukubaRef = ref(null)
    const titleInnovationRef = ref(null)
    const titleGalleryRef = ref(null)
    const tsukubaInitialRef = ref(null)
    const innovationInitialRef = ref(null)
    const galleryInitialRef = ref(null)
    const dateRef = ref(null)
    const organizerRef = ref(null)
    const revealTitles = [Array.from("SUKUBA"), Array.from("NNOVATION"), Array.from("ALLERY")] 
    const titleTsukubaTranslateY = computed(() => `translateY(${store.state.isResponsivePhone ? -140 : -210}px)`)
    const titleInnovationTranslateY = computed(() => `translateY(${store.state.isResponsivePhone ? -60 : -120}px)`)
    const titleGalleryTranslateY = computed(() => `translateY(${store.state.isResponsivePhone ? 20 : -30}px)`)
    const store = useStore()
    const isAnimCompleted = computed(() => store.state.isLandingAnimCompleted)

    const resetTitlePos = () => {
      // リサイズ
      if (!isAnimCompleted.value) return

      const windowWidth = window.outerWidth
      const translateX = store.state.isResponsiveTablet ? -50 : 0
      // vlineRef.value.style.left = `${windowWidth * 0.5}px`

      // title tsukuba
      const titleTsukubaLeft = store.state.isResponsiveTablet ? windowWidth * 0.5 : windowWidth * 0.27
      titleTsukubaRef.value.style.left = `${titleTsukubaLeft}px`
      titleTsukubaRef.value.style.transform = `translate(${translateX}%, ${store.state.isResponsivePhone ? -140 : -210}px)`
      
      // title innovation
      const titleInnovationLeft = store.state.isResponsiveTablet ? windowWidth * 0.5 : windowWidth * 0.39
      titleInnovationRef.value.style.left = `${titleInnovationLeft}px`
      titleInnovationRef.value.style.transform = `translate(${translateX}%, ${store.state.isResponsivePhone ? -60 : -120}px)`

      // title gallery
      const titleGalleryLeft = store.state.isResponsiveTablet ? windowWidth * 0.5 : windowWidth * 0.34
      titleGalleryRef.value.style.left = `${titleGalleryLeft}px`
      titleGalleryRef.value.style.transform = `translate(${translateX}%, ${store.state.isResponsivePhone ? 20 : -30}px)`

      // date
      const dateLeft = store.state.isResponsiveTablet ? windowWidth * 0.5 : windowWidth * 0.61
      dateRef.value.style.left = `${dateLeft}px`

      // organizer
      organizerRef.value.style.left = `${windowWidth * 0.5}px`
    }

    const initPos = () => {
      const windowWidth = window.outerWidth
      const titleTsukubaLeft = windowWidth * 0.5 - tsukubaInitialRef.value.offsetWidth * 0.5
      const titleInnovationLeft = windowWidth * 0.5 - innovationInitialRef.value.offsetWidth * 0.5
      const titleGalleryLeft = windowWidth * 0.5 - galleryInitialRef.value.offsetWidth * 0.5
      // vlineRef.value.style.left = `${windowWidth * 0.5}px`
      titleTsukubaRef.value.style.left = `${titleTsukubaLeft}px`
      titleInnovationRef.value.style.left = `${titleInnovationLeft}px`
      titleGalleryRef.value.style.left = `${titleGalleryLeft}px`
      dateRef.value.style.left = `${windowWidth * 0.5}px`
      organizerRef.value.style.left = `${windowWidth * 0.5}px`
    }

    const startDelay = 1
    const startDuration = 1
    const startAnimation = () => {
      store.commit('startDrawing')
      gsap.to('.title-tsukuba', {
        opacity: 1,
        delay: startDelay,
        ease: 'expo.out',
        duration: startDuration
      })
      gsap.to('.title-innovation', {
        opacity: 1,
        delay: startDelay,
        ease: 'expo.out',
        duration: startDuration
      })
      gsap.to('.title-gallery', {
        opacity: 1,
        delay: startDelay,
        ease: 'expo.out',
        duration: startDuration
      })
      gsap.to('.organizer', {
        opacity: 1,
        delay: startDelay,
        ease: 'expo.out',
        duration: startDuration,
        onComplete: () => {
          startWordMoveAnimation()
        }
      })
    }
    
    const startWordMoveAnimation = () => {
      const startMoveDelay = 1
      const startMoveDuration = 1.618
      const windowWidth = window.outerWidth
      const translateX = store.state.isResponsiveTablet ? -50 : 0
      
      const titleTsukubaLeft = store.state.isResponsiveTablet ? windowWidth * 0.5 : windowWidth * 0.27
      gsap.to('.title-tsukuba', {
        duration: startMoveDuration,
        delay: startMoveDelay,
        left: `${titleTsukubaLeft}px`,
        translateX: `${translateX}%`,
        ease: 'expo.out'
      })
      const titleInnovationLeft = store.state.isResponsiveTablet ? windowWidth * 0.5 : windowWidth * 0.39
      gsap.to('.title-innovation', {
        duration: startMoveDuration,
        delay: startMoveDelay,
        left: `${titleInnovationLeft}px`,
        translateX: `${translateX}%`,
        ease: 'expo.out'
      })
      const titleGalleryLeft = store.state.isResponsiveTablet ? windowWidth * 0.5 : windowWidth * 0.34
      gsap.to('.title-gallery', {
        duration: startMoveDuration,
        delay: startMoveDelay, 
        left: `${titleGalleryLeft}px`,
        translateX: `${translateX}%`,
        ease: 'expo.out'
      })
      gsap.to('.title-hidden__tsukuba', {
        duration: startMoveDuration,
        delay: startMoveDelay,
        opacity: 1,
        stagger: 0.1,
        ease: 'expo.out'
      })
      gsap.to('.title-hidden__innovation', {
        duration: startMoveDuration,
        delay: startMoveDelay,
        opacity: 1,
        stagger: 0.1,
        ease: 'expo.out'
      })
      gsap.to('.title-hidden__gallery', {
        duration: startMoveDuration,
        delay: startMoveDelay,
        opacity: 1,
        stagger: 0.1,
        ease: 'expo.out'
      })
      const dateLeft = store.state.isResponsiveTablet ? windowWidth * 0.5 : windowWidth * 0.61
      gsap.to('.date', {
        duration: startMoveDuration,
        opacity: 1,
        delay: startMoveDelay + 3,
        left: `${dateLeft}px`,
        ease: 'expo.out',
        onComplete: () => {
          store.commit('completeLandingAnim') // animation完了を通知
        }
      })
      gsap.to('.organizer', {
        duration: 1.5,
        delay: startMoveDelay,
        transform: "translate(-50%, 200px)",
        ease: 'expo.out'
      })
    }

    onMounted(() => {
      initPos()
      startAnimation()
      window.addEventListener('resize', resetTitlePos)
    })

    return {
      vlineRef, 
      titleTsukubaRef, 
      titleInnovationRef, 
      titleGalleryRef, 
      dateRef, 
      organizerRef, 
      tsukubaInitialRef,
      innovationInitialRef,
      galleryInitialRef,
      revealTitles,
      titleTsukubaTranslateY,
      titleInnovationTranslateY,
      titleGalleryTranslateY
    }
  }
}
</script>

<style lang='scss'>
.title-screen {
  position: relative;
  color: $color-title;
  height: 100vh;
  font-family: $font-family-standard;
  overflow: hidden;
}
.v-line {
  border-left: 0.5px solid #fff;
  height: 100vh;
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -0.25px;
}
.title,
.date,
.nu-ink {
  font-weight: 700;
}
.title {
  font-size: $font-size-landing-title;
  &-tsukuba {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  &-innovation {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  &-gallery {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  &-hidden__tsukuba, &-hidden__innovation, &-hidden__gallery {
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  @include respond(phone) {
    font-size: 4.2em;
  }
}
.date {
  opacity: 0;
  font-family: $font-family-number;
  font-size: $font-size-landing-date;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 115px);
  @include respond(phone) {
    font-size: 2.1em;
  }
}
.organizer { 
  opacity: 0;
  font-size: 14.5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 145px);
  .nu-ink {
    font-size: $font-size-landing-nuink;
    .nu {
      font-family: $font-family-nuink-nu;
    }
    .ink {
      letter-spacing: 1.7px;
      font-family: $font-family-nuink-ink;
    }
  }
}
</style>