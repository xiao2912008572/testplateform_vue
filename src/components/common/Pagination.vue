<template>
  <div class="block">
    <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-size="13" layout="total, prev, pager, next, jumper" :total=page.total>
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "pagination",
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      // 请求列表数据
    }
  },
  data() {
    return {
      currentPage4: 4,
    };
  },
  props: {
    page: {
      type: Object,
      required: true
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
