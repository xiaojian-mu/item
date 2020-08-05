<template>
  <div class="box">
    <HeaderSearch />
    <div class="main">
      <!-- ......................................... -->
      <div class="wrapper left" ref="wrapper">
        <div class="bscroll-container">
          <!-- 刷新提示信息 -->
          <div class="top-tip">
            <span class="refresh-hook">{{ pulldownMsg }}</span>
          </div>
          <!-- 内容列表..........-->
          <ul>
            <!-- goods方法作用：1.请求数据2.左侧nav默认选中 -->
            <li
              id="goodnava"
              v-for="(every, index) in dataName"
              :key="index"
              @click="goods(index)"
              :class="active == index ? 'activeClass' : ''"
            >
              <span @click="change(index)">{{ every }}</span>
            </li>
          </ul>
          <!-- 底部提示信息........... -->
          <div class="bottom-tip">
            <span class="loading-hook">{{ pullupMsg }}</span>
          </div>
        </div>
      </div>
      <!-- ........................................... -->
      <div class="right">
        <ul>
          <!-- 二级标题及商品图片 -->
          <li v-for="(every, index) in dataChildren" :key="index">
            <h2>{{ every.name }}</h2>
            <div class="goodsList">
              <div
                class="aa"
                v-for="(every1, index1) in every.child_list"
                :key="index1"
                @click="good(every1.name)"
              >
                <img :src="every1.img_url" />
                <p>{{ every1.name }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSearch from "@/components/Headersearch";
import BScroll from "better-scroll";
import axios from "axios";
export default {
  name: "Foodsort",
  components: {
    HeaderSearch,
  },
  data() {
    return {
      data: [], //存储所有的数据按数组方式
      dataName: [], //存储所有的名字写左边
      dataChildren: [], //点击那个存那个
      //
      active: 0,
      pulldownMsg: " ",
      pullupMsg: " ",
    };
  },

  methods: {
    // 点击时请求goods中的children
    goods(index) {
      this.dataChildren = this.data[index].child_list;
    },
    good(id) {
      //给列表页传参
      ///这里没配
      this.$router.push({ path: "/GoodList", query: { name: id } });
    },
    change(index) {
      //把index值赋给active，点击改变样式
      this.active = index;
    },
    //
    getData() {
      return new Promise((resolve) => {
        //模拟数据请求
        setTimeout(() => {
          const arr = [];
          for (let i = 0; i < 20; i++) {
            arr.push(count++);
          }
          resolve(arr);
        }, 1000);
      });
    },
  },

  // 请求所有的数据
  created() {
    axios({
      url: "http://39.107.58.130:8080/api/category/",
    }).then((res) => {
      this.data = res.data.data;
      for (let i = 0; i < this.data.length; i++) {
        console.log();
        this.dataName.push(this.data[i].name);
      }
      this.dataChildren = this.data[0].child_list;
    });
  },

  //
  mounted() {
    //
    const that = this;
    // 创建Better-Scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 1, //滚动的时候会派发scroll事件，会节流
      click: true, //派发click事件
    });
    // //滑动结束松开事件
    this.scroll.on("touchEnd", (pos) => {
      //上拉刷新
      if (pos.y > 30) {
        setTimeout(() => {
          // 获取数据
          for (let i = 0; i < 10; i++) {
            this.data.push("a" + this.data.length);
          }
          this.pulldownMsg = " ";
          this.scroll.refresh(); //重新计算高度
        }, 2000);
      } else if (pos.y < this.scroll.maxScrollY - 30) {
        //下拉加载
        this.pullupMsg = " ";
        // setTimeout(() => {
        //   that.getData().then(res => {
        //     //恢复文本值
        //     that.pullupMsg = "加载更多";
        //     that.data = this.data.concat(res);
        //     that.scroll.refresh();
        //   });
        // }, 2000);
      }
    });
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
}
.main {
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
}

.left {
  width: 20%;
  height: 549px !important;
  background: rgb(247, 244, 244) !important;
  position: fixed;
  z-index: 1;
  width: 85px;
  zoom: 1;
}
#goodnava {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  color: #4a4945;
}
#goodnava > span {
  display: block;
  width: 100%;
  height: 50px;
}
.activeClass {
  background: #ffffff;
  border-left: 3px solid #e98b71;
}
.right {
  width: 80%;
  height: 100%;
  position: absolute;
  padding-bottom: 100px;
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 22.67%;
  margin: 0;
  overflow: scroll;
}
.right > ul > li > h2 {
  width: 100%;
  height: 42px;
  padding-top: 10px;
  padding-left: 16.875px;
  padding-bottom: 10px;
  font-size: 12px;
  font-weight: bold;
  line-height: 22px;
  color: #313131;
  overflow: hidden;
  zoom: 1;
}
.goodsList {
  padding: 0 20px;
}
.goodsList > div {
  display: inline-block;
  padding: 0px 0px 10px 0px;
  text-align: center;
  width: 33.333%;
  box-sizing: border-box;
  overflow: hidden;
  zoom: 1;
}
.aa > img {
  width: 80px !important;
  overflow: hidden;
  height: 80px !important;
  border-radius: 5px;
}
.aa > p {
  width: 87px;
  height: 16px;
  font-size: 12px;
  line-height: 16px;
  color: #313131;
  margin-top: 5px;
}
/* 。。。。。。 */
.wrapper {
  width: 20%;
  height: 549px;
  background: rgb(245, 247, 249);
  overflow: hidden;
  position: relative;
}
/* 下拉、上拉提示信息 */
.top-tip {
  position: absolute;
  top: -40px;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #555;
}
.bottom-tip {
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: #777;
  position: absolute;
  bottom: -35px;
  left: 0;
}
</style>
