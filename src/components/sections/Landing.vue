<template>
  <div class="landing">
    <!-- <div class="v-line" /> -->
    <div class="title">
      <div class="title-tsukuba">
        <span>T</span>
        <span class="title-hidden__tsukuba" v-for="(t, i) in revealTitles[0]"
          :key="i"
        >
          {{ t }}
        </span>
      </div>
      <div class="title-innovation">
        <span>I</span>
        <span class="title-hidden__innovation" v-for="(t, i) in revealTitles[1]"
          :key="i"
        >
          {{ t }}
        </span>
      </div>
      <div class="title-gallery">
        <span>G</span>
        <span class="title-hidden__gallery" v-for="(t, i) in revealTitles[2]"
          :key="i"
        >
          {{ t }}
        </span>
      </div>
    </div>
    <div class="date">
      2021.11.6-7
    </div>
    <div class="organizer">
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
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import gsap from 'gsap'
export default {
  setup() {
    // タイトルで後から現れてくる部分 
    const revealTitles = [Array.from("SUKUBA"), Array.from("NNOVATION"), Array.from("ALLERY")] 
    const initDelay = 3
    const store = useStore()

    // animation
    onMounted(() => {
      gsap.from('.title-tsukuba', {
        duration: 2.5,
        delay: initDelay,
        left: '48%',
        ease: 'expo.out'
      })
      gsap.from('.title-innovation', {
        duration: 2.5,
        delay: initDelay,
        left: '49%',
        ease: 'expo.out'
      })
      gsap.from('.title-gallery', {
        duration: 2.5,
        delay: initDelay, 
        left: '48%',
        ease: 'expo.out'
      })
      gsap.from('.title-hidden__tsukuba', {
        duration: 2.5,
        delay: initDelay,
        opacity: 0,
        stagger: 0.1,
        ease: 'expo.out'
      })
      gsap.from('.title-hidden__innovation', {
        duration: 2.5,
        delay: initDelay,
        opacity: 0,
        stagger: 0.1,
        ease: 'expo.out'
      })
      gsap.from('.title-hidden__gallery', {
        duration: 2.5,
        delay: initDelay,
        opacity: 0,
        stagger: 0.1,
        ease: 'expo.out'
      })
      gsap.from('.date', {
        duration: 2.5,
        opacity: 0,
        delay: initDelay+3,
        left: '50%',
        ease: 'expo.out',
        onComplete: () => store.commit('completeLandingAnim') // animation完了を通知
      })
      gsap.from('.organizer', {
        duration: 1.5,
        delay: initDelay,
        top: '67%',
        ease: 'expo.out'
      })
    })

    return { revealTitles }
  }
}
</script>

<style scoped lang='scss'>
.landing {
  width: 100%;
  height: 100vh;
  color: $color-title;
  .title,
  .date,
  .nu-ink {
    font-weight: 700;
  }
  .title {
    font-size: $font-size-landing-title;
    &-tsukuba {
      position: absolute;
      top: 25%;
      left: 27%;
    }
    &-innovation {
      position: absolute;
      top: 38%;
      left: 39%;
    }
    &-gallery {
      position: absolute;
      top: 51%;
      left: 34%;
    }
    &-hidden {
      opacity: 1;
      width: 100%;
      height: 100%;
    }
  }
  .date {
    font-family: $font-family-number;
    font-size: $font-size-landing-date;
    position: absolute;
    top: 67%;
    left: 56%;
  }
  .organizer{ 
    font-size: 14.5px;
    margin-top: 45px;
    position: absolute;
    top: 83%;
    left: 50%;
    transform: translate(-50%, -50%);
    .nu-ink {
      font-size: $font-size-landing-nuink;
      .nu {
        font-family: "serif";
      }
      .ink {
        letter-spacing: 1.7px;
        font-family: "ClarendonW01-Medium";
      }
    }
  }
}
</style>