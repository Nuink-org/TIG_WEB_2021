<template>
  <renderer ref="renderer" antialias resize="window">
    <camera :position="{ z: 10 }" />
    <scene ref="scene">
      <point-light v-for="light in lights"
        :key="light.color"
        :color="light.color"
        :intensity="light.intensity"
        :position="{ x: light.position[0], y: light.position[1], z: light.position[2] }"
      />
      <noisy-sphere ref="sphere"
        :radius="3.7"
        :widthSegments="64"
        :heightSegments="64"
        :timeCoef="0.0006"
        :noiseCoef="0.25"
        :dispCoef="0.9"
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

    const lightRadius = 30
    const lightIntensity = 0.9
    const lights = [
      { color: "#e2007e", intensity: lightIntensity, position: [lightRadius*Math.cos(-45/180*Math.PI), lightRadius*Math.sin(-45/180*Math.PI), -12] },
      { color: "#019fe8", intensity: lightIntensity, position: [lightRadius*Math.cos(45/180*Math.PI), lightRadius*Math.sin(45/180*Math.PI), -12] },
      { color: "#fff000", intensity: lightIntensity, position: [lightRadius*Math.cos(125/180*Math.PI), lightRadius*Math.sin(125/180*Math.PI), -12] },
      { color: "#eeeeee", intensity: lightIntensity, position: [lightRadius*Math.cos(-125/180*Math.PI), lightRadius*Math.sin(-125/180*Math.PI), -12] },
    ]

    return { renderer, scene, sphere, lights }
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