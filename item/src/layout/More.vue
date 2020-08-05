<template>
  <div class="box">
    <ul>
      <li v-for="(every, index) in data" :key="index" @click="good(every.id)">
        <img v-lazy="every.src" />
        <h5>{{ every.info }}</h5>
        <div class="student"><span>587</span>人参加</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "More",
  data() {
    return {
      data: []
    };
  },
  //
  //编程式路由
  methods: {
    good(id) {
      //给详情页传参
      this.$router.push({ path: "Detail", query: { id: id } });
    }
  },
  //
  created() {
    axios({
      url: this.$route.query.id
    }).then(res => {
      this.data = res.data;
    });
  }
};
</script>

<style scoped>
.box {
  padding: 10px 0;
  margin: 0 10px 0 20px;
}
ul {
  width: 100%;
  height: 1000px;
}
ul li {
  float: left;
  width: 162px;
  height: 306px;
  margin-right: 10px;
  position: relative;
}
ul li > img {
  width: 162px;
  height: 224px;
  border-radius: 4px;
}
ul > li > h5 {
  margin-top: 5px;
  color: #4a4945;
  font-weight: bold;
  font-size: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: normal;
  width: 162px;
  height: 42.5px;
}
ul li .student {
  position: absolute;
  left: 0;
  bottom: 92px;
  font-size: 11px;
  margin: 0 10px;
  padding: 2px 4px;
  border-radius: 4px;
  overflow: hidden;
  color: #4a4945;
  background-color: #fff;
}
</style>
