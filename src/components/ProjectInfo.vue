<!--suppress ALL -->
<template>


    <div class="project-info">
        <div class="sides-margin">
            <h3 class="title">{{currentProject.title}}</h3>
            <mdc-layout-grid class="project-grid">
                <mdc-layout-cell desktop=6 tablet=8 phone=4 class="left-container">
                    <p class="main-text" v-html="currentProject.large_description"></p>
                    <br>
                    <br>
                    <mdc-button class="main-button" v-show="currentProject.button.enabled"
                                @click="onClick(currentProject.button.link)" raised>{{currentProject.button.title}}
                    </mdc-button>
                    <p class="availability-text" v-show="currentProject.button.availabilityVisible">
                        {{currentProject.button.availabilityMessage}}</p>
                </mdc-layout-cell>

                <mdc-layout-cell desktop=6 tablet=4 phone=4 class="centered-container">
                    <div class="centered-vertically">
                        <carousel :data="images" :interval="7500"></carousel>
                    </div>
                </mdc-layout-cell>
            </mdc-layout-grid>

        </div>
        <Footer class="footer"></Footer>
        <router-link to="/"><img id="logo" src="../assets/logo_no_name_black.svg"></router-link>
    </div>


</template>

<script>

    import projects from "../data/projects.json";
    import Footer from "./Footer";

    export default {
        name: "ProjectInfo",
        components: {Footer},
        methods: {
            onClick(link) {
                window.open(link, '_blank');
            }
        },
        data() {
            const emptyProject = {title: "",};
            return {
                currentProject: emptyProject,
                nextProject: emptyProject,
                previousProject: emptyProject,
                showNext: false,
                showPrevious: false,
                images: []

            }
        },
        async created() {
            let id = this.$route.params.id;
            var i = 0;

            for (; i < projects.length; ++i) {
                if (projects[i].id == id) {
                    break;
                }
            }
            this.currentProject = projects[i];

            let l = this.currentProject.images.length;
            for (i = 0; i < l; i++) {
                this.images.push(`<div class='slide'> <img width="${this.currentProject.max_width}" src="${this.currentProject.images[i]}"></div>`);
            }
        }
    }
</script>


<style scoped>

    #logo {
        position: absolute;
        margin: 32px;
        cursor: pointer;
        height: 50px;
        width: 50px;
        top: 0;
        left: 0;
    }

    .title {
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        transition: all .2s;
        font-size: 2rem;
        color: black;
        padding-top: 50px;
        text-transform: uppercase;
    }

    .slide {
        align-items: center;
        justify-content: center;
        width: 500px;
        height: 500px;
        object-fit: cover;
    }

    .centered-vertically {
        display: flex;
        padding-top: 75px;
        padding-bottom: 75px;
        align-items: center;
        justify-content: center;
    }

    .main-text {
        color: #747373;
        font-size: 1rem;
        font-family: "Montserrat", serif;
        font-weight: 500;
        padding-top: 75px;
        line-height: 25px;
        text-align: justify;
    }

    .button-nav-project-title {
        position: relative;
        padding: 0;
        margin: 0;
        width: 3rem;
        text-align: center;
        padding-top: 3.25rem;
    }

    .mdc-icon-a {
        height: 3rem;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 3rem;
        margin: 0;
        transform: translate(-50%, -50%);
    }

    .availability-text {
        color: #747373;
        font-size: .8rem;
        font-family: "Montserrat", serif;
        font-weight: 600;
        padding-top: 8px;
        margin: 0;
        text-align: justify;
    }

    .centered-container {
        padding-left: 50px;
        padding-right: 50px;
        text-align: center;
    }

    .left-container {
        padding-left: 5%px;
        /*padding-right: 50px;*/
        text-align: left;
    }

    .navigate-project {
        position: absolute;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, .5);
        border: 0;
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        height: 3rem;
        opacity: .5;
        padding: .5rem;
        transition: all .15s;
        width: 3rem;
    }

    .navigate-project:hover {
        background-color: rgba(0, 0, 0, .9);
    }

    .next-project {
        position: absolute;
        right: 0;
        padding-right: 16px;
        top: 50%;
    }

    .next-button {
        left: 0;
    }

    .previous-project {
        position: absolute;
        left: 0;
        top: 50%;
        margin-left: 16px;
    }

    .carousel__control:before {
        border: .1rem solid transparent;
        border-radius: .155rem;
        content: "";
        display: block;
        height: .5rem;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: .5rem;
        border-bottom-color: #fff;
        border-left-color: #fff;
        margin-left: .125rem;
    }

    .project-info {
        height: 100%;
        min-height: 100vh;
        background-color: #EEEFE5;

    }

    .project-grid {
        padding-left: 0;
        padding-right: 0;
    }

    .sides-margin {
        margin-right: 15%;
        margin-left: 15%;
        min-height: 90vh;
    }
</style>