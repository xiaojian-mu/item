<template>
  <div class="Opinion">
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
    <div>
      <div id="xiaobian">
        <img
          src="https://image.hongbeibang.com/FmUfl-X_nUivMexkdPKPS0-YPBDc?imageView2/1/w/80/h/80"
        />
        <div>
          <div>小编回复</div>
          <div>#功能建议 ／ 1分钟前</div>
        </div>
      </div>
      <div id="ff1">
        <div id="ff">
          你好，这里是bug反馈处，请尽量详细描述问题，这样咱们程序员GG会第一时间帮你优化哦！
          bug问题回复时间：10:00-18:00（工作日）
          视频课程的烘焙制作问题，请将APP更新至最新版，然后点击“问导师”按钮提问（未更新APP无法享受此功能，请及时更新！）
          APP更新地址：http://a.app.qq.com/o/simple.jsp?pkgname=com.hongbeibang.app
          “问导师”的烘焙问题老师会尽快回复大家，提问后请耐心等待。
        </div>
      </div>
    </div>
    <div>
      <div id="xiaobian">
        <img
          src="https://image.hongbeibang.com/FmUfl-X_nUivMexkdPKPS0-YPBDc?imageView2/1/w/80/h/80"
        />
        <div>
          <div>小编回复</div>
          <div>#功能建议 ／ 2分钟前</div>
        </div>
      </div>
      <div id="ff1">
        <div id="ff">
          你好，这里是bug反馈处，请尽量详细描述问题，这样咱们程序员GG会第一时间帮你优化哦！
          bug问题回复时间：10:00-18:00（工作日）
          视频课程的烘焙制作问题，请将APP更新至最新版，然后点击“问导师”按钮提问（未更新APP无法享受此功能，请及时更新！）
          APP更新地址：http://a.app.qq.com/o/simple.jsp?pkgname=com.hongbeibang.app
          “问导师”的烘焙问题老师会尽快回复大家，提问后请耐心等待。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Consult from "../layout/Consult";
export default {
  name: "history",
  data: function () {
    return {
      vidos: [],
      textarea: "",
    };
  },
  components: {
    Consult,
  },
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

#box3 b {
  color: #000;
}
#box3 div {
  width: 100px;
  height: 30px;
  margin-left: 30px;
  color: #4a4945;
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
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
#xiaobian {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
}
#xiaobian img {
  width: 40px;
  height: 40px;
}
#xiaobian div {
  display: flex;
  /* justify-content: flex-start; */
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
}
#ff1 {
  display: flex;
  justify-content: center;
}
#ff {
  width: 90%;

  color: #4a4945;
  font-size: 14px;
  line-height: 1.25em;
  margin: 15px 0;
  padding: 15px 34px 27px 34px;
  box-sizing: border-box;
  word-break: break-all;
  background-color: #efedeb;
  border-radius: 4px;
  text-align: left;
}
</style>