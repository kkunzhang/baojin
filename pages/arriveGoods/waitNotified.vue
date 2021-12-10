<template>
  <view>
    <search :placeholder="placeholder" @searchValue="searchValue"></search>
    <data-list :hasTitle="hasTitle" :dataList="list" @toDetail="toWaitNoticeDetail"></data-list>
    <bottomButtonDay @onChangeDay="onChangeDay"></bottomButtonDay>
  </view>
</template>

<script>
import search from '@/components/search/search.vue'
import dataList from '@/components/dataList/data-list.vue'
import bottomButtonDay from '@/components/button/bottom-button-day.vue'
import { toPage } from '@/common/utils'
export default {
  components: {
    search,
    dataList,
    bottomButtonDay
  },
  data() {
    return {
      placeholder: '请输入供应商/制单人搜索',
      hasTitle: true,
      path: '/pages/arriveGoods/waitNoticeDetail',
      list: [
        {
          id: 0,
          name: '制单人:王五',
          home: '到货时间:2012-12-12',
          level: '制单时间:2012-12-12',
          age: '顺达广州机械公司',
          subtotal: '23',
          numberBox: '到货单号:DH12312312312312312',
          checked: false
        },
        {
          id: 1,
          name: '制单人:王五',
          home: '到货时间:2012-12-12',
          level: '制单时间:2012-12-12',
          age: '顺达广州机械公司',
          subtotal: '23',
          numberBox: '到货单号:DH12312312312312312',
          checked: false
        }, {
          id: 2,
          name: '制单人:王五',
          home: '到货时间:2012-12-12',
          level: '制单时间:2012-12-12',
          age: '顺达广州机械公司',
          subtotal: '23',
          numberBox: '到货单号:DH12312312312312312',
          checked: false
        },

      ]
    }
  },
  computed: {
  },
  methods: {
    searchValue(val) {
      // todo 接口 val=''代表删除
      console.log(val + '22222')
    },
    toWaitNoticeDetail(val) {
      //todo 传参 
      console.log(val)
      toPage(this.path)
    },
    onChangeDay(val) {
      //todo 掉接口,代入val
      console.log(val)
    }

  }
}
</script>
<style lang="scss">
.bt-box {
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  .bt {
    width: 50%;
  }
}
</style>
<style lang="scss" scoped>
page {
  background-color: rgb(247, 247, 247);
}
</style>
