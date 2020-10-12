<template>
  <div>
    <!-- <Child2 @test="$emit('test')"></Child2> -->
    <Child2 v-on="$listeners"></Child2>
  </div>
</template>

<script>
import Child2 from "./Child2.vue";
export default {
  components: {
    Child2,
  },
  mounted () {
      console.log("this.$listeners:",this.$listeners);
  },
};
</script>

<style lang="scss" scoped>
</style>