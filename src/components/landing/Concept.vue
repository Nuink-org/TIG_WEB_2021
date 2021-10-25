<template>
  <div class="concept">
    <div class="concept-title">
      <div v-for="(word, idx) in conceptTitle"
        :key="`word${idx}`"
        :class="`concept-title__word concept-title__word${idx}`"
      >
        {{ word }}
      </div>
    </div>
    <div class="concept-subTitle">
      <div v-for="(word, idx) in conceptSubTitle"
        :key="`word${idx}`"
        :class="`concept-subTitle__word concept-subTitle__word${idx}`"
      >
        {{ word }}  
      </div>
    </div>
    <div class="concept-description">
      <div class="concept-description__wrapper" v-for="(sentence, idx) in conceptSentences" :key="sentence">
        <div :class="`concept-description__sentence concept-description__sentence${idx}`">
          <div v-for="(word, idx2) in sentence"
            :key="`word${idx2}`"
            :class="`concept-description__word concept-description__word${idx}-${idx2}`"
          >
            {{ word }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { onMounted } from 'vue'
import baffle from 'baffle'
import { gsap } from 'gsap'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
gsap.registerPlugin(CSSRulePlugin)
export default {
  setup(props, context) {
    const isSentenceRevealed = ref(false)
    const isAllRevealed = ref(false)
    const conceptTitle = 'New Normal'
    const conceptSubTitle = '～新たなありかたの模索～'
    const conceptSentences = ["コロナ禍において", "不要不急と切り捨てられてきた", "エンタメや文化・芸術が", "新しい日常においてどうあるべきかを", "テクノロジーの視点から", "見つめ直し、想像し", "体験できる場を創出する"]
    let conceptTitleBaffle, conceptSubTitleBaffle, conceptSentenceBaffle
    const duration1 = 1
    const duration2 = 0.18

    const startTitleAnimaiton = () => {
      for (let i = 0; i < conceptTitle.length; i++) {
        gsap.to(`.concept-title__word${i}`, {
          opacity: 1, 
          delay: 1.5 + Math.random() * 0.18,
          ease: 'linear',
          duration: duration1
        })
      }
      for (let i = 0; i < conceptSubTitle.length; i++) {
        if (i === conceptSubTitle.length-1) {
          gsap.to(`.concept-subTitle__word${i}`, {
            opacity: 1, 
            delay: 2.5 + Math.random() * 0.18,
            ease: 'linear',
            duration: duration1,
            onComplete: () => {
              isAllRevealed.value = true
            }
          })
        } else {
          gsap.to(`.concept-subTitle__word${i}`, {
            opacity: 1, 
            delay: 2.5 + Math.random() * 0.18,
            ease: 'linear',
            duration: duration1,
          })
        }
      }
    }

    const startDescriptionAnimation = () => {
      gsap.to('.concept-description__word', {
        opacity: 1,
        ease: 'linear',
        delay: 1.5,
        stagger: 0.07,
        duration: duration2,
        onComplete: () => {
          isSentenceRevealed.value = true
        }
      })
    }

    const initBaffle = () => {
      conceptTitleBaffle = baffle('.concept-title__word', { speed: 1.2 })
      conceptSubTitleBaffle = baffle('.concept-subTitle__word', { speed: 1.2 })
      conceptSentenceBaffle = baffle('.concept-description__word', { speed: 1.2 })
    }
    const startObfuscating = () => {
      conceptTitleBaffle.start()
      conceptSubTitleBaffle.start()
      conceptSentenceBaffle.start()
    }
    const stopObfuscating = () => {
      setTimeout(() => {
        conceptTitleBaffle.stop()
        conceptSubTitleBaffle.stop()   
        conceptSentenceBaffle.stop()
        context.emit('finishConceptAnim')
      }, 2000)
    }

    const vanishDuration = 0.06
    const startVanishAnimation = () => {
      setTimeout(() => {
        startObfuscating()
        for (let i = 0; i < conceptTitle.length; i++) {
          gsap.to(`.concept-title__word${i}`, {
            opacity: 0, 
            delay: Math.random() * 0.618,
            ease: 'linear',
            duration: vanishDuration
          })
        }
        for (let i = 0; i < conceptSubTitle.length; i++) {
          gsap.to(`.concept-subTitle__word${i}`, {
            opacity: 0, 
            delay: Math.random() * 0.618,
            ease: 'linear',
            duration: vanishDuration,
          })
        }
        for (let i = 0; i < conceptSentences.length; i++) {
          for (let j = 0; j < conceptSentences[i].length; j++) {
            // 最後だけにstopObfuscatingを呼ばせる
            if (i === conceptSentences.length-1 && j === conceptSentences[i].length-1) {
              gsap.to(`.concept-description__word${i}-${j}`, {
                opacity: 0, 
                delay: Math.random() * 0.618,
                ease: 'linear',
                duration: vanishDuration,
                onComplete: () => {
                  stopObfuscating()
                }
              })  
            } else {
              gsap.to(`.concept-description__word${i}-${j}`, {
                opacity: 0, 
                delay: Math.random() * 0.618,
                ease: 'linear',
                duration: vanishDuration,
              })
            }
          }
        }
      }, 2000)
    }

    onMounted(() => {
      initBaffle()
      startDescriptionAnimation()
    })

    watch(
      [isSentenceRevealed, isAllRevealed],
      ([newIsSentenceRevealed, oldIsSentenceRevealed], [newIsAllRevealed, oldIsAllRevealed]) => {
        if (newIsSentenceRevealed && !oldIsSentenceRevealed) {
          startTitleAnimaiton()
        } else if (newIsAllRevealed && !oldIsAllRevealed) {
          startVanishAnimation()
        }
      }
    )
    return { isAllRevealed, conceptTitle, conceptSubTitle, conceptSentences }
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
  text-align: center;
  color: #fff;
  &-title, &-subTitle, &-description {
    &__word {
      display: inline-block;
      min-width: 15px;
      opacity: 0;
    }
  }
  &-title {
    font-family: $font-family-standard;
    font-size: $font-size-concept-title;
    font-weight: bold;
  }
  &-subTitle {
    margin-top: 0.5rem;
    font-size: $font-size-concept-subTitle;
  }
  &-description {
    margin-top: 2rem;
    line-height: 3rem;
    &__wrapper {
      margin: 0.6rem;
      display: block
    }
  }
}
</style>
