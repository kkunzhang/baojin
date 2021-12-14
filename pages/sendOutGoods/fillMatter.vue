<template>
  <view>
    <view class="main">
      <view>
        <view class="list-item" v-for="(item, index) in dataList" :key="index">
          <view class="text-box">
            <view class="box-first-list">
              <view
                class="box-tip-bg"
                :style="{
                  backgroundColor: index === 0 ? '#3c9cff' : 'red'
                }"
              >
                {{ item.subtotal }}
              </view>
              <text>规格:{{ item.home }}</text>
            </view>
            <text>{{ item.name }}</text>
            <text>{{ item.level }}</text>
            <text>{{ item.level }}</text>
            <text>{{ item.age }}</text>
            <view class="item-input">
              <view>实收:{{ item.name }}</view>
              <view class="input-border"
                ><input
                  type="digit"
                  maxlength="10"
                  :value="item.id"
                  v-model="inputData[index]"
                  placeholder="请扫描物料"
              /></view>
            </view>
          </view>
        </view>
      </view>

      <!-- 按钮 -->
    </view>
    <button-bottom @onChange="onSubmit">确认补料</button-bottom>
  </view>
</template>

<script>
import buttonBottom from "@/components/button/button-bottom.vue";

export default {
  components: {
    buttonBottom,
  },
  data() {
    return {
      inputData: [],
      dataList: [
        {
          id: 0,
          name: "制单人:王五",
          home: "到货时间:2012-12-12",
          level: "制单时间:2012-12-12",
          age: "顺达广州机械公司",
          subtotal: "报废",
          numberBox: "到货单号:DH12312312312312312",
          checked: false,
        },
        {
          id: 1,
          name: "制单人:王五",
          home: "到货时间:2012-12-12",
          level: "制单时间:2012-12-12",
          age: "顺达广州机械公司",
          subtotal: "不良",
          numberBox: "到货单号:DH12312312312312312",
          checked: false,
        },
      ],
    };
  },
  computed: {},
  methods: {
    onSubmit(val) {
      uni.navigateBack({
        delta: 1
      })
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
      // align-items: flex-start;
      padding: 30rpx 0;
      .box-first-list {
        display: flex;
        .box-tip-bg {
          background-color: red;
          color: #fff;
          border-radius: 70rpx;
          width: 90rpx;
          text-align: center;
        }
      }
      .item-input {
        padding: 10rpx 20rpx 15rpx 0;
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        .input-border {
          border-style: solid;
          border-width: 1rpx;
          border-radius: 10rpx;
          border-color: rgb(207, 203, 203);
        }
      }
    }
    text {
      padding: 2rpx 0;
    }
  }
}
</style>

