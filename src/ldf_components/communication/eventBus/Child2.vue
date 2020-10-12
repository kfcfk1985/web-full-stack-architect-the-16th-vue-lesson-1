<template>
    <div>
        <p>
            this is child 2
        </p>

        <p>接收到的消息:{{rx_msg}}</p>

    
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rx_msg: ''
            }
        },
        mounted () {
            this.$bus.$on("msg",(msg)=>{
                this.rx_msg = msg;
            });
        },
    }
</script>

<style lang="scss" scoped>

</style>