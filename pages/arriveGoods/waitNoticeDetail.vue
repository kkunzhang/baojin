<template>
  <view>
    <data-list
      :isCheckbox="isCheckbox"
      :dataList="goodList"
      @toDetail="toWaitNoticeDetail"
    ></data-list>

    <view class="submit-box">
      <button class="bottom-box" plain="true" type="primary" @click="selectAll">全选</button>
      <button class="bottom-box" type="primary" @click="settlement">通知质检</button>
    </view>
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
      goodList: [
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
      ],
      checkList: [], //选中值
      allChecked: false, //是否全选
      isCheckbox: true

    }
  },
  computed: {

  },
  methods: {
    //单选
    changeitem(item) {
      item.checked = !item.checked;
      if (!item.checked) {
        this.allChecked = false;
      } else {
        // 判断每一个商品是否是被选择的状态
        const cartList = this.goodList.every(item => {
          return item.checked === true;
        });
        if (cartList) {
          this.allChecked = true;
        } else {
          this.allChecked = false;
        }
      }
    },
    //全选，全不选
    selectAll() {
      this.allChecked = !this.allChecked;
      if (this.allChecked) {
        this.goodList.map(item => {
          item.checked = true;
        });
      } else {
        this.goodList.map(item => {
          item.checked = false;
        });
      }
    },
    settlement() {
      this.checkList = []
      this.goodList.map((item) => {
        if (item.checked) {
          return this.checkList.push(item.id)
        }
      })
      console.log(this.checkList, 'this.checkList')
    }

  }
}
</script>
<style lang="scss">
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
    .select-item {
      display: flex;
      flex-direction: row;
      padding-bottom: 10rpx;
      align-items: baseline;
      text {
        padding: 10rpx 0;
      }
    }
  }
  .title {
    height: 110rpx;
    border-bottom: 2rpx #d6d6d6 dashed;
    line-height: 110rpx;
  }
}
.submit-box {
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  .bottom-box {
    width: 50%;
  }
}
</style>
<style lang="scss" scoped>
page {
  background-color: rgb(247, 247, 247);
}
</style>
