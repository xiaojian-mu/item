<template>
  <div>
    <h3>
       <router-link to="/My" tag="span">
      <img src="../assets/img/b-d-back_03.png" class="back" @click="back"/>
      </router-link>
      <span>登录</span>
    </h3>
    <div class="login_nav">
      <span @click="changeBox" class="phone">手机验证码</span>
      <span @click="changeBox" class="pwd">账户密码</span>
    </div>
    <!-- <router-view></router-view> -->
    <div class="center" v-show="isShow">
      <div class="list">
        <span class="left">手机号</span>
        <input
          type="text"
          placeholder="手机号"
          maxlength="11"
          class="txt first phoneNum"
          v-model="phoneNum"
        />
      </div>
      <div class="list">
        <span class="left">验证码</span>
        <input type="text" placeholder="输入验证码" class="txt" v-model="yanzhengma" />
        <div class="inputsec">
          <div class="right pass" @click="catchTime" v-show="timimg">获取验证码</div>
          <div class="right Time" v-show="timimg==false">{{times}}s后重发</div>
        </div>
      </div>
      <span class="waring waring1"></span>
      <p class="next next1" @click="phone">登录</p>
      <div class="protocol">
        <router-link to="/Register" tag="span">
        <p>手机号注册</p>
        </router-link>
      </div>
    </div>
    <div class="center" v-show="show">
      <div class="list">
        <span class="left">账号</span>
        <input type="text" placeholder="手机号" maxlength="11" class="txt first" v-model="phoneNum2" />
      </div>
      <div class="list">
        <span class="left">密码</span>
        <input type="password" placeholder="请输入密码" class="txt" v-model="password" />
        <span class="right1">
          <img src alt />
          <img src alt />
        </span>
      </div>
      <span class="waring waring2"></span>
      <p class="next next2" @click="phone2">登录</p>
      <div class="protocol protocol1">
        <router-link to="/Register" tag="span">
        <span>手机号注册</span>
        </router-link>
        <span>忘记密码</span>
      </div>
    </div>
    <div class="s_login">
      <div class="top">
        <div></div>
        <p>第三方账号快速登录</p>
        <div></div>
      </div>
      <div class="bottom">
        <img src="../assets/img/b-d_qq_03.png" />
        <img src="../assets/img/b-d_wx_03.png" />
        <img src="../assets/img/b-d_wb_03.png" />
        <img src="../assets/img/b-d_zfb_03.png" />
        <img src="../assets/img/b-d_tb_03.png" />
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'zepto';
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      isShow: true,
      show: false,
      password: "",
      phoneNum: "",
      phoneNum2: "",
      yanzhengma: "",
      timimg: true,
      times: 60,
    };
  },
  methods: {
    changeBox() {
      this.isShow = !this.isShow;
      this.show = !this.show;
      let phone = document.querySelector(".phone");
      let pwd = document.querySelector(".pwd");
      if (this.show) {
        pwd.style.color = "#1aaa79";
        phone.style.color = "#000";
        pwd.style.borderBottom = "2px solid #1aaa79";
        phone.style.borderBottom = "2px solid #fdfdfc";
      } else {
        pwd.style.color = "#000";
        phone.style.color = "#1aaa79";
        pwd.style.borderBottom = "2px solid #fdfdfc";
        phone.style.borderBottom = "2px solid #1aaa79";
      }
    },
    back() {
      this.times = 60;
      this.timimg = true;
    },
    time() {
        let timer = setInterval(() => {
            this.times--;
            if (this.times < 0) {
            clearInterval(timer);
            this.times = 60;
            this.timimg = true;
            }
        }, 1000);
    },
    catchTime() {
      this.timimg = false;
      this.time();
      let waring1 = document.querySelector(".waring1");
      let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (this.phoneNum == "") {
        waring1.innerHTML = "请正确填入手机号码";
      } else if (!phoneReg.test(this.phoneNum)) {
        waring1.innerHTML = "手机号输入错误";
      }else{
      let data = new URLSearchParams();
        data.append("phone", this.phoneNum);
        axios({
          url: "http://10.35.162.115:8000/user/usr/",
          method: "post",
          // data:'username=jzm&userpass=123'
          data: data,
        }).then((res) => {
            console.log(res)
        });}
    },
    phone() {
      let waring1 = document.querySelector(".waring1");
      let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
    
      if (this.phoneNum == "") {
        waring1.innerHTML = "请正确填入手机号码";
      } else if (!phoneReg.test(this.phoneNum)) {
        waring1.innerHTML = "手机号输入错误";
      } else if (this.yanzhengma == "") {
        waring1.innerHTML = "请正确填入验证码";
      } else {
        waring1.innerHTML = "";
         let data = new URLSearchParams();
        data.append("phone", this.phoneNum);
        data.append("code", this.yanzhengma);
        axios({
          url: "http://10.35.162.115:8000/user/usr/logincode/",
          method: "post",
          // data:'username=jzm&userpass=123'
          data: data,
        }).then((res) => {
          console.log(res.data.code)
          if (res.data.code == "1") {
              
        // 注册成功跳转后把手机号存在sessionStaroge里边
        sessionStorage.phonenum = this.phoneNum;
        this.$router.push({name:'My'});
            
          }else if(res.data.code == "2"){
             waring1.innerHTML = "验证码不正确"; 
          }
           else {
           waring1.innerHTML = "您还未注册";
          }
        });
      }
    },
    phone2() {
      let waring2 = document.querySelector(".waring2");
      let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (this.phoneNum2 == "") {
        waring2.innerHTML = "请正确填入手机号码";
      }
      if (!phoneReg.test(this.phoneNum2)) {
        waring2.innerHTML = "手机号输入错误";
      } else if (this.password == "") {
        waring2.innerHTML = "请正确填入密码";
      } else {
        waring2.innerHTML = "";
        let data = new URLSearchParams();
        data.append("phone", this.phoneNum2);
        data.append("password", this.password);
        axios({
          url: "http://10.35.162.115:8000/user/usr/login/",
          method: "post",
          // data:'username=jzm&userpass=123'
          data: data,
        }).then((res) => {
          if (res.data.code == "1") {
              
        // 注册成功跳转后把手机号存在sessionStaroge里边
        sessionStorage.phonenum = this.phoneNum2;
        this.$router.push({name:'My'});
            
          }else if(res.data.code == "2"){
             waring2.innerHTML = "密码不正确"; 
          }
           else {
           waring2.innerHTML = "您还未注册";
          }
        });
      }
    },
  },
  created:function(){
    this.$nextTick(function(){
      let passBtn = document.querySelector(".pass");
        passBtn.onlick = function(){
        this.catchTime();
        this.phone();
      } 
      let next2 = document.querySelector(".next2");
      next2.onlick = function(){
        this.phone2();
      }
    })
  }
