<template>
  <div>
    <div class="project-content">
      <mdc-layout-grid class="project-grid">
        <mdc-layout-cell desktop=4 tablet=4 class="featured-image-container">
          <router-link :to="{name: 'ProjectInfo', params: {id: project.id}}" tag="img" class="featured-image"
                       :src="project.featured_image"></router-link>
        </mdc-layout-cell>

        <mdc-layout-cell desktop=8 tablet=4 class="project-description-container">
          <router-link :to="{name: 'ProjectInfo', params: {id: project.id}}" tag="p" class="title">{{project.title}}
          </router-link>
          <!--<br>-->
          <!--<mdc-chip-set style="padding-left:0">-->
          <!--<mdc-chip v-for="tag in project.tags" :key="tag">{{tag}}</mdc-chip>-->
          <!--</mdc-chip-set>-->

          <br>
          <p class="description" v-html="project.short_description"></p>
          <div style="height: 40px"></div>
          <mdc-button class="view-more-button" @click="goTo(project.id)" dense outlined>VIEW MORE</mdc-button>

        </mdc-layout-cell>
      </mdc-layout-grid>
      <div class="divider" v-if="line"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Project',
    props: {
      project: {
        type: Object,
        required: true,
      },
      line: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      goTo(id) {
        this.$router.push({name: 'ProjectInfo', params: {id: id}})
      }
    }
  };
</script>

<style scoped>


  .featured-image-container {
    text-align: left;
    padding: 0;
  }

  .project-description-container {
    text-align: left;
    padding-top: 0;
    position: relative
  }

  .featured-image {
    width: 100%;
    height: 193px;
    object-fit: cover;
    border-radius: 8px;
    /*-webkit-transform: scale(1);*/
    /*transform: scale(1);*/
    -webkit-transition: .2s ease-in-out;
    transition: .2s ease-in-out;
  }

  .featured-image:hover {
    cursor: pointer;
    /*border: 2px solid #ff0044;*/
    -webkit-filter: drop-shadow(4px 4px 3px gray);
    filter: drop-shadow(4px 4px 3px gray);
    /*-webkit-transform: scale(1.01);*/
    /*transform: scale(1.01);*/
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  }

  .project-content {
    padding-top: 32px;
    padding-bottom: 16px;
    padding-left: 0;
    margin: auto;
    max-width: 1284px;
  }

  .project-grid {
    padding-left: 0;
    padding-right: 0;
  }

  .divider {
    height: 1px;
    width: 100%;
    max-width: 1284px;
    background-color: rgba(116, 115, 115, .2);
  }

  .title {
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.40rem;
    color: black;
    padding: 0;
    margin: 0;
    transition: all .2s;
  }

  .title:hover {
    cursor: pointer;
    color: #ff0044;
  }

  .description {
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    width: auto;
    font-size: 1.05rem;
    color: #747373;
    padding: 0;
    margin: 0;
    text-align: justify;
    text-justify: inter-word;
  }

  .view-more-button {
    position: absolute;
    bottom: 0;
    margin-bottom: 4px;
  }

</style>
