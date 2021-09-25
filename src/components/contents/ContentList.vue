<template>
  <div class="content-list">
    <content-base
      v-for="(content, idx) in contents"
      :key="content.title"
      :order="idx+1"
      :title="content.title"
      :description="content.description"
      :collaborators="content.collaborators"
      :isReleased="content.isReleased"
      :url="content.url"
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
  }
}
</script>

<style scoped lang="scss">
.content-list {
  .content-base {
    &:nth-child(2n+1) {
      margin-right: auto;
    }
    &:nth-child(2n) {
      margin-left: auto;
    }
  }
}
</style>