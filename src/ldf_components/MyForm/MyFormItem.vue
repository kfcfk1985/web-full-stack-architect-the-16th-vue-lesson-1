<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <p v-if="erreMessage">{{ erreMessage }}</p>
  </div>
</template>

<script>
// import New from '@/components/New.vue';

import Schema from "async-validator";
export default {
  inject: ["myForm"],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
      // required: true,
    },
  },
  data() {
    return {
      erreMessage: "",
    };
  },
  methods: {
    validate() {
      console.log("do validate");

      let rule = this.myForm.rules[this.prop];
      let value = this.myForm.model[this.prop];

      let descriptor = { [this.prop]: rule };
      const validator = new Schema(descriptor);
      return validator.validate({ [this.prop]: value }, (errors, fields) => {
        if (errors) {
          // validation failed, errors is an array of all errors
          // fields is an object keyed by field name with an array of
          // errors per field

          //   return handleErrors(errors, fields);
        //   console.log("error happen", errors, fields);
          this.erreMessage = errors[0].message
        } else {
        //   console.log("validation passed");
          this.erreMessage = "";
        }

        // validation passed
      });
    },
  },
  created() {
    this.$on("validate", ()=>{
      this.validate();
    });
    // console.log("this.myForm.rules", this.myForm.rules);
  },
};
</script>

<style lang="scss" scoped>
</style>