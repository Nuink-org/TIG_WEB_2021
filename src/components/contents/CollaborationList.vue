<template>
  <div class="collaboration-list">
    <collaborator
      v-for="(colab, idx) in collaborators"
      :key="idx"
      :imageSize="colab.imageSize"
      :imageName="colab.imageName"
      :link="colab.link"
      :name="colab.name"
      :sentence="colab.sentence"
      :isTParty="colab.isTParty"
      :isYobinori="colab.isYobinori"
    />
  </div>
</template>

<script>
import Collaborator from '@/components/contents/Collaborator.vue'
export default {
  props: {
    collaborators: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Collaborator
  }
}
</script>

<style lang="scss" scoped>
.collaboration-list {
  margin-top: 4.32rem;
  border-top: 1px solid #888;
}
</style>
