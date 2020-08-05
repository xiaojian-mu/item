<template>
  <div id="box3">
    <div id="box4">
      <div>小计：</div>
      <div>￥{{er[0].price}}</div>
    </div>
    <div id="box5">
      合计：&nbsp;
      <b>￥{{er[0].price}}</b>
    </div>
    <!-- 标题 -->
    <div id="headline"></div>
    <div id="reference">
      <!--  左 -->
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

    <!-- 底部 -->
    <div id="foot">
      <el-button type="text" @click="open">
        <span>微信支付</span>
      </el-button>
    </div>
    <!-- 底部 -->
  </div>
</template>

<script>
export default {
  name: "count",
  data() {
    return {};
  },
  props: ["er"], //注意这里要父组件的名字一致
  methods: {
    open() {
      this.$alert(
        '<img id="df"  style=" margin-left: -80px;" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3610073095,1837444416&fm=15&gp=0.jpg" /><strong id="as">请扫描二维码支付</strong>',
        "提示",
        {
          dangerouslyUseHTMLString: true,
          center: true,
        }
      );
    },
  },
};
</script>

<style scoped>
#box3 {
  width: 100%;
  height: 108px;
  /* padding: 10px; */
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
}
#as {
  margin-top: 100px;
}
#df {
  width: 200px;
  height: 200px;
}
#box4 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #313131;
  line-height: 40px;
  border-bottom: 0.5px solid #ccc;
  background: white;
  padding-bottom: 220px;
  padding: 0 10px;
}
#box5 {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #313131;
  font-size: 18px;
  font-weight: bold;
  padding: 0 10px;
}
#box5 b {
  color: #ea937b;
  font-weight: bold;
}
#headline {
  width: 100%;
  height: 1000px;
  background: yellow;
}
#reference {
  width: 100%;
  height: 81px;
  margin: 30px 0;
  /* padding: 0 20px 10px 20px; */
  background: white;
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
#foot {
  width: 100%;
  height: 50px;
  background-color: #44a92f;
  color: white;
  position: fixed;
  bottom: 0;
  line-height: 50px;
  text-align: center;
  font-size: 17px;
}
#foot span {
  color: white;
}
</style>