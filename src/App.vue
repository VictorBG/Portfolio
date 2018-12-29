<template>
    <div id="app" class="mdc-elevation--z7">
        <!--If we put Header and Tabs in the same component, tabs lose the sticky ability, which we need-->
        <Header></Header>
        <Tabs></Tabs>
        <AboutSection></AboutSection>
        <ProjectsSection></ProjectsSection>
        <!--Dummy section to test scroll-->
        <div style="height: 1500px; background-color: red"></div>
    </div>
</template>

<script>

    import Header from './components/Header'
    import Tabs from "./components/Tabs";
    import AboutSection from './components/AboutSection'
    import ProjectsSection from './components/ProjectsSection'

    export default {
        name: 'app',
        components: {
            Header,
            Tabs,
            AboutSection,
            ProjectsSection
        }
    }
</script>

<style>

    html, body {
        padding: 0;
        margin: 0;
    }

    #app {
        font-family: 'Roboto', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .link {
        color: #f04;
        text-decoration: none;
    }
</style>
