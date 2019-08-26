<template>
    <div class="bg">

        <img id="logo" src="../assets/logo_no_name_black.svg">

        <div class="social-container">
            <a class="icon" v-for="s in social" :key="s.id" :href="s.url" target="_blank">
                <mdc-icon :class="s.logo"></mdc-icon>
            </a>
        </div>
        <p>Handmade by me © 2019 | <a class="link" target="_blank" href="https://github.com/VictorBG/Portfolio">This website
            repository</a></p>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        methods: {
            scrollToTop() {
                console.log("scroll");
                window.scrollTo(0, 0);
            }
        },
        data() {
            return {
                social: [
                    {
                        "id": 1,
                        "url": "https://github.com/VictorBG",
                        "logo": "fab fa-github"
                    },
                    {
                        "id": 2,
                        "url": "https://www.linkedin.com/in/victor-blanco-garc%C3%ADa-228939125/",
                        "logo": "fab fa-linkedin-in"
                    },
                    {
                        "id": 3,
                        "url": "skype:vistor.blanco.28?chat",
                        "logo": "fab fa-skype"
                    },
                    {
                        "id": 4,
                        "url": "mailto:victorblancogarcia3@gmail.com",
                        "logo": "fas fa-envelope"
                    },
                    {
                        "id": 5,
                        "url": "https://firebasestorage.googleapis.com/v0/b/portfolio-2e88e.appspot.com/o/Victor%20Blanco%20Garcia%20%5BSoftware%20%20Engineer%5D.pdf?alt=media&token=76402eff-df62-4d4a-882c-8001227dbd03",
                        "logo": "far fa-file"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .bg {
        background-color: #DEDECD;
        padding: 16px;
    }

    .icon {
        padding: 16px;
        color: black;
    }

    .icon:hover {
        color: #ff0044;
        cursor: pointer;
    }

    .social-container {
        margin-top: 32px;
        margin-bottom: 48px;
    }

    #logo {
        height: 56px;
        width: 56px;
        margin-top: 32px;
        margin-bottom: 16px;
    }

    p {
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
        color: #747373;
        margin: 0;
    }
</style>
