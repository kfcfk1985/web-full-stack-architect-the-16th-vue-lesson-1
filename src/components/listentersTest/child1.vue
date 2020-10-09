<template>
  <div class="child-1">
    <p>in child1:</p>
    <p>props: {{ pChild1 }}</p>
    <p>$attrs: {{ this.$attrs }}</p>
    <hr />
    <child2 v-bind="$attrs" v-on="$listeners"></child2>
  </div>
</template>

<script>
import Child2 from '@/components/listentersTest/child2.vue';
export default {
  inheritAttrs: true,
  props: ["pChild1"],
  components: {
      Child2,
  },
  mounted: function () {
    this.$emit("test1");
  },
};
</script>

<style lang="scss" scoped>
</style>
