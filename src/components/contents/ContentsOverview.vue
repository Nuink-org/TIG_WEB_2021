<template>
  <div class="contents-overview">
    <div class="contents-overview__sentence">
      TIGではオンラインで楽しめる6つの企画を実施します。<br>
      メイキングムービーや豪華ゲストとの対談動画に加えて、<br v-if="isResponsive">インタラクティブに楽しめる企画も用意しています！<br>
      各企画は各企画は筑波大学学園祭「雙峰祭」に合わせて<br v-if="isResponsive">随時公開するのでお見逃しなく!
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
  &__sentence {
    font-size: $font-size-content-overview;
    line-height: 3rem;
  }
}
</style>