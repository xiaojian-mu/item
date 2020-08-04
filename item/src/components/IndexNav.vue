<template>
  <div class="box">
    <div class="list">
      <router-link to="/Foodsort">
        <img
          src="https://image.hongbeibang.com/FqTIqQgUiGzbGvFBjYJyJRIvmb7W?80X80&imageView2/1/w/80/h/80"
        />
        <h5>技巧百科</h5>
      </router-link>
    </div>
    <div class="list">
      <router-link to="/Foodsort">
        <img
          src="https://image.hongbeibang.com/FsdwLQX6d3HCUvTO6krgAvL12e5z?80X80&imageView2/1/w/80/h/80"
        />
        <h5>视频学堂</h5>
      </router-link>
    </div>
    <div class="list">
      <router-link to="/Foodsort">
        <img
          src="https://image.hongbeibang.com/Ftas3mziKsE3fMQvZ3jC4YgDugVk?80X80&imageView2/1/w/80/h/80"
        />
        <h5>新手教程</h5>
      </router-link>
    </div>
    <div class="list">
      <router-link to="/Foodsort">
        <img
          src="https://image.hongbeibang.com/FqkRcAKpMnFUL3qs1BB9aOhbihlj?80X80&imageView2/1/w/80/h/80"
        />
        <h5>食谱分类</h5>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexNav",
};
</script>

<style scoped>
.box {
  display: flex;
  width: 100%;
  height: 86px;
  justify-content: space-around;
  align-items: center;
  /* margin-top: 44px; */
}
.box > .list {
  width: 94px;
  height: 86px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.box > .list img {
  width: 45px;
  height: 45px;
}
.box > .list h5 {
  font-size: 12px;
  color: #4a4945;
  line-height: 16px;
  font-weight: 400;
  margin-top: 10px;
}
</style>