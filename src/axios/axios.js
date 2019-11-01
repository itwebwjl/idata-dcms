import axios from 'axios';
import { Message } from 'element-ui';
import NProgress from "nprogress";
import 'nprogress/nprogress.css' // Progress 进度条样式
import qs from "qs";
import Vue from "vue";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.API_ROOT;
// axios.defaults.timeout = 6000;

axios.interceptors.request.use(
  config => {
    NProgress.start()
    if (config.method.toUpperCase() == ('POST' || 'PUT')) {
      config.data = qs.stringify(config.data)
    }
    return config;
  }
);

axios.interceptors.response.use(
  response => {
    NProgress.done()
    if (response.data.code == 0) {
      return response.data
    }else if (response.data.code == 50006) {
      // Vue.prototype.$alert("请重新登录");
      Message({
        message: '请重新登录',
        type: "error"
      })
      return ;
    }else if (response.data.code == 400) {
      // Vue.prototype.$alert("请重新登录");
      Message({
        message: '服务器出现故障啦',
        type: "error"
      })
      return ;
    }
    else {
      Message({
        message: response.data.message ||'接口异常',
        type: "error"
      })
      return;
    }
  },
  err => {
    NProgress.done()
    Message({
      message: '网络异常',
      type: 'error',
    })
    console.dir(err)
    return err;
  }
);


export default axios;
