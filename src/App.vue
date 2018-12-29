<template>
    <div id="app" class="mdc-elevation--z7">
        <!--If we put Header and Tabs in the same component, tabs lose the sticky ability, which we need-->
        <Header></Header>
        <Tabs></Tabs>
        <AboutSection></AboutSection>
        <div style="height: 1500px; background-color: red"></div>
    </div>
</template>

<script>

    import Header from './components/Header'
    import Tabs from "./components/Tabs";
    import AboutSection from './components/AboutSection'

    export default {
        name: 'app',
        components: {
            Header,
            Tabs,
            AboutSection
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
