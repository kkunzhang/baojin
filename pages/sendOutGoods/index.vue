<template>
  <view>
    <!-- 分页器 -->
    <segmented @tabCur="goTabCur" :itemsTab="itemsTab"></segmented>

    <!------------------------ 内容开始-------------------------- -->
    <!-- 待下架 -->
    <view v-show="tabCur === 0">
      <view>
        <view
          class="list-item"
          v-for="(item, index) in dataList"
          @click="toDetail(item)"
          :key="index"
        >
          <view class="text-box">
            <text>{{ item.home }}</text>
            <text>{{ item.name }}</text>
            <text>{{ item.level }}</text>
            <text>{{ item.age }}</text>
          </view>
        </view>
      </view>
    </view>
    <!-- 待通知 -->
    <view v-show="tabCur === 1">
      <wait-notice></wait-notice>
    </view>
    <!-- 待出库 -->
    <view v-show="tabCur === 2">
      <finished></finished>
    </view>
    <!-- 已出库 -->
    <view v-show="tabCur === 3">
      <finished :isShow="isFalse"></finished>
    </view>
  </view>
</template>

<script>
import segmented from '@/components/segmented/segmented.vue'
import finished from '@/pages/sendOutGoods/finished.vue'
import waitNotice from '@/pages/sendOutGoods/waitNotice.vue'
export default {
  components: {
    segmented,
    finished,
    waitNotice
  },
  data() {
    return {
      itemsTab: ['待下架', '待通知', '待出库', '已出库'],
      isFalse: false,
      tabCur: 0,
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
      ],
      path: '/pages/sendOutGoods/sendMatterList',
    }
  },
  computed: {
  },
  methods: {
    goTabCur(tabCur) {
      // uni.setNavigationBarTitle({
      //   title: 'xx'
      // });
      this.tabCur = tabCur

    },
    toDetail(item) {
      this.toPage(this.path)
    },
  }
}
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
page {
  background-color: rgb(247, 247, 247);
}
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
</style>
