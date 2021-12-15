<template>
  <view class="main">
    <scan-input :isTwoScanOpen="false"></scan-input>
    <view>
      <view class="list-item" v-for="(item, index) in dataList" :key="index">
        <view>
          <view class="text-box">
            <text>规格:{{ item.home }}</text>
            <text>{{ item.name }}</text>
            <text>{{ item.level }}</text>
            <text>{{ item.level }}</text>
            <text>{{ item.age }}</text>
          </view>
        </view>
      </view>
    </view>
    <view class="box-bottom-sum">
      <text>合计:100个</text>
    </view>
    <bottom-button-save @onChange="onSubmit">
      <text slot="one">返回</text>
      <text slot="two">合并</text>
    </bottom-button-save>
  </view>
</template>

<script>
import scanInput from '@/components/scanInput/scan-input.vue'
import bottomButtonSave from "@/components/button/bottom-button-save.vue";
export default {
  components: {
    scanInput,
    bottomButtonSave
  },
  data() {
    return {
      inputData: [],
      sex: [
        { text: '一拆二', value: 0, },
        { text: '拆合', value: 1 },
      ],
      value: 0,
      dataList: [{
        id: 0,
        name: "制单人:王五",
        home: "到货时间:2012-12-12",
        level: "制单时间:2012-12-12",
        age: "顺达广州机械公司",
        subtotal: "23",
        numberBox: "到货单号:DH12312312312312312",
        checked: false,
      },
      ],
      checkList: [], //选中值
      allChecked: false, //是否全选
      isCheckbox: true,
      input1: '',
      input2: '',
    };
  },
  computed: {},
  methods: {
    onClick(index) {
      this.$set(this.inputData, index, '')
    },
    change(e) {
      console.log(e)
    },

    onSubmit(val) {
      console.log(val)
      if (val == 1) {
        uni.navigateBack({
          delta: 1
        })
      }

    },
  },
  props: {
    tabCur: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding-bottom: 180rpx;
  .list-item {
    // display: flex;
    // align-items: baseline;
    cursor: pointer;
    background-color: #fff;
    margin: 10rpx;
    border-radius: 10rpx;
    padding-left: 40rpx;
    margin-top: 20rpx;
    .text-box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 30rpx 0;
      text {
        padding: 2rpx 0;
      }
    }
  }
  .box-bottom-sum {
    width: 100%;
    position: fixed;
    bottom: 150rpx;
  }
}
</style>

<style lang="scss" scoped>
page {
  background-color: rgb(247, 247, 247);
}
</style>
