<!--suppress ALL -->
<template>
    <div class="project-info">
        <div class="sides-margin">
            <h3 class="title">{{currentProject.title}}</h3>
            <br>
            <mdc-layout-grid class="project-grid">
                <mdc-layout-cell desktop=6 tablet=6 class="featured-image-container">

                </mdc-layout-cell>

                <mdc-layout-cell desktop=6 tablet=6 class="project-description-container">

                </mdc-layout-cell>
            </mdc-layout-grid>
        </div>
        <div class="footer">
            <p>Handmade by me © 2019</p>
        </div>
    </div>
</template>

<script>

    import projects from "../data/projects.json";

    export default {
        name: "ProjectInfo",
        data() {
            const emptyProject = {title: "",};
            return {
                currentProject: emptyProject,
                nextProject: emptyProject,
                previousProject: emptyProject,
                showNext: false,
                showPrevious: false,
            }
        },
        async created() {
            let id = this.$route.params.id;
            var i=0;

            for (; i < projects.length; ++i) {
                if (projects[i].id == id) {
                    break;
                }
            }
            this.currentProject = projects[i];

            if (i > 0) {
                this.showPrevious = true;
                this.previousProject = projects[i - 1];
            }

            if (i < projects.length - 1) {
                this.showNext = true;
                this.nextProject = projects[i + 1];
            }

        }
    }
</script>

<style scoped>

    .footer {
        background-color: #EEEFE5;
        padding: 16px;
    }

    .project-info {
        background-color: #DEDECD;
    }

    .project-grid {
        padding-left: 0;
        padding-right: 0;
    }

    .title {
        font-family: "Roboto Medium", serif;
        font-size: 1.80rem;
        color: black;
        padding-top: 50px;
        margin: 0;
    }

    .footer p {

        font-family: "Roboto Light", serif;
        color: #747373;
        margin: 0;

    }
</style>