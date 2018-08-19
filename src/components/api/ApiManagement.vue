<template>
  <el-container>
    <el-row>
      <!--<el-button v-on:click="" type="primary" style="margin-bottom: 20px">新增项目</el-button>-->
      <!--模态对话框-->
      <el-col>
        <div style="background:#f2f2f2;padding:10px;">
          <el-button size="medium" type="primary" @click="dialogFormVisible = true">
            新增项目
          </el-button>
        </div>

        <!-- 模态对话框主体 -->
        <el-dialog title="新增项目" :visible.sync="dialogFormVisible">
          <el-form :label-position="labelPosition" label-width="80px" :model="project">
            <el-form-item label="项目名称">
              <el-input v-model="project.name" placeholder="1-32位字符串"></el-input>
            </el-form-item>
            <el-form-item label="项目版本">
              <el-input v-model="project.version"></el-input>
            </el-form-item>
            <el-form-item label="项目类型">
              <el-select v-model="value" placeholder="请选择" style="width:100%;">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <!-- 模态对话框：按钮 -->
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="confirm">确 定</el-button>
            <el-button @click="dialogFormVisible = false">取 消</el-button>
          </div>
        </el-dialog>
      </el-col>

      <!--表格-->
      <el-col style="padding-top:10px;">
        <!-- :row-style="{height:'30px'}" -->
        <el-table :data="tableData" stripe style="width: 100%" :header-cell-style="{background:'#eef1f6',color:'#1f2d3d'}">
          <el-table-column prop="projectName" label="项目名称" width="160px"></el-table-column>
          <el-table-column prop="projectVersion" label="版本号" width="130px"></el-table-column>
          <el-table-column prop="projectType" label="类型" width="130px"></el-table-column>
          <el-table-column prop="projectCreateTime" label="创建时间"></el-table-column>
          <el-table-column prop="projectUpdateTime" label="最后修改时间"></el-table-column>
          <el-table-column prop="" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑
              </el-button>

              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>

              <!-- 利用scope.$index可以获取到行索引，从1开始 -->
              <router-link v-bind:to="'/singleProject/'+ tableData[scope.$index].projectID">
                <el-button size="mini" type="primary"> 详情</el-button>
              </router-link>

            </template>
          </el-table-column>
        </el-table>
      </el-col>

      <!-- 第三列：因为宽度为100% 所以挤下来成了第三行 -->
      <el-col>
        <page-footer></page-footer>
      </el-col>
    </el-row>

  </el-container>

</template>

<script>
import Pagination from "./../common/Pagination";
export default {
  name: "api-management",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [],
      dialogVisible: false,
      dialogFormVisible: false,
      labelPosition: "right",
      project: {
        name: "",
        version: ""
      },
      formLabelWidth: "120px",
      value: "",
      options: [
        {
          value: "1",
          label: "Web"
        },
        {
          value: "2",
          label: "App"
        },
        {
          value: "3",
          label: "PC"
        },
        {
          value: "4",
          label: "硬件/物联网"
        },
        {
          value: "5",
          label: "其他"
        }
      ]
    };
  },
  components: {
    pageFooter: Pagination
  },
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
    },
    // 确认按钮实现
    confirm: function() {
      // ⚠️ 新增项目api
      this.$http
        .post("http://127.0.0.1:8000/api/v1/project/", {
          projectType: 1,
          projectName: this.project.name,
          projectVersion: this.project.version
        })
        .then(data => {
          console.log("response", data);
        });
      alert("点击了确定按钮！");
      // 隐藏对话框
      this.dialogFormVisible = false;
    }
  },
  // 在创建之前请求
  created() {
    // ⚠️ 获取项目列表
    this.$http
      // .get("http://127.0.0.1:8000/api/v1/project/list/", { emulateJSON: true })
      .get("http://127.0.0.1:8000/api/v1/project/list/", {
        params: {
          page: 1,
          per_page: 13
        }
      })
      .then(data => {
        console.log(data);
        this.tableData = data.body.projects;
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
