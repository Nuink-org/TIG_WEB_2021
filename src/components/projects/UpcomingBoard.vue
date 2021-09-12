<template>
  <div class="upcoming-board">
    <div class="upcoming-board__content">
      <div class="upcoming-board__sentence">
        公開まで
        <div class="upcoming-board__time">
          23日13時間41分58秒
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.upcoming-board {
  color: #000;
  background-color: #fff;
  text-align: center;
  width: 100%;
  position: relative;
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%; // aspect ratio = 16:9
  }
  &__content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__sentence {
    //TODO: font-sizeの変更
    font-size: $font-size-section-header;
  }
  &__time {
    
  }
}
</style>