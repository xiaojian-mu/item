<template>
  <div id="app">
    <div id="setting">
      <b>
        <img
          @click="fn3"
          src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"
          alt
        />
      </b>
      <span>设置</span>
      <b></b>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Options",
  data: function () {
    return {};
  },
  created() {},
  methods: {
    fn3() {
      this.$router.push("/Bathmos");
    },
  },
};
</script>

<style scoped>
#app {
  top: 0;
  position: fixed;
  background: rgb(255, 255, 255);
}
#setting {
  width: 100%;
  height: 44px;

  display: flex;
  justify-content: space-between;
  align-content: center;
}
#setting img {
  width: 27px;
  height: 27px;
  line-height: 27px;
}
#setting span {
  width: 300px;
  height: 44px;
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  text-align: right;
}
#setting b {
  display: flex;
  align-items: center;
  line-height: 44px;
  margin: 0 10px;
}
#setting b {
  z-index: 10;
}
</style>