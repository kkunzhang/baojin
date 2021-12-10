<template>
  <view class="sun-index">
    <view class="sun-login-box">
      <view class="sun-input-box">
        <text class="label-text">员工号</text>
        <input
          class="input"
          v-model="userNumber"
          type="text"
          placeholder-class="placeholder-class"
        />
      </view>
    </view>
    <view class="sun-login-box">
      <view class="sun-input-box">
        <text class="label-text">原密码</text>
        <input
          class="input"
          v-model="oldPassword"
          type="text"
          placeholder="原密码"
          placeholder-class="placeholder-class"
        />
        <!-- <text class="code-text" :class="{ gray: showTime }" @click="handleGetCodeClick">{{
          showTime ? currentCountTime + 's后重新获取' : '获取验证码'
        }}</text> -->
      </view>
    </view>
    <view class="sun-login-box">
      <view class="sun-input-box">
        <text class="label-text">新密码</text>
        <input
          class="input"
          v-model="newPassword"
          type="text"
          placeholder="新密码"
          placeholder-class="placeholder-class"
        />
      </view>
    </view>
    <view class="sun-login-box">
      <view class="sun-input-box">
        <text class="label-text">确认密码</text>
        <input
          class="input"
          v-model="confirmVal"
          type="text"
          placeholder="确认密码"
          placeholder-class="placeholder-class"
        />
      </view>
    </view>
    <view class="uni-padding-wrap uni-common-mt submit">
      <button @click="handleSubmit" type="primary">提交</button></view
    >
  </view>
</template>

<script>
export default {
  data() {
    return {
      code: '',
      countTime: 60,
      currentCountTime: 0,
      showTime: false,
      timeId: null,
      newPassword: '',
      oldPassword: '',
      userNumber: '',
      confirmVal: ''
    }
  },
  created() {
    this.currentCountTime = this.countTime
  },
  onLoad() {

  },
  onBackPress(options) {
    let self = this;
    if (options.from === 'navigateBack') {
      return false;
    }
    console.log("要指定返回的页面");
    uni.redirectTo({
      url: '/pages/login/index'
    })
    return true;
  },

  methods: {
    handleSubmit() {
      if (!this.newPassword) return uni.showToast({ title: '请输入', icon: 'none', duration: 1500 })
      if (!this.oldPassword) return uni.showToast({ title: '请输入验证码', icon: 'none', duration: 1500 })
      if (!this.confirmVal) return uni.showToast({ title: '请输入密码', icon: 'none', duration: 1500 })
      uni.showToast({ title: '注册成功', duration: 1500 })
    },
    handleGetCodeClick() {
      this.showTime = true
      if (this.showTime && this.currentCountTime !== this.countTime) return
      this.currentCountTime
      this.timeId = setInterval(() => {
        if (this.currentCountTime <= 0) {
          this.currentCountTime = this.countTime
          this.showTime = false
          clearInterval(this.timeId)
        }
        this.currentCountTime--
      }, 1000)
    }
  }
}
</script>

<style scoped>
.sun-icon-img {
  width: 120rpx;
  height: 120rpx;
}
.close-icon {
  width: 36rpx;
  height: 34rpx;
}
.sun-login-box {
  padding: 20rpx 60rpx;
}
.sun-label {
  display: flex;
  align-items: center;
}
.label-text {
  font-weight: 500;
  color: #272e2d;
  font-size: 30rpx;
}
.sun-input-box {
  display: flex;
  align-items: baseline;
  height: 100rpx;
  border-bottom: 1rpx solid #eee;
  padding: 0px 10rpx;
}
.sun-input-box input {
  flex: 1;
}
.placeholder-class {
  font-size: 30rpx;
  color: #c0c0c0;
}

.code-text {
  font-size: 28rpx;
  color: #30c6b3;
}
.gray {
  color: #c0c0c0;
}
.submit {
  width: 100%;
  position: fixed;
  bottom: 10%;
}
.input {
  flex: 1;
  font-size: 30rpx;
  text-align: center;
  margin-left: -20rpx;
}
</style>
