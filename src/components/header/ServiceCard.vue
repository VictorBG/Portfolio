<template>
    <mdc-layout-cell desktop=3 tablet=3>
        <mdc-card>
            <img class="mdc-elevation--z6" id="logo" :src="service.logo">
            <mdc-card-header>
                <mdc-card-title class="title">{{service.title}}</mdc-card-title>
            </mdc-card-header>
            <br>
            <mdc-card-text class="description">
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

    .title {
        font-size: 1.15rem !important;
        font-family: "Roboto Medium", serif;
    }

    .description {
        font-size: .9rem !important;
        line-height: 20px;
        font-weight: 500;
        font-family: "Roboto Light", serif;
        color: #747373;



    }

</style>