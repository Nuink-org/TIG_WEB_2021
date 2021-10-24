<template>
  <section-base
    :isWrapperFull="true"
    class="timetable"
  >
    <template #content>
      <div class="timetable-content">
        <img src="@/assets/images/timetable.jpg">
      </div>
    </template>
  </section-base>
</template>

<script>
import SectionBase from '@/components/common/SectionBase.vue'
export default {  
  components: { 
    SectionBase,
  }
}
</script>

<style lang='scss'>
.timetable {
  padding: 0 !important;
  background-color: #000;
  width: 100%;
  &-content {
    width: 55%;
    margin: 0 auto;
    @include respond(tablet) {
      width: 80%;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
