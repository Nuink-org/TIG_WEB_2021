<template>
  <div class="cursor" ref="cursor" :style="cursorPosition" />
</template>

<script>
import { onMounted, ref, computed } from 'vue'
export default {
  setup() {
    const cursor = ref(null)
    const pos = ref({x: screen.width / 2, y: 0})
    onMounted(() => {
      document.addEventListener('mousemove', (e) => {
        pos.value.x = e.pageX
        pos.value.y = e.pageY
      })
    })
    const cursorPosition = computed(() => ({
      left: `${pos.value.x}px`,
      top: `${pos.value.y}px`
    }))

    return { cursor, cursorPosition }
  },
}
</script>


<style scoped lang="scss">
.cursor {
  mix-blend-mode: difference;
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  transform-origin: center;
  transition-duration: 160ms;
  transition-timing-function: ease-out;
  animation: radiusScaling .6s infinite alternate;
}
@keyframes radiusScaling {
  from {
    background-color: #ddd;
    transform: translate(-50%, -50%) scale(.618) ;
  }
  to {
    background-color: #fff;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>