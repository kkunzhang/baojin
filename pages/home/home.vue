<template>
  <view>
    <view class="nav-set">
      <view class="nav-set-left">
        <uni-text class="cuIcon-peoplefill icon-user">
          <span class="user-font">管理员</span></uni-text
        >
      </view>
      <uni-view class="nav-set-right">
        <uni-text class="cuIcon-notice icon-notice"></uni-text>
        <uni-text @click="actionSheet" class="cuIcon-settingsfill icon-setting"></uni-text
      ></uni-view>
    </view>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"> </mt-actionsheet>

    <view class="grid col-3 padding-sm">
      <view
        class="padding-sm"
        @click="onClick(item, index)"
        v-for="(item, index) in ColorList"
        :key="index"
      >
        <view class="box-outside">
          <uni-view class="icon-size" :style="{ color: item.color }">
            <uni-text :class="item.name"></uni-text
          ></uni-view>
          <view class="text-lg box-title">{{ item.title }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      actions: [
        {
          name: '修改密码',
          method: this.onEdit
        },
        {
          name: '注销',
          method: this.onLoginOut
        }],
      sheetVisible: false,
      ColorList: [{
        title: '到货',
        name: 'cuIcon-emoji',
        color: '#e54d42',
        path: '/pages/arriveGoods/index'
      },
      {
        title: '生产入库',
        name: 'cuIcon-emoji',
        color: '#f37b1d',
        path: '/pages/produceInWarehouse/index'
      },
      {
        title: '退料',
        name: 'cuIcon-emoji',
        color: '#fbbd08',
        path: '/pages/returnMatter/index'
      },
      {
        title: '领料',
        name: 'cuIcon-emoji',
        color: '#8dc63f',
        path: '/pages/receiveMatter/index'
      },
      {
        title: '成品发货',
        name: 'cuIcon-emoji',
        color: '#39b54a',
        path: '/pages/sendOutGoods/index'
      },
      {
        title: '移库',
        name: 'cuIcon-emoji',
        color: '#1cbbb4',
        path: '/pages/moveStorehouse/index'
      },
      {
        title: '盘库',
        name: 'cuIcon-emoji',
        color: '#0081ff',
        path: '/pages/selectStorehouse/index'
      },
      {
        title: '拆合包',
        name: 'cuIcon-emoji',
        color: '#6739b6',
        path: '/pages/splitWrap/index'
      },
      {
        title: '异常品处理',
        name: 'cuIcon-emoji',
        color: '#9c26b0',
        path: '/pages/arriveGoods/index'
      },
      {
        title: '转料',
        name: 'cuIcon-emoji',
        color: '#e03997',
        path: '/pages/arriveGoods/index'
      },
      {
        title: '补打条码',
        name: 'cuIcon-emoji',
        color: '#a5673f',
        path: '/pages/arriveGoods/index'
      },

      ],
    };
  },
  methods: {
    onClick(item, index) {
      //todo 条件判断
      console.log(item)
      this.toPage(item.path)
    },
    actionSheet() {
      // 打开action sheet
      this.sheetVisible = true;
    },
    onEdit() {
      this.toPage('/pages/register/register')
    },
    onLoginOut() {
      this.toPage('/pages/login/index')
    },
    onCancel() {
    },
  }
}
</script>


<style lang="scss" scoped>
page {
  background-color: #3c76cd;
}
.nav-set {
  padding: 10rpx 10rpx 30rpx 10rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 700rpx;
  margin: 0 auto;
  color: #fff;
  .nav-set-left {
    margin-top: 30rpx;
    .icon-user {
      font-size: 70rpx !important;
      .user-font {
        font-size: 40rpx !important;
        margin-left: 32rpx;
      }
    }
  }
  .nav-set-right {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-end;
    .icon-notice {
      font-size: 40rpx !important;
    }
    .icon-setting {
      margin-left: 50rpx !important;
      font-size: 40rpx !important;
    }
  }
}
.box-outside {
  color: #333333;
  background-color: #fff;
  height: 250rpx;
  border-radius: 20rpx;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  box-shadow: #000000 0rpx 4rpx 8rpx 0rpx;
  border-style: solid;
  border-color: #efefef;
  .icon-size {
    font-size: 100rpx !important;
    padding-bottom: 40rpx;
  }
  .box-title {
    padding-bottom: 20rpx;
  }
}
</style>
