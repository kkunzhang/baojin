<template>
  <view>
    <view>
      <scroll-view scroll-x class="bg-white nav">
        <view class="flex text-center">
          <view
            class="cu-item flex-sub"
            :class="index == TabCur ? 'text-blue cur' : ''"
            v-for="(item, index) in items"
            :key="index"
            @tap="tabSelect"
            :data-id="index"
          >
            {{ item }}
          </view>
        </view>
      </scroll-view>
    </view>
    <view>
      <uni-search-bar
        @confirm="search"
        :focus="true"
        v-model="searchValue"
        @input="input"
        @cancel="cancel"
        @change="change"
        @clear="clear"
        clearButton="auto"
        bg-color="#D6D6D6"
        cancelButton="none"
        placeholder="请输入供应商/制单人搜索"
      >
      </uni-search-bar>
    </view>
    <view class="center-box">
      <view
        class="list-item"
        v-for="(item, index) in goodList"
        @click="toDetail(item)"
        :key="index"
      >
        <view class="title">{{ item.numberBox }}</view>
        <!-- <checkbox-group @change="changeitem(item)" checked class="checkbox"
            ><checkbox :value="item.unitPrice" :checked="item.checked"
          /></checkbox-group> -->
        <view class="text-box">
          <text>{{ item.home }}</text>
          <text>{{ item.name }}</text>
          <text>{{ item.level }}</text>
          <text>{{ item.age }}</text>
        </view>
      </view>
    </view>
    <view class="submit-box">
      <view class="bottom-box">
        <!-- <button plain="true" type="primary" @click="selectAll">全选</button> -->
        <button plain="true" type="primary" @click="selectAll">前一天</button>
      </view>
      <view class="bottom-box">
        <!-- <button type="primary" @click="settlement">结算</button> -->
        <button type="primary" @click="selectAll">后一天</button>
      </view>
    </view>
  </view>
</template>

<script>
// import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
export default {
  // components: {
  //   uniSearchBar,
  //   uniList
  // },
  data() {
    return {
      items: ['待通知', '待收货', '待入库 '],
      TabCur: 0,
      scrollLeft: 0,
      searchValue: '',
      goodList: [
        {
          id: 0,
          name: '蓝猫',
          home: '斯阔猫舍',
          level: '特级',
          age: '顺达广州机械公司',
          subtotal: '23',
          numberBox: 1,
          checked: false
        },
        {
          id: 1,
          name: '美短',
          home: '时光猫舍',
          level: '特级',
          age: '顺达广州机械公司',
          subtotal: '50',
          numberBox: 1,
          checked: false
        },
        {
          id: 1,
          name: '美短',
          home: '时光猫舍',
          level: '特级',
          age: '顺达广州机械公司',
          subtotal: '50',
          numberBox: 1,
          checked: false
        },
        {
          id: 1,
          name: '美短',
          home: '时光猫舍',
          level: '特级',
          age: '顺达广州机械公司',
          subtotal: '50',
          numberBox: 1,
          checked: false
        },
        {
          id: 1,
          name: '美短',
          home: '时光猫舍',
          level: '特级',
          age: '顺达广州机械公司',
          subtotal: '50',
          numberBox: 1,
          checked: false
        },
        {
          id: 1,
          name: '美短',
          home: '时光猫舍',
          level: '特级',
          age: '顺达广州机械公司',
          subtotal: '50',
          numberBox: 1,
          checked: false
        },
        {
          id: 1,
          name: '美短',
          home: '时光猫舍',
          level: '特级',
          age: '顺达广州机械公司',
          subtotal: '50',
          numberBox: 1,
          checked: false
        },
        {
          id: 1,
          name: '美短',
          home: '时光猫舍',
          level: '特级',
          age: '顺达广州机械公司',
          subtotal: '50',
          numberBox: 1,
          checked: false
        },
        {
          id: 2,
          name: 'abb',
          home: '时光猫舍',
          level: '特级',
          age: '顺达广州机械公司',
          subtotal: '50',
          numberBox: 1,
          checked: false
        }
      ],
      checkList: [], //选中值
      allChecked: false //是否全选

    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      this.goodList.map(item => {
        item.checked ? (totalPrice += item.numberBox * item.unitPrice) : (totalPrice += 0);
      });
      return totalPrice;
    }
  },
  methods: {
    search(res) {
      uni.showToast({
        title: '搜索：' + res.value,
        icon: 'none'
      })
    },
    input(res) {
      console.log('----input:', res)
    },
    clear(res) {
      uni.showToast({
        title: 'clear事件，输入值为：' + res.value,
        icon: 'none'
      })
    },
    cancel(res) {
      uni.showToast({
        title: '点击取消，输入值为：' + res.value,
        icon: 'none'
      })
    },
    tabSelect(e) {
      this.TabCur = e.currentTarget.dataset.id;
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
      console.log(this.TabCur)
      console.log(this.scrollLeft)
      console.log(e)
    },
    toDetail(item) {
      console.log(item)

    }
    //单选
    // changeitem(item) {
    //   item.checked = !item.checked;
    //   if (!item.checked) {
    //     this.allChecked = false;
    //   } else {
    //     // 判断每一个商品是否是被选择的状态
    //     const cartList = this.goodList.every(item => {
    //       return item.checked === true;
    //     });
    //     if (cartList) {
    //       this.allChecked = true;
    //     } else {
    //       this.allChecked = false;
    //     }
    //   }
    // },
    //全选，全不选
    // selectAll() {
    //   this.allChecked = !this.allChecked;
    //   if (this.allChecked) {
    //     this.goodList.map(item => {
    //       item.checked = true;
    //     });
    //   } else {
    //     this.goodList.map(item => {
    //       item.checked = false;
    //     });
    //   }
    // },
    // settlement() {
    //   this.checkList = []
    //   this.goodList.map((item) => {
    //     if (item.checked) {
    //       return this.checkList.push(item.id)
    //     }
    //   })
    //   console.log(this.checkList, 'this.checkList')
    // }

  }
}
</script>


<style lang="scss">
.center-box {
  padding-bottom: 180rpx;
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
        padding: 10rpx 0;
      }
    }
    .title {
      height: 110rpx;
      border-bottom: 2rpx #d6d6d6 dashed;
      line-height: 110rpx;
    }
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
