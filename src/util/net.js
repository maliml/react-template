import axios from 'axios';
import { getCookie} from './index';
axios.defaults.timeout = 10000; // 响应时间
// axios.defaults.withCredentials = true;


let csrfToken = getCookie("csrfToken");
// 请求拦截 处理统一参数 或者头部信息
axios.interceptors.request.use(
  config => {
    //在发送请求之前做某件事
    // config.headers['version'] = "TYC-STD";
    // config.headers['x-csrf-token'] = csrfToken;
    // config.headers['X-Auth-Token'] =  getCookie("X-TOKEN");
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    //对响应数据做些事
    if (res.status == 200) {
      return Promise.resolve(res.data);
    } else {
      console.log('网络异常');
    }
    return res;
  },
  error => {
    console.log('网络异常');
    return Promise.reject(error);
  }
);

export const net = axios;
