<template>
  <view>
    <!-- 分页器 -->
    <segmented @tabCur="goTabCur" :itemsTab="itemsTab"></segmented>

    <!------------------------ 内容开始-------------------------- -->
    <!-- 待通知 -->
    <view v-show="tabCur === 0">
      <wait-notified></wait-notified>
    </view>
    <!-- 待收货 -->
    <view v-show="tabCur === 1">
      <wait-get-goods></wait-get-goods>
    </view>
    <!-- 待入库 -->
    <view v-show="tabCur === 2">
      <wait-in-store></wait-in-store>
    </view>
  </view>
</template>

<script>
import waitNotified from '@/pages/arriveGoods/waitNotified/waitNotified.vue'
import waitGetGoods from '@/pages/arriveGoods/waitGetGoods/waitGetGoods.vue'
import waitInStore from '@/pages/arriveGoods/waitInStore/waitInStore.vue'
import segmented from '@/components/segmented/segmented.vue'
export default {
  components: {
    waitNotified,
    segmented,
    waitGetGoods,
    waitInStore,
  },
  data() {
    return {
      itemsTab: ['待通知', '待收货', '待入库 '],
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
