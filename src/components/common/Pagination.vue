<template>
  <div class="block">
    <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total=total>
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "page-footer",
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      currentPage4: 4,
      total: 400
    };
  }
};
</script>
<style scoped>
.el-pagination{
  text-align: right;
  margin-top: 20px;
}
</style>