//   destroyed:function(){
//       this.time();
//   }
};
</script>

<style scoped>
h3 {
  padding: 0.28rem 0 0.31rem 0.35rem;
  display: flex;
  justify-content: start;
}
h3 img {
  width: 0.2rem;
  height: 0.4rem;
  margin-right: 2.86rem;
}
h3 span {
  font-size: 0.32rem;
}
.center {
  padding: 0 0.53rem;
}
.center .list {
  width: 100%;
  height: 0.9rem;
  border-bottom: 1px solid #c9c9c9;
  padding-top: 0.4rem;
  display: flex;
  align-items: center;
}
.center div:nth-child(2) {
  position: relative;
}
.waring {
  display: block;
  color: red;
  width: 100%;
  height: 0.84rem;
}
.Time{
    margin-left: .68rem;
}
.center .list .left {
  font-size: 0.28rem;
  margin-right: 0.28rem;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #c1c1c1;
  font-size: 0.28rem;
}
.txt {
  border: none;
}
.right {
  position: absolute;
  right: 0;
  bottom: 0.06rem;
  width: 1.56rem;
  height: 0.56rem;
  background-color: #22b281;
  color: #fff;
  text-align: center;
  line-height: 0.56rem;
  border-radius: 5px;
}
.right1 {
  position: absolute;
  right: 0;
  bottom: 0.06rem;
  width: 1.56rem;
  height: 0.56rem;
  line-height: 0.56rem;
  border-radius: 5px;
}
.next {
  width: 100%;
  height: 0.8rem;
  background-color: #22b281;
  border: 2px solid #c6e2d8;
  border-radius: 8px;
  text-align: center;
  line-height: 0.8rem;
  /* color: #22b281; */
  color: #fff;
  position: relative;
  /* opacity: 0.5; */
  margin-bottom: 0.43rem;
}
.protocol {
  width: 100%;
  height: 0.34rem;
  display: flex;
}
.protocol1 {
  display: flex;
  justify-content: space-between;
}
.login_nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.login_nav span {
  width: 50%;
  height: 0.85rem;
  line-height: 0.85rem;
  font-size: 0.3rem;
  text-align: center;
  border-bottom: 2px solid #fdfdfc;
}
.login_nav span:first-child {
  color: #1aaa79;
  border-bottom: 2px solid #1aaa79;
}
.s_login {
  padding: 2.15rem 0.32rem 0;
}
.s_login .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.08rem;
}
.s_login .top div {
  width: 2.2rem;
  height: 1px;
  background-color: #c1c1c1;
}
.s_login .top p {
  font-size: 0.24rem;
}
.s_login .bottom {
  display: flex;
  justify-content: space-between;
}
.s_login .bottom img {
  width: 0.78rem;
  height: 0.78rem;
}
</style>