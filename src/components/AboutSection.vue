<template>
  <div class="bg" id="about" ref="about">
    <div class="sides-margin-about">
      <mdc-layout-grid>
        <mdc-layout-cell desktop=4 tablet=8 align="middle">
          <img class="profile-image mdc-elevation--z8" id="logo" src="../assets/avatar.png">
        </mdc-layout-cell>
        <mdc-layout-cell desktop=8 tablet=8 align="middle">
          <p class="main-text">Computer science student ending his degree with experience in design
            and programming. I'm quietly confident, naturally curious, and perpetually improving my chops.<br><br>My
            main goal
            is to continue developing my career and grow alongside professionals who trust me.</p>
        </mdc-layout-cell>
      </mdc-layout-grid>

      <div class="space-50">
      </div>
      <studies/>
      <div class="space-50">
      </div>
      <work/>

    </div>
  </div>

</template>

<script>

  import ServiceCard from './header/ServiceCard';
  import services from "../data/services.json";
  import Studies from "./about/Studies";
  import Work from "./about/Work";

  export default {
    name: "AboutSection",
    components: {
      Work,
      Studies,
      ServiceCard
    },
    data() {
      return {
        services
      }
    }
  }
</script>

<style scoped>


  .bg {
    background-color: #EEEFE5;
    padding: 100px 5% 75px;
  }

  .profile-image {
    border-radius: 50% !important;
    max-height: 150px;
  }

  .main-text {
    color: #747373;
    font-size: 1.05rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    text-align: justify;
    text-justify: inter-word;
  }

  .sides-margin-about {
    margin-right: 15%;
    margin-left: 15%;
  }

  .space-50 {
    height: 50px;
  }

  @media only screen and (max-width: 600px) {
    .sides-margin-about {
      margin-right: 3%;
      margin-left: 3%;
    }
  }
</style>

