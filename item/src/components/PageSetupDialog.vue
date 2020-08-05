<template>
  <div id="app">
    <span>
      <div>个人设置</div>
    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="">
    </span>
   <span>
      <div>账号设置</div>
    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="">
    </span>
     <span>
      <div>意见反馈</div>
    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="">
    </span>
     <span>
      <div>用户守则</div>
    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="">
    </span>
     <span>
      <div>关于我们</div>
    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="">
    </span>
     <span>
      <div>商务合作</div>
    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="">
    </span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PageSetupDialog",
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
 margin-top: 50px;
}
#app span {
  width: 100%;
  height: 55px;
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

#app span img{
  width: 23px;
  height: 23px;
  display: block;
  margin-right: 15px;
}
</style>