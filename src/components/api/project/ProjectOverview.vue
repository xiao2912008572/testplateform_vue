<template>
  <div id="project-overview">
    <el-container>
      <!-- <el-row>
        <el-col :span="12">123</el-col>
        <el-col :span="12" style="width:100%;">234 </el-col>
      </el-row> -->

      <el-table :data="tableData" style="width: 1000px" :row-style="{height:'30px'}">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>

    </el-container>
  </div>
</template>
<script>
export default {
  name: "project-overview",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>
<style scoped>
.el-row {
  background: #eeeeee;
  /* height: 100px; */
}
</style>

