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
        :noiseCoef="0.25"
        :dispCoef="0.9"
      >
        <lambert-material />
      </noisy-sphere>
    </scene>
  </renderer>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
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
    const store = useStore()
    const renderer = ref(null)
    const scene = ref(null)
    const sphere = ref(null)
    const sphereRadius = ref(0)

    const lightRadius = 30
    const lightIntensity = 0.9
    const lights = [
      { color: "#e2007e", intensity: lightIntensity, position: [lightRadius*Math.cos(-45/180*Math.PI), lightRadius*Math.sin(-45/180*Math.PI), -12] },
      { color: "#019fe8", intensity: lightIntensity, position: [lightRadius*Math.cos(45/180*Math.PI), lightRadius*Math.sin(45/180*Math.PI), -12] },
      { color: "#fff000", intensity: lightIntensity, position: [lightRadius*Math.cos(125/180*Math.PI), lightRadius*Math.sin(125/180*Math.PI), -12] },
      { color: "#eeeeee", intensity: lightIntensity, position: [lightRadius*Math.cos(-125/180*Math.PI), lightRadius*Math.sin(-125/180*Math.PI), -12] },
    ]

    onMounted(() => {
      sphereRadius.value = store.state.isResponsivePhone ? 2 : store.state.isResponsiveTablet ? 3 : 3.7
    })

    return { renderer, scene, sphere, sphereRadius, lights }
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