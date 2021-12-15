<template>
  <view>
    <scan-input></scan-input>
    <view class="main">
      <!-- 单标题-->
      <view>
        <view
          class="list-item"
          v-for="(item, index) in dataList"
          @click="toDetail(item)"
          :key="index"
        >
          <view class="top-text">
            <view>{{ item.numberBox }}</view>
            <u-button
              type="primary"
              class="top-text-button"
              :plain="true"
              size="small"
              text="打印"
              @click="onClick(item)"
              v-if="isShow"
            ></u-button>
          </view>

          <view class="line"></view>
          <view class="text-box">
            <text>{{ item.home }}</text>
            <text>{{ item.name }}</text>
            <text>{{ item.level }}</text>
            <text>{{ item.age }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import scanInput from '@/components/scanInput/scan-input.vue'
export default {

  components: { scanInput },
  props: {
    dataList: {
      type: Array,
      default() {
        return [
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

        ];
      },
    },
    isShow: {
      type: Boolean,
      default() { return true }
    }
  },
  data() {
    return {
      path: '/pages/shiftMatter/waitConfirm/waitConfirmDetail',
    };
  },
  computed: {},
  methods: {
    toDetail(item) {
      // this.$emit("toDetail", item);
    },
    onClick(item) {
      alert(2)
    },

  },

};
</script>
<style lang="scss">
.main {
  padding-bottom: 180rpx;
  .list-item {
    cursor: pointer;
    background-color: #fff;
    margin: 10rpx;
    border-radius: 10rpx;
    padding-left: 40rpx;
    .text-box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text {
        padding: 2rpx 0;
      }
    }
    .top-text {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: baseline;
      padding: 15rpx 0;
      .top-text-button {
        width: 50rpx;
        height: 50rpx;
      }
    }
    .line {
      line-height: 45rpx;
      border-bottom: 2rpx #d6d6d6 dashed;
    }
  }
}
</style>

