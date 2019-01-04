<template>
    <div class="bg" id="about" ref="about">
        <div class="sides-margin">
            <mdc-layout-grid>
                <mdc-layout-cell desktop=4 tablet=4 align="middle">
                    <img class="profile-image mdc-elevation--z8" id="logo" src="../assets/avatar.png">
                </mdc-layout-cell>
                <mdc-layout-cell desktop=8 tablet=8 style=" text-align: justify;text-justify: inter-word;"
                                 align="middle">
                    <p class="main-text">Computer science student ending his degree with experience in design
                        and programming. I'm quietly confident, naturally curious, and perpetually improving my chops.<br><br>My main goal
                        is to continue developing my career and grow alongside professionals who trust me.</p>
                </mdc-layout-cell>
            </mdc-layout-grid>
            <mdc-layout-grid class="services-grid">
                <service-card v-for="service in services" :key="service.id" :service="service"/>
            </mdc-layout-grid>
            <br>
        </div>
    </div>

</template>

<script>

    import ServiceCard from './header/ServiceCard';
    import services from "../data/services.json";

    export default {
        name: "AboutSection",
        components: {
            ServiceCard
        },
        data() {
            return {
                services
            }
        }
    }
</script>

<style scoped>

    .services-grid {
        margin-top: 100px;
    }

    .service-card {
        height: 100%;
    }

    .bg {
        background-color: #EEEFE5;
        padding-bottom: 75px;
        padding-top: 100px;
        padding-left: 5%;
        padding-right: 5%
    }

    .profile-image {
        border-radius: 50% !important;
        max-height: 150px;
    }

    .main-text {
        color: #747373;
        font-size: 1.15rem;
        font-weight: 300;
        font-family: "Roboto Medium", serif;

    }
</style>

