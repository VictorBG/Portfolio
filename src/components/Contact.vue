<template>
  <div class="bg" id="contact" ref="contact">
    <div class="sides-margin">
      <mdc-button @click="onClick" raised>Contact me</mdc-button>
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
        message: "",
        snack: {
          message: "",
          timeout: 2000
        }
      }
    },
    methods: {
      onClick() {
        window.location.href  = "mailto:victorblancogarcia3@gmail.com";
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
