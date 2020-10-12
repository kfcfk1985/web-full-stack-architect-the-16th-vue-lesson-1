<template>
    <div>
        <h1>兄弟组件之间通信可通过共同祖辈搭桥，$parent或$root</h1>
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