<template>
  <view>
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
        :bg-color="bgColor"
        cancelButton="none"
        :placeholder="placeholder"
      >
      </uni-search-bar>
    </view>
  </view>
</template>

<script>
// 搜索
export default {
  name: "search",
  data() {
    return {
      searchValue: '',
    }
  },
  props: {
    fill: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: '#D6D6D6'
    },
    placeholder: {
      type: String,
      default: '请输入供应商/制单人搜索'
    }
  },
  methods: {
    search(res) {
      // uni.showToast({
      //   title: '搜索：' + res.value,
      //   icon: 'none'
      // })
    },
    input(res) {
      console.log('----input:', res)
      this.$emit('searchValue', res)
    },
    clear(res) {
      // this.$emit('cancelSearch', '')
      // uni.showToast({
      //   title: 'clear事件，输入值为：' + res.value,
      //   icon: 'none'
      // })
    },
    cancel(res) {
      // uni.showToast({
      //   title: '点击取消，输入值为：' + res.value,
      //   icon: 'none'
      // })
    },

  }
}
</script>


<style lang="scss">
</style>

