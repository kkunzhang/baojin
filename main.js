// #ifndef VUE3
import Vue from 'vue';
import App from './App';
import filters from '@/common/filters';
import cuCustom from './colorui/components/cu-custom.vue';
Vue.component('cu-custom', cuCustom);
Vue.config.productionTip = false;
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import { Actionsheet } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);
Vue.use(MintUI);
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

App.mpType = 'app';
const app = new Vue({
  ...App,
});

app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue';
import App from './App.vue';
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
// #endif
