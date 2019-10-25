import axios from 'axios';
import { Message } from 'element-ui';
import NProgress from "nprogress";
import 'nprogress/nprogress.css' // Progress 进度条样式
import qs from "qs";
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
    } else {
      Message({
        message: response.data.msg ||'接口异常',
        type: "error"
      })
      return response.data;
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
