<template>
  <div class="child-1">
    <!-- <child2 ></child2> -->
    <child2 v-on="$listeners"></child2>
    <!-- <child2 @test2="$emit('test2', '按钮点击')"></child2>  -->
  </div>
</template>

<script>
import Child2 from '@/components/listentersTest/child2.vue';
export default {
  inheritAttrs: true,
  components: {
      Child2,
  },
};
</script>

