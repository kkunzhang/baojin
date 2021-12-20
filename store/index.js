import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    uerInfo: {},
  },
  mutations: {
    login(state, provider) {
      state.uerInfo.token = provider.token;
      state.uerInfo.userName = provider.user_name;
      uni.setStorage({
        key: 'token',
        data: provider,
      });
    },
    logout(state) {
      state.uerInfo = {};
      uni.removeStorage({
        key: 'token',
      });
    },
  },
});

export default store;
