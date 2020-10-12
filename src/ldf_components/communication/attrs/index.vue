<template>
    <div>
        <h1>$attrs</h1>
        <Child1 msg="123" name="tony" age="18"></Child1>     
    
    </div>
</template>
<script>
    import Child1 from './Child1.vue';
 
    export default {
        components: {
            Child1
        },
    }
</script>

<style lang="scss" scoped>

</style>