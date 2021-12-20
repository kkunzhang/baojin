<template>
  <view>
    <scan-input @picker="onGetpicker"></scan-input>
    <data-list :hasTitle="isCheckbox" :dataList="goodList"></data-list>
    <view class="item" @tap="selectorVisible = true">单列选择</view>
    <view class="result">选择结果：{{ result.result }}</view>
    <w-picker
      :visible.sync="selectorVisible"
      mode="selector"
      value="女"
      default-type="name"
      :default-props="defaultProps"
      :options="selectorList"
      @confirm="onConfirm($event, 'selector')"
      @cancel="onCancel"
      ref="selector"
    ></w-picker>
    <view class="submit-box">
      <button type="primary">提交222</button>
    </view>
  </view>
</template>

<script>
import dataList from "@/components/dataList/data-list.vue";
import scanInput from "@/components/scanInput/scan-input.vue";
import bottomButtonSave from "@/components/button/bottom-button-save.vue";
import wPicker from "@/components/w-picker/w-picker.vue";
export default {
  components: {
    dataList,
    scanInput,
    bottomButtonSave,
    wPicker
  },
  data() {
    return {
      pickerShow: "false",
      selectorVisible: false,
      result: {
        result: ""
      },
      defaultProps: {
        label: "name",
        value: "id"
      },
      selectorList: [
        {
          name: "男",
          id: "1"
        }, {
          name: "女",
          id: "2"
        }
      ],
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
      input1: "",
      input2: "",
    };
  },
  computed: {},
  methods: {
    onConfirm(res, type) {
      this.result = res;
      console.log(res)
    },
    onCancel() {

    },
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
    onGetpicker(val) {
      console.log(val);
      this.pickerShow = true;
    },
    onClick() {

      console.log(this.checkList, "this.checkList");
    },
  },
  onReady() {
    this.$refs.selector.show()
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
