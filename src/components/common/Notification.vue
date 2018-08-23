<template>
  <el-container v-show="false">
    <el-button plain id="successBtn" @click="open3">
      成功
    </el-button>
    <el-button plain @click="open4" id="warnBtn">
      警告
    </el-button>
    <el-button plain @click="open5" id="messageBtn">
      消息
    </el-button>
    <el-button plain @click="open6" id="errorBtn">
      错误
    </el-button>
  </el-container>
</template>
<script>
export default {
  name: "toast",
  props: {
    toastObject: {
      type: Object,
      required: true
    }
  },
  methods: {
    open3() {
      // console.log('message', this.toastObject.message);
      this.$notify({
        title: "成功",
        message: this.toastObject.success_message,
        type: "success",
        duration: 1500
      });
    },

    open4() {
      this.$notify({
        title: "警告",
        message: "这是一条警告的提示消息",
        type: "warning"
      });
    },

    open5() {
      this.$notify.info({
        title: "消息",
        // message: "这是一条消息的提示消息"
        message: "这是一条消息的提示消息"
      });
    },

    open6() {
      this.$notify.error({
        title: "失败",
        message: "添加失败",
        duration: 1500
      });
    }
  }
};
</script>
<style scoped>
</style>

