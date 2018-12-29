<template>
    <mdc-layout-cell desktop=3 tablet=3>
        <mdc-card>
            <img class="mdc-elevation--z6" id="logo" :src="service.logo">
            <mdc-card-header :title="service.title">
            </mdc-card-header>
            <mdc-card-text>
                {{service.description}}
            </mdc-card-text>
        </mdc-card>
    </mdc-layout-cell>
</template>


<script>

    export default {
        name: "ServiceCard",
        props: {service: {type: Object, required: true}}
    }
</script>

<style scoped>

    mdc-card {
        text-align: left;
        position: relative;
        min-width: 250px;
    }

    img {
        height: 76px;
        width: 76px;
        margin-top: -38px;
        border-radius: 50% !important;
        margin-left: 50%;
        transform: translateX(-38px);
    }

</style>