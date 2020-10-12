<template>
    <div>
        <!-- <EventBusDemo></EventBusDemo> -->
        <!-- <parentOrRoot></parentOrRoot> -->


        <attrs></attrs>


    </div>
</template>

<script>
    import EventBusDemo from '@/ldf_components/communication/eventBus';
    import parentOrRoot from '@/ldf_components/communication/parentOrRoot';
    import attrs from '@/ldf_components/communication/attrs';

    export default {
        components: {
            EventBusDemo,
            parentOrRoot,
            attrs
        },
    }
</script>

<style lang="scss" scoped>

</style>