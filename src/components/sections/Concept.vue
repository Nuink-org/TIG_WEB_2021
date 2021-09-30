<template>
  <section-base
    :isWrapperFull="true"
    class="concept"
  >
    <template #content>
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
        <div class="concept-description__wrapper" v-for="(sentence, idx) in conceptSentences" :key="sentence">
          <div :class="`concept-description__sentence concept-description__sentence${idx+1}`">
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
import { gsap, Power2 } from 'gsap'
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
      gsap.from(CSSRulePlugin.getRule(".concept-title__sentence::before"), {
        cssRule: {
          width: "100%"
        },
        scrollTrigger: {
          trigger: ".concept-title",
          start: "center center",
        },
        ease: Power2.easeIn,
        duration: 0.618
      })
      gsap.from(CSSRulePlugin.getRule(".concept-subTitle__sentence::before"), {
        cssRule: {
          width: "100%"
        },
        scrollTrigger: {
          trigger: ".concept-title",
          start: "center center",
        },
        ease: Power2.easeIn,
        delay: 0.16,
        duration: 0.618
      })
      // staggerとかでずらしたいが上手くいかなかったためループで少しずつずらす
      for (let i = 1; i <= conceptSentences.length; i++) {
        gsap.from(CSSRulePlugin.getRule(`.concept-description__sentence${i}::before`), {
          cssRule: {
            width: "100%"
          },
          scrollTrigger: {
            trigger: ".concept-title",
            start: "center center",
          },
          ease: Power2.easeIn,
          delay: 0.3 + 0.1 * i,
          duration: 0.618
        })
      }
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
    // 別々で定義しないとアニメーションが上手くいかない
    &__sentence1 {
      @include white-bg;
    }
    &__sentence2 {
      @include white-bg;
    }    
    &__sentence3 {
      @include white-bg;
    }
    &__sentence4 {
      @include white-bg;
    }
    &__sentence5 {
      @include white-bg;
    }
    &__sentence6 {
      @include white-bg;
    }
    &__sentence7 {
      @include white-bg;
    }
  }
}
</style>