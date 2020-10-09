<template>
  <div class="child-2">
    <button @click="$emit('test2', '按钮点击')">触发事件</button>
  </div>
</template>

<script>
export default {
  inheritAttrs: true,
};
</script>
