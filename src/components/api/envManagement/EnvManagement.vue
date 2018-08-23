<template>
  <el-container>
    <el-row>
      <!--模态对话框-->
      <el-col>
        <div style="background:#f2f2f2;padding:10px;">
          <el-button size="medium" type="primary" @click="handleAdd();dialogFormVisible = true">
            创建环境
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

      <!--表格1 -->
      <el-col style="padding-top:10px;" id="table1">
        <el-table v-loading="loading" :data="tableData" stripe style="width: 100%;margin-top:-10px;" :header-cell-style="{background:'#eef1f6',color:'#1f2d3d'}">
          <el-table-column prop="projectName" label="环境名称" width="320px"></el-table-column>
          <el-table-column prop="" label="操作">
            <template slot-scope="scope">
              <!-- 编辑图标 -->
              <el-button type="text" size="mini" @click="handleEdit(scope.$index, scope.row); dialogFormVisible = true">
                <i class="el-icon-edit"></i>
              </el-button>

              <!-- 删除图标 -->
              <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">
                <i class="el-icon-delete"></i>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>

      <!-- 表格2 -->
      <el-col id="table2">
        <p></p>
      </el-col>

      <!--表单1 -->
      <el-col style="padding-top:10px;" id="form1">
        <!-- <el-table v-loading="loading" :data="tableData" stripe style="width: 100%;margin-top:-10px;" :header-cell-style="{background:'#eef1f6',color:'#1f2d3d'}">
          <el-table-column prop="projectName" label="环境名称" width="160px"></el-table-column>
          <el-table-column prop="" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row); dialogFormVisible = true">编辑
              </el-button>

              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table> -->
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
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
      loading: true,
      // 表单数据
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
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
      // console.log(index, row);
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
    },
    onSubmit() {
      console.log("submit!");
    }
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
        // console.log(data);

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
#table1 {
  border: solid 1px #dfe6ec;
  margin-top: 20px;
  width: 41%;
}
#table2 {
  width: 2%;
}
#form1 {
  border: solid 1px #dfe6ec;
  margin-top: 20px;
  width: 57%;
  height: 739px;
}
</style>
