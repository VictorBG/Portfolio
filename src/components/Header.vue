<template>
    <div>
        <img id="logo" src="../assets/logo_vbg.svg">
        <h3 id="text_introduction">Software engineer</h3>
        <h4 id="desc_introduction">Software engineer student currently working as a Software Engineer Intern at TomTom Telematics.</h4>
        <br>
    </div>
</template>

<script>

    export default {
        name: "Header",
    }
</script>

<style scoped>
    template {
        margin: 0;
        padding: 0;
    }
    div {
        background-color: #DEDECD;
    }

    #logo {
        height: 14%;
        width: 14%;
        margin-top: 64px;
        margin-bottom: 64px;
        min-height: 144px;
        min-width: 144px;
    }

    #text_introduction {
        font-family: 'Montserrat', sans-serif;
        padding-bottom: 8px;
        padding-right: 32px;
        padding-left: 32px;
        line-height: 30px;
        font-size: 1.8rem;
        font-weight: 600;


    }

    #desc_introduction {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        padding-bottom: 32px;
        padding-right: 32px;
        padding-left: 32px;
        line-height: 30px;
        color: #747373;
        font-size: 1rem;

    }

    h3 {
        margin: 0;
    }


</style>
