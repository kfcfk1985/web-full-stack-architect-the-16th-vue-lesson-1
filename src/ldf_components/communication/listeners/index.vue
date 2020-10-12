<template>
    <div>
        <h1>$listeners 的demo</h1>
        <Child1 @test="onTest"></Child1>     
         
    </div>
</template>

<script>
    import Child1 from './Child1.vue';
    
    export default {
        components: {
            Child1,
        },
        methods: {
            onTest() {
                console.log("onTest ");
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>