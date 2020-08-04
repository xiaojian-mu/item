// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

//引入全局的axios
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/"; //注意这里的写法

//ElementUI插件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;

//图片懒加载
import VueLazyLoad from "vue-lazyload";
Vue.use(VueLazyLoad, {
  loading: require("../static/img/timg.gif"), //还没加载出来的默认展示图片
  error: "../static/img/error.jpg" // 图片出错展示的默认图片
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
