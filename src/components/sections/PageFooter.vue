<template>
  <section-base
    :isWrapperFull="true"
    class="pagefooter"  
  >
    <template #content>
      <div class="pagefooter-content">
        <div class="pagefooter-logo">
          <img src="@/assets/images/Nu-logo-02.png">
        </div>
        <div class="pagefooter-overview">
          <div class="pagefooter-overview__orgName" v-if="isResponsivePhone">
            筑波大学学生団体<span>&nbsp;</span><span class="nu">Nu</span>&nbsp;<span class="ink">ink.</span>
          </div>
          <div class="pagefooter-overview__website" v-if="isResponsivePhone">
            <a href="https://nuink-tsukuba.wixsite.com/innovation-world" target="_blank" rel="noopener noreferrer">
              official website
            </a>
          </div>
          <div class="pagefooter-overview__header">
            <div class="pagefooter-overview__orgName" v-if="!isResponsivePhone">
              筑波大学学生団体<span>&nbsp;</span><span class="nu">Nu</span>&nbsp;<span class="ink">ink.</span>
            </div>
            <div class="pagefooter-overview__website" v-if="!isResponsivePhone">
              <a href="https://nuink-tsukuba.wixsite.com/innovation-world" target="_blank" rel="noopener noreferrer">
                official website
              </a>
            </div>
            <div class="pagefooter-overview__twitter">
              <a href="https://twitter.com/nuinktsukuba" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/images/Twitter-logo.png">
              </a>
            </div>
            <div class="pagefooter-overview__instagram">
              <a href="https://www.instagram.com/nuinktsukuba/?hl=ja" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/images/Instagram-logo.png">
              </a>
            </div>
            <div class="pagefooter-overview__youtube">
              <a href="https://www.youtube.com/channel/UCCthlOqY7CCTtZ4gzQDvzmg/featured" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/images/YouTube-logo.png">
              </a>
            </div>
          </div>
          <div class="pagefooter-description">
            筑波大学とラジオ局J-WAVEが主催する、テクノロジーと音楽のクリエイティブフェス INNOVATION WORLD FESTA （イノフェス）の筑波大学学生運営チーム。普段なら交わらない「人」や「学問」をつないでイノベーションを起こすという目標を掲げて活動中！
          </div>
        </div>
      </div>
      <div class="pagefooter-copyright">
        ©2021.&nbsp;<span class="nu">Nu</span>&nbsp;<span class="ink">ink.</span>&nbsp;All rights reserved.
      </div>
    </template>
  </section-base>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import SectionBase from '@/components/common/SectionBase.vue'
export default {
  components: { 
    SectionBase 
  },
  setup() {
    const store = useStore()
    const isResponsivePhone = computed(() => store.state.isResponsivePhone)

    return { isResponsivePhone }
  }
}
</script>

<style scoped lang='scss'>
.pagefooter{
  background: #fff;
  min-height: 266px;
  padding: 2.6rem 0 !important;
  position: relative;
  text-align: left;
  &-content, &-copyright {
    color: #000;
  }
  &-content {
    font-family: $font-family-jp;
    display: flex;
    justify-content: center;
    align-items: center;
    @include respond(tablet) {
      flex-direction: column;
    }
    @include respond(phone) {
      width: 90%;
      margin: 0 auto;
    }
  }
  &-logo {
    width: 256px;
    height: 256px;
    position: relative;
    @include respond(phone) {
      margin-right: auto;
    }
    img {
      width: 100%;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &-overview {
    max-width: 600px;
    @include respond(tablet) {
      max-width: 480px;
      min-height: 230px;
    }
    @include respond(phone) {
      width: 80%;
    }
    &__header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      @include respond(phone) {
        justify-content: left;
      }
    }
    &__orgName {
      font-size: $font-size-footer-orgName;
      margin-right: auto;
      .ink {
        font-size: 1.1em;
        letter-spacing: 1.5px;
      }
      @include respond(phone) {
        font-size: 1.2em;
        text-align: left;
        transform: translateY(-30px);
      }
    }
    &__website, &__twitter, &__instagram {
      margin-right: 0.5rem;
      @include respond(phone) {
        margin-right: 1.2rem;
      }
    }
    &__website {
      a {
        color: #000;
        text-decoration: none;
        @include respond(phone) {
          font-size: 0.618em;
        }
      }
      @include respond(phone) {
        text-align: left;
        transform: translateY(-20px);
      }
    }
    &__twitter, &__instagram, &__youtube {
      width: 32px;
      height: 32px;
      @include respond(phone) {
        width: 25px;
        height: 25px;
      }
      position: relative;
      a {
        width: 100%;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
          width: 100%;
          height: auto;
          border-radius: 15%;
        }
      }
    }
  }
  &-description{
    color: #222;
    font-size: $font-size-footer-description;
    margin-top: 1.4rem;
  }
  &-copyright{
    color: #111;
    font-size: $font-size-footer-copyright;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    .ink {
      font-size: 1.1em;
      letter-spacing: 1.1px;
    }
  }
  .nu {
    font-weight: bold;
    font-family: $font-family-nuink-nu;
  }
  .ink {
    font-weight: bold;
    font-family: $font-family-nuink-ink;
  }
}
</style>
