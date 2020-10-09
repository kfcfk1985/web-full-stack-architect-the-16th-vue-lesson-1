<template>
  <div>
    <child1 @test2="onTest2"> </child1>
  </div>
</template>

<script>
import Child1 from "@/components/listentersTest/child1.vue";
export default {
  components: {
    Child1,
  },
  methods: {
    onTest2() {
      console.log("test2 running...");
    },
  },
};
</script>
