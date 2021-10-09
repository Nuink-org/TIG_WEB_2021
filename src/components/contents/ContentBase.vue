<template>
  <div class="content-base"
    :class="additionalBgClass"
    :style="isResponsive ? {
      'padding': '4.23rem 0'
    } : ''"
  >
    <div class="content-base__titleEN">
      {{ titleEN }}
    </div>
    <div class="content-base__card">
      <content-info
        v-if="!isResponsive && isMounted && isInfoLeft"
        :titleJP="titleJP"
        :description="description"
        :infoHeight="thumbnailSize.height"
        :paddingRight="40"
      />
      <div class="content-base__thumbnail" ref="thumbnailRef">
        <template v-if="isReleased">
          <thumbnail
            :url="url"
            :imageName="imageName"
          />
        </template>
        <template v-else>
          <upcoming-board />
        </template>
      </div>
      <content-info
        v-if="isResponsive || (isMounted && !isInfoLeft)"
        :titleJP="titleJP"
        :description="description"
        :infoHeight="thumbnailSize.height"
        :paddingLeft="40"
        :style="isResponsive ? {
          'max-width': `${thumbnailSize.width}px`,
          'margin-top': '2.6rem'
        } : ''"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue'
import { useStore } from 'vuex'
import UpcomingBoard from '@/components/contents/UpcomingBoard.vue'
import Thumbnail from '@/components/contents/Thumbnail.vue'
import ContentInfo from '@/components/contents/ContentInfo.vue'
export default {
  components: {
    UpcomingBoard,
    Thumbnail,
    ContentInfo
  },
  props: {
    isInfoLeft: {
      type: Boolean,
      required: true
    },
    titleEN: {
      type: String,
      required: true,
    },
    titleJP: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    collaborators: {
      type: Array,
      default: () => []
    },
    isReleased: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ''
    },
    imageName: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const store = useStore()
    const isMounted = ref(false)
    const thumbnailRef = ref(null)
    const thumbnailSize = ref({width: 0, height: 0})
    const isResponsive = computed(() => store.state.isResponsiveTablet)
    const additionalBgClass = computed(() => props.isInfoLeft ? 'additional-bg__left' : 'additional-bg__right')

    watch(
      () => store.state.isResponsiveTablet,
      () => {
        thumbnailSize.value.height = thumbnailRef.value.clientHeight
        thumbnailSize.value.width = thumbnailRef.value.clientWidth
      }
    )

    onMounted(() => {
      // thumbnaiilとinfoの高さを揃えるために、
      // 取得したthumbnailの高さをinfoの高さにする
      thumbnailSize.value.height = thumbnailRef.value.clientHeight
      thumbnailSize.value.width = thumbnailRef.value.clientWidth
      isMounted.value = true
    })

    return { 
      isMounted, 
      thumbnailRef, 
      thumbnailSize, 
      additionalBgClass, 
      isResponsive
    }
  }
}
</script>

<style scoped lang="scss">
.content-base {
  max-width: 60rem;
  height: 27rem;
  line-height: $sentence-height;
  background-color: #000;
  position: relative;
  margin-top: 10rem;
  @include respond(tablet) {
    height: 100%;
  }
  @include respond(phone) {
    width: 100%;
  }
  &__titleEN {
    color: #fff;
    font-size: $font-size-content-titleEN;
    font-family: $font-family-standard;
    position: absolute;
    z-index: $layer-content-titleEN;
    width: max-content;
    height: 150px;
    top: -25px;
    text-align: left;
  }
  &__card {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @include respond(tablet) {
      flex-direction: column;
    }
  }
  &__thumbnail {
    @include respond(tablet) {
      width: 100%;
    }
  }
}
.additional-bg__left {
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 100%;
    background-color: black;
    @include respond(tablet) {
      width: 0%;
      height: 0%;
    }
  }
}
.additional-bg__right {
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 100%;
    background-color: black;
    @include respond(tablet) {
      width: 0%;
      height: 0%;
    }
  }
}
</style>