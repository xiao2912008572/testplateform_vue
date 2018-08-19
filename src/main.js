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
import SingleProject from './components/project/SingleProject'

// 二级路由
import ProjectOverview from './components/api/project/ProjectOverview'
import ApiDocument from './components/api/project/ApiDocument.vue'
import ApiQucikTest from './components/api/project/ApiQucikTest.vue'
import ApiAutoTest from './components/api/project/ApiAutoTest.vue'
import StatusCode from './components/api/project/StatusCode.vue'
import ProjectDocument from './components/api/project/ProjectDocument.vue'
import EnvManagement from './components/api/project/EnvManagement.vue'
import CoopManagement from './components/api/project/CoopManagement.vue'
import ProjectNews from './components/api/project/ProjectNews.vue'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);
//如果服务器无法处理编码为application/json的请求，可以启用emulateJSON选项。启用之后，请求会以application/x-www-form-urlencoded为MIME type，就像普通的HTML表单一样。
Vue.http.options.emulateJSON = true;



const routes = [
  //给路由添加name属性
  { 'path': '/', name: "mainLink", redirect: '/apiManagement', component: Main },

  // project相关路由
  { 'path': '/apiManagement', name: "apiManagementLink", component: ApiManagement },
  { 'path': '/projectOverview', name: "projectOverviewLink", component: ProjectOverview },
  { 'path': '/apiDocument', name: "apiDocumentLink", component: ApiDocument },
  { 'path': '/apiQucikTest', name: "apiQucikTestLink", component: ApiQucikTest },
  { 'path': '/apiAutoTest', name: "apiAutoTestLink", component: ApiAutoTest },
  { 'path': '/statusCode', name: "statusCodeLink", component: StatusCode },
  { 'path': '/projectDocument', name: "projectDocumentLink", component: ProjectDocument },
  { 'path': '/envManagement', name: "envManagementLink", component: EnvManagement },
  { 'path': '/coopManagement', name: "coopManagementLink", component: CoopManagement },
  { 'path': '/projectNews', name: "projectNewsLink", component: ProjectNews },


  { 'path': '/sqlManagement', name: "sqlManagementLink", component: SqlManagement },
  { 'path': '/pluginManagement', name: "pluginManagementLink", component: PluginManagement },
  { 'path': '/singleProject/:id', name: "singleProject", component: SingleProject }


];
const router = new VueRouter({
  routes,
  mode: 'history'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
