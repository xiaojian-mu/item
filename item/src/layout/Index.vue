<template>
  <div>
    <IndexHeader />
    <div class="main">
      <IndexNav />
      <IndexMain1 title="推荐课程" :url="data0" />
      <IndexMain2 title="备战中秋" :url="data1" />
      <IndexMain2 title="炎夏必做" :url="data2" />
      <IndexMain2 title="元气早餐" :url="data3" />
      <IndexMain2 title="网红爆款" :url="data4" />
      <IndexMain2 title="私房必做" :url="data5" />
      <IndexMain2 title="技巧装饰" :url="data6" />
      <IndexMain1 title="基础经典" :url="data7" />
      <IndexMain1 title="下午时光茶" :url="data8" />
      <IndexMain1 title="亦爱料理" :url="data9" />
      <IndexMain3 />
    </div>
    <IndexFooter />
  </div>
</template>

<script>
//引入axios
import axios from "axios";
//引入插件
import IndexHeader from "@/components/IndexHeader";
import IndexNav from "@/components/IndexNav";
import IndexMain1 from "@/components/IndexMain1";
import IndexMain2 from "@/components/IndexMain2";
import IndexMain3 from "@/components/IndexMain3";
import IndexFooter from "@/components/IndexFooter";
export default {
  name: "Index",
  components: {
    IndexHeader,
    IndexNav,
    IndexMain1,
    IndexMain2,
    IndexMain3,
    IndexFooter,
  },
  data() {
    return {
      data: [], //cun所有数据
      data0: [], //推荐课程
      data1: [], //备战中秋
      data2: [], //炎夏必做
      data3: [], //元气早餐
      data4: [], //网红爆款
      data5: [], //私房必做
      data6: [], //技巧装饰
      data7: [], //基础经典
      data8: [], //下午时光茶
      data9: [], //亦爱料理
    };
  },
  //
  created() {
    axios({
      url: "http://39.107.58.130:8080/api/index/",
      // url: "http://10.35.162.134:8000/api/index/",
    }).then((res) => {
<<<<<<< HEAD
=======
      console.log(res.data.data[0]["推荐课程"][0]["zf_list"]);
>>>>>>> 0fa86843da0e11015a28273acff6747c86fc0162
      this.data = res.data.data;
      this.data0 = res.data.data[0]["推荐课程"][0]["zf_list"];
      this.data1 = res.data.data[1]["备战中秋"][0]["zf_list"];
      this.data2 = res.data.data[2]["炎夏必做"][0]["zf_list"];
      this.data3 = res.data.data[3]["元气早餐"][0]["zf_list"];
      this.data4 = res.data.data[4]["网红爆款"][0]["zf_list"];
      this.data5 = res.data.data[5]["私房必做"][0]["zf_list"];
      this.data6 = res.data.data[6]["技巧装饰"][0]["zf_list"];
      this.data7 = res.data.data[7]["基础经典"][0]["zf_list"];
      this.data8 = res.data.data[8]["下午时光茶"][0]["zf_list"];
      this.data9 = res.data.data[9]["亦爱料理"][0]["zf_list"];
    });
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  margin: 44px 0 48px 0;
}
</style>
