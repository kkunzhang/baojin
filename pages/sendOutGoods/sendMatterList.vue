<template>
  <view>
    <view
      class="list-item"
      :style="{ '--color': index === 0 ? '#00DB00' : 'red' }"
      v-for="(item, index) in list"
      @click="toDetail(item)"
      :key="index"
    >
      <view class="text-box">
        <text>{{ item.home }}</text>
        <text>{{ item.name }}</text>
        <text>{{ item.age }}</text>
      </view>
    </view>
    <view class="submit-box">
      <button type="primary" @click="settlement">提交</button>
    </view>
  </view>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      hasTitle: true,
      path: '/pages/sendOutGoods/beginSendMatter',
      list: [
        {
          id: 0,
          name: '111制单人:王五',
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

    toDetail(item) {
      this.toPage(this.path)
    },

  },
  onLoad() {
    uni.setNavigationBarTitle({
      title: '发货详情'
    })

  },
}
</script>
<style lang="scss">
.list-item {
  cursor: pointer;
  background-color: #fff;
  margin: 10rpx;
  padding-left: 40rpx;
  border-left: 11rpx solid var(--color);
  .text-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 190rpx;
    text {
      padding: 10rpx 0;
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
