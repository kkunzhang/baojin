<template>
  <view>
    <!-- 分页器 -->
    <segmented @tabCur="goTabCur" :itemsTab="itemsTab"></segmented>

    <!------------------------ 内容开始-------------------------- -->
    <!-- 未完成 -->
    <view v-show="tabCur === 0"
      ><view>
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
    <!-- 已完成 -->
    <view v-show="tabCur === 1">
      <finished></finished>
    </view>
  </view>
</template>

<script>
import segmented from '@/components/segmented/segmented.vue'
import finished from '@/pages/returnMatter/finished.vue'
export default {
  components: {
    segmented,
    finished
  },
  data() {
    return {
      itemsTab: ['未完成', '已完成'],
      tabCur: 0,
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
      path: '/pages/returnMatter/notFinished',
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
