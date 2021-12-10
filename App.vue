<script>
export default {
  onLaunch: function () {
    console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
@import 'colorui/main.css';
@import 'colorui/icon.css';
@import './common/uni.css';

// 设置整个项目的背景色
/* ==================
	        初始化
	 ==================== */
page {
  background-color: #ffffff;
  font-size: 30rpx;
  color: #272e2d;
  font-family: Helvetica Neue, Helvetica, sans-serif;
}
</style>
