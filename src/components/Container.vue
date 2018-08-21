<template>
  <!--页面布局-->
  <el-container>
    <el-header>
      <!--1. 头部-->
      <app-header></app-header>
    </el-header>
    <el-container>

      <el-aside width="230px">
        <!--2. 导航菜单栏-->
        <app-Aside></app-Aside>
      </el-aside>

      <el-main>
        <!--3. 内容部分-->
        <app-Main></app-Main>
        <!--路由视图-->
        <el-container>
          <router-view v-if="isRouterAlive"></router-view>
        </el-container>
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
import Aside from "../components/Aside";
import Header from "../components/Header";
import Main from "../components/Main";

export default {
  name: "container",
  components: {
    appHeader: Header,
    appMain: Main,
    appAside: Aside
  },
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      // isRouterAlive //true or false 来控制
      isRouterAlive: true
    };
  },
  methods: {
    // 通过声明reload方法，控制router-view的显示或隐藏，从而控制页面的再次加载，这边定义了
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style scoped>
.el-header {
  background-color: #409eff;
  color: #333;
  text-align: center;
  line-height: 60px;
  margin-top: -8px;
  margin-left: -8px;
  margin-right: -9px;
}

.el-aside {
  /*background-color: white;*/
  background-color: #fafafa;
  color: #333;
  text-align: left;
  line-height: 200px;
  /* height: 1200px; */
  height: 100%;
}
</style>
