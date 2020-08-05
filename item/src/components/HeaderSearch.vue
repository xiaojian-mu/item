<template>
  <div class="search">
    <router-link to="/">
      <div>
        <img
          src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"
          alt
        />
      </div>
    </router-link>
    <div class="text_ellipsis">
      <router-link to="/Search">
        <input type="text" id="search-cont" placeholder="搜索食谱/食材，烘焙/家常菜一应俱全" />
        <!-- <span></span> -->
      </router-link>
    </div>
    <div class="searchright">搜索</div>
  </div>
</template>

<script>
export default {
  name: "Search",
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
  z-index: 20;
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
</style>
