<template>
  <div class="block">
    <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="13" layout="total, prev, pager, next, jumper" :total=page.total>
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "pagination",
  data() {
    return {
      currentPage: 1,
      tableData: []
    };
  },
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      // console.log(`当前页: ${val}`);

      // ⚠️ 请求列表数据
      this.$http
        .get(this.page.url, {
          params: {
            page: this.currentPage,
            per_page: 13
          }
        })
        .then(data => {
          this.tableData = data;
          // 一旦点击触发，就注册一个事件
          this.$emit("projectChanged", this.tableData);
        });
    }
  }
};
</script>
<style scoped>
.el-pagination {
  text-align: right;
  margin-top: 20px;
  background: #f2f2f2;
  padding: 10px;
}
</style>
