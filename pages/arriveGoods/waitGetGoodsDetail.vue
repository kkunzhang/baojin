<template>
  <view>
    <view class="main">
      <view>
        <view class="list-item" v-for="(item, index) in dataList2" :key="index">
          <view class="title">{{ item.numberBox }}</view>
          <view class="text-box">
            <text>{{ item.home }}</text>
            <text>{{ item.name }}</text>
            <text>{{ item.level }}</text>
            <text>{{ item.age }}</text>
          </view>
        </view>
      </view>

      <!-- 列表第二段 -->
      <view>
        <view class="list-item" v-for="(item, index) in dataList" :key="index">
          <view class="text-box">
            <text>规格:{{ item.home }}</text>
            <text>{{ item.name }}</text>
            <text>{{ item.level }}</text>
            <text>{{ item.level }}</text>
            <text>{{ item.age }}</text>
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
            <text>KG</text>
          </view>
        </view>
      </view>

      <!-- 按钮 -->
    </view>
    <bottom-button-save @onChange="onSubmit"></bottom-button-save>
  </view>
</template>

<script>
import { toPage } from "@/common/utils";
import bottomButtonSave from "@/components/button/bottom-button-save.vue";

export default {
  components: {
    bottomButtonSave,
  },
  data() {
    return {
      inputData: [],
      dataList2: [
        {
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
      num: "",
      dataList: [
        {
          id: 0,
          name: "制单人:王五",
          home: "到货时间:2012-12-12",
          level: "制单时间:2012-12-12",
          age: "顺达广州机械公司",
          subtotal: "23",
          numberBox: "到货单号:DH12312312312312312",
          checked: false,
        },
        {
          id: 1,
          name: "制单人:王五",
          home: "到货时间:2012-12-12",
          level: "制单时间:2012-12-12",
          age: "顺达广州机械公司",
          subtotal: "23",
          numberBox: "到货单号:DH12312312312312312",
          checked: false,
        },
      ],
    };
  },
  computed: {},
  methods: {
    onSubmit(val) {
      console.log(val);
      console.log(this.inputData);
    },
  },
  beforeDestory() {
    // 解绑自定义事件
    // this.$off("getValue");
  },
};
</script>
<style lang="scss" scoped>
page {
  background-color: rgb(247, 247, 247);
}
</style>

<style lang="scss">
.main {
  padding-bottom: 180rpx;
  .list-item {
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
    .title {
      line-height: 45rpx;
      border-bottom: 2rpx #d6d6d6 dashed;
      padding: 30rpx 0;
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
      }
    }
  }
}
</style>

