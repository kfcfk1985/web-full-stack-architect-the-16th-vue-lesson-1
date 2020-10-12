<template>
  <div class="container">
    <h1>slot demo</h1>

    <layout>
      
      <!-- header -->
      <template v-slot:header>
        <p>header header header 1</p>
        <p>header header header 2</p>
      </template>

      <!-- body ：下面两种都可以，若用第一种，必须用 <template>  -->
      <template v-slot:body>body body body 1</template>
      <!-- <div slot="body">body body body 3</div> -->


        <template v-slot:footer="{content}">
            <div>
                {{content}}
            </div>
        </template>
      

    </layout>
  </div>
</template>

<script>
import layout from "@/ldf_components/slots/layout.vue";
export default {
  components: {
    layout,
  },
};
</script>

<style lang="css" scoped>
.container {
  border: 1px solid red;
}
</style>