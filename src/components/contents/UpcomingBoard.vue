<template>
  <div class="upcoming-board">
    <div class="upcoming-board__content">
      <div class="upcoming-board__message" v-if="isOurs">
        本作はイベント当日にライブ配信にて<br>
        公開しますのでお楽しみに！
      </div>
      <div class="upcoming-board__announce">
        <div v-for="(sentence, idx) in announceSentences"
          :key="idx"
        >
          {{ sentence }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  props: {
    isOurs: {
      type: Boolean,
      default: true
    },
    announceSentences: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const store = useStore()
    const isResponsivePhone = computed(() => store.state.isResponsivePhone)
    
    return { isResponsivePhone }
  }
}
</script>

<style scoped lang="scss">
.upcoming-board {
  font-family: $font-family-jp;
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
  &__message {
    font-size: $font-size-upcoming-board-message;
    @include respond(phone) {
      font-size: 1.19em;
    }
  }
  &__announce {
    color: #444;
    margin-top: 1.618rem;
    font-size: $font-size-upcoming-board-announce;
    @include respond(phone) {
      font-size: 0.875em;
    }
  }
}
</style>