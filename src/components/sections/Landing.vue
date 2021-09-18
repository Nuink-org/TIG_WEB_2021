<template>
  <div class="landing">
    <div class="title">
      <h1 class="title-tsukuba">TSUKUBA</h1>
      <h1 class="title-innovation">INNOVATION</h1>
      <h1 class="title-gallery">GALLERY</h1>
    </div>
    <div class="date">
      2021.11.6-7
    </div>
    <div class="organizer">
      <div class="presents">
        presents by
      </div>
      <div class="nu-ink">
        Nu ink.          
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
  }
}
</script>

<style scoped lang='scss'>
.landing {
  width: 100%;
  height: 100vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title,
  .date,
  .nu-ink {
    font-weight: 700;
  }
  .title {
    font-size: $font-size-landing-title;
    &-tsukuba {
      transform: translate(-120px, 20px);
      // position: absolute;
      // top: 25%;
      // left: 27%;
    }
    &-innovation {
      transform: translate(136px, 0px);
      // position: absolute;
      // top: 38%;
      // left: 39%;
    }
    &-gallery {
      transform: translate(-18px, -20px);
      // position: absolute;
      // top: 51%;
      // left: 34%;
    }
  }
  .date {
    font-family: $font-family-number;
    font-size: $font-size-landing-date;
    transform: translate(270px, -10px);
    // position: absolute;
    // top: 67%;
    // left: 56%;
  }
  .organizer{ 
    margin-top: 45px;
    // position: absolute;
    // top: 83%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    .nu-ink {
      font-size: $font-size-landing-nuink;
    }
  }
}
</style>