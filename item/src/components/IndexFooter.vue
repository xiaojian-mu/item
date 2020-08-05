<template>
  <div class="box">
    <ul>
      <li @click="fn1">
        <img
          src="https://image.hongbeibang.com/FhngZoiK_s7Zw4K3DxLogRfqoO06?50X50&imageView2/1/w/50/h/50"
        />
        <h6>学烘焙</h6>
      </li>
      <li>
        <img
          src="https://image.hongbeibang.com/Fkpdn7F9EWxvNeSS8M7V4_xbRPlf?50X50&imageView2/1/w/50/h/50"
        />
        <h6>烘焙圈</h6>
      </li>
      <li @click="fn3">
        <img
          src="https://image.hongbeibang.com/Flm_lYHJQA56h0VyhdRhQ1i5iO06?50X50&imageView2/1/w/50/h/50"
        />
        <h6>问答</h6>
      </li>
      <li @click="fn4">
        <img
          src="https://image.hongbeibang.com/FrYeKj0MohOJQuNzUgCugg90cHCS?50X50&imageView2/1/w/50/h/50"
        />
        <h6>小密</h6>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IndexFooter",
  methods: {
    fn1() {
      this.$router.push("/");
    },
    fn3() {
      this.$router.push("/history");
    },
    fn4() {
      this.$router.push("/Bathmos");
    },
  },
};
</script>

<style scoped>
.box {
  background-color: #fff;
  list-style-type: none;
  height: 49px;
  z-index: 7;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  padding: 0;
  max-width: 600px;
  border-top: 1px solid #999999;
}
ul {
  list-style: none;
  height: 49px;
  display: flex;
  justify-content: space-around;
}
ul > li {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
ul > li > img {
  width: 25px;
  height: 25px;
}
ul > li > h6 {
  font-size: 11px;
  color: #999999;
}
</style>