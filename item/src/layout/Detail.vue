<template>
  <div>传来的name：{{$route.query.id}}</div>
</template>

<script>
import axios from "axios"; //引入axios
export default {
  name: "Detail",
  created() {
    console.log(this.$route.query.id);
  },
};
</script>

<style scoped>
div {
  width: 100%;
  height: 100px;
  background-color: green;
}
</style>