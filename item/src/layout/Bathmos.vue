<template>
  <!-- 小窝 -->
  <div id="app">
    <Set />
    <div id="app1">
      <Userinfo />
      <Wo />
      <Medal />
      <Browse />
    </div>

    <IndexFooter />
  </div>
</template>
<script>
import Set from "@/components/Set";
import IndexFooter from "@/components/IndexFooter";
import Wo from "@/components/Wo";
import Userinfo from "@/components/Userinfo";
import Medal from "@/components/Medal";
import Browse from "@//components/Browse";
export default {
  name: "Bathmos",
  data() {
    return {};
  },
  components: {
    Set,
    IndexFooter,
    Userinfo,
    Wo,
    Medal,
    Browse,
  },
  methods: {},
};
</script>

<style scoped>
#app {
  background: #f7f3f5;
}
#app1 {
  padding-bottom: 49px;
}
</style>