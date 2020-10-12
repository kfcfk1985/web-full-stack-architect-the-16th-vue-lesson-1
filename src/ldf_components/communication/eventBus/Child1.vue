<template>
    <div>
       
        <p> this is child 1 :</p>

        <button @click="sendMsg">emit</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cnt: 0
            }
        },
        methods: {
            sendMsg() {
                this.$bus.$emit('msg',`i am child1,i have sent you  ${this.cnt++} times`)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>