<template>
  <el-container>
    <el-row>
      <!--<el-button v-on:click="" type="primary" style="margin-bottom: 20px">新增项目</el-button>-->
      <!--模态对话框-->
      <el-col>
        <div style="background:#f2f2f2;padding:10px;">
          <el-button size="medium" type="primary" @click="handleAdd();dialogFormVisible = true">
            新增项目
          </el-button>

          <!-- 通知组件 -->
          <toast v-bind:toastObject="toastObject"></toast>
        </div>

        <!-- 模态对话框主体 -->
        <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
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
        <el-table v-loading="loading" :data="tableData" stripe style="width: 100%" :header-cell-style="{background:'#eef1f6',color:'#1f2d3d'}">
          <el-table-column prop="projectName" label="项目名称" width="160px"></el-table-column>
          <el-table-column prop="projectVersion" label="版本号" width="130px"></el-table-column>
          <el-table-column prop="projectType" label="类型" width="130px"></el-table-column>
          <el-table-column prop="projectCreateTime" label="创建时间"></el-table-column>
          <el-table-column prop="projectUpdateTime" label="最后修改时间"></el-table-column>
          <el-table-column prop="" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row); dialogFormVisible = true">编辑
              </el-button>

              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>

              <!-- 利用scope.$index可以获取到行索引，从1开始 -->
              <!-- 此页面跳转到项目概况中 -->
              <router-link v-bind:to="'/projectOverview/'+ tableData[scope.$index].projectID">
                <el-button size="mini" type="primary" @click="handleDetail(scope.$index)">详情</el-button>
              </router-link>
              <!-- <router-link v-bind:to="'/Aside2'">
                <el-button size="mini" type="primary">详情</el-button>
              </router-link> -->

              <!-- <router-link v-bind:to="'/sqlManagement/'">
                <el-button size="mini" type="primary">详情</el-button>
              </router-link> -->

            </template>
          </el-table-column>
        </el-table>
      </el-col>

      <!-- 第三列：因为宽度为100% 所以挤下来成了第三行 -->
      <el-col>
        <pagination v-on:projectChanged="updateProjects($event)" v-bind:page="page"></pagination>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  // 注入Container.vue中实现的依赖
  inject: ["reload"],
  name: "api-management",
  data() {
    return {
      tableData: [], // 项目数组
      dialogVisible: false, // 对话框是否可见
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
          value: "Web",
          label: "Web"
        },
        {
          value: "App",
          label: "App"
        },
        {
          value: "PC",
          label: "PC"
        },
        {
          value: "硬件/物联网",
          label: "硬件/物联网"
        },
        {
          value: "其他",
          label: "其他"
        }
      ],
      page: {
        url: "http://127.0.0.1:8000/api/v1/project/list/",
        total: 0, // 记录总数
        page_size: 0 // 页面大小规格
      },
      // 通知对象
      toastObject: {
        success_title: "",
        success_message: "",
        success_duration: 0,
        warn_title: "",
        warn_message: "",
        warn_duration: 0,
        message_title: "",
        message_message: "",
        message_duration: 0,
        error_title: "",
        error_message: "",
        error_duration: 0
      },
      // 对话框标题
      dialogTitle: "",
      // '新增'或'编'的标记
      tag: "",
      // 行数据
      rowNumber: 0,
      // 加载标签
      loading: true
    };
  },
  methods: {
    // 项目详情按钮，获取项目ID
    handleDetail(index) {
      // 获取当前项目ID，并存入全局变量中以供使用
      // console.log("projectID", this.GLOBAL.projectID);
      this.GLOBAL.projectID = this.tableData[index].projectID;
      // alert(this.GLOBAL.projectID)
    },

    // 新增项目按钮
    handleAdd() {
      this.dialogTitle = "新增项目";
      this.project.name = "";
      this.project.version = "";
      this.value = "";
      this.tag = "add";
    },

    // 编辑项目按钮
    handleEdit(index, row) {
      this.dialogTitle = "编辑项目";
      console.log(index, row);
      this.project.name = row.projectName;
      this.project.version = row.projectVersion;
      this.value = row.projectType;
      this.tag = "edit";
      this.rowNumber = row.projectID;
    },

    // 删除项目详情
    handleDelete(index, row) {
      // console.log(index, row);
      // console.log("projectID", row.projectID);
      this.$http
        .delete("http://127.0.0.1:8000/api/v1/project/", {
          body: {
            projectID: row.projectID
          }
        })
        .then(
          data => {
            this.loading = true;
            this.toastObject.success_message = "删除成功";
            // 成功的通知
            document.getElementById("successBtn").click();
            // 刷新
            this.reload();
          },
          data => {
            this.loading = true;
            console.log("failed", data);
          }
        );
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },

    // 更新项目展示列表
    updateProjects(data) {
      this.tableData = data.body.projects;
    },

    // 新增项目：确认按钮实现,需要判断是新增还是编辑，两个接口不同数据
    confirm: function() {
      // ⚠️ 新增项目api
      if (this.tag === "add") {
        this.$http
          .post("http://127.0.0.1:8000/api/v1/project/", {
            projectType: this.value,
            projectName: this.project.name,
            projectVersion: this.project.version
          })
          .then(
            // 正确的回调
            data => {
              this.loading = true;
              this.toastObject.success_message = "添加成功";
              // 成功的通知
              document.getElementById("successBtn").click();
              // 刷新：通过注入的依赖来控制路由
              this.reload();
            },
            // 错误的回调
            data => {
              // 错误的通知
              this.loading = true;
              document.getElementById("errorBtn").click();
            }
          );
      } else if (this.tag === "edit") {
        // ⚠️ 编辑项目api
        this.$http
          .put("http://127.0.0.1:8000/api/v1/project/", {
            projectID: this.rowNumber,
            projectType: this.value,
            projectName: this.project.name,
            projectVersion: this.project.version
          })
          .then(
            // 正确的回调
            data => {
              this.loading = true;
              this.toastObject.success_message = "编辑成功";
              // 成功的通知
              document.getElementById("successBtn").click();
              // 刷新：通过注入的依赖来控制路由
              this.reload();
            },
            // 错误的回调
            data => {
              this.loading = true;
              // 错误的通知
              document.getElementById("errorBtn").click();
            }
          );
      }
      // 隐藏对话框
      this.dialogFormVisible = false;
    }
  },
  computed: {
  },
  // 在创建之前请求
  created() {
    // ⚠️ 获取项目列表
    this.$http
      .get("http://127.0.0.1:8000/api/v1/project/list/", {
        params: {
          page: 1,
          per_page: 13
        }
      })
      .then(data => {
        // 打印返回数据
        console.log(data);

        this.loading = false;
        // 项目详情对象数组
        this.tableData = data.body.projects;

        // 记录总条数
        this.page.total = data.body.meta.total;

        // 每页规格大小
        this.page.page_size = data.body.meta.page_size;
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
