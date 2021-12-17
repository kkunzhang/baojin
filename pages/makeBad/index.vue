<template>
  <view>
    <!-- 分页器 -->
    <segmented @tabCur="goTabCur" :itemsTab="itemsTab"></segmented>

    <!------------------------ 内容开始-------------------------- -->
    <!-- 仓库 -->
    <view v-show="tabCur === 0">
      <warehouse></warehouse>
    </view>
    <!-- 产线 -->
    <view v-show="tabCur === 1">
      <product-line></product-line>
    </view>
    <!-- 首尾料 -->
    <view v-show="tabCur === 2">
      <head-and-tail-matter></head-and-tail-matter>
    </view>
  </view>
</template>

<script>
import warehouse from '@/pages/makeBad/warehouse/index.vue'
import productLine from '@/pages/makeBad/productLine/index.vue'
import headAndTailMatter from '@/pages/makeBad/headAndTailMatter/index.vue'
import segmented from '@/components/segmented/segmented.vue'
export default {
  components: {
    warehouse,
    segmented,
    productLine,
    headAndTailMatter,
  },
  data() {
    return {
      itemsTab: ['仓库', '产线', '首尾料 '],
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
