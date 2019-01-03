<template>
    <div class="bg">
        <img id="logo" src="../assets/logo_no_name_black.svg">
        <p>Handmade by me © 2019</p>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .bg {
        background-color: #DEDECD;
        padding: 16px;
    }

    #logo {
        height: 4%;
        width: 4%;
        margin-top: 32px;
        margin-bottom: 16px;
    }

    p {
        font-family: "Roboto Light", serif;
        color: #747373;
        margin: 0;
    }
</style>