// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueMDCAdapter from 'vue-mdc-adapter'
import VueMDCTabs from 'vue-mdc-adapter/dist/tabs'
//TODO top app bar is not implemented in npm package, using toolbar as a workaround meanwhile
import VueMDCTopAppBar from 'vue-mdc-adapter/dist/toolbar'
import VueMDCGrid from 'vue-mdc-adapter/dist/layout-grid'
import VueMDCCard from 'vue-mdc-adapter/dist/card'
import VuewMDCTextfield from 'vue-mdc-adapter/dist/textfield'


import './theme.scss'
import App from './App'
import router from './router'
import VueSticky from 'vue-sticky'


Vue.config.productionTip = false;

Vue.use(VueMDCAdapter);
Vue.use(VueMDCTabs);
Vue.use(VueMDCTopAppBar);
Vue.use(VueMDCGrid);
Vue.use(VueMDCCard);
Vue.use(VuewMDCTextfield);

Vue.use(VueSticky);

Vue.directive('sticky', VueSticky);

import sservices from "./data/services.json";
import projects from "./data/projects.json";


/* eslint-disable no-new */
const app = new Vue({
    el: '#app',
    data: {
        sservices,
        projects
    },
    router,
    template: '<App/>',
    components: {App},
});


