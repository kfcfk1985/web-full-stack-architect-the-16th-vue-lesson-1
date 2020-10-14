// import Vue from 'vue';
// export default function(component,props){

//   let vm = new Vue({
//     render:(h)=>{
//       return h(component,{props})
//     }
//   }).$mount();



//   document.body.appendChild(vm.$el);

//   let com = vm.$children[0];
//   com.remove = function () {
//     document.body.removeChild(vm.$el)
//     vm.$destroy();
//   }

//   return com
// }


import Vue from 'vue';
import Notice from "@/components/Notice.vue";


const create = function (component, props) {

  const Constructor = Vue.extend(component)
  let comp = new Constructor({propsData: props})
  comp.$mount() //$mount()之后，comp实例才带有$el

  document.body.appendChild(comp.$el);

  comp.remove = function () {
    document.body.removeChild(comp.$el)
    comp.$destroy();
  }

  return comp
}

export default {
  install(Vue) {
    Vue.prototype.$createNotic = function (props) {
      return create(Notice, props)
    }
  }
}