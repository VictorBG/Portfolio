<template>
    <div>
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
    import HelloWorld from "./components/HelloWorld";

    export default {
        name: 'MainSection',
        components: {
            HelloWorld,
            Header,
            Tabs,
            AboutSection,
            ProjectsSection,
            Contact,
            Footer
        }
    }
</script>

<style scoped>

</style>