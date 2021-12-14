<template>
  <view>
    <view class="bt-box">
      <button class="bt" type="primary" @click="onClick">
        <slot></slot>
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
    width: 100%;
  }
}
</style>
