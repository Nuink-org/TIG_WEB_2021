<template>
  <div class="contents-overview">
    <div class="contents-overview__sentence">
      TIGではオンラインで楽しめる6つの企画を実施します。<br>
      メイキングムービーや豪華ゲストとの対談動画に加えて、<br v-if="isResponsive">インタラクティブに楽しめる企画も用意しています！<br>
      <br>
      映像作品はTIG当日11月7日(日曜日)に<br v-if="isResponsive">YouTube Liveにて生配信します。<br>
      生配信映像はここに掲載しますのでお見逃しなく！
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const isResponsive = computed(() => store.state.isResponsiveTablet)

    return { isResponsive }
  }
}
</script>

<style scoped lang="scss">
.contents-overview {
  opacity: 1;
  @include respond(phone) {
    font-size: 0.9em;
  }
  &__sentence {
    font-size: $font-size-content-overview;
    line-height: 3rem;
    @include respond(phone) {
      line-height: 1.85rem;
    }
  }
}
</style>