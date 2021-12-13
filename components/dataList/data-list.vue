<template>
  <view>
    <view class="main">
      <!-- 单标题-->
      <view v-if="hasTitle||multipleTitle">
        <view
          class="list-item"
          v-for="(item, index) in dataList"
          @click="toDetail(item)"
          :key="index"
        >
          <view v-if="hasTitle" class="title">{{ item.numberBox }}</view>
          <!-- 双标题 -->
          <view v-if="multipleTitle" class="title">
            <view>{{ item.numberBox }}</view>
            <view>{{ item.numberBox }}</view>
          </view>
          <view class="text-box">
            <text>{{ item.home }}</text>
            <text>{{ item.name }}</text>
            <text>{{ item.level }}</text>
            <text>{{ item.age }}</text>
          </view>
        </view>
      </view>
      
      <!-- 选中框无标题 -->
      <view v-if="isCheckbox">
        <view class="list-item2" v-for="(item, index) in dataList" :key="index">
          <view
            ><view class="select-item">
              <checkbox-group
                @change="changeItem(item)"
                checked
                class="checkbox"
                ><checkbox :value="item.unitPrice" :checked="item.checked"
              /></checkbox-group> </view
          ></view>
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
import { toPage } from "@/common/utils";
export default {
  components: {},
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
          {
            id: 2,
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
    hasTitle: {
      type: Boolean,
      default: false,
    },
    isCheckbox: {
      type: Boolean,
      default: false,
    },
    multipleTitle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    toDetail(item) {
      this.$emit("toDetail", item);
    },
    changeItem(val) {
      this.$emit("changeItem", val);
    },
  },
  beforeDestory() {
    // 解绑自定义事件
    this.$off("getValue");
    this.$off("toDetail");
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
    .title {
      line-height: 45rpx;
      border-bottom: 2rpx #d6d6d6 dashed;
      padding: 30rpx 0;
    }
  }
  .list-item2 {
    background-color: #fff;
    margin: 10rpx;
    border-radius: 10rpx;
    padding-left: 40rpx;
    display: flex;
    align-items: baseline;
    .select-item {
      padding-right: 20rpx;
    }
    .text-box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text {
        padding: 2rpx 0;
      }
    }
  }
}
</style>

