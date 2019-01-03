<template>
    <mdc-layout-cell desktop=4 tablet=4>
        <mdc-card class="full">
            <img class="mdc-elevation--z6" id="logo" :src="service.logo">
            <mdc-card-header>
                <mdc-card-title class="title">{{service.title}}</mdc-card-title>
            </mdc-card-header>
            <br>
            <mdc-card-text class="description">
                {{service.description}}
            </mdc-card-text>
            <br>
            <p class="extra-title" v-show="service.extra.title!=null">{{service.extra.title}}</p>
            <p v-for="extra in service.extra.list" class="extra-description" v-show="service.extra.title!=null">{{extra}}</p>
            <br v-show="service.extra.title!=null">
            <br v-show="service.extra.title!=null">
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

    .full {
        height: 100% !important;
    }
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
        font-size: 1.3rem !important;
        padding-top: 16px;
        font-family: "Roboto Black", serif;
    }

    .description {
        font-size: 1rem !important;
        padding-right:32px;
        padding-left:32px;
        font-weight: 500;
        font-family: "Roboto Regular", serif;
        color: #555555;
    }

    .extra-title {
        font-size: 1.3rem !important;
        font-family: "Roboto Medium", serif;
        color: #ff0044;
    }

    .extra-description {
        font-size: 1rem !important;
        margin: 0;
        padding: 6px;
        color: #555555;
        font-family: "Roboto Regular", serif;
    }

</style>