import Main from './components/Main'
import ApiManagement from './components/api/projectManagement/ProjectManagement.vue'
import SqlManagement from './components/sql/SqlManagement'
import PluginManagement from './components/plugin/PluginManagement'
import SingleProject from './components/project/SingleProject'


// 二级路由
import ProjectOverview from './components/api/projectOverview/ProjectOverview.vue'
import ApiDocument from './components/api/apiDocument/ApiDocument.vue'
import ApiQucikTest from './components/api/apiQuickTest/ApiQucikTest.vue'
import ApiAutoTest from './components/api/apiAutoTest/ApiAutoTest.vue'
import StatusCode from './components/api/statusCode/StatusCode.vue'
import ProjectDocument from './components/api/projectDocument/ProjectDocument.vue'
import EnvManagement from './components/api/envManagement/EnvManagement.vue'
import CoopManagement from './components/api/coopManagement/CoopManagement.vue'
import ProjectNews from './components/api/projectNews/ProjectNews.vue'

export const routes = [
  //给路由添加name属性
  { 'path': '/', name: "mainLink", redirect: '/apiManagement', component: Main },

  // project相关路由
  { 'path': '/apiManagement', name: "apiManagementLink", component: ApiManagement }, // 项目管理
  { 'path': '/projectOverview/:id', name: "projectOverviewLink", component: ProjectOverview },// 项目概况
  { 'path': '/apiDocument', name: "apiDocumentLink", component: ApiDocument },
  { 'path': '/apiQucikTest', name: "apiQucikTestLink", component: ApiQucikTest },
  { 'path': '/apiAutoTest', name: "apiAutoTestLink", component: ApiAutoTest },
  { 'path': '/statusCode', name: "statusCodeLink", component: StatusCode },
  { 'path': '/projectDocument', name: "projectDocumentLink", component: ProjectDocument },
  { 'path': '/envManagement/:id', name: "envManagementLink", component: EnvManagement },
  { 'path': '/coopManagement', name: "coopManagementLink", component: CoopManagement },
  { 'path': '/projectNews', name: "projectNewsLink", component: ProjectNews },


  { 'path': '/sqlManagement', name: "sqlManagementLink", component: SqlManagement },
  { 'path': '/pluginManagement', name: "pluginManagementLink", component: PluginManagement },
  { 'path': '/singleProject/:id', name: "singleProject", component: SingleProject }

];
