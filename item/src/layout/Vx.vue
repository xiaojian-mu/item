<template>
  <div class="box">
    <h6>微信登录</h6>
    <div class="img">
      <img src="../../static/img/vx.jpg" />
    </div>
    <div class="login">
      <p>请使用微信扫描二维码登录</p>
      <p>“烘焙帮”</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vx",
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 667px;
  background-color: rgb(51, 51, 51);
  padding: 20px;
}
.box h6 {
  text-align: center;
  font-size: 10px;
  height: 32px;
  line-height: 32px;
  color: aliceblue;
}
.img {
  width: 100%;
  height: 100px;
}
.img img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
.login {
  width: 150px;
  height: 30px;
  background: black;
  border-radius: 15px;
  margin: 0 auto;
  font-size: 1px;
  color: aliceblue;
  margin-top: 5px;
}
.login p {
  text-align: center;
}
</style>
