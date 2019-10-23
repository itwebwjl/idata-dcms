import axios from 'axios';
import { Message } from 'element-ui';
import qs from "qs";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.API_ROOT;
// axios.defaults.timeout = 6000;

axios.interceptors.request.use(
  config => {
    if (config.method.toUpperCase() == ('POST' || 'PUT')) {
      config.data = qs.stringify(config.data)
    }
    // console.log(config)
    return config;
  }
);

axios.interceptors.response.use(
  response => {
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
    Message({
      message: '网络异常',
      type: 'error',
    })
    console.dir(err)
    return err;
  }
);

export default axios;
