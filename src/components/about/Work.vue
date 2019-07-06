<template>
  <div>
    <h3 class="title">Work experience</h3>

    <div style="height: 30px"></div>

    <div v-for="(item, index) in studies" style="display: table;">

      <div class="row">
        <div class="logo-column">
          <hr class="vertical top" v-if="index!==0"/>
          <img class="profile-image-study" id="logo" height="50" width="50" :src="item.logo" alt="Img">
          <hr class="vertical" v-if="index!== studies.length -1 "/>
        </div>

        <div class="column">
          <div style="height: 10px" v-if="index!==0"></div>
          <p class="title-text">{{item.title}}</p>
          <p class="company-text">{{item.company}}</p>
          <p class="date-text">{{item.from}} - {{item.to}}</p>
          <br>
          <p class="desc-text" v-if="item.description != null">{{item.description}}</p>
          <br>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  import studies from '../../data/work'

  export default {
    name: "Work",
    data() {
      return {
        studies
      }
    }
  }
</script>

<style scoped>
  .title {
    font-size: 1.3rem !important;
    padding-top: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
  }

  .profile-image-study {
    height: 50px;
    width: 50px;
    background-size: cover;
    border-radius: 50% !important;
    padding: 0;
  }

  .title-text {
    color: #302f2f;
    font-size: 0.9rem;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    margin: 8px;
  }

  .company-text {
    color: #4b4a4a;
    font-size: 0.8rem;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    margin: 8px;
  }

  .date-text {
    color: #7e7d7d;
    font-size: 0.8rem;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin: 8px;
  }

  .desc-text {
    color: #7e7d7d;
    font-size: 0.8rem;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    margin: 8px;
  }

  hr.vertical {
    width: 1px;
    min-height: 110px;
    height: 100%;
    margin-top: -10px;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 0;
    background-color: rgb(196, 196, 196);
    border-color: rgba(255, 0, 0, 0);
  }

  hr.top {
    min-height: 20px;
  }

  .row:after {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    margin: 0;
    display: table-row;
    clear: both;
    content: "";
    table-layout: fixed;
  }

  .logo-column {
    float: left;
    width: 50px;
    align-items: center;
    overflow-wrap: break-word;
  }

  .column {
    float: left;
    width: auto;
    margin-left: 16px;
    overflow-wrap: break-word;
    max-width: 80%;
  }

  @media only screen and (max-width: 600px) {
    .title-text {
      font-size: 0.9rem;
      overflow-wrap: break-word;
    }

    .company-text {
      font-size: 0.8rem;
      overflow-wrap: break-word;
    }

    .column {
      max-width: 70%;
    }
  }

</style>
