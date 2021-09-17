<template>
  <renderer ref="renderer" antialias resize="window">
    <camera :position="{ z: 10 }" />
    <scene ref="scene">
      <point-light :position="{ y: 50, z: 50 }" />
      <noisy-sphere ref="sphere"
        :radius="2"
        :widthSegments="64"
        :heightSegments="64"
        :timeCoef="0.0006"
        :noiseCoef="0.35"
        :dispCoef="1.1"
      >
        <lambert-material />
      </noisy-sphere>
    </scene>
  </renderer>
</template>

<script>
import { ref } from 'vue'
import NoisySphere from 'troisjs/src/components/noisy/NoisySphere.js'
import { Renderer, Camera, Scene, PointLight, LambertMaterial } from 'troisjs'
export default {
  components: {
    NoisySphere,
    Renderer,
    Camera,
    Scene,
    PointLight,
    LambertMaterial,
  },
  setup() {
    const renderer = ref(null)
    const scene = ref(null)
    const sphere = ref(null)

    return { renderer, scene, sphere }
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