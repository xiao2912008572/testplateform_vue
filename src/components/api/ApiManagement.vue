<template>
  <el-container>
    <el-row>
      <!--<el-button v-on:click="" type="primary" style="margin-bottom: 20px">新增项目</el-button>-->
      <!--模态对话框-->
      <!-- Form -->
      <el-button type="primary" style="margin-bottom: 20px" @click="dialogFormVisible = true">新增项目</el-button>

      <el-dialog title="新增项目" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="项目名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="项目版本" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>

      <!--表格-->
      <el-col>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="projectName" label="项目名称" width="160px"></el-table-column>

          <el-table-column prop="projectVersion" label="版本号" width="100px"></el-table-column>
          <el-table-column prop="projectType" label="类型" width="100px"></el-table-column>
          <el-table-column prop="projectCreateTime" label="创建时间"></el-table-column>
          <el-table-column prop="projectUpdateTime" label="最后修改时间"></el-table-column>
          <el-table-column prop="" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑
              </el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>

              <router-link v-bind:to="'/singleProject/'+ tableData[scope.$index].projectID">
                <el-button size="mini" type="primary"> 详情</el-button>
              </router-link>

            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

  </el-container>

</template>

<script>
export default {
  name: "api-management",
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  components: {},
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    addProject: function() {
      alert("点击了新增项目按钮！");
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  // 在创建之前请求
  created() {
    this.$http
      .get("http://127.0.0.1:8000/api/v1/project/list/", { emulateJSON: true })
      .then(data => {
        console.log(data);
        this.tableData = data.body;
      });
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
  margin: 0 10px;
}
</style>
