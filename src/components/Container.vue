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
          <router-view></router-view>
        </el-container>
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
  import Aside from '../components/Aside'
  import Header from '../components/Header'
  import Main from '../components/Main'

  export default {
    name: "container",
    components: {
      appHeader: Header,
      appMain: Main,
      appAside: Aside
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #409EFF;
    color: #333;
    text-align: center;
    line-height: 60px;
    margin-top: -8px;
    margin-left: -8px;
    margin-right: -9px;
  }

  .el-aside {
    /*background-color: white;*/
    background-color: #FAFAFA;
    color: #333;
    text-align: left;
    line-height: 200px;
    /* height: 1200px; */
    height: 100%;
  }
</style>
