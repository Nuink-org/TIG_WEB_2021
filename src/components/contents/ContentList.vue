<template>
  <div class="content-list">
    <content-base
      v-for="(content, idx) in contents"
      :key="content.titleEN"
      :isInfoLeft="isInfoLeft(idx)"
      :titleEN="content.titleEN"
      :titleJP="content.titleJP"
      :description="content.description"
      :pageName="content.pageName"
      :aTagLink="content.aTagLink"
      :collaborators="content.collaborators"
      :isReleased="content.isReleased"
      :imageName="content.imageName"
    />
  </div>
</template>

<script>
import ContentBase from '@/components/contents/ContentBase.vue'
export default {
  components: {
    ContentBase,
  },
  props: {
    contents: {
      type: Array,
      required: true,
    }
  },
  setup() {
    // 偶数番目のコンテンツカードは説明文がサムネイルの左に来るようにする。
    const isInfoLeft = (order) => {
      return order % 2 === 0
    }
    
    return { isInfoLeft }
  }
}
</script>

<style scoped lang="scss">
.content-list {
  width: 100%;
  .content-base {
    &:nth-child(2n+1) {
      margin-right: auto;
    }
    &:nth-child(2n) {
      margin-left: auto;
    }
    @include respond(tablet) {
      margin-left: 0;
      margin-right: 0;
    }
  }
}
</style>