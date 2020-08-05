<template>
  <div id="app">
    <span>
      <div><img src="https://image.hongbeibang.com/FloihK3c4UsgFSSuiI6ZNNFiYWHN?48X48&imageView2/1/w/48/h/48" alt="">浏览记录</div>
    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="">
    </span>
   <span>
      <div><img src="https://image.hongbeibang.com/FrIG0d-LU4bOADQE1euyCOGWO7Ep?48X48&imageView2/1/w/48/h/48" alt="">达人申请</div>
    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="">
    </span>
    <span>
      <div><img src="https://image.hongbeibang.com/Fn2YVwr3Ng_AQlJvQCWtBoRBDyjR?48X48&imageView2/1/w/48/h/48" alt="">帮贡兑换</div>
    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="">
    </span>
  
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Browse",
  data: function () {
    return {};
  },
  created() {},
};
</script>

<style scoped>
#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
  background: white;
 padding: 0 0 0 15px;
}
#app span {
  width: 100%;
  height: 54px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
   align-items: center;
   font-size: 15px;
}
#app span  div{
  display: flex;
 align-items: center;
}
#app span  div img{
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
#app span img{
  width: 23px;
  height: 23px;
  display: block;
  margin-right: 15px;
  
}
</style>