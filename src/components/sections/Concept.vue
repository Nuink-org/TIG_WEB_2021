<template>
  <section-base
    :isWrapperFull="true"
    class="concept"
  >
    <template #content>
      <!-- <div class="concept-section__title">
        CONCEPT
      </div> -->
      <div class="concept-title">
        <div class="concept-title__sentence">
          New Normal
        </div>
      </div>
      <div class="concept-subTitle">
        <div class="concept-subTitle__sentence">
          ～新たなありかたの模索～
        </div>
      </div>
      <div class="concept-description">
        <div class="concept-description__wrapper" v-for="sentence in conceptSentences" :key="sentence">
          <div class="concept-description__sentence">
            {{ sentence }}
          </div>
        </div>
      </div>
    </template>
  </section-base>
</template>

<script>
import { onMounted } from 'vue'
import SectionBase from '../common/SectionBase.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin)
export default {
  components: { 
    SectionBase 
  },
  setup() {
    const conceptSentences = ["コロナ禍において", "不要不急と切り捨てられてきた", "エンタメや文化・芸術が", "新しい日常においてどうあるべきかを", "テクノロジーの視点から", "見つめ直し、想像し、", "体験できる場を創出する"]

    onMounted(() => {
      // timelineを使いたかったが、他のセクションでもgsapを使用しているためか上手くできなかった。
      // そのため手付で調整
      // gsap.to(".concept-section__title", {
      //   scrollTrigger: {
      //     trigger: ".concept-title",
      //     start: "center center",
      //   },
      //   ease: "SloMo",
      //   left: "50%",
      //   duration: 1.6
      // })
      gsap.from(CSSRulePlugin.getRule(".concept-title__sentence::before"), {
        cssRule: {
          width: "100%"
        },
        scrollTrigger: {
          trigger: ".concept-title",
          start: "center center",
        },
        ease: "circ",
        duration: 1.6
      })
      gsap.from(CSSRulePlugin.getRule(".concept-subTitle__sentence::before"), {
        cssRule: {
          width: "100%"
        },
        scrollTrigger: {
          trigger: ".concept-title",
          start: "center center",
        },
        ease: "circ",
        delay: 0.16,
        duration: 1.6
      })
      gsap.from(CSSRulePlugin.getRule(".concept-description__sentence::before"), {
        cssRule: {
          width: "100%"
        },
        scrollTrigger: {
          trigger: ".concept-title",
          start: "center center",
        },
        ease: "circ",
        delay: 0.64,
        stagger: 0.16,
        duration: 1.6
      })
    })

    return { conceptSentences }
  }
}
</script>

<style lang='scss'>
.concept {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // &-section__title {
  //   position: fixed;
  //   top: 50%;
  //   left: -100%;
  //   transform: translate(-50%, -50%);
  //   font-size: $font-size-concept-section-title;
  //   color: #000;
  //   text-stroke: 1px #aaa;
  //   -webkit-text-stroke: 1px #aaa;
  // }
  &-title, &-subTitle, &-description {
    &__sentence {
      display: inline-block;
      position: relative;
    }
  }
  &-title {
    font-family: $font-family-standard;
    font-size: $font-size-concept-title;
    font-weight: bold;
    &__sentence {
      @include white-bg;
    }
  }
  &-subTitle {
    margin-top: 0.5rem;
    font-size: $font-size-concept-subTitle;
    &__sentence {
      @include white-bg;
    }
  }
  &-description {
    margin-top: 2rem;
    line-height: 3rem;
    &__wrapper {
      margin: 0.6rem;
      display: block
    }
    &__sentence {
      @include white-bg;
    }
  }
}
</style>