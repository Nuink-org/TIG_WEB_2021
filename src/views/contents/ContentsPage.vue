<template>
  <div id="contents-page">
    <cursor />
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
import Cursor from '@/components/common/Cursor.vue'
export default {
  components: {
    Cursor
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
      img {
        width: 100%;
      }
    }
    &__main {
      width: 61.8%;
      margin: 4.32rem auto 0;
    }
  }
}
</style>