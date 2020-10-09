


<template>
  <div class="child-2">
    <p>in child->child2:</p>
    <p>props: {{ pChild2 }}</p>
    <p>$attrs: {{ this.$attrs }}</p>
    <button @click="$emit('test2', '按钮点击')">触发事件</button>
    <hr />
  </div>
</template>

<script>
export default {
  inheritAttrs: true,
  props: ["pChild2"],
  mounted: function () {
    this.$emit("test2");
  },
};
</script>

<style lang="scss" scoped>
</style>
