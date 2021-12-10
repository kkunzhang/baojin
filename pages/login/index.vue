<template>
  <form class="loginView" @submit="bindLogin">
    <view>
      <image class="bg-img" src="@/static/imgs/bg.jpg" />
    </view>
    <view class="input-view input-first">
      <view class="label-view">
        <text class="label">用户名</text>
      </view>
      <input
        class="input"
        v-model="username"
        type="text"
        placeholder="请输入用户名"
        name="nameValue"
      />
      <uni-text @click="username = ''" class="cuIcon-roundclosefill close-icon"></uni-text>
    </view>
    <view class="input-view">
      <view class="label-view">
        <text class="label">密码</text>
      </view>
      <input
        class="input"
        v-model="password"
        password
        placeholder="请输入密码"
        name="passwordValue"
      />
      <uni-text @click="password = ''" class="cuIcon-roundclosefill close-icon"></uni-text>
    </view>
    <view class="button-view">
      <button type="primary" :loading="loading" class="login" formType="submit">登录</button>
    </view>
  </form>
</template>

<script>
import {
  mapMutations
} from 'vuex';

export default {
  data() {
    return {
      loading: false,
      username: '',
      password: ''
    }
  },
  methods: {
    bindLogin(e) {
      let url = '/pages/home/home'
      uni.navigateTo({
        url
      });
      console.log(e);
      // this.loading = true;
      let name = e.detail.value.nameValue,
        password = e.detail.value.passwordValue;

      // if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(name)) {
      //     this.loading = false;
      //     uni.showModal({
      //         content: "请输入正确邮箱",
      //         showCancel: false
      //     })
      //     return;
      // }

      // if (password.length < 6) {
      //     this.loading = false;
      //     uni.showModal({
      //         content: "密码大于5位",
      //         showCancel: false
      //     })
      //     return;
      // }

      //           uni.request({
      //               url: `${this.$serverUrl}/login.php`,
      //               header: {
      //                   "Content-Type": "application/x-www-form-urlencoded"
      //               },
      //               data: {
      //                   "username": name,
      //                   "password": password
      //               },
      //               method: "POST",
      //               success: (e) => {
      // console.log(66,e)
      //                   if (e.statusCode !== 200) {
      //                       uni.showModal({
      //                           content: "用户名密码错误！",
      //                           showCancel: false
      //                       });
      //                       return;
      //                   }
      //                   if (e.data.code === 0) {
      //                       this.login(e.data);
      //                       uni.navigateBack();
      //                   } else {
      //                       uni.showModal({
      //                           content: e.data.message,
      //                           showCancel: false
      //                       })
      //                   }
      //               },
      //               fail: (e) => {
      //                   uni.showModal({
      //                       content: "请求失败，请重试！",
      //                       showCancel: false
      //                   })
      //               },
      //               complete: () => {
      //                   this.loading = false;
      //               }
      //           })
    },
    ...mapMutations(['login'])
  }
}
</script>

<style lang="scss" scoped>
view {
  display: flex;
}

.loginView {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 750upx;
}
.bg-img {
  width: 750upx;
  height: 450upx;
}
.input-first {
  margin-top: 100upx;
}
.input-view {
  border-top-style: solid;
  border-top-width: 3upx;
  border-top-color: #ddd;
  flex-direction: row;
  width: 700upx;
  /* padding: 30upx 20upx; */
  box-sizing: border-box;
  margin: 50upx 0upx 20upx 20upx;
}

.label-view {
  width: 150upx;
  height: 60upx;
  align-items: center;
  margin-right: 30upx;
  margin-left: 40upx;
  margin-top: 40upx;
}
.close-icon {
  width: 36rpx;
  height: 34rpx;
  font-size: 30rpx;
  /* align-items: center; */
  margin-top: 50rpx;
  color: #888888;
}
.label {
  flex: 1;
  line-height: 60upx;
  font-size: 34upx;
  text-align: left;
  font-family: PingFang SC;
  font-weight: 500;
  color: #333333;
}

.input {
  flex: 1;
  height: 60upx;
  font-size: 34upx;
  align-items: center;
  margin-top: 40upx;
}

.button-view {
  width: 750upx;
  padding: 0 20upx;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button {
  width: 710upx;
  height: 100upx;
  line-height: 100upx;
  text-align: center;
  font-size: 34upx;
  margin-bottom: 30upx;
  margin-top: 20upx;
}
.getPassword {
  color: #888888;
}
</style>

