<template>
  <view>
    <view class="bt-box">
      <button class="bt" plain="true" type="primary" @click="onClick(1)">
        <slot name="one"> 保持记录 </slot>
      </button>
      <button class="bt" type="primary" @click="onClick(2)">
        <slot name="two"> 提交 </slot>
      </button>
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
