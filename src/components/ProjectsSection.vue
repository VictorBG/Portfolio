<template>
    <div class="bg">
        <div class="sides-margin">
            <h3 class="title">PROJECTS</h3>
            <br>
            <h3 id="text_introduction">You can see more examples on my <a class="link" target="_blank" href="https://github.com/VictorBG">GitHub</a></h3>
            <div class="space"></div>
            <project v-for="(project, index) in projects" :key="project.id" :project="project" :line="index!==Object.keys(projects).length - 1"></project>
        </div>
    </div>

</template>

<script>

    import Project from "./projects/Project"
    import projects from "../data/projects.json";

    export default {
        name: "ProjectsSection",
        components: {
            Project
        },
        data() {
            return {
                projects
            }
        }
    }
</script>

<style scoped>

    .services-grid {
        margin-top: 100px;
    }

    .space {
        height: 50px;
    }

    .bg {
        background-color: #DEDECD;
        padding-bottom: 75px;
        padding-top: 50px;
    }

    .sides-margin {
        margin-left: 8%;
        margin-right: 8%;
    }

    .profile-image {
        border-radius: 50% !important;
        max-height: 150px;
    }

    .title {
        font-size: 1.6rem;
        font-family: "Roboto Black", serif;

    }
</style>

