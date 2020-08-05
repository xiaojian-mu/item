<template>
  <div>
    <div class="search">
      <router-link to="/Foodsort" tag="li">
        <div>
          <img
            src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"
            alt
          />
        </div>
      </router-link>
      <div class="text_ellipsis">
        <router-link to="/Search">
          <input type="text" id="search-cont" placeholder="搜索食谱/食材，烘焙/家常菜一应俱全" ref="inputValue" />
        </router-link>
      </div>
      <div class="searchright" @click="golistPage()">搜索</div>
    </div>
    <div class="searchcon">
      <div class="searchcon-title">
        <h4>热门搜索</h4>
      </div>
      <div class="searchname-box">
        <div
          class="searchcon-name"
          v-for="(name, index) in names"
          :key="index"
          @click="golist(name)"
        >
          <span>{{ name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  components: {},
  data() {
    return {
      names: [
        "🔥蛋黄酥",
        "🔥流心月饼",
        "🔥柠檬茶",
        "🔥水果茶",
        "🔥奶油蛋糕",
        "吐司",
        "肉松小贝",
        "戚风蛋糕",
        "雪媚娘",
        "绿豆糕",
        "蛋糕卷",
        "曲奇",
        "披萨",
        "冰皮月饼",
        "蛋黄酥",
        "3Q饼",
        "蛋卷",
        "芝士蛋糕",
        "冰激凌",
        "餐包",
      ],
    };
  },
  methods: {
    // 给列表页传热门搜索的值
    golist(goodname) {
      console.log(goodname);
      this.$router.push({ path: "Goodlist", query: { name: goodname } });
    },
    // 给列表页传输入框中的值
    golistPage() {
      if (this.$refs.inputValue.value != "") {
        this.$router.push({
          path: "Goodlist",
          query: { name: this.$refs.inputValue.value },
        });
      } else {
        return;
      }
    },
  },
  created() {
    axios({
      url: "http://10.35.162.134:8000/api/search/?name=面包",
    }).then((res) => {
      console.log(res.data);
    });
  },
};
</script>

<style scoped>
.search {
  position: fixed;
  top: 0;
  width: 100%;
  height: 44px;
  background-color: white;
  padding: 0 18px;
  display: flex;
  align-items: center;
  z-index: 10;
}
.search div:nth-child(1) {
  margin: 9.5px 20px 9.5px 0;
}
.search div:nth-child(1) img {
  width: 27px;
  height: 27px;
}
.search div:nth-child(2) {
  width: 239.33px;
  height: 35px;
  background-color: rgb(245, 247, 249);
  padding: 0 10px;
  border-radius: 5px;
}

.searchright {
  width: 32px;
  height: 30px;
  color: #4a4945;
  font-size: 16px;
  margin: 7px 0 7px 15px;
  line-height: 30px;
}
#search-cont {
  font-size: 14px;
  width: 219.33px;
  height: 34.67px;
  background-color: #f5f7f9;
  padding: 5px 0;
  border: none;
}
/* 下 */
.searchcon {
  width: 100%;
  margin-top: 44px;
}
.searchcon-title {
  width: 345.33px;
  height: 50px;
}
.searchcon-title h4 {
  padding: 0 15px;
  color: #999999;
  font-size: 14px;
  line-height: 50px;
}
.searchcon-name {
  /* padding: 0 15px; */
  display: inline-block;
  color: #4a4945;
  font-size: 16px;
  background-color: #f5f7f9;
  height: 32px;
  margin: 0 10px 10px 0;
  line-height: 32px;
  border-radius: 15px;
  padding: 0 15px;
}
/* .searchcon-name span {
  display: inline-block;
} */
.searchname-box {
  padding: 0 10px;
}
</style>
