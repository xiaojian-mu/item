<template>
  <div class="box">
    <el-tabs v-model="activeName" @tab-click="handleClick" style="margin:0 10px" class="apper">
      <el-tab-pane label="综合排序" name="first" class="first">
        <!-- 综合排序 -->
        <div class="infinite-list-wrapper" style="overflow:auto">
          <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
            <li
              v-for="(food,index) in data"
              class="list-item"
              :key="index"
              @click="goods(food.mid)"
            >
              <div class="cont">
                <!-- <img :src="'static/'+food.img" /> -->
                <img :src="food.default_img" />

                <div class="new">
                  <h2>{{food.name}}</h2>
                  <span>{{food.mid}}</span>
                  <p :v-html="food.price">
                    人学过
                    <!-- <em>food.teacher</em> -->
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <p v-if="loading">加载中...</p>
          <p v-if="noMore">没有更多了</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="做过最多" name="second">
        <!-- 做过最多 -->
        <div class="infinite-list-wrapper" style="overflow:auto">
          <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
            <li
              v-for="(food,index) in data"
              class="list-item"
              :key="index"
              @click="goods(food.mid)"
            >
              <div class="cont">
                <!-- <img :src="'static/'+food.img" /> -->
                <img :src="food.default_img" />

                <div class="new">
                  <h2>{{food.name}}</h2>
                  <span>{{food.mid}}</span>
                  <p :v-html="food.price">
                    人学过
                    <!-- <em>food.teacher</em> -->
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <p v-if="loading">加载中...</p>
          <p v-if="noMore">没有更多了</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="达人食谱" name="third">
        <!-- 达人食谱 -->
        <div class="infinite-list-wrapper" style="overflow:auto">
          <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
            <li
              v-for="(food,index) in data"
              class="list-item"
              :key="index"
              @click="goods(food.mid)"
            >
              <div class="cont">
                <img :src="food.default_img" />
                <!-- <img :src="'static/'+food.img" /> -->
                <div class="new">
                  <h2>{{food.name}}</h2>
                  <span>{{food.mid}}</span>
                  <p :v-html="food.price">
                    人学过
                    <!-- <em>food.teacher</em> -->
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <p v-if="loading">加载中...</p>
          <p v-if="noMore">没有更多了</p>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Main",
  props: ["name"],
  data() {
    return {
      activeName: "first",
      food: 200,
      loading: false,
      data: [],
    };
  },
  created() {
    axios({
      url: "http://39.107.58.130:8080/api/search/?name=" + this.name,
    }).then((res) => {
      this.data = res.data.date[0].zf_list;
    });
  },
  computed: {
    noMore() {
      return this.food >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  methods: {
    goods(id) {
      this.$route.query.name;
      // console.log(this.$route.query.name);
      this.$router.push({ path: "/Detail", query: { id: id } });
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.food += 2;
        this.loading = false;
      }, 2000);
    },
  },
  mounted() {
    // console.log(this.$route.query.name);
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  margin-top: 40px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-tabs__nav-scroll {
  margin-left: 20px !important;
}
.infinite-list-wrapper {
  height: 1000px;
}
.tablist {
  margin: 0 auto !important;
}
.list {
  width: 100%;
  padding: 0 20px;
  margin-bottom: 60px;
  height: 100%;
}
.list li {
  margin-bottom: 10px;
}

.cont {
  display: flex;
  align-content: space-between;
}
.cont h2 {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  height: 50px;
  font-size: 18px;
}
.cont img {
  width: 138px;
  height: 99px;
  margin-right: 13px;
}
.cont span {
  color: #999;
}
.cont p > em {
  color: #999;
  font-size: 13px;
  padding-left: 50px;
}
.el-tabs {
  width: 100%;
}
.el-tabs__nav-scroll {
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.el-tabs__nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  position: relative;
  transition: -webkit-transform 0.3s;
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  float: left;
  z-index: 2;
}
.el-tabs__nav-wrap::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  z-index: 1;
}
.el-tabs__active-bar .is-top {
  width: 56px;
  transform: translateX(1111px);
}
.el-tabs__item.is-active {
  color: black;
}
.el-tabs__item:hover {
  color: orange;
}
.el-tabs--top .el-tabs__item.is-top {
  width: 100%;
}
</style>