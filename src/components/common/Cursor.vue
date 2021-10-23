<template>
  <div class="cursor cursor-inner-circle" ref="cursor" :style="cursorPosition" />
  <!-- <canvas  class="cursor cursor-outer-circle" resize /> -->
</template>

<script>
import { onMounted, ref, computed } from 'vue'
import { linearInterpolate } from '@/helpers/utils'
export default {
  setup() {
    const cursor = ref(null)
    const nextPos = ref({x: screen.width / 2, y: -100})
    const lastPos = ref({x: screen.width / 2, y: -100})

    onMounted(() => {
      document.addEventListener('mousemove', (e) => {
        nextPos.value.x = e.clientX
        nextPos.value.y = e.clientY
      })
      requestAnimationFrame(render)
    })

    const cursorPosition = computed(() => ({
      transform: `translate(${lastPos.value.x}px, ${lastPos.value.y}px)`
    }))

    const render = () => {
      lastPos.value.x = linearInterpolate(lastPos.value.x, nextPos.value.x, 0.1618)
      lastPos.value.y = linearInterpolate(lastPos.value.y, nextPos.value.y, 0.1618)
      requestAnimationFrame(render)
    }

    return { cursor, cursorPosition }
  },
}
</script>


<style scoped lang="scss">
.cursor {
  mix-blend-mode: difference;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
}
.cursor-inner-circle {
  width: 50px;
  height: 50px;
  left: -25px;
  top: -25px;
  border-radius: 50%;
  background-color: #fff;
  z-index: $layer-cursor;
  animation: radiusScaling .46s infinite alternate;
}
// .cursor-outer-circle {
//   width: 100vw;
//   height: 100vh;
//   z-index: $layer-cursor-outer;
// }
</style>