<template>
    <div v-sticky="{stickyTop: 0}">
        <div class="bg" ref="bg">
            <!--<mdc-tab-bar @change="onSelected">-->
            <mdc-tab-bar>
                <mdc-tab v-for="(s, index) in sections" :key="index" :active="$root.tabActive===index" event="clickTab"
                         :event-args=[index]>{{sections[index]}}
                </mdc-tab>
            </mdc-tab-bar>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Tabs",
        methods: {
            onSelected(idx) {
                if (this.$root.tabActive === idx) return; //Prevent duplicate animations
                this.$root.tabActive = idx;

                window.removeEventListener('scroll', this.onScroll);

                if (this.cancelScroll !== undefined) {
                    this.cancelScroll();
                }

                const section = `#${this.sections[idx].toLowerCase()}`;
                let self = this;
                this.cancelScroll = this.$scrollTo(section, 500, {
                    onDone() {
                        window.addEventListener('scroll', self.onScroll);
                        self.cancelScroll = undefined;
                    }
                });
            },
            onScroll() {
                let currentItem = this.getItemInsideWindow();
                if (this.$root.tabActive !== currentItem) {
                    this.$root.tabActive = currentItem;
                }
            },
            getItemInsideWindow() {
                let currentItem;

                // Must be called with 'call' to prevent bugs on some devices
                [].forEach.call(this.sections, (item, i) => {
                    const isFirstItem = (item === this.sections[0]);
                    item = item.toLowerCase();
                    const target = document.getElementById(item);
                    if (!target) return;

                    const distanceFromTop = window.scrollTop || window.pageYOffset;
                    const isScreenPastSection = distanceFromTop >= this.getOffsetTop(target);
                    const isScreenBeforeSectionEnd = distanceFromTop

                        < (this.getOffsetTop(target) - this.toolbarHeight) + target.offsetHeight;

                    if (isFirstItem) {
                        if (isScreenBeforeSectionEnd) currentItem = i;
                    }
                    if (isScreenPastSection) currentItem = i;
                });

                return currentItem;
            },
            getOffsetTop(element) {
                let yPosition = 0;
                let nextElement = element;

                while (nextElement) {
                    yPosition += (nextElement.offsetTop);
                    nextElement = nextElement.offsetParent;
                }

                if (window.offsetTop) {
                    yPosition -= window.offsetTop;
                }

                return yPosition;
            },
        },
        data() {
            const sections = ['About', 'Projects', 'Contact'];
            return {
                sections,
                cancelScroll: undefined,
                toolbarHeight: 0
            }
        },
        mounted: function () {
            window.addEventListener('scroll', this.onScroll);

            let self = this;
            this.toolbarHeight = this.$refs.bg.clientHeight;
            this.$root.$on('clickTab', function (index) {
                self.onSelected(index);
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