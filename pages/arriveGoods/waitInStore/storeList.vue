<template>
  <view>
    <view class="top-box">
      <view class="scan-input">
        <input
          type="digit"
          maxlength="10"
          v-model="input1"
          placeholder="请扫描物料条码"
        />
      </view>
      <view class="scan-input">
         <input
          type="digit"
          maxlength="10"
          v-model="input2"
          placeholder="请扫描库位"
        />
      </view>
    </view>
    <data-list
      :isCheckbox="isCheckbox"
      :dataList="goodList"
      @toDetail="toWaitNoticeDetail"
    ></data-list>
    <view class="submit-box">
      <button type="primary" @click="settlement">通知质检</button>
    </view>
  </view>
</template>

<script>
import dataList from "@/components/dataList/data-list.vue";
export default {
  components: {
    dataList,
  },
  data() {
    return {
      goodList: [
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
      checkList: [], //选中值
      allChecked: false, //是否全选
      isCheckbox: true,
      input1:'',
      input2:'',
    };
  },
  computed: {},
  methods: {
    //单选
    changeitem(item) {
      item.checked = !item.checked;
      if (!item.checked) {
        this.allChecked = false;
      } else {
        // 判断每一个商品是否是被选择的状态
        const cartList = this.goodList.every((item) => {
          return item.checked === true;
        });
        if (cartList) {
          this.allChecked = true;
        } else {
          this.allChecked = false;
        }
      }
    },
    settlement() {
      this.checkList = [];
      this.goodList.map((item) => {
        if (item.checked) {
          return this.checkList.push(item.id);
        }
      });
      console.log(this.checkList, "this.checkList");
    },
  },
};
</script>
<style lang="scss">
.top-box {
  display: flex;
  background-color: #fff;
  margin: 10rpx;
  border-radius: 10rpx;
  padding-left: 40rpx;
  align-items: baseline;
  flex-direction: column;
  .scan-input {
    border-style: solid;
    border-width: 1rpx;
    border-radius: 10rpx;
    border-color: #cfcbcb;
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
