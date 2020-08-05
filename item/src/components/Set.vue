<template>
 <div id="app">
<img @click="fn3" src="https://image.hongbeibang.com/FthUBRvh6uWFq7omAeGtn8A-0E4s?48X48&amp;imageView2/1/w/48/h/48" >
 </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Set",
  data: function () {
    return {
     
    };
  },  methods: {
    fn3() {
      this.$router.push("/Setting");
    },
  },
  created(){
  },
  
};
</script>

<style scoped>
#app{
  width: 100%;
  height: 44px;
display: flex;
justify-content: flex-end;
padding-right: 18px;
align-items: center;
position: fixed;
top: 0;
background: white;
z-index: 10;
}
#app img{
  width: 27px;
  height: 27px;

}

</style>