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

    .space {
        height: 50px;
    }

    .bg {
        background-color: #DEDECD;
        padding-bottom: 75px;
        padding-top: 50px;
    }

    .title {
        font-size: 1.6rem;
        font-family: "Roboto Black", serif;

    }
</style>

