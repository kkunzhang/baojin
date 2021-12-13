<template>
  <view>
    <!-- 分页器 -->
    <segmented @tabCur="goTabCur" :itemsTab="itemsTab"></segmented>

    <!------------------------ 内容开始-------------------------- -->
    <!-- 良品 -->
    <view v-show="tabCur === 0">
      <store-list :tabCur="tabCur"></store-list>
    </view>
    <!-- 次品 -->
    <view v-show="tabCur === 1">
      <store-list :tabCur="tabCur"></store-list>
    </view>
    <!-- 隔离 -->
    <view v-show="tabCur === 2">
      <store-list :tabCur="tabCur"></store-list>
    </view>
  </view>
</template>

<script>
import storeList from "@/pages/arriveGoods/waitInStore/storeList.vue";
export default {
  components: {
   storeList
  },
  data() {
    return {
      itemsTab: ["良品", "不良品", "隔离 "],
      tabCur: 0,
    };
  },
  computed: {},
  methods: {
    goTabCur(tabCur) {
      this.tabCur = tabCur;
    },
  },
};
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
page {
  background-color: rgb(247, 247, 247);
}
</style>
