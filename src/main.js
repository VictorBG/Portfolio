// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueMDCAdapter from 'vue-mdc-adapter'
import VueSmoothScroll from 'vue-scrollto'
import './theme.scss'
import App from './App'
import router from './router'
import VueSticky from 'vue-sticky'
import VueCarousel from '@chenfengyuan/vue-carousel';
import VueAgile from 'vue-agile'
import VueScrollactive from 'vue-scrollactive';
import {VLazyImagePlugin} from "v-lazy-image";

Vue.config.productionTip = false;

Vue.use(VueMDCAdapter);
Vue.use(VueSticky);
Vue.use(VLazyImagePlugin);
Vue.use(VueAgile);
Vue.use(VueSmoothScroll);
Vue.use(VueScrollactive);
Vue.component(VueCarousel.name, VueCarousel);


Vue.directive('sticky', VueSticky);


/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  data() {
    return {
      tabActive: 0,
      navigated: false
    }
  }
}).$mount('#app');



