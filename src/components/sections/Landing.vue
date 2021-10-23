<template>
  <section-base
    :isWrapperFull="true"
    class="landing"
  >
    <template #content>
      <concept
        v-if="!isAnimCompleted && !isConceptAnimDone"
        @finishConceptAnim="startTitleAnimation"
      />
      <title-screen
        v-if="isAnimCompleted || isConceptAnimDone"
        :isConceptAnimDone="isConceptAnimDone"
      />
    </template>
  </section-base>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import SectionBase from '@/components/common/SectionBase.vue'
import Concept from '@/components/landing/Concept.vue'
import TitleScreen from '@/components/landing/TitleScreen.vue'
export default {
  components: {
    SectionBase,
    Concept,
    TitleScreen
  },
  setup() {
    const store = useStore()
    const isConceptAnimDone = ref(false)
    const isAnimCompleted = computed(() => store.state.isLandingAnimCompleted)

    const startTitleAnimation = () => {
      isConceptAnimDone.value = true
    }

    return { isConceptAnimDone, isAnimCompleted, startTitleAnimation }
  }
}
</script>

<style scoped lang='scss'>
.landing {
  height: 100vh;
  text-align: center;
}
</style>