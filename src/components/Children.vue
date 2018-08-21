<template>
  <div>
      <button>123123</button>
      <button>xxxxx</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: "123"
    };
  },
  computed: {},
  methods: {
    childMethod() {
      alert("childMethod do...");
    }
  },
  created() {}
};
</script>
