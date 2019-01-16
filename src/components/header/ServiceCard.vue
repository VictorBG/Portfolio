<template>
    <mdc-layout-cell desktop=4 tablet=8>
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
            <p v-for="extra in service.extra.list" class="extra-description" v-show="service.extra.title!=null">
                {{extra}}</p>
            <div class="space-20"></div>
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
        /*height: 100% !important;*/
        margin-top: 76px;
    }

    .space-20 {
        height: 20px;
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
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    }

    .description {
        font-size: 1rem !important;
        padding-right: 32px;
        padding-left: 32px;
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
        color: #555555;
    }

    .extra-title {
        font-size: 1.3rem !important;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
        color: #ff0044;
    }

    .extra-description {
        font-size: 1rem !important;
        margin: 0;
        padding: 6px;
        color: #555555;
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
    }

</style>