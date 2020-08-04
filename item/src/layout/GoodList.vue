<template>
  <div>
    <Header3 />
    <Main :name="$route.query.name" />
  </div>
</template>

<script>
import Header3 from "../components/Header3";
import Main from "../components/Main";

export default {
  name: "GookList",
  data() {
    return {
      name: "盒子蛋糕",
    };
  },
  components: {
    Header3,
    Main,
  },
  methods: {
    fn(name) {
      this.name = name;
    },
  },
  // mounted() {
  //   console.log(this.$route.query.name);
  // },
};
</script>

<style scoped>
</style>