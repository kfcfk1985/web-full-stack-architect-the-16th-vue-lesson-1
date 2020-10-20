<template>
  <div id="app">


    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <communication></communication> -->
    
    
    <!-- <slot-example></slot-example> -->
      <!-- <MySlots></MySlots> -->


    <form-example></form-example>

    <!-- <listenters-test></listenters-test> -->

     <!-- <MyForm></MyForm> -->

     <!-- <Mycommunication></Mycommunication> -->

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import communication from '@/components/communication';
import SlotExample from '@/components/slots'
import FormExample from '@/components/form'

import ListentersTest from '@/components/listentersTest';
import MyForm from '@/ldf_components/MyForm';

import Mycommunication from '@/ldf_components/communication/';
import MySlots from '@/ldf_components/slots/';

export default {
  name: 'app',
  components: {
    HelloWorld,
    communication,
    SlotExample,
    FormExample,
    ListentersTest,
    MyForm,
    Mycommunication,
    MySlots,
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
