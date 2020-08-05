<template>
  <div id="app">
    <span>
      <div><img src="https://image.hongbeibang.com/FpFAELJdsHHxStgBnhPdgYgGmAYo?48X48&imageView2/1/w/48/h/48" alt="">勋章管</div>
    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="">
    </span>
   <span>
      <div><img src="https://image.hongbeibang.com/FjqJkpwIsLMWXY0LsNTSRG853oJR?48X48&imageView2/1/w/48/h/48" alt="">精彩活动</div>
    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="">
    </span>
    <span>
      <div><img src="https://image.hongbeibang.com/Fu1OwEAsExJ20OHVI2ZqBEtLtubY?48X48&imageView2/1/w/48/h/48" alt="">每日签到</div>
    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="">
    </span>
   <span>
      <div><img src="https://image.hongbeibang.com/FnuWoFzlqjbUFcZHkVG64M-cKA_N?48X48&imageView2/1/w/48/h/48" alt="">我的课程</div>
    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="">
    </span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Set",
  data: function () {
    return {};
  },
  created() {},
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 216px;
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