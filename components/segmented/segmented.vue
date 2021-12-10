<template>
  <view>
    <!-- 顶部分页器 -->
    <scroll-view scroll-x class="bg-white nav">
      <view class="flex text-center">
        <view
          class="cu-item flex-sub"
          :class="index == tabCur ? 'text-blue cur' : ''"
          v-for="(item, index) in itemsTab"
          :key="index"
          @tap="tabSelect"
          :data-id="index"
        >
          {{ item }}
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'segmented',
  data() {
    return {
      tabCur: 0,
      scrollLeft: 0,
    }
  },
  props: {
    itemsTab: {
      type: Array,
      default() {
        []
      }
    },
    fill: {
      type: Boolean,
      default: false
    }
  },
  computed: {
  },
  methods: {
    tabSelect(e) {
      this.tabCur = e.currentTarget.dataset.id;
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
      this.$emit('tabCur', this.tabCur)
    },

  }
}
</script>
<style lang="scss">
</style>

