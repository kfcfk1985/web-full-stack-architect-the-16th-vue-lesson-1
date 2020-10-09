<template>
  <div>
    <child1
      :p-child1="child1"
      :p-child2="child2"
      :p-child-attrs="1231"
      v-on:test1="onTest1"
      v-on:test2="onTest2"
    >
    </child1>
  </div>
</template>

<script>

import Child1 from '@/components/listentersTest/child1.vue';
// import Child2 from '@/components/listentersTest/child2.vue';



export default {
  data() {
    return {
      child1: "pChild1的值",
      child2: "pChild2的值",
    };
  },
    components: {
        Child1,
        // Child2
    },
  methods: {
    onTest1() {
      console.log("test1 running...");
    },
    onTest2(value) {
      console.log("test2 running..." + value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>