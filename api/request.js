/**
 * 通用uni-app网络请求
 * 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
 */
import * as db from '../common/storageHandle.js';
export default {
  config: {
    // 请求的公共url
    baseUrl: process.uniEnv.BASE_API,
    // header: {
    //   // 'Content-Type': 'application/json;charset=UTF-8'
    //   'Content-Type': 'application/x-www-form-urlencoded',
    // },
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    data: {},
    method: 'GET',
    dataType: 'json',
    /* 如设为json，会对返回的数据做一次 JSON.parse */
    responseType: 'text',
    success() {},
    fail() {},
    complete() {},
  },
  // 请求拦截器
  interceptor: {
    request: null,
    response: null,
  },
  request(options) {
    uni.showLoading({
      title: '加载中',
    });
    if (!options) {
      options = {};
    }
    // 获取登录后存储在本地的token信息
    // this.$store.getters.resturantName;
    let token = uni.getStorageSync('token');
    let requestType = options.url.split('/');
    let typeVal = requestType[requestType.length - 1];
    console.log(typeVal);
    console.log(66666);
    if (typeVal !== 'userLogin') {
      // 判断筛选出以上页面不需要为请求头设置token，根据自己的项目情况而定
      this.config.header.Authorization = token;
    } else {
      delete this.config.header.Authorization;
    }
    options.baseUrl = options.baseUrl || this.config.baseUrl;
    options.dataType = options.dataType || this.config.dataType;
    options.url = options.baseUrl + options.url;
    options.data = options.data || {};
    options.method = options.method || this.config.method;
    // 基于 Promise 的网络请求
    uni.request({
      url: options.url,
      data: options.data,
      header: this.config.header,
      method: options.method,
      success: (response) => {
        let res = response.data;
        if (res.code === 200) {
          resolve(res);
        } else {
          // reject(res);
          this.showError(res);
        }
      },
      fail: (error) => {
        if (error && error.response) {
          reject(error.response);
          this.showError(error.response);
        }
      },
      complete: () => {
        uni.hideLoading();
      },
    });
  },
  // get请求
  get(url, data, options) {
    if (!options) {
      options = {};
    }
    options.url = url;
    options.data = data;
    options.method = 'GET';
    return this.request(options);
  },
  // post请求
  post(url, data, options) {
    if (!options) {
      options = {};
    }
    options.url = url;
    options.data = data;
    options.method = 'POST';
    return this.request(options);
  },
  // put请求
  put(url, data, options) {
    if (!options) {
      options = {};
    }
    options.url = url;
    options.data = data;
    options.method = 'PUT';
    return this.request(options);
  },
  // delete请求
  delete(url, data, options) {
    if (!options) {
      options = {};
    }
    options.url = url;
    options.data = data;
    options.method = 'DELETE';
    return this.request(options);
  },
  showError(error) {
    var that = this;
    let errorMsg = '';
    if (error) {
      let data = error;
      const token = db.get('userToken');
      console.log('------异常响应------', token);
      console.log('------异常响应------', error.status);
      switch (error.status) {
        case 400:
          errorMsg = '请求参数错误';
          break;
        case 403:
          errorMsg = '跨域拒绝访问';
          break;
        case 500:
          if (data.message == 'Token失效，请重新登录') {
            uni.showModal({
              title: '登录已过期',
              content: '很抱歉，登录已过期，请重新登录',
              confirmText: '重新登录',
              success: function (res) {
                if (res.confirm) {
                  db.del('userToken');
                  //去我的页面登录
                  uni.switchTab({
                    url: '/pages/views/mine',
                  });
                } else if (res.cancel) {
                  console.log('用户点击取消');
                }
              },
            });
            // update-end- --- author:scott ------ date:20190225 ---- for:Token失效采用弹框模式，不直接跳转----
          }
          break;
        case 404:
          errorMsg = '很抱歉，资源未找到!';
          break;
        case 504:
          errorMsg = '网络超时';
          break;
        case 502:
          errorMsg = '服务器异常';
          break;
        case 401:
          errorMsg = '未授权，请重新登录';
          if (token == '') {
            setTimeout(() => {
              //去我的页面登录
              uni.switchTab({
                url: '/pages/views/mine',
              });
            }, 1500);
          }
          break;
        default:
          errorMsg = '请求失败';
          break;
      }
      uni.showToast({
        title: errorMsg,
        icon: 'none',
        duration: 4000,
        complete: function () {
          setTimeout(function () {
            uni.hideToast();
          }, 3000);
        },
      });
    }
    return null;
  },
};
