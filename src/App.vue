<template>
    <div id="app">
        <!--If we put Header and Tabs in the same component, tabs lose the sticky ability, which we need-->
        <Header></Header>
        <Tabs></Tabs>
        <AboutSection></AboutSection>
        <ProjectsSection></ProjectsSection>
        <Contact></Contact>
        <Footer></Footer>
    </div>
</template>

<script>

    import Header from './components/Header'
    import Tabs from "./components/Tabs";
    import AboutSection from './components/AboutSection'
    import ProjectsSection from './components/ProjectsSection'
    import Contact from './components/Contact'
    import Footer from './components/Footer'

    export default {
        name: 'app',
        components: {
            Header,
            Tabs,
            AboutSection,
            ProjectsSection,
            Contact,
            Footer
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

    h3 {
        font-weight: 500;
    }

    .sides-margin {
        margin-left: 8%;
        margin-right: 8%;
    }
</style>
