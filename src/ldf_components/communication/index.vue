<template>
    <div>
        <!-- <EventBusDemo></EventBusDemo> -->
        <!-- <parentOrRoot></parentOrRoot> -->


        <!-- <attrs></attrs> -->
        <listeners></listeners>


    </div>
</template>

<script>
    import EventBusDemo from '@/ldf_components/communication/eventBus';
    import parentOrRoot from '@/ldf_components/communication/parentOrRoot';
    import attrs from '@/ldf_components/communication/attrs';
    import listeners from '@/ldf_components/communication/listeners';

    export default {
        components: {
            EventBusDemo,
            parentOrRoot,
            attrs,
            listeners,
        },
    }
</script>

<style lang="scss" scoped>

</style>