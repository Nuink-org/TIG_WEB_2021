<template>
  <div class="content-info" :style="{height: revHeight, padding: padding}">
    <div class="content-info__genre" v-if="isResponsive">
      {{ titleEN }}
    </div>
    <div class="content-info__title">
      {{ titleJP }}
    </div>
    <div class="content-info__description">
      {{ description }}
    </div>
    <div class="content-info__detailLink">
      <router-link
        v-if="isRouterLink"
        :to="{ name: pageName }"
        @click.prevent="saveScrollPosition(); scrollToTop();"
      >
        詳細はこちら
      </router-link>
      <a
        v-if="isAtagLink"
        :href="aTagLink"
      >
        詳細はこちら
      </a>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  props: {
    titleEN: {
      type: String,
      required: true
    },
    titleJP: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    pageName: {
      type: String,
      default: ''
    },
    aTagLink: {
      type: String,
      default: ''
    },
    infoHeight: {
      type: Number,
      required: true
    },
    paddingLeft: {
      type: Number,
      default: 0
    },
    paddingRight: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const store = useStore()
    const revHeight = computed(() => `${props.infoHeight}px`)
    const padding = computed(() => `0 ${props.paddingRight}px 0 ${props.paddingLeft}px`)
    const isRouterLink = computed(() => props.pageName.length > 0)
    const isAtagLink = computed(() => props.aTagLink.length > 0)
    const isResponsive = computed(() => store.state.isResponsiveTablet)

    const saveScrollPosition = () => {
      store.commit('setScrollTopPos', {
        scrollTopPos: window.scrollY
      })
    }

    const scrollToTop = () => {
      window.scrollTo(0, 0)
    }

    return { revHeight, padding, isRouterLink, isAtagLink, isResponsive, saveScrollPosition, scrollToTop }
  }
}
</script>

<style scoped lang="scss">
.content-info {
  text-align: left;
  @include respond(tablet) {
    padding: 0 4.85rem !important;
    height: 100% !important;
  }
  @include respond(phone) {
    padding: 0 1.68rem !important
  }
  &__genre {
    display: inline-block;
    background-color: #fff;
    color: #000;
    padding: 0 0.5rem;
  }
  &__title {
    font-size: $font-size-content-titleJP;
    font-weight: bold;
    line-height: 2rem;
    @include respond(phone) {
      font-size: 1.618em;
    }
  }
  &__description, &__detailLink {
    margin-top: 1.618rem;
  }
  &__detailLink {
    a {
      color: #fff;
    }
  }
  &__collaboration {
    margin-top: 1.2rem;
  }
}
</style>