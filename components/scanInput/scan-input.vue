<template>
	<view class="wrap-main-scan-box">
		<view
			class="top-scan-input"
		>
			<!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
			<!-- #ifndef APP-NVUE -->
			<u-input placeholder="请扫描物料条码">
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			<u--input placeholder="请扫描物料条码">
			<!-- #endif -->
				<template slot="suffix">
          <u-button  size="small" type="default" @click="onClick(1)" :text="value"></u-button>
				</template>
			<!-- #ifndef APP-NVUE -->
			</u-input>
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			</u--input>
			<!-- #endif -->
		</view>
		<view
			class="top-scan-input"
		>
			<!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
			<!-- #ifndef APP-NVUE -->
			<u-input placeholder="请扫描库位">
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			<u--input placeholder="请扫描库位">
			<!-- #endif -->
				<template slot="suffix">
          <u-button  size="small" type="default" @click="onClick(1)" :text="value"></u-button>
				</template>
			<!-- #ifndef APP-NVUE -->
			</u-input>
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			</u--input>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
export default {
  data() {
    return {
      tips: '',
      value: '。。。'
    }
  },
  watch: {
    value(newValue, oldValue) {
      // console.log('v-model', newValue);
    }
  },
  methods: {
    onClick() {
      alert('扫描')
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap-main-scan-box {
  background-color: #fff;

  .top-scan-input {
    padding: 10rpx;
    margin: 10rpx;
  }
}
</style>