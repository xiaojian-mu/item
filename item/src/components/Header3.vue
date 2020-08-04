<template>
  <div class="box">
    <router-link to="/Foodsort">
      <i class="el-icon-arrow-left"></i>
    </router-link>

    <span style="display:flex">
      <router-link to="/Search" class="Seek">
        <img
          src="https://image.hongbeibang.com/Fi6tDLktzhDiUQoin--ZelAIFSsr?94X94&imageView2/1/w/80/h/80"
          style="position: fixed;letft:20px"
        />
      </router-link>
      <div class="yue">广式月饼</div>
    </span>

    <span style="display:flex;padding-right:20px">
      食谱
      <img
        src="https://image.hongbeibang.com/FnX5qtpWKlcHoDYC5KDFHulWfEZl?32X32&imageView2/1/w/32/h/32"
        alt
        style="height:15px;"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: "Header3",
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 40px;
  display: flex;
  top: 0;
  position: fixed;
  align-items: center;

  justify-content: space-between;
}

.box > span {
  color: orange;
  font-size: 14px;
}
.box > span > .yue {
  height: 35px;
  width: 220px;
  background-color: #f5f7f9;
  border: 0;
  text-indent: 2em;
  margin-right: 20px;
  color: #cccccc;
  line-height: 35px;
}
.box .Seek img {
  width: 30px;
  height: 30px;
}

.el-icon-arrow-left {
  font-size: 30px;
  padding: 10px 10px;
  font-weight: bold;
  cursor: pointer;
}
</style>