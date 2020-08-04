<template>
  <div class="box">
    <div class="title">
      <div class="recommended">{{ title }}</div>
      <div class="more">
        <div @click="subfn(url)">查看更多</div>
      </div>
    </div>
    <!-- Swiper -->
    <div v-swiper:mySwiper="swiperOption" class="box">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(banner, index) in url.slice(0,10)"
          :key="index"
          @click="goods(banner.id)"
        >
          <div class="student">
            <span>1000</span>
            +在学
          </div>
          <img v-lazy="banner.default_img" />
          <div class="info">{{ banner.name }}</div>
        </div>
      </div>
      <!-- <div class="swiper-pagination"></div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios"; //引入axios
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "IndexMain2",
  props: ["title", "url"],
  data() {
    return {
      swiperOption: {
        //在这个里面写样式
        pagination: ".swiper-pagination",
        slidesPerView: 2.2,
        paginationClickable: true,
        spaceBetween: 10, //外边距
        pagination: {
          //分页器
          // el: ".swiper-pagination",
        },
      },
    };
  },

  methods: {
    //编程式路由传参数给详情页
    goods(id) {
      this.$router.push({ path: "Detail", query: { id: id } });
    },
    //传给更多
    subfn(id) {
      this.$router.push({ path: "More", query: { id: id } });
    },
  },

  //
  mounted() {
    this.mySwiper.slideTo(0, 1000, true); //0代表刚开始重那个开始
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  //发送请求
  // created() {
  //   axios({
  //     url: this.url
  //   }).then(res => {
  //     this.banners = res.data;
  //     console.log(res.data);
  //   });
  // }
};
</script>

<style scoped>
.box {
  position: relative;
  height: 100%;
}
.title {
  font-size: 17px;
  font-weight: 700;
  margin: 0 auto;
  padding-top: 25px;
  padding-bottom: 10px;
  flex: 1;
  margin: 0px 20px;
  display: flex;
  justify-content: space-between;
}
.more {
  font-size: 14px;
  line-height: 24px;
  color: #999999;
}
.swiper-container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.swiper-wrapper > .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: 160px !important;
  height: 270px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.swiper-wrapper > .swiper-slide:nth-child(1) {
  margin-left: 20px;
}
.student {
  position: absolute;
  left: 0;
  bottom: 53.5px;
  font-size: 11px;
  margin: 0 10px;
  padding: 2px 4px;
  border-radius: 4px;
  overflow: hidden;
  color: #4a4945;
  background-color: #fff;
}
.swiper-slide img {
  width: 160px;
  height: 225px;
  border-radius: 4px;
}
.info {
  color: #4a4945;
  font-weight: bold;
  font-size: 15px;
  line-height: 20.25px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
}
</style>
