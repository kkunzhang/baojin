<template>
	<view class="wrap-main-scan-box">
		<view
			class="top-scan-input" v-if="isOneScanOpen"
		>
			<!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
			<!-- #ifndef APP-NVUE -->
			<u-input :placeholder="placeholderFirst">
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			<u--input :placeholder="placeholderFirst">
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
			class="top-scan-input" v-if="isTwoScanOpen"
		>
			<!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
			<!-- #ifndef APP-NVUE -->
			<u-input  :placeholder="placeholderSec">
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			<u--input  :placeholder="placeholderSec">
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
			class="top-scan-input" v-if="isThreeScanOpen"
		>
			<!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
			<!-- #ifndef APP-NVUE -->
			<u-input  :placeholder="placeholderThi">
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			<u--input  :placeholder="placeholderThi">
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
  props: {

    placeholderFirst: {
      type: String,
      default: '请扫描物料条码',
    },
    placeholderSec: {
      type: String,
      default: '请扫描库位',
    },
    placeholderThi: {
      type: String,
      default: '请扫描库位',
    },
    isOneScanOpen: {
      type: Boolean,
      default: true,
    },
    isTwoScanOpen: {
      type: Boolean,
      default: true,
    },
    isThreeScanOpen: {
      type: Boolean,
      default: false,
    },
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