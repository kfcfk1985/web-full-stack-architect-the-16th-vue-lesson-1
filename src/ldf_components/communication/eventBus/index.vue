<template>
    <div>
        <h1>任意两个组件之间传值常用事件总线</h1>
        <Child1></Child1>     
        <Child2></Child2>   
    </div>
</template>

<script>
    import Child1 from './Child1.vue';
    import Child2 from './Child2.vue';
    export default {
        components: {
            Child1,
            Child2
        },
    }
</script>

<style lang="scss" scoped>

</style>