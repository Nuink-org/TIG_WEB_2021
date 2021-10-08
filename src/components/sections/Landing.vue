<template>
  <section-base
    :isWrapperFull="true"
    class="landing"
  >
    <template #content>
      <concept 
        v-if="!isConceptAnimDone"
        @finishConceptAnim="startTitleAnimation" 
      />
      <title-screen
        v-if="isConceptAnimDone"
        :isConceptAnimDone="isConceptAnimDone"
      />
    </template>
  </section-base>
</template>

<script>
import { ref } from 'vue'
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
    const isConceptAnimDone = ref(false)

    const startTitleAnimation = () => {
      console.log('start title animation')
      isConceptAnimDone.value = true
    }

    return { isConceptAnimDone, startTitleAnimation }
  }
}
</script>

<style scoped lang='scss'>
.landing {
  height: 100vh;
  text-align: center;
}
</style>