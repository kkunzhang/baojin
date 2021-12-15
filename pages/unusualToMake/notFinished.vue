<template>
  <view>
    <scan-input></scan-input>
    <data-list
      :isCheckbox="isCheckbox"
      :dataList="goodList"
      @toDetail="toWaitNoticeDetail"
    ></data-list>
    <bottom-button-save @onChange="onSubmit">
      <text slot="one">拒收</text>
    </bottom-button-save>
  </view>
</template>

<script>
import dataList from "@/components/dataList/data-list.vue";
import scanInput from '@/components/scanInput/scan-input.vue'
import bottomButtonSave from "@/components/button/bottom-button-save.vue";
export default {
  components: {
    dataList,
    scanInput,
    bottomButtonSave
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
      input1: '',
      input2: '',
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
  props: {
    tabCur: {
      type: Number,
      default: 1,
    },
  },
};
</script>
<style lang="scss">
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
