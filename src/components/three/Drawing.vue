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
        :radius="sphereRadius"
        :widthSegments="64"
        :heightSegments="64"
        :timeCoef="0.0006"
        :noiseCoef="noiseCoef"
        :dispCoef="dispCoef"
      >
        <lambert-material />
      </noisy-sphere>
    </scene>
  </renderer>
</template>

<script>
import { ref, onMounted } from 'vue'
import NoisySphere from 'troisjs/src/components/noisy/NoisySphere.js'
import { Renderer, Camera, Scene, PointLight, LambertMaterial } from 'troisjs'
import { linearInterpolate } from '@/helpers/utils'
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
    const sphereRadius = ref(0)
    const timeCoef = ref(0)
    const noiseCoef = ref(0)
    const dispCoef = ref(0)
    let timer

    const lightRadius = 30
    const lightIntensity = 0.9
    const lights = [
      { color: "#e2007e", intensity: lightIntensity, position: [lightRadius*Math.cos(-45/180*Math.PI), lightRadius*Math.sin(-45/180*Math.PI), -12] },
      { color: "#019fe8", intensity: lightIntensity, position: [lightRadius*Math.cos(45/180*Math.PI), lightRadius*Math.sin(45/180*Math.PI), -12] },
      { color: "#fff000", intensity: lightIntensity, position: [lightRadius*Math.cos(125/180*Math.PI), lightRadius*Math.sin(125/180*Math.PI), -12] },
      { color: "#eeeeee", intensity: lightIntensity, position: [lightRadius*Math.cos(-125/180*Math.PI), lightRadius*Math.sin(-125/180*Math.PI), -12] },
    ]

    const interpolateTime = 3000
    let time = 0
    onMounted(() => {
      timer = setInterval(() => {
        time += 1
        const ratio = time / interpolateTime
        sphereRadius.value = linearInterpolate(1.2, 3.7, ratio)
        noiseCoef.value = linearInterpolate(0.5, 0.25, ratio)
        dispCoef.value = linearInterpolate(1.2, 0.9, ratio)
        if (ratio >= 1) {
          clearInterval(timer)
        }
      }, 1)
    })

    return { renderer, scene, sphere, sphereRadius, timeCoef, noiseCoef, dispCoef, lights }
  }
}
</script>

<style lang="scss">
canvas {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: $layer-drawing;
}
</style>