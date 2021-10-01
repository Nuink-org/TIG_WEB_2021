<template>
  <div class="content-base"
    :class="additionalBgClass"
  >
    <div class="content-base__titleEN">
      {{ titleEN }}
    </div>
    <div class="content-base__card">
      <content-info
        v-if="isMounted && isInfoLeft"
        :titleJP="titleJP"
        :description="description"
        :infoHeight="thumbnailHeight"
        :paddingRight="40"
      />
      <div class="content-base__thumbnail" ref="thumbnailRef">
        <div v-if="isReleased">
          <thumbnail
            :url="url"
            :imageName="imageName"
          />
        </div>
        <div v-else>
          <upcoming-board />
        </div>
      </div>
      <content-info
        v-if="isMounted && !isInfoLeft"
        :titleJP="titleJP"
        :description="description"
        :infoHeight="thumbnailHeight"
        :paddingLeft="40"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
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
    const isMounted = ref(false)
    const thumbnailRef = ref(null)
    const thumbnailHeight = ref(0)
    const additionalBgClass = computed(() => props.isInfoLeft ? 'additional-bg__left' : 'additional-bg__right')

    onMounted(() => {
      // thumbnaiilとinfoの高さを揃えるために、
      // 取得したthumbnailの高さをinfoの高さにする
      thumbnailHeight.value = thumbnailRef.value.clientHeight
      isMounted.value = true
    })

    return { isMounted, thumbnailRef, thumbnailHeight, additionalBgClass }
  }
}
</script>

<style scoped lang="scss">
.content-base {
  width: 60rem;
  height: 27rem;
  line-height: $sentence-height;
  background-color: #000;
  position: relative;
  margin-top: 10rem;
  &__titleEN {
    color: #fff;
    font-size: $font-size-content-titleEN;
    font-family: $font-family-standard;
    position: absolute;
    z-index: $layer-content-titleEN;
    // background-color: blue;
    width: 500%;
    height: 150px;
    top: -25px;
    text-align: left;
  }
  &__card {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
  }
}
</style>