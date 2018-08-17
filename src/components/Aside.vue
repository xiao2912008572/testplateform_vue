<template>
  <el-container>

    <!--导航栏菜单-->
    <el-col :span="24">
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
               theme="dark" router style="background-color: #FAFAFA">
        <el-menu-item index="/apimanagement">
          <i class="el-icon-menu"></i>
          API开发管理
        </el-menu-item>
        <el-menu-item index="/sqlmanagement">
          <i class="el-icon-document"></i>
          数据库管理
        </el-menu-item>
        <el-menu-item index="/pluginmanagement">
          <i class="el-icon-search"></i>
          插件管理
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-container>


</template>

<script>
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
  }
</script>

<style scoped>
</style>
