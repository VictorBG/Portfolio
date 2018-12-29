<template>
    <div>
        <img id="logo" src="../assets/logo_vbg.svg">
        <h3 id="text_introduction">Hi, my name is Victor. I'm a software developer from Barcelona, Spain. I can help you
            build your next product.<br>You can get in touch with me <a class="link" href="#contact">here</a></h3>
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
        font-family: "Roboto Medium", sans-serif;
        padding-bottom: 32px;
        padding-right: 32px;
        padding-left: 32px;
        font-weight: normal;
        line-height: 30px;
        font-size: medium;
    }

    h3 {
        margin: 0;
    }


</style>