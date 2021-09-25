<template>
  <div class="upcoming-board">
    <div class="upcoming-board__content">
      <div class="upcoming-board__sentence">
        公開まで
        <div class="upcoming-board__time">
          {{ displayTime }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
export default {
  setup() {
    onMounted(() => {
      setInterval(updateTimer, 1000)
    })

    const day = ref(0)
    const hour = ref(0)
    const min = ref(0)
    const sec = ref(0)
    
    const updateTimer = (() => {
      const curTime = new Date()
      const targetTime = new Date('2021-11-06T00:00:00')
      const diff = targetTime.getTime() - curTime.getTime()
      day.value = diff / (1000 * 60 * 60 * 24)
      hour.value = (day.value - Math.floor(day.value)) * 24
      min.value = (hour.value - Math.floor(hour.value)) * 60
      sec.value = (min.value - Math.floor(min.value)) * 60
    })

    const displayTime = computed(() => {
      return Math.floor(day.value).toString() + '日'
        + Math.floor(hour.value).toString() + '時間'
        + Math.floor(min.value).toString() + '分'
        + Math.floor(sec.value).toString() + '秒'
    })
    
    return { displayTime }
  }
}
</script>

<style scoped lang="scss">
.upcoming-board {
  color: #000;
  background-color: #fff;
  text-align: center;
  width: 100%;
  position: relative;
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%; // aspect ratio = 16:9
  }
  &__content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__sentence {
    font-size: $font-size-upcoming-board;
  }
  &__time {
    
  }
}
</style>