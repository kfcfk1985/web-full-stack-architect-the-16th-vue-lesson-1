
import Vue from 'vue';
export default function(component,props){

  let vm = new Vue({
    render:(h)=>{
      return h(component,{props})
    }
  }).$mount();



  document.body.appendChild(vm.$el);

  let com = vm.$children[0];
  com.remove = function () {
    document.body.removeChild(vm.$el)
    vm.$destroy();
  }

  return com
}