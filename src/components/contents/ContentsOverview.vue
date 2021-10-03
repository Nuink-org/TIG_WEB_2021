<template>
  <div class="contents-overview">
    <div class="contents-overview__intro">
      TIGでは次の5つの企画を実施します。
    </div>
    <div class="contents-overview__titles">
      「知識人と歩く筑波大学」<br v-if="isResponsive">
      「音楽実験」<br v-if="isResponsive">
      「ラジオ」<br>
      「プロジェクションマッピング」<br v-if="isResponsive">
      「トークセッション」
    </div>
    <div class="contents-overview__comment">
      各企画は筑波大学学園祭「雙峰祭」に合わせて<br v-if="isResponsive">随時公開するのでお見逃しなく!
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
  &__titles {
    margin: 1.15rem;
    font-size: $font-size-content-overview;
    font-weight: bold;
  }
}
</style>