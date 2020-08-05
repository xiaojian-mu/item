<template>
  <!-- 详情的介绍 -->
  <div class="box">
    <div id="top">
      <img
        @click="fn3"
        src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&amp;imageView2/1/w/48/h/48"
      />
    </div>
    <!-- 视频 -->

    <div id="qw">
      <div id="mas">
        <video
          :poster="vidos.default_img"
          data-reactid=".1o362hmmf6q.1.0.2.0"
          controls
          autoplay="true"
          playsinline="playsinline"
          webkit-playsinline="webkit-playsinline"
          controlslist="nodownload"
        >
          <source
            src="https://alivideo.hongbeibang.com/daxue-2020-6-28-9-46-55?auth_key=1596540777-3054171619162529795-0-ef5ae08834e4fe7716c517043d8f8f90"
            type="video/mp4"
            data-reactid=".1yn8aw3dlr4.1.0.2.0.0"
          />
        </video>
      </div>
      <!-- 视频 -->
      <!-- 标题 -->
      <div id="titie">
        <div class="box1">{{vidos.name}}</div>
        <div class="box2">
          <img
            src="https://image.hongbeibang.com/FgRQxfAWq4kOdLc5xd_GxWm03Vs_?54X54&amp;imageView2/1/w/54/h/54"
          />
          <span>
            <b>{{vidos.category}}</b>人在学
          </span>
        </div>
      </div>
      <!-- 标题 -->
      <div id="reference">
        <!-- 左 -->
        <div id="reference-left">
          <ul>
            <li>
              <span>永久回看</span>
            </li>
            <li>
              <span>报名即学</span>
            </li>
            <li>
              <span>自营课程</span>
            </li>
            <li>
              <span>高效学习体验</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>分步骤学</span>
            </li>
            <li>
              <span>唯一品类</span>
            </li>
            <li>
              <span>图片下载</span>
            </li>
            <li>
              <span>工具材料参考</span>
            </li>
          </ul>
        </div>
        <!-- 左 -->
        <!-- 右 -->
        <div id="reference-right">
          <img src="https://image.hongbeibang.com/Fqee_DzmTrYWinRY2tMPfDtu1ym8" />
        </div>
        <!-- 右 -->
      </div>

      <!-- 详情的介绍 -->
      <div id="procedure">
        <div id="ctrl" class="ctrl1">
          <div id="Ctrl" class="Ctrl1"></div>
        </div>
        <div id="detailsQ">
          <div id="titel1">你将学会</div>
          <p v-html="vidos.study"></p>
        </div>
      </div>
      <!-- 详情的介绍 -->
      <!-- 课程介绍 -->
      <div id="procedure">
        <div id="ctrl" class="ctrl1"></div>
        <div id="detailsQ">
          <div id="titel1">如何学习</div>
          <p>1、购买课程后即报名成功，点击【去上课】按钮，即可学习本课程</p>
          <p>2、报名即可获得专业答疑服务</p>
          <p>3、无限次回看视频教程</p>
          <div class="ctrl ctrl1"></div>
        </div>
      </div>
      <!-- 课程介绍 -->
      <!-- 导师介绍 -->
      <div id="tutor">
        <div id="titel1">导师介绍</div>
        <div id="name">
          <img :src="vidos.teacher_img" />
          <div>{{vidos.teacher}}</div>
        </div>
        <div id="de" style="margin:-15px padding:0 50px" v-html="vidos.title"></div>
      </div>
      <!-- 导师介绍 -->
      <!-- 推荐 -->
      <div id="recommend">
        <De />
      </div>
      <!-- 推荐 -->
      <!-- 介绍 -->
      <div id="referral">
        <div>
          <img
            src="https://image.hongbeibang.com/FgyNuZ8yE795vzF-O4lGF3G5Caxr?551X245&amp;imageView2/1/w/551/h/242"
          />
        </div>
        <div>烘焙帮学堂，是由烘焙帮推出的课程品牌，通过官方自制的教学视频，用科学的烘焙配方、细致的步骤讲解、贴心的答疑服务，让烘焙更简单！</div>
        <div class="referral-1">
          <div>
            <img
              src="https://image.hongbeibang.com/FvihrbO1twdtKSkz2WqB9KxUjjeg?100X116&amp;imageView2/1/w/100/h/116"
              style="width: 50px; height: 58px; background: none;"
              data-reactid=".434xawaet8.1.0.7.6.2.0.0.0"
            />

            <span>蛋糕</span>
          </div>
          <div>
            <img
              alt
              title
              src="https://image.hongbeibang.com/Frs8TmZhk4PrxBY2cvA9e3jbbdrB?100X116&amp;imageView2/1/w/100/h/116"
              style="width: 50px; height: 58px; background: none;"
              data-reactid=".434xawaet8.1.0.7.6.2.1.0.0"
            />
            <span>甜点</span>
          </div>
          <div>
            <img
              alt
              title
              src="https://image.hongbeibang.com/ForyDTluoYKimnQmobG6agmowKzy?100X116&amp;imageView2/1/w/100/h/116"
              style="width: 50px; height: 58px; background: none;"
              data-reactid=".434xawaet8.1.0.7.6.2.2.0.0"
            />
            <span>面包</span>
          </div>
          <div>
            <img
              alt
              title
              src="https://image.hongbeibang.com/FuCKHBljrYAFuTjTs0B1fkNcUhWw?100X116&amp;imageView2/1/w/100/h/116"
              style="width: 50px; height: 58px; background: none;"
              data-reactid=".434xawaet8.1.0.7.6.2.3.0.0"
            />
            <span>中式点心</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 介绍 -->
    <!-- 底部 -->
    <div id="footer">
      <div>
        <img
          src="https://image.hongbeibang.com/FjlY1hEsTozcG0oGvSXzNqRIc8gb?imageView2/1/w/640/h/640"
        />
        <p @click="f4">更多课程</p>
      </div>
      <div>
        <img
          src="https://image.hongbeibang.com/FoOJzEIUP4G3Ub0wp_XeNNYIHH0s?imageView2/1/w/640/h/640"
        />
        <!-- 点击跳转到咨询 -->
        <router-link to="/Consult">
          <p>咨询</p>
        </router-link>
      </div>
      <!-- 点击跳转到支付 -->
      <div @click="fn(vidos.mid)">
        <span>
          <a>￥{{vidos.price}}&nbsp;购买课程</a>
        </span>
      </div>
    </div>
    <!-- 底部 -->
  </div>
</template>

<script>
import De from "@/components/De";
import axios from "axios";
// import  IndexMain1 from "./IndexMain1";
export default {
  name: "Detail",
  components: {
    De,
  },
  data: function () {
    return {
      vidos: [],
      scrollBehavior(to, from, savedPosition) {
        return {
          x: 0,
          y: 0,
        };
      },
    };
  },
  created() {
    //  this.id=this.$route.query.id
    axios({
      url: "http://39.107.58.130:8080/api/mothod/?id=" + this.$route.query.id,
    }).then((res) => {
      this.vidos = res.data.data[0];
      console.log(this.vidos);
    });
  },
  methods: {
    fn(id) {
      this.$router.push({ path: "/zhifu", query: { id: id } });
    },
    fn3() {
      this.$router.push("/");
    },
    f4() {
      this.$router.push("/Bathmos");
    },
  },
};
</script>

<style scoped>
router-link {
  color: #000000;
}
#top {
  width: 100%;
  height: 25px;
  top: 0;
  /* position: fixed; */
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 10;
}
#top img {
  width: 26px;
  height: 26px;
}
#mas {
  width: 100%;
  height: 210px;
  background-color: #ffffff;
}
#mas video {
  width: 100%;
  height: 210px;
}
.mas source {
  width: 100%;
  height: 210px;
}
#qw {
  margin-bottom: 50px;
  background: #f5f7f9;
}
#titie {
  width: 100%;
  height: 112px;
  padding: 20px 15px;
  background-color: #ffffff;
}
.box1 {
  font-weight: bold;
  font-size: 20px;
  text-align: left;
}
.box2 {
  width: 100%;
  height: 27px;
  margin-top: 15px;
}
.box2 img {
  width: 27px;
  height: 27px;
  display: block;
  float: left;
}
.box2 span {
  display: block;
  float: left;
  line-height: 27px;
}
.box2 span b {
  color: #e98b71;
}

/* 参考 */
#reference {
  width: 100%;
  height: 61.5px;
  margin: 10px 0;
  padding: 0 20px 10px 20px;
  background: #fff;
  display: flex;
}
#reference-left {
  width: 100%;
  height: 61.5px;
}
#reference-left ul {
  width: 100%;
  height: 18px;
  margin-top: 14px;
  display: flex;
  justify-content: space-around;
}
#reference-left ul:nth-child(2) {
  margin-top: 5px;
}
#reference-left ul li {
  color: #676767;
  font-weight: 200;
  list-style: disc;
  margin-left: 5px;
  color: #e98b71;
}
#reference-left ul li span {
  color: #676767;
  font-size: 12px;
}
#reference-right {
  width: 5%;
  height: 61.5px;
  display: flex;
  align-items: center;
}
#reference-right img {
  width: 6.75px;
  height: 11.57px;
}
#procedure {
  width: 100%;
}
#ctrl {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
#Ctrl {
  width: 90%;
  height: 1px;
  border-bottom: 1px solid #000000;
}
.ctrl1 {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.Ctrl1 {
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #000000;
}
#detailsQ {
  width: 100%;
  background: white;
  padding: 20px 17px 0px 20px;
  color: #000;
}
#detailsQ p {
  width: 100%;
  text-align: left;
  color: #313131;
  font-size: 16px;
  line-height: 25.5px;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}
#de {
  width: 100%;
  background: white;
  color: #000;
  text-align: left;
  margin-left: -8px;
  margin-top: 5px;
}
#de p span {
  width: 100%;
  color: #313131;
  font-size: 16px;
  line-height: 25.5px;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}
#titel1 {
  width: 100%;
  font-weight: bold;
  font-size: 17px;
  line-height: 24px;
  color: #313131;
  margin-bottom: 10px;
  text-align: left;
}
/* 导师介绍 */
#tutor {
  width: 100%;
  /* height: 600px; */
  padding: 20px 0px 20px 20px;
  background: white;
}
#name {
  width: 100%;
  height: 50px;
  margin: 15px 0 5px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 17px;
  color: rgb(49, 49, 49);
}
#name img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
#name div {
  margin-left: 10px;
}
#detailsQ1 {
  width: 100%;
  background: white;
  padding: 20px 0px 0px 0px;
}
#detailsQ {
  text-align: left;
}
/* 导师介绍 */
/* 推荐 */
#recommend {
  width: 100%;
  height: 319px;
  background: white;
  margin: 10px 0;
  padding-bottom: 15px;
  margin-top: 16px;
}
/* 推荐 */
/* 介绍 */
#referral {
  width: 100%;
  padding: 20px 17px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
}
#referral div {
  width: 100%;
  /* height: 50px; */
}
#referral div:nth-child(1) img {
  width: 130px;
  height: 57px;
}
#referral div:nth-child(2) {
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;
  color: #313131;
  text-align: left;
}
.referral-1 {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}
.referral-1 div {
  width: 85px;
  height: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.referral-1 div img {
  width: 50px;
  height: 58px;
}

/* 介绍 */
/* 底部 */
#footer {
  margin-top: 50px;
  width: 100%;
  height: 50px;
  background: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  z-index: 999;
}
#footer div {
  width: 24%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #313131;
}
#footer div:nth-child(3) {
  width: 62%;
  height: 50px;
  background: rgb(190, 187, 167);
}
#footer div p {
  margin-top: 5px;
  color: #313131;
  letter-spacing: 3px;
}
#footer div span {
  width: 100%;
  height: 100%;
  line-height: 50px;
  background-color: #e98b71;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
}
#footer div span a {
  color: #fff;
}
#footer div img {
  width: 20px;
  height: 19px;
  margin-top: 5px;
}
/* 底部 */
#aaa {
  width: 100%;
  height: 600px;
  background: cyan;
  margin-top: 30px;
}
</style>