<template>
  <div class="box">
    <div class="a1">
      <router-link to="/">
        <img
          src="https://image.hongbeibang.com/FvpCr89mpooArX7SM26_s5CqdeNL?imageMogr2/strip/thumbnail/640x640"
        />
      </router-link>
    </div>

    <div class="a2">
      <router-link to="/NoLogIn">
        <img
          src="https://image.hongbeibang.com/Fnz_NOU0VlNn-t_hLcXFbatBze_C?imageMogr2/strip/thumbnail/640x640"
        />
        <p>上传菜谱</p>
      </router-link>
    </div>

    <div class="a3">
      <router-link to="/NoLogIn">
        <img
          src="https://image.hongbeibang.com/FtUJvHaECXwl58x67bktx4KSjnym?imageMogr2/strip/thumbnail/640x640"
        />
        <p>上传做品</p>
      </router-link>
    </div>
    <div class="a4">
      <router-link to="/NoLogIn">
        <p>草稿箱</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Put",
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
}
.a1 {
  width: 27px;
  height: 27px;
  position: absolute;
  top: 10px;
  left: 15px;
}
.a1 img {
  width: 27px;
  height: 27px;
}
.a2 {
  width: 125px;
  height: 150px;
  position: absolute;
  left: 37.5px;
  bottom: 139px;
}
.a2 img {
  width: 125px;
  height: 125px;
}
.a3 {
  width: 125px;
  height: 150px;
  position: absolute;
  left: 214px;
  bottom: 139px;
}
.a3 img {
  width: 125px !important;
  height: 125px !important;
}
.a2 p,
.a3 p {
  font-size: 14px;
  text-align: center;
  color: gray;
}
.a4 {
  margin: 0 auto;
  height: 54px;
  line-height: 54px;
  font-size: 16px;

  border-top: 1px solid;
  border-top-color: #e7e2e5;
  background-color: #ffffff;
  cursor: pointer;
  text-align: center;
  position: fixed;
  bottom: 0;
  right: 15px;
  left: 15px;
  z-index: 3;
  max-width: 570px;
}
.a4 p {
  color: #4a4945;
}
</style>