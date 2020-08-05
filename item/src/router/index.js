import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);
//引入插件
import Index from "@/layout/Index"; //首页
import more from "@/layout/more"; //更多
import Put from "@/layout/Put"; //上传
import Foodsort from "@/layout/Foodsort"; //分类
import GoodList from "@/layout/GoodList"; //列表页
import Detail from "@/layout/Detail"; //详情
import NoLogIn from "@/layout/NoLogIn"; //没登录
import LogIn from "@/layout/LogIn"; //登录
import Vx from "@/layout/Vx"; //微信页面
import Search from "@/layout/Search"; //搜索
import Registered from "@/layout/Registered"; //注册
//

import zhifu from "../layout/zhifu";
import Consult from "../layout/Consult";
import history from "../components/history";
import Bathmos from "../layout/Bathmos";
import Setting from "../layout/Setting";
//
import NotFound from "@/layout/NotFound"; //

export default new Router({
  mode: "history", //去除#号
  routes: [
    //路由配置
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/more",
      name: "more",
      component: more
    },
    {
      path: "/Foodsort",
      name: "Foodsort",
      component: Foodsort
    },
    {
      path: "/GoodList",
      name: "GoodList",
      component: GoodList
    },
    {
      path: "/Put",
      name: "Put",
      component: Put
    },
    {
      path: "/NoLogIn",
      name: "NoLogIn",
      component: NoLogIn
    },
    {
      path: "/Detail",
      name: "Detail",
      component: Detail,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.username) {
          next();
        } else {
          next("/NoLogIn");
        }

        // if (localStorage.name) {
        //   console.log("已登录");
        //   router.push({ path: "/" });
        // }
      }
    },
    {
      path: "/LogIn",
      name: "LogIn",
      component: LogIn
    },
    {
      path: "/Vx",
      name: "Vx",
      component: Vx
    },
    {
      path: "/Search",
      name: "Search",
      component: Search
    },
    {
      path: "/Registered",
      name: "Registered",
      component: Registered
    },
    {
      path: "/NotFound",
      name: "NotFound",
      component: NotFound
    },
    {
      path: "/zhifu",
      name: "zhifu",
      component: zhifu
    },
    {
      path: "/Setting",
      name: "Setting",
      component: Setting
    },
    {
      path: "/Consult",
      name: "Consult",
      component: Consult
    },
    {
      path: "/history",
      name: "history",
      component: history
    },
    {
      path: "/NoLogIn",
      name: "NoLogIn",
      component: NoLogIn
    },
    {
      path: "/Bathmos",
      name: "Bathmos",
      component: Bathmos,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.username) {
          next();
        } else {
          next("/NoLogIn");
        }
      }
    }
  ]
});
