<template>
  <form class="loginView" @submit="formSubmit">
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
        name="username"
      />
      <uni-text @click="username = ''" class="cuIcon-roundclosefill close-icon"></uni-text>
    </view>
    <view class="input-view">
      <view class="label-view">
        <text class="label">密码</text>
      </view>
      <input class="input" v-model="password" password placeholder="请输入密码" name="password" />
      <uni-text @click="password = ''" class="cuIcon-roundclosefill close-icon"></uni-text>
    </view>

    <button type="primary" :loading="loading" class="login" formType="submit">登录</button>
  </form>
</template>

<script>
import {
  mapMutations
} from 'vuex';
import graceChecker from "../../common/graceChecker.js"
export default {
  data() {
    return {
      loading: false,
      username: '',
      password: ''
    }
  },
  methods: {
    formSubmit(e) {
      console.log(process.uniEnv.BASE_API)

      //定义表单规则
      var rule = [
        { name: "username", checkType: "notnull", errorMsg: "请输入用户名" },
        { name: "username", checkType: "string", checkRule: "1,10", errorMsg: "姓名应为1-10个字符" },
        { name: "password", checkType: "notnull", checkRule: "1,20", errorMsg: "请输入密码" },
      ];
      //进行表单检查
      var formData = e.detail.value;
      var checkRes = graceChecker.check(formData, rule);
      this.toLogin(formData)
      if (checkRes) {
        this.toLogin(formData)
      } else {
        // uni.showToast({ title: graceChecker.error, icon: "none" });
      }
    },
    async toLogin(formData) {
      const params = {
        "username": formData.username,
        "password": formData.password
      }
      // const data = await this.$api.login.login(params)
      console.log(this.$api.login1(params))
      // this.login(data);
      // let url = '/pages/home/home'
      // uni.navigateTo({
      //   url
      // });
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
  width: 700rpx;
  box-sizing: border-box;
  margin: 50upx 0upx 40upx 20upx;
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
.getPassword {
  color: #888888;
}
</style>

