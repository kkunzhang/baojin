<template>
  <view>
    <view v-if="!tag">
      <!-- 分页器 -->
      <segmented @tabCur="goTabCur" :itemsTab="itemsTab"></segmented>

      <!------------------------ 内容开始-------------------------- -->
      <!-- 待发料 -->
      <view v-show="tabCur === 0">
        <split @inputData="inputData" @checkedId="checkedId"></split>
      </view>
      <!-- 已发料 -->
      <view v-show="tabCur === 1">
        <finished></finished>
      </view>
    </view>
    <view v-else>
      <split-merge></split-merge>
    </view>
  </view>
</template>

<script>
import segmented from '@/components/segmented/segmented.vue'
import finished from '@/pages/splitWrap/finished.vue'
import split from '@/pages/splitWrap/split.vue'
import splitMerge from '@/pages/splitWrap/splitMerge.vue'
export default {
  components: {
    segmented,
    finished,
    split,
    splitMerge
  },
  data() {
    return {
      itemsTab: ['拆分', '合包'],
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
      path: '/pages/receiveMatter/sendMatterList',
      tag: 0
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
    inputData(val) {
      console.log(val);
    },
    checkedId(val) {
      console.log(val);
    },
    toDetail(item) {
      this.toPage(this.path)
    },
  },
  onLoad: function (option) {
    console.log(option.tag);
    this.tag = option.tag
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
