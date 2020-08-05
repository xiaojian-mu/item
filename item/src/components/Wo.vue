<template>
  <div id="app">
    <span><img src="https://image.hongbeibang.com/FgyV7GBC4RPoagtZnK-npLaoB1N6?160X160&imageView2/1/w/80/h/80" alt="">
    <div>作品</div>
    </span>
     <span><img src="https://image.hongbeibang.com/FhxeeHCgOPEcoLPR3sP6XNbybdvK?160X160&imageView2/1/w/80/h/80" alt="">
    <div>食谱</div>
    </span>
    <span><img src="https://image.hongbeibang.com/FkmRCthKDaI5Afc_NdkTZaqNLPE1?160X160&imageView2/1/w/80/h/80" alt="">
    <div>收藏</div>
    </span>
     <span><img src="https://image.hongbeibang.com/FgKxvkwdg8OOr9mhPok2JBVnCG2n?160X160&imageView2/1/w/80/h/80" alt="">
    <div>问题</div>
    </span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: " Works",
  data: function () {
    return {};
  },
  created() {},
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 74px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
#app span {
  width: 24%;
  height: 64px;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
#app span  img{
  width: 40px;
  height: 40px;
}
</style>