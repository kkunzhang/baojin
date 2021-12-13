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
@import '@/uni_modules/uview-ui/index.scss';
@import 'colorui/main.css';
@import 'colorui/icon.css';
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
/*自定义样式*/
/* reg	  */
uni-checkbox-group uni-label {
  width: 33% !important;
  display: inline-flex;
  margin-bottom: 20rpx;
}
/*checkbox 选项框大小  */
uni-checkbox .uni-checkbox-input {
  width: 35rpx !important;
  height: 35rpx !important;
  border-radius: 50%;
}
/*checkbox选中后样式  */
uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
  background: #3d7eff;
  border-color: #3d7eff;
}
/*checkbox选中后图标样式  */
uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked::before {
  width: 20rpx;
  height: 20rpx;
  line-height: 20rpx;
  text-align: center;
  font-size: 18rpx;
  color: #fff;
  background: transparent;
  transform: translate(-70%, -50%) scale(1);
  -webkit-transform: translate(-70%, -50%) scale(1);
}
</style>
