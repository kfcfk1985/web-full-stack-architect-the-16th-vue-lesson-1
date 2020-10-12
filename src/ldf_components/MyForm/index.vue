<template>
  <div id="MyForm-container">
    <my-form :rules="rules" :model="model" ref="myForm">
      <my-form-item label="用户名" prop="username">
        <my-input v-model="model.username"></my-input>
      </my-form-item>

      <my-form-item label="密码" prop="password">
        <my-input v-model="model.password" type="password"></my-input>
      </my-form-item>

      <my-form-item>
        <button @click="login">登陆</button>
      </my-form-item>
    </my-form>

    <p>
      {{ JSON.stringify(model) }}
    </p>
  </div>
</template>

<script>
import MyInput from "@/ldf_components/MyForm/MyInput.vue";
import MyFormItem from "@/ldf_components/MyForm/MyFormItem.vue";
import MyForm from "@/ldf_components/MyForm/MyForm.vue";

export default {
  components: {
    MyInput,
    MyFormItem,
    MyForm,
  },
  data() {
    return {
      model: {
        username: "ldf",
        password: "123",
      },
      rules: {
        username: [
          { type: "string", required: true, message: "用户名必须填" },
          { min: 2, max: 9999, message: "用户名太短" },
          { min: 0, max: 5, message: "用户名太长" },
        ],
        password: [{ type: "string", required: true, message: "密码必须填" }],
      },
    };
  },
  methods: {
    login() {
      this.$refs.myForm.validate((isValidate) => {
        if (isValidate) {
          alert("发送登陆");
        } else {
          alert("输入有错误");
        }
      })
    },
  },
  mounted() {
    // JSON.stringify;
  },
};
</script>

<style lang="css" scoped>
#MyForm-container {
  border: 1px solid rgb(20, 17, 200);
}
</style>