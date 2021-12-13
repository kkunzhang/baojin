<template>
  <view>
    <view class="bt-box">
      <button class="bt" plain="true" type="primary" @click="onClick(1)">保持记录</button>
      <button class="bt" type="primary" @click="onClick(2)">提交</button>
    </view>
  </view>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    onClick(val) {
      this.$emit('onChange', val)
    }
  }
}
</script>
<style lang="scss">
.bt-box {
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  .bt {
    width: 50%;
  }
}
</style>
