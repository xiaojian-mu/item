<template>
  <div class="box">
    <!-- 推荐 -->
    <div class="title">
      <b>导师的其他课程</b>
      <span>查看全部</span>
    </div>
    <!-- Swiper -->
    <div v-swiper:mySwiper="swiperOption" class="box">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <!-- 跳转路由 -->
          <div class="student">
            <span>1000</span>+在学
          </div>
          <img
            src="https://image.hongbeibang.com/Fq_l3i0T2GzK_yr5pjlauXhIuYyI?640X900&imageView2/1/w/640/h/896"
          />
          <div class="info">风靡台湾的麻薯3Q饼 外酥脆内Q弹</div>
        </div>
        <div class="swiper-slide">
          <!-- 跳转路由 -->
          <div class="student">
            <span>1000</span>+在学
          </div>
          <img
            src="https://image.hongbeibang.com/FhdnrCy99Ix6sMLxo_NmOJHhINje?640X900&imageView2/1/w/640/h/896"
          />
          <div class="info">一咸一甜2款经典花卷 松软喷香层次分明</div>
        </div>
        <div class="swiper-slide">
          <!-- 跳转路由 -->
          <div class="student">
            <span>1000</span>+在学
          </div>
          <img
            src="https://image.hongbeibang.com/FoV8nOyawDtUJcgwpeI4_GMNrseA?640X900&imageView2/1/w/640/h/896"
          />
          <div class="info">独家不易变硬日式网红大福（改良版）</div>
        </div>
        <div class="swiper-slide">
          <!-- 跳转路由 -->
          <div class="student">
            <span>1000</span>+在学
          </div>
          <img
            src="https://image.hongbeibang.com/FopuO9QfNaGyA2U_mtrsyKrWkSAF?640X900&imageView2/1/w/640/h/896"
          />
          <div class="info">低热量与美味兼具的黄金全麦吐司</div>
        </div>
        <div class="swiper-slide">
          <!-- 跳转路由 -->
          <div class="student">
            <span>1000</span>+在学
          </div>
          <img
            src="https://image.hongbeibang.com/Fk0qF3-eNFerjAM_zvv82zpwMLem?640X900&imageView2/1/w/640/h/896"
          />
          <div class="info">极致拉丝！超好吃的夺命吐司</div>
        </div>
        <div class="swiper-slide">
          <!-- 跳转路由 -->
          <div class="student">
            <span>1000</span>+在学
          </div>
          <img
            src="https://image.hongbeibang.com/FqTY2gukL-rZPqO04e2VAmLdtY9l?640X900&imageView2/1/w/640/h/896"
          />
          <div class="info">儿时记忆中的味道「松软老面包」</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; //引入axios
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "IndexMain1",
  data() {
    return {
      banners: [],
      swiperOption: {
        //在这个里面写样式
        pagination: ".swiper-pagination",
        slidesPerView: 2.2,
        paginationClickable: true,
        spaceBetween: 10, //外边距
        pagination: {
          //分页器
          el: ".swiper-pagination",
        },
        // ...
      },
    };
  },
  mounted() {
    console.log("zheshi", this.url);
    this.mySwiper.slideTo(0, 1000, true); //0代表刚开始重那个开始
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style scoped>
.box {
  position: relative;
  height: 100%;
}
.title {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title b {
  font-size: 17px;
  line-height: 24px;
  color: #313131;
  margin-left: 20px;
  font-weight: bold;
}
.title span {
  font-size: 15px;
  color: #999;
  line-height: 15px;
  margin-right: 15px;
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
  border-radius: 5px;
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
