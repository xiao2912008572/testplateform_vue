<template>
  <el-container>

    <!--导航栏菜单-->
    <el-col :span="24">
      <!-- {{$route.path}} -->

      <el-menu :default-active="linkUrl($route.path)" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" router style="background-color: #FAFAFA">
        <!-- show是为了控制显示或者不显示 -->
        <div v-show="show" id="menu1">
          <el-menu-item index="/apiManagement">
            <i class="el-icon-menu"></i>
            API开发管理
          </el-menu-item>

          <el-menu-item index="/sqlManagement">
            <i class="el-icon-document"></i>
            数据库管理
          </el-menu-item>

          <el-menu-item index="/pluginManagement">
            <i class="el-icon-search"></i>
            插件管理
          </el-menu-item>
        </div>

        <!-- <el-menu-item-group> -->
        <div v-show="!show" id="menu2">
          <el-menu-item index="/apiManagement">
            <!-- <i class="fa fa-chevron-left icon"></i> -->
            <i class="el-icon-back icon"></i>
            <span class="menu-item-font">返回列表</span>
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

          <!-- </el-menu-item-group> -->
        </div>

      </el-menu>
    </el-col>
  </el-container>

</template>

<script>
import ProjectManagement from "./api/projectManagement/ProjectManagement";

export default {
  name: "appAside",
  data() {
    return {
      // index: "",
      show: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    // 处理一下路由$route.path,将传入过来的id值处理掉，目的是为了做根据路由显示菜单栏高亮
    linkUrl(val) {
      // ⚠️ 1. 根据路由处理菜单的显示与否
      if (
        val === "/apiManagement" ||
        val === "/sqlManagement" ||
        val === "/pluginManagement"
      ) {
        this.show = true;
      } else {
        this.show = false;
      }
      // console.log("url", "/" + val.split("/")[1]);
      // ⚠️ 2. 处理路由后面的id值
      return "/" + val.split("/")[1];
    }
  },
  components: {
    projectManagement: ProjectManagement
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
.el-menu-item-group {
  background: #eef1f6;
}
</style>
