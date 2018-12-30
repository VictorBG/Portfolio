<template>
    <div v-sticky="{stickyTop: 0}">
        <!-- mdc-elevation--z6 -->
        <div class="bg" ref="bg">
            <mdc-tab-bar @change="onSelected">
                <!--TODO I don't know how to put this into a for statement without setting the active variable to all-->
                <mdc-tab v-bind:active="this.tabActive===0">{{sections[0]}}</mdc-tab>
                <mdc-tab v-bind:active="this.tabActive===1">{{sections[1]}}</mdc-tab>
                <mdc-tab v-bind:active="tabActive===2">{{sections[2]}}</mdc-tab>
            </mdc-tab-bar>
        </div>
    </div>
</template>

<script>


    export default {
        name: "Tabs",
        methods: {
            onSelected(idx) {
                location.href = '#' + this.sections[idx].toLowerCase();
            },

        },
        data() {
            const sections = ['About', 'Projects', 'Contact'];
            return {
                sections,
                tabActive: 0
            }
        },
        mounted: function () {
            let self = this;
            let height = self.$refs.bg.clientHeight;
            self.$root.$on('changeScroll', function (index, scroll) {
                if (scroll <= height + 20 && scroll >= height - 20) {
                    if (self.tabActive !== index) {
                        self.tabActive = index;
                        //self.$root.$emit('switchTab', index);
                        console.log(`tabActive: ${index}`);
                    }
                }
            });

            self.$root.$on('forceChangeTab', function (index) {
                if (self.tabActive !== index) {
                    console.log(`tabActive: ${index}`);
                    self.tabActive = index;
                }
            })

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
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.04), 0 8px 8px 1px rgba(0, 0, 0, 0.08);
    }

    mdc-tab span {
        font-family: "Roboto Medium", serif !important;
    }

</style>