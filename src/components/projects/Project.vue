<template>
    <div >
        <div class="project-content">
            <mdc-layout-grid class="project-grid">
                <mdc-layout-cell desktop=4 tablet=4 class="featured-image-container">
                    <router-link :to="{name: 'ProjectInfo', params: {id: project.id}}" tag="img" class="featured-image" :src="project.featured_image"></router-link>
                </mdc-layout-cell>

                <mdc-layout-cell desktop=8 tablet=8 class="project-description-container">
                    <router-link :to="{name: 'ProjectInfo', params: {id: project.id}}" tag="p" class="title" >{{project.title}}</router-link>
                    <!--<br>-->
                    <!--<mdc-chip-set style="padding-left:0">-->
                        <!--<mdc-chip v-for="tag in project.tags" :key="tag">{{tag}}</mdc-chip>-->
                    <!--</mdc-chip-set>-->
                    <br>
                    <p class="description">{{project.short_description}}</p>
                </mdc-layout-cell>
            </mdc-layout-grid>
            <div class="divider" v-if="line"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Project",
        props: {
            project: {
                type: Object,
                required: true
            },
            line: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>



    .featured-image-container {
        text-align: left;
        padding: 0;
    }

    .project-description-container {
        text-align: left;
        padding-top: 0;
    }

    .featured-image {
        width: 100%;
        height: 193px;
        object-fit: cover;
    }

    .featured-image:hover {
        cursor: pointer;
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
        font-family: "Roboto Medium", serif;
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
        font-family: "Open Sans", serif;
        font-weight: 500;
        font-size: 1.05rem;
        color: #747373;
        padding: 0;
        margin: 0;
    }

    .mdc-chip.mdc-chip--selected {
      color: #ff0044 !important;
    }
    .mdc-chip.mdc-chip--selected:hover {
        color: #ff0044 !important;
    }

    .mdc-chip.mdc-chip--selected::before, .mdc-chip.mdc-chip--selected::after{
        background-color: #ff0044 !important;
    }

    .mdc-chip__checkmark-path {
        stroke: #ff0044 !important;
    }
</style>