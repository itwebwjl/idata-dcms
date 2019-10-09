import axios from 'axios';
import Vue from 'vue';

axios.interceptors.request.use(
  config => {
    if (sessionStorage.hasOwnProperty('token')) {
      config.headers.token = sessionStorage.getItem('token');
      return config;
    }
    return config;
  }
);

axios.interceptors.response.use(
  response => {
    if (response.headers.hasOwnProperty('token')) {
      window.sessionStorage.setItem('token', response.headers.token);
    }
    if (response.data.status !== 'success') {

    }
    return response;
  },
  err => {
    if (err.response) {
      if (err.response.data && err.response.data.msg) {
      
      } else {
       
      }
    } else {
    
    }
    return err;
  }
);

export default axios;
