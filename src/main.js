// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueMDCAdapter from 'vue-mdc-adapter'
import vueSmoothScroll from 'vue-smooth-scroll'
import './theme.scss'
import App from './App'
import router from './router'
import VueSticky from 'vue-sticky'
import VueCarousel from '@chenfengyuan/vue-carousel';
import VueAgile from 'vue-agile'

Vue.config.productionTip = false;

Vue.use(VueMDCAdapter);
Vue.use(vueSmoothScroll);
Vue.use(VueSticky);
Vue.use(VueAgile);
Vue.component(VueCarousel.name, VueCarousel);


Vue.directive('sticky', VueSticky);




/* eslint-disable no-new */
const app = new Vue({
    el: '#app',
    data: {
       distanceTopProjects: 0
    },
    router,
    template: '<App/>',
    components: {App},
    mounted: function () {
        this.$root.$on('switchTab', function (index) {

        })
    }
}).$mount('#app')




