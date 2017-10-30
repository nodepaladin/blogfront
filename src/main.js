// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';
// import VueMaterial from 'vue-material';
// import 'vue-material/dist/vue-material.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import App from './App';
import router from './router';

Vue.use(iView);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
