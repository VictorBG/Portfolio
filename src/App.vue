<template>
    <div id="app">

            <router-view name="main"></router-view>

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
        name: 'app',
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

<style>

    html, body {
        padding: 0;
        margin: 0;
    }

    .slider img {
        max-width: 500px !important;
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

    ::selection{
        background: #ff0044;
        color: white;
    }
</style>
