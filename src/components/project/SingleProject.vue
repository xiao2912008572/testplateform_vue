<template>
  <div id="single-project">
    <h3>{{project.projectID}}</h3>
    <h3>{{project.projectName}}</h3>
    <h3>{{project.projectType}}</h3>
    <h3>{{project.projectUpdateTime}}</h3>
    <h3>{{project.projectVersion}}</h3>
  </div>
</template>
<script>
export default {
  name: "single-project",
  data() {
    return {
      id: this.$route.params.id,
      project: {}
    };
  },
  created() {
    this.$http
      .get(
        "http://127.0.0.1:8000/api/v1/project/?project_id=" + this.id
      )
      .then(function(data) {
        console.log("project", data);
        this.project = data.body;
      });
  }
};
</script>
<style>
</style>

