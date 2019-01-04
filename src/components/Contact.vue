<template>
    <div class="bg" id="contact" ref="contact">
        <div class="sides-margin">
            <h3 class="title">CONTACT</h3>
            <h4 class="desc">Let's build something together! Or
                <a class="link" href="mailto:victorblancogarcia3@gmail.com">email me</a> if you have any other
                questions.</h4>
            <div class="space"></div>
            <div class="form-container">
                <div class="subject">
                    <mdc-textfield class="cinput" v-model="name" id="name" label="Name"
                                   outline></mdc-textfield>
                </div>
                <div class="subject">
                    <mdc-textfield class="cinput" v-model="mail" id="mail"
                                   label="Mail" outline></mdc-textfield>
                </div>
                <div class="subject">
                    <mdc-textfield class="cinput" v-model="subject" id="subject"
                                   label="Subject" outline></mdc-textfield>
                </div>
                <div class="subject">
                    <mdc-textfield class="cinput" v-model="message" id="message"
                                   label="Message" multiline rows="4" cols="400"></mdc-textfield>
                </div>
            </div>
            <mdc-button @click="onClick" raised>SEND</mdc-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        data() {
            return {
                name: "",
                mail: "",
                subject: "",
                message: ""
            }
        },
        methods: {
            onClick() {
                sendMail();
            }
        }
    }

    let sendMail = function () {
        //TODO Check if all texfields are set and has valid data to send mail
        console.log("aaaaa");


        //TODO Once checked prepare all the data and send the mail to the contact mail contact@victorblancogarcia.com
    }
</script>

<style scoped>
    .bg {
        background-color: #EEEFE5;
        padding-bottom: 50px;
        padding-top: 50px;
    }

    .title {
        font-size: 1.6rem;
        font-family: "Roboto Black", serif;
    }

    .desc {
        font-size: 1.1rem;
        font-family: "Roboto Medium", serif;
        font-weight: normal;
        color: #474748;
    }

    .space {
        height: 50px;
    }

    .form-container {
        max-width: 800px;
        margin: auto;
        text-align: start;
        padding-bottom: 50px;
    }

    .cinput {
        width: 100%;
    }

    .subject {
        margin-left: 24px;
        padding-right: 24px;
    }
</style>