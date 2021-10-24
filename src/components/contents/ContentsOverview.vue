<template>
  <div class="contents-overview">
    <div class="contents-overview__sentence">
      TIGではオンラインで楽しめる6つの企画を実施します。<br>
      メイキングムービーや豪華ゲストとの対談動画に加えて、<br v-if="isResponsive">インタラクティブに楽しめる企画も用意しています！<br>
      <br>
      映像作品はTIG当日11月7日(日曜日)に<br v-if="isResponsive">YouTube Liveにて生配信します。<br>
      生配信映像はここに掲載しますのでお見逃しなく！
    </div>
    <!-- <div class="contents-overview__timelimit" v-if="!isLivePublished">
      TIGまであと<br>
      <span class="timelimit">
        {{ displayTime }}
      </span>
    </div> -->
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const isResponsive = computed(() => store.state.isResponsiveTablet)
    const isLivePublished = computed(() => store.state.timeDiff <= 0)

    const day = ref(0)
    const hour = ref(0)
    const min = ref(0)
    const sec = ref(0)
    
    const updateTimer = (() => {
      const diff = store.state.timeDiff
      day.value = diff / (1000 * 60 * 60 * 24)
      hour.value = (day.value - Math.floor(day.value)) * 24
      min.value = (hour.value - Math.floor(hour.value)) * 60
      sec.value = (min.value - Math.floor(min.value)) * 60
    })

    onMounted(() => {
      setInterval(updateTimer, 1000)
    })

    const displayTime = computed(() => {
      return Math.floor(day.value).toString() + '日'
        + Math.floor(hour.value).toString() + '時間'
        + Math.floor(min.value).toString() + '分'
        + Math.floor(sec.value).toString() + '秒'
    })

    return { displayTime, isResponsive, isLivePublished }
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
  &__timelimit {
    background-color: #00000088;
    font-size: $font-size-content-overview;
    margin-top: 1.85rem;
    .timelimit {
      font-size: $font-size-timelimit;
    }
  }
}
</style>