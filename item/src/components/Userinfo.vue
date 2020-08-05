<template>
  <div id="app">
    <div id="Icon">
      <img
        src="https://image.hongbeibang.com/FnUpQ89hFI3O3IAjbIuXGEUV6MjY?132X132&imageView2/1/w/132/h/132"
      />
    </div>
    <div id="material">
      <div>
        <span>花 信er~</span>
        <img
          src="https://image.hongbeibang.com/Fkwt9tYiYAFxX-lC-WHvmbPSOUwv?94X94&imageView2/1/w/30/h/30"
          alt
        />
        <img
          id="guanghui"
          src="https://image.hongbeibang.com/FmFlZjZn6BHHnqrYVMz6MGecwc0J?200X200&imageView2/1/w/50/h/50"
          alt
        />
      </div>
      <div>
        <span>ID：b75020200722172039413</span>
        <span>
          <img
            alt
            title
            src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&amp;imageView2/1/w/46/h/46"
          />
        </span>
      </div>
      <div id="exp">
        <div>经验值：
          6
          0
          /100</div>
        <div>
          <span></span>
        </div>
      </div>
    </div>
    <div id="Follow">
      <div>
        <span>0</span>
        <span>关注</span>
      </div>
      <div>
        <span>23</span>
        <span>粉丝</span>
      </div>
      <div>
        <span>1</span>
        <span>帮贡</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Set",
  data: function () {
    return {};
  },
  created(){
   axios({
      method: 'POST',
      url: "http://39.107.58.130:8080/api/user/login/",
    }).then((res) => {
      this.vidos = res.data;
      console.log(this.vidos)
    });
  },
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 160px;
  margin-top: 44px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  background: white;
}
#Icon {
  height: 30%;
  border-radius: 50%;
  margin: 0 15px;
}
#Icon img {
  width: 78px;
  height: 78px;
  border-radius: 50%;
}
#material {
  width: 66%;
  height: 79px;
  display: flex;
  flex-direction: column;
}
#material div:nth-child(1) {
  width: 100%;
  height: 28px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
#material div:nth-child(1) img {
  width: 17px;
  height: 17px;
  margin-left: 7px;
}
#material div #guanghui {
  width: 27px;
  height: 27px;
}
#material div:nth-child(1) span {
  font-size: 20px;
}
#material div:nth-child(2) {
  width: 100%;
  height: 16px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  color: #999999;
  font-size: 12px;
  margin: 4px 0 10px 0;
}
#material div:nth-child(2) span img {
  width: 30px;
  height: 30px;
  display: block;
  padding-bottom: 10px;
}
#material div:nth-child(3) {
  width: 100%;
  height: 21px;
  color: #999999;
}
#exp div:nth-child(1) {
  width: 100%;
  height: 14px;
}
#exp div:nth-child(2) {
  width: 150px;
  height: 4px;
  background-color: #eeedeb;
}
#exp div:nth-child(2) span {
  width: 
  60%;
  background: rgb(203, 243, 243);
}
#Follow {
  width: 90%;
  height: 44px;

  border-bottom: 1px solid #e7e2e5;
  margin: 20px 37px;
  display: flex;
  justify-content: flex-start;
}
#Follow div {
  width: 30.333%;
  height: 30px;
  margin: 5px 0;
  padding: 0 6px;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  border-right: 1px solid;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-right-color: #e7e2e5;
}
#Follow div span {
  width: 100%;
  height: 50%;
}
</style>