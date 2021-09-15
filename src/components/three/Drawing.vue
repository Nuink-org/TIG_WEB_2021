<template>
  <renderer ref="renderer" antialias resize="window">
    <camera :position="{ z: 10 }" />
    <scene>
      <point-light :position="{ y: 50, z: 50 }" />
      <box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <lambert-material />
      </box>
    </scene>
  </renderer>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup() {
    const renderer = ref(null)
    const box = ref(null)

    onMounted(() => {
      renderer.value.onBeforeRender(() => {
        box.value.mesh.rotation.x += 0.01
      })
    })

    return { renderer, box}
  }
}
</script>

<style lang="scss">
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: $layer-drawing;
}
</style>