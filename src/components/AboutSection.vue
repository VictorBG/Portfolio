<template>
    <div class="bg">
        <div class="sides-margin">
            <mdc-layout-grid>
                <mdc-layout-cell desktop=4 tablet=4 align="middle">
                    <img class="profile-image mdc-elevation--z8" id="logo" src="../assets/avatar.png">
                </mdc-layout-cell>
                <mdc-layout-cell desktop=8 tablet=8 style=" text-align: justify;text-justify: inter-word;"
                                 align="middle">
                    <p class="main-text">Computer science student ending his degree with experience in design
                        and programming. I
                        consider myself a very sociable person, able to quickly connect to the team to which I’m
                        assigned to, and take on projects with thoroughness and creativity.<br><br>My main goal
                        is
                        to continue developing my career and grow alongside professionals who trust me.</p>
                </mdc-layout-cell>
            </mdc-layout-grid>
            <mdc-layout-grid class="services-grid">
                <service-card v-for="service in services" :key="service.id" :service="service"/>
            </mdc-layout-grid>
            <br>
            <br>
            <h3 id="text_introduction">You can grab a copy of my CV <a class="link" href="#contact">here</a></h3>
        </div>
    </div>

</template>

<script>

    import ServiceCard from './header/ServiceCard';


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
    // https://semantic-ui.com/images/avatar2/large/matthew.png
    //This works but i have to pass the full url, otherwise not
    const services = [
        {
            "id": 1,
            "title": "Android design",
            "description": "The main goal of my design is to follow the principles of Material Design and to build beautiful and useful interfaces",
            // "logo": "src/assets/android_design.svg"
            "logo": "https://semantic-ui.com/images/avatar2/large/matthew.png"
        },
        {
            "id": 2,
            "title": "Android development",
            "description": "The main goal of the development is to build robust and scalable applications following modern principles",
            // "logo": "../../assets/android_development.svg"
            "logo": "https://semantic-ui.com/images/avatar2/large/matthew.png"
        },
        {
            "id": 3,
            "title": "Web development",
            "description": "As a web developer I have experience with CMS like WordPress and building websites from scratch",
            // "logo": "../../assets/web_development.svg"
            "logo": "https://semantic-ui.com/images/avatar2/large/matthew.png"
        },
        {
            "id": 4,
            "title": "API development",
            "description": "As a backend developer I have experience working with Slim Framework and Amazon Web Services to build and deploy an API",
            // "logo": "../../assets/backend_development.svg"
            "logo": "https://semantic-ui.com/images/avatar2/large/matthew.png"
        }
    ];
</script>

<style scoped>

    .services-grid {
        margin-top: 100px;
    }

    .bg {
        background-color: #EEEFE5;
        padding-bottom: 75px;
        padding-top: 100px;
    }

    .sides-margin {
        margin-left: 8%;
        margin-right: 8%;
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

