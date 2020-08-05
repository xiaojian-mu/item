<template>
  <div id="box" >
      <div id="box2">
        <img :src="er[0].default_img" alt />
      </div>
      <div id="box1">
        <div>{{er[0].name}}</div>
        <div>
          <span>讲师：</span>
          <span>{{er[0].teacher}}</span>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "purchase",
  data() {
    return {
      vidos: [],
      
    };
  },
  props: ["er"], //注意这里要父组件的名字一致
 
};
</script>

<style scoped>
#box {
  background: white;
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
#box2 {
  width: 40%;
  height: 100%;
  background-size: 120px 80px;
  background: white;
}
#box2 img {
  width: 120px;
  height: 80px;
}
#box1 {
  width: 70%;
  height: 100%;
  background: white;
}
#box1 div:nth-child(1) {
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  color: #4a4945;
  overflow: hidden;
  text-align: left;
  margin-bottom: 10px;
}
#box1 div:nth-child(2) {
  font-size: 11px;
  line-height: 15px;
  color: #999;
  text-align: left;
}
</style>