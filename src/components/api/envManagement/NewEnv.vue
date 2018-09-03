<template>
  <el-container>
    <!--表单1 -->
    <el-col style="padding-top:10px;" id="form1">
        <div style="background:rgb(238, 241, 246);height:48px;margin-top:-10px;">
          <font style=""></font>
        </div>
          <el-form ref="form" :model="form" label-width="80px" size="small" label-position="right">

            <el-form-item label="环境名称" style="margin-top:10px;">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="环境说明">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="前置URI">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="鉴权信息">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="Header">
                <el-input v-model="form.name"></el-input>
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="额外参数">
                <el-input v-model="form.name"></el-input>
                <el-input v-model="form.name"></el-input>
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="全局变量">
                <el-input v-model="form.name"></el-input>
                <el-input v-model="form.name"></el-input>
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
      </el-col>
  </el-container>
</template>
<script>
export default {};
</script>
<style scoped>
</style>


