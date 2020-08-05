<template>
  <!-- 咨询 -->
  <div id="app">
    <div id="box1">
      <div id="box2">
        <img
          @click="fn3"
          src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&amp;imageView2/1/w/48/h/48"
        />
      </div>
      <div id="box3">
        <div @click="fn">
          <router-link to="/Consult">
            <b>写意见</b>
          </router-link>
          <p id="q"></p>
        </div>
        <div @click="fn1">
          <router-link to="/history">
            <b>历史回复</b>
          </router-link>

          <p id="w"></p>
        </div>
      </div>
    </div>
    <div id="boxq">
      <textarea autofocus placeholder="请告诉我们您遇到的问题或想反馈的意见"></textarea>
    </div>
    <div id="er">
      <img
        alt
        title
        src="https://image.hongbeibang.com/Fl7SrrULRLa04xkL64qhig8FdevD?imageView2/1/w/640/h/640"
        style="width:190px;height:190px;"
        data-reactid=".1vorsw3sxs.1.0.1.2.2.0"
      />
    </div>
    <div id="wen">
      <div>长按识别二维码</div>
      <div>直接联系客服</div>
    </div>
    <div id="foot">
      <div @click="q">发表意见</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Consult",
  data() {
    return {
      textarea: "",
    };
  },
  components: {},
  methods: {
    fn() {
      let q = document.getElementById("q");
      let w = document.getElementById("w");
      q.style.display = "block";
      w.style.display = "none";
    },
    fn1() {
      let q = document.getElementById("q");
      let w = document.getElementById("w");
      q.style.display = "none";
      w.style.display = "block";
    },
    fn3() {
      this.$router.push("/Detail");
    },
    q() {
      alert("请输入建议内容");
    },
  },
};
</script>

<style scoped>
#box1 {
  width: 100%;
  height: 46px;

  display: flex;
  justify-content: left;
}

#box2 {
  width: 20%;

  display: flex;
  align-items: center;
}
#box2 img {
  width: 27px;
  height: 27px;
  margin-left: 10px;
}
#box3 {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
#box3 div {
  width: 80px;
  height: 30px;
  margin-left: 30px;
  color: #4a4945;
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
  padding-left: 20px;
}
#box3 p {
  width: 20px;
  height: 2px;
  margin-left: 15px;
  margin-top: 5px;
  background: rgb(233, 139, 113);
  display: none;
}
#box3 #q {
  display: block;
}
#box3 b {
  color: black;
}
#boxq {
  width: 100%;
  height: 164px;
  padding: 0px 15px;
  margin: 15px 0;
}
#boxq textarea {
  width: 100%;
  height: 100%;
  padding: 15px 15px;
  margin: 15px 0;
  background-color: #f5f7f9;
  resize: none;
  border: 0;
  outline: none;
  line-height: 22px;
  font-size: 14px;
  color: #4a4945;
}
#er {
  width: 100%;
  height: 190px;
  display: flex;
  justify-content: center;
}
#wen {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
}
#foot {
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
#foot div {
  text-align: center;
  line-height: 40px;
  width: 95%;
  height: 40px;
  background-color: #e98b71;
  color: #ffffff;
  border: 1px solid;
  border-color: #e98b71;
  border-radius: 4px;
  font-size: 16px;
}
</style>