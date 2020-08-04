<template>
  <div class="nologin">
    <div class="nologinheader">
      <router-link to="/">
        <img
          src="https://image.hongbeibang.com/FlqyNFosCk9hhyBMoPkej9xbh_Yf?imageView2/1/w/50/h/50"
        />
        <div class="login-title">登录</div>
      </router-link>
    </div>
    <div class="nologinimg">
      <img
        src="https://image.hongbeibang.com/FoBGm71FF5SYiTw0Wc0xkeiL3eQz?imageMogr2/strip/thumbnail/510x510"
      />
    </div>
    <div class="login-weixin">
      <router-link to="/Vx" style="color:white"> 使用微信登录</router-link>
    </div>
    <div class="other-login">
      <router-link to="/LogIn" style="color:#4a4945">其他登录方式</router-link>
    </div>
    <div class="loginother">
      登录即代表阅读并同意
      <span>服务条款</span>
    </div>
    <div class="hint">登录后才能看用户的信息哦</div>
  </div>
</template>

<script>
export default {
  name: "Nologin",
  //js代码
  mounted() {
    let op = 1;
    let a = document.querySelector(".hint");
    let ids = setInterval(function() {
      op -= 0.01;
      a.style.opacity = op;
      if (op < 0) clearInterval(ids);
    }, 25);
  }
};
</script>

<style scoped>
.nologinheader {
  position: relative;
  width: 100%;
  height: 44px;
}
.nologinheader img {
  position: absolute;
  width: 12px;
  height: 18px;
  margin: 9.5px 0;
  left: 25px;
}
.login-title {
  width: 100%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: #4a4945;
}
.nologinimg {
  margin-top: 120px;
}
.nologinimg img {
  width: 300.26px;
  height: 167.2px;
  margin: 0 auto;
}
.login-weixin {
  width: 295px;
  height: 44px;
  margin: 30px 40.1667px 0;
  background-color: #2ac277;
  text-align: center;
  line-height: 44px;
  color: white;
  border-radius: 5px;
  font-size: 15px;
}
.other-login {
  width: 90px;
  height: 40px;
  color: #e98b71;
  margin: 15px auto;
  padding: 10px 0;
  font-size: 15px;
}
.loginother {
  width: 100%;
  height: 20px;
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;
  color: #999;
}
.loginother span {
  color: #e98b71;
}
.hint {
  width: 100%;
  height: 36px;
  line-height: 36px;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
  background: red;
  position: absolute;
  top: 50px;
  /* animation: paly 1s; */
}
/* @keyframes play {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
} */
</style>
