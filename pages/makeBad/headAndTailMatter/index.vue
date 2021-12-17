<template>
  <view>
    <data-list
      :hasTitle="multipleTitle"
      :dataList="list"
      @toDetail="toWaitGetGoodsDetail"
    ></data-list>
  </view>
</template>
<script>
import dataList from '@/components/dataList/data-list.vue'
export default {
  components: {
    dataList,
  },
  data() {
    return {
      multipleTitle: true,
      path: '/pages/makeBad/productLine/detail',
      path2: '/pages/makeBad/warehouse/add',
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
    onSearch(val) {
      // todo 接口 val=''代表删除
      console.log(val + '22222')
    },
    toWaitGetGoodsDetail(val) {
      //todo 传参 
      console.log(val)
      this.toPage(this.path)
    },
    
    onChangeDay(val) {
      //todo 掉接口,代入val
      console.log(val)
    }

  }
}
</script>
<style lang="scss">

</style>
<style lang="scss" scoped>
page {
  background-color: rgb(247, 247, 247);
}
</style>
