<template>
  <div class="box">
    <div class="null"></div>
    <div class="copyright">
      <a href="http://www.beian.miit.gov.cn">Copyright © hongbeibang.com 粤ICP备14090926号-1</a>
      <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44060602001356">
        <img src="http://image.hongbeibang.com/FinEALw7ifYIV2baxOAzDe1ctz1S?20X20" />
        <span>粤公网安备 44060602001356号</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexMain3",
};
</script>

<style scoped>
.null {
  width: 100%;
  height: 40px;
}
.copyright {
  width: 100%;
  height: 62px;
  padding: 10px 20px;
  background: #f5f7f9;
}
.copyright > a {
  font-size: 13px;
  color: #939393;
}
.copyright > a:nth-child(1) {
  height: 20px;
  line-height: 20px;
}
.copyright > a:nth-child(2) {
  display: flex;
  height: 20px;
  line-height: 20px;
}
.copyright > a:nth-child(2) > img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>