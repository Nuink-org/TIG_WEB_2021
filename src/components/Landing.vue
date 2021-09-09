<template>
  <div class="landing" :style="{backgroundImage: 'url(' + topImagePath + ')'}">
    <div class="caption">
      <div class="title">
        <h1 :key="title" v-for="(title, idx) in titles" :style="{transform: 'translateY(' + translateAmount(idx) + 'px)'}">
          {{ title }}
        </h1>
      </div>
      <div class="date">
        <h1>2021.11.6-7</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const titles = ['TSUKUBA', 'INNOVATION', 'GALLERY']
    const topImagePath = require('@/assets/images/landing.jpg')

    // titleの上下の字間を埋めるためのtranslate
    const translateAmount = (idx) => {
      const stepSize = 50
      return -stepSize * idx
    }

    return { titles, topImagePath, translateAmount }
  }
}
</script>

<style scoped lang='scss'>
.landing {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: 1380px auto;
  background-repeat: no-repeat;
  background-position: right bottom;

  .caption {
    position: absolute;
    top: 128px;
    left: 80px;

    .title {
      font-size: 64px;
    }

    .date {
      font-size: 45px;
      transform: translateY(-100px);
    }
  }
}
</style>