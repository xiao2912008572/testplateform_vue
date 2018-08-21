<template>
  <div id="api-document">
    api文档

    <div @click="parentMethod">
      <children ref="c1"></children>
    </div>

  </div>
</template>
<script>
import Children from '../../../components/Children'
export default {
  data() {
    return {};
  },
  computed: {},
  components: {
    children: Children
  },
  methods: {
    parentMethod() {
      console.log(this.$refs.c1); //返回的是一个vue对象，所以可以直接调用其方法
      this.$refs.c1.childMethod();
    }
  },
  created() {}
};
</script>
<style scoped>
</style>

