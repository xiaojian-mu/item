<template>
  <div class="box">
    <div class="myheader">
      <span @click="goLogIn">取消</span>
      登录
    </div>
    <div class="ts">请确保您输入的信息正确</div>
    <div class="zc">
      <div>
        手机号：
        <input type="text" v-model="name" @blur="blur" />
      </div>
      <div>
        密&nbsp;&nbsp;&nbsp;码：
        <input type="text" v-model="password" />
      </div>
    </div>
    <div class="submit" @click="submit">下一步</div>
    <div class="warn" v-show="flag">
      <input type="text" v-model="content" />
      <button @click="fn">确认</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Registered",
  data() {
    return {
      name: "",
      password: "",
      flag: false,
      content: "",
    };
  },
  methods: {
    goLogIn() {
      this.$router.push({ path: "/LogIn" });
    },
    //失去焦点
    blur() {
      let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
      this.content = "请输入正确的手机号";
      this.flag = !phoneReg.test(this.name);
    },
    //
    fn() {
      (this.name = ""), (this.flag = false);
    },
    //提交
    submit() {
      console.log("aa");
      axios({
        url: "http://39.107.58.130:8080/api/user/regist/",
        method: "post",
        data: {
          name: this.name,
          password: this.password,
        },
      }).then((res) => {
        if (res.data.code == 200) {
          this.$router.push({ path: "/LogIn" });
        } else if (res.data.msg) {
          this.flag = true;
          this.content = "用户已存在！";
        } else {
          this.flag = true;
          this.content = "注册失败";
        }
      });
    },
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  position: relative;
}
.warn {
  width: 80%;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  text-align: center;
  background-color: rgb(250, 250, 250);
  position: absolute;
  top: 295px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 5px;
}
.warn > input {
  border: none;
  font-size: 20px;
  text-align: center;
  color: red;
  background-color: rgb(191, 197, 197 0);
}
.myheader {
  width: 100%;
  height: 44px;
  font-size: 18px;
  text-align: center;
  position: relative;
  font-weight: bolder;
  line-height: 44px;
}
.myheader span {
  position: absolute;
  left: 15px;
  line-height: 44px;
  color: #1976d2;
  font-size: 15px;
  font-weight: normal;
  margin: 15px 0;
  top: -15px;
}
.ts {
  max-width: 305px;
  color: #999999;
  font-size: 16px;
  line-height: 22px;
  margin: 0 auto;
  text-align: center;
  height: 100px;
  padding-top: 20px;
  box-sizing: border-box;
}
.zc {
  width: 100%;
  height: 200px;
  /* background: aqua; */
  padding: 0 30px;
}
.zc > div {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 30px 0;
  font-size: 20px;
  color: rgba(82, 79, 79, 0.6);
}
.zc > div input {
  width: 220px;
  height: 40px;
  border: none;
  border-bottom: 1px solid rgb(196, 190, 190);
}
.submit {
  font-size: 18px;
  width: 250px;
  height: 40px;
  background: #0096fb;
  line-height: 40px;
  border-radius: 40px;
  color: #ffffff;
  margin: 0 auto;
  text-align: center;
}
</style>