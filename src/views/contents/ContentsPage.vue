<template>
  <div id="contents-page">
    <cursor 
      v-if="!isResponsive"
    />
    <div class="contents-page__wrapper">
      <div class="contents-page__header">
        <div class="contents-page__tigLogo">
          <router-link :to="{ name: 'Home' }">
            <img src="@/assets/images/whiteLogo_tig.png">
          </router-link>
        </div>
      </div>
      <div class="contents-page__main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import Cursor from '@/components/common/Cursor.vue'
export default {
  components: {
    Cursor
  },
  setup() {
    const store = useStore()
    const isResponsive = computed(() => store.state.isResponsiveTablet)

    onMounted(() => {
      store.commit('addResponsivenessTablet', { width: window.outerWidth }) // init commit
      store.commit('addResponsivenessPhone', { width: window.outerWidth }) // init commit
    })

    return { isResponsive }
  }
}
</script>

<style scoped lang="scss">
#contents-page {
  min-height: 100vh;
  padding: 7rem 0;
  .contents-page {
    &__wrapper {
      width: 80%;
      margin: 0 auto;
    }
    &__header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    &__tigLogo {
      width: 13rem;
      @include respond(phone) {
        width: 8rem;
      }
      img {
        width: 100%;
      }
    }
    &__main {
      width: 61.8%;
      margin: 4.32rem auto 0;
      @include respond(tablet) {
        width: 100%;
      }
    }
  }
}
</style>