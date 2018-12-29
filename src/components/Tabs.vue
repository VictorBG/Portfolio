<template>

    <!--TODO: Need to set elevation on this but only on the bottom-->
    <div v-sticky="{stickyTop: 0}">
        <!-- mdc-elevation--z6 -->
        <div class="bg ">
            <mdc-tab-bar @change="onSelected">
                <!--TODO I don't know how to put this into a for statement without setting the active variable to all-->
                <mdc-tab active>{{sections[0]}}</mdc-tab>
                <mdc-tab>{{sections[1]}}</mdc-tab>
                <mdc-tab>{{sections[2]}}</mdc-tab>
            </mdc-tab-bar>
        </div>

    </div>
</template>

<script>

    export default {
        name: "Tabs",
        methods: {
            onSelected(idx) {
                console.log(`selected index: ${idx}`);
            }
        },
        data() {
            const sections = ['About', 'Projects', 'Contact'];
            return {
                sections,
            }
        }
    }
</script>

<style scoped>

    template {
        align-content: center;
        text-align: center;
    }

    .bg {
        background-color: #DEDECD;
        z-index: 10;
    }

</style>