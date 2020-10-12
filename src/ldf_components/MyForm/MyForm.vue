<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      myForm: this,
    };
  },
  props: {
    rules: {
      type: Object,
      default: {},
      required: true,
    },
    model: {
      type: Object,
      default: {},
      required: true,
    },
  },
  methods: {
    validate(cb) {
      let array = this.$children.filter((item) => {
        return item.prop != "";
      });

      let validatePromise = array.map((item) => {
        return item.validate();
      });

      Promise.all(validatePromise)
        .then((result) => {
        //   alert("发送登陆");
        //   return true
          cb(true)
        })
        .catch((err) => {
        //   alert("输入有错误");
        //   return false
        cb(false)
        });
    },
  },
};
</script>

<style  scoped>
</style>