// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Main from './components/Main'
import ApiManagement from './components/api/ApiManagement'
import SqlManagement from './components/sql/SqlManagement'
import PluginManagement from './components/plugin/PluginManagement'
import SingleProject from './components/project/SingleProject.vue'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  //给路由添加name属性
  {'path': '/', name: "mainLink", redirect: '/apimanagement', component: Main},
  {'path': '/apiManagement', name: "apiManagementLink", component: ApiManagement},
  {'path': '/sqlManagement', name: "sqlManagementLink", component: SqlManagement},
  {'path': '/pluginManagement', name: "pluginManagementLink", component: PluginManagement},
  {'path': '/singleProject/:id', name: "singleProject", component: SingleProject}


];
const router = new VueRouter({
  routes,
  mode: 'history'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
