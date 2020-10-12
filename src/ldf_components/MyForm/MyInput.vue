<template>
    <div>
        <input :value="value" @input="Oninput" v-bind="$attrs">
    </div>
</template>

<script>
    export default {
        inheritAttrs: false, // 避免顶层容器继承属性
        props: {
            value: {
                type: String,
                default: "",
                required:true,
            },
        },
        methods: {
            Oninput(e) {
                this.$emit("input",e.target.value)
                this.$parent.$emit("validate")
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>