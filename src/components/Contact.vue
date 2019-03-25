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
            <mdc-snackbar v-model="snack"></mdc-snackbar>
        </div>
    </div>
</template>

<script>
    import AWS from 'aws-sdk';
    import config from '../data/aws.json'

    AWS.config.update(config);

    export default {
        name: "Contact",
        data() {
            return {
                name: "",
                mail: "",
                subject: "",
                message: "",
                snack: {
                    message: "",
                    timeout: 2000
                }
            }
        },
        methods: {
            onClick() {
                if (!this.name) {
                    this.snack = {
                        message: 'Name cannot be empty',
                        timeout: 2000
                    };
                    return;
                }

                if (!this.mail) {
                    this.snack = {
                        message: 'Mail cannot be empty',
                        timeout: 2000
                    };
                    return;
                }

                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!re.test(String(this.mail).toLowerCase())) {
                    this.snack = {
                        message: 'Mail format is not correct',
                        timeout: 2000
                    };
                    return;
                }

                if (!this.subject) {
                    this.snack = {
                        message: 'Subject cannot be empty',
                        timeout: 2000
                    };
                    return;
                }

                if (!this.message) {
                    this.snack = {
                        message: 'Message cannot be empty',
                        timeout: 2000
                    };
                    return;
                }

                let data = {
                    "name": this.name,
                    "mail": this.mail,
                    "subject": this.subject,
                    "message": this.message
                };

                let params = {
                    Destination: {
                        ToAddresses: [
                            'victorblancogarcia3@gmail.com',
                        ]
                    },
                    Message: {
                        Body: {
                            Html: {
                                Charset: "UTF-8",
                                Data: `New contact from website:<br><br>From: ${data['mail']}<br>Name: ${data['name']} <br><br> Subject: <strong> ${data['subject']} </strong><br><br> Message: ${data['message']}`
                            },
                            Text: {
                                Charset: "UTF-8",
                                Data: `New contact from website! From: ${data['mail']}; Name: ${data['name']}; Subject: ${data['subject']}; Message: ${data['message']}`
                            }
                        },
                        Subject: {
                            Charset: 'UTF-8',
                            Data: 'Contact from website'
                        }
                    },
                    Source: 'Víctor Blanco <victorblancogarcia3@gmail.com>',
                };
                let sendPromise = new AWS.SES().sendEmail(params).promise();
                let self = this;
                sendPromise.then(
                    function (data) {
                        self.snack = {
                            message: 'Thanks for contacting with me, I will answer you as soon as possible!',
                            timeout: 3500
                        };
                    }).catch(
                    function (err) {
                        self.snack = {
                            message: 'An error has occurred, please try again later.',
                            timeout: 2000
                        };
                    });
            }
        }
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
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;
    }

    .desc {
        font-size: 1.1rem;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
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
