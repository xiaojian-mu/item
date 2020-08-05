<template>
<!-- 支付 -->
  <div id="box1" >
    <purchase :er="this.vidos"/>
    <count :er="this.vidos"/>
  </div>
</template>
<script>
import axios from "axios";
import  purchase from "../components/purchase";
import  count from "../components/count";
export default {
  name: "zhifu",
  data(){
  return{
    vidos:[],
  }
  },
  components: {
  purchase,count
  },
   created(){
     this.id=this.$route.query.id
    axios({
      url: "http://39.107.58.130:8080/api/mothod/?id="+this.id,
    }).then((res) =>{
      this.vidos = res.data.data;
      console.log(this.vidos)
    });
  },
};
</script>

<style>
#box1{
  width: 100%;
  height: 650px;
  background: #F5F7F9;
}
</style>