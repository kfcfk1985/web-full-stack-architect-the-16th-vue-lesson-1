<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <communication></communication> -->
    <!-- <slot-example></slot-example> -->
    <!-- <form-example></form-example> -->

    <!-- <listenters-test></listenters-test> -->

     <!-- <MyForm></MyForm> -->

     <EventBusDemo></EventBusDemo>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import communication from '@/components/communication';
import SlotExample from '@/components/slots'
import FormExample from '@/components/form'

import ListentersTest from '@/components/listentersTest';
import MyForm from './ldf_components/MyForm';

import EventBusDemo from './ldf_components/communication/eventBus';

export default {
  name: 'app',
  components: {
    HelloWorld,
    communication,
    SlotExample,
    FormExample,
    ListentersTest,
    MyForm,
    EventBusDemo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
