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
          <view class="item-checkbox">
            拆分类型:
            <view class="box-radio">
              <uni-data-checkbox v-model="value" :localdata="sex" @change="change" />
            </view>
          </view>
          <view class="item-input">
            <text>实收:</text>
            <view class="input-border"
              ><input
                type="digit"
                maxlength="10"
                :value="item.id"
                v-model="inputData[index]"
                placeholder="请输入"
            /></view>
            <text>PCS</text>
          </view>
        </view>
      </view>
    </view>

    <view class="submit-box">
      <button type="primary" @click="settlement">拆分</button>
    </view>
  </view>
</template>

<script>
import scanInput from '@/components/scanInput/scan-input.vue'

export default {
  components: {
    scanInput
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
      console.log(this.value)
    },
    //单选
    changeitem(item) {
      item.checked = !item.checked;
      if (!item.checked) {
        this.allChecked = false;
      } else {
        // 判断每一个商品是否是被选择的状态
        const cartList = this.goodList.every((item) => {
          return item.checked === true;
        });
        if (cartList) {
          this.allChecked = true;
        } else {
          this.allChecked = false;
        }
      }
    },
    settlement() {
      this.checkList = [];
      // this.goodList.map((item) => {
      //   if (item.checked) {
      //     return this.checkList.push(item.id);
      //   }
      // });
      let tag = this.value
      let path = '/pages/splitWrap/splitMerge?tag=' + tag;
      this.toPage(path)
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

<style lang="scss">
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
    .item-checkbox {
      display: flex;
      align-items: baseline;
      .box-radio {
        padding-left: 20rpx;
      }
    }
    .item-input {
      padding: 10rpx 0 15rpx 0;
      display: flex;
      align-items: baseline;
      .input-border {
        border-style: solid;
        border-width: 1rpx;
        border-radius: 10rpx;
        border-color: rgb(207, 203, 203);
        width: 220rpx;
      }
    }
  }
}
.submit-box {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>

<style lang="scss" scoped>
page {
  background-color: rgb(247, 247, 247);
}
</style>
