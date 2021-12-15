<template>
  <view>
    <!-- 分页器 -->
    <segmented @tabCur="goTabCur" :itemsTab="itemsTab"></segmented>

    <!------------------------ 内容开始-------------------------- -->
    <!-- 待打印 -->
    <view v-show="tabCur === 0">
      <wait-print></wait-print>
    </view>
    <!-- 待确认 -->
    <view v-show="tabCur === 1">
      <wait-confirm></wait-confirm>
    </view>
    <!-- 已确认 -->
    <view v-show="tabCur === 2">
      <wait-confirm :isShow="false"></wait-confirm>
    </view>
  </view>
</template>

<script>
import waitPrint from '@/pages/shiftMatter/waitPrint/waitPrint.vue'
import waitConfirm from '@/pages/shiftMatter/waitConfirm/waitConfirm.vue'
import segmented from '@/components/segmented/segmented.vue'
export default {
  components: {
    waitPrint,
    segmented,
    waitConfirm,
  },
  data() {
    return {
      itemsTab: ['待打印', '待确认', '已确认'],
      tabCur: 0,
    }
  },
  computed: {
  },
  methods: {
    goTabCur(tabCur) {
      this.tabCur = tabCur
    }
  }
}
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
page {
  background-color: rgb(247, 247, 247);
}
</style>
