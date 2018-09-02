// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import global_ from './components/Global.vue'
import Notification from './components/common/Notification'
import Pagination from './components/common/Pagination.vue'
import { routes } from './routes.js'
import { store } from './store/store'



Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

//如果服务器无法处理编码为application/json的请求，可以启用emulateJSON选项。启用之后，请求会以application/x-www-form-urlencoded为MIME type，就像普通的HTML表单一样。
Vue.http.options.emulateJSON = true;

// 全局组件注册
Vue.component('toast', Notification);
Vue.component('pagination', Pagination);

// 将上面那个Global.vue文件挂载到Vue.prototype
Vue.prototype.GLOBAL = global_ // 挂在到Vue实例上面


const router = new VueRouter({
  routes,
  mode: 'history'
});

/* eslint-disable no-new */
new Vue({
  //⚠️ 使用store属性: store
  store: store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
