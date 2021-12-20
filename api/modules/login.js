import http from '../request';

/**
 *  登录
 *  @return {Array}
 */
export const login1 = (params) => {
  return http.request({
    url: '/user/login',
    method: 'GET',
    params,
  });
};
