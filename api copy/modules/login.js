import request from '../request';

/**
 *
 *  @return {Array}
 */
export const getSongTagList = (params) => {
  return request.get('/playlist/catlist', params);
};

/**
 *  登录
 *  @return {Array}
 */
export const login = (params) => {
  return request.get('/login', params);
};
