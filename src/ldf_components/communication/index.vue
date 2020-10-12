<template>
    <div>
        <!-- <EventBusDemo></EventBusDemo> -->
        <parentOrRoot></parentOrRoot>


    </div>
</template>

<script>
    import EventBusDemo from '@/ldf_components/communication/eventBus';
    import parentOrRoot from '@/ldf_components/communication/parentOrRoot';

    export default {
        components: {
            EventBusDemo,
            parentOrRoot
        },
    }
</script>

<style lang="scss" scoped>

</style>