<template>
  <el-container>

    <!--导航栏菜单-->
    <el-col :span="24">
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" router style="background-color: #FAFAFA">

        <el-submenu index="/apimanagement">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>API开发管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/apiManagement">
              <i class="fa fa-cog icon"></i>
              <span class="menu-item-font">项目管理</span>
            </el-menu-item>

            <el-menu-item index="/projectOverview">
              <i class="fa fa-area-chart icon"></i>
              <span class="menu-item-font">项目概况</span>
            </el-menu-item>

            <el-menu-item index="/apiDocument">
              <i class="fa fa-book icon"></i>
              <span class="menu-item-font">API文档</span>
            </el-menu-item>

            <el-menu-item index="/apiQucikTest">
              <i class="fa fa-bolt icon"></i>
              <span class="menu-item-font">API快速测试</span>
            </el-menu-item>

            <el-menu-item index="/apiAutoTest">
              <i class="fa fa-random icon"></i>
              <span class="menu-item-font">API自动化测试</span>
            </el-menu-item>

            <el-menu-item index="/statusCode">
              <i class="fa fa-code icon"></i>
              <span class="menu-item-font">状态码</span>
            </el-menu-item>

            <el-menu-item index="/projectDocument">
              <i class="fa fa-file icon"></i>
              <span class="menu-item-font">项目文档</span>
            </el-menu-item>

            <el-menu-item index="/envManagement">
              <i class="fa fa-cube icon"></i>
              <span class="menu-item-font">环境管理</span>
            </el-menu-item>

            <el-menu-item index="/coopManagement">
              <i class="fa fa-users icon"></i>
              <span class="menu-item-font">协作管理</span>
            </el-menu-item>

            <el-menu-item index="/projectNews">
              <i class="fa fa-bar-chart icon"></i>
              <span class="menu-item-font">项目动态</span>
            </el-menu-item>

          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="/sqlmanagement">
          <i class="el-icon-document"></i>
          数据库管理
        </el-menu-item>

        <el-menu-item index="/pluginmanagement"  >
          <i class="el-icon-search"></i>
          插件管理
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-container>

</template>

<script>
import ProjectOverview from "./api/project/ProjectOverview.vue";
export default {
  name: "appAside",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #444;
}
.icon {
  width: 20px;
  margin-left: 4px;
}
.menu-item-font {
  margin: 0 10px;
}
.el-menu-item-group{
  background:#EEF1F6
}
</style>
