<template>
    <div>
       
        <p> this is child 1 : {{msg}}</p>
        <p> this.$attrs: {{$attrs}}</p>

    </div>
</template>

<script>
    export default {
        inheritAttrs:false,
        props: {
            msg: {
                type: String,
                default: 'this is msg'
            },
        },
        data() {
            return {
               
            }
        },
        methods: {
           
        },
    }
</script>

<style lang="scss" scoped>

</style>