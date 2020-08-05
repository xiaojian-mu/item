<template>
  <div class="box">
    <router-link to="/put">
      <img
        src="https://image.hongbeibang.com/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48"
      />
    </router-link>
    <div class="search" @click="fn">
      <span>
        <img
          src="https://image.hongbeibang.com/FltPAS-35CZfvSpnHacXWoqcfFz5?42X42&imageView2/1/w/42/h/42"
          alt
        />
      </span>
      <span>"搜索食谱/食材，烘焙/家常菜一应俱全"</span>
    </div>
    <img
      src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48"
    />
  </div>
</template>

<script>
export default {
  name: "IndexHeader",
  methods: {
    fn() {
      this.$router.push({ path: "/Search" });
    }
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 44px;
  z-index: 6;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 18px;
  margin: 0 auto;
  max-width: 600px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
}
.box img {
  width: 27px;
  height: 27px;
  margin: 0 15px;
}
.search {
  display: flex;
  widows: 250px;
  height: 35px;
  padding: 0 10px;
  border-radius: 4px;
  background-color: #f5f7f9;
  align-items: center;
  justify-content: space-around;
  flex: 1;
}
.search > span img {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}
.search > span:nth-child(2) {
  width: 202px;
  height: 16px;
  color: #999999;
  font-size: 12px;
  vertical-align: middle;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
