<template>
  <div id="project-overview">
      项目概况
      <h3>项目ID：{{project.projectID}}</h3>
      <h3>项目名称：{{project.projectName}}</h3>
      <h3>项目类型：{{project.projectType}}</h3>
      <h3>更新时间：{{project.projectUpdateTime}}</h3>
      <h3>项目版本：{{project.projectVersion}}</h3>
  </div>
</template>
<script>
export default {
  name: "project-overview",
  data() {
    return {
      id: this.$route.params.id,
      project: {}
    };
  },
  created() {
    this.$http
      .get("http://127.0.0.1:8000/api/v1/project/?project_id=" + this.id)
      .then(function(data) {
        console.log("project", data);
        this.project = data.body;
      });
  }
};
</script>
<style scoped>
.el-row {
  background: #eeeeee;
  /* height: 100px; */
}
</style>

