<template>
  <view>
    <view class="bt-box">
      <button class="bt" plain="true" type="primary" @click="onClick('prev')">前一天</button>
      <button class="bt" type="primary" @click="onClick('next')">后一天</button>
    </view>
  </view>
</template>
<script>
import { GetDate } from '@/common/utils'
export default {
  components: {
  },
  data() {
    return {
      mun: 1.222222
    }
  },
  methods: {
    onClick(val) {
      //vuex累加 todo
      let day = (val == 'prev') ? GetDate(1, -1) : GetDate(1, 1)
      this.$emit('onChangeDay', day)
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
