<template>
  <div class="landing">
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

    // titleの上下の字間を埋めるためのtranslate
    const translateAmount = (idx) => {
      const stepSize = 50
      return -stepSize * idx
    }

    return { titles, translateAmount }
  }
}
</script>

<style scoped lang='scss'>
.landing {
  position: relative;
  width: 100%;
  height: 100vh;

  .caption {
    position: absolute;
    top: 128px;
    left: 80px;

    .title {
      font-size: $font-size-landing-title;
    }

    .date {
      font-size: $font-size-landing-date;
      transform: translateY(-100px);
    }
  }
}
</style>