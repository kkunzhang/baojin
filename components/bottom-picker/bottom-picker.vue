<template>
  <view>
    <view class="uni-list">
      <view class="uni-list-cell">
        <view class="uni-list-cell-db">
          <picker @change="bindPickerChange" ref="mpvuePicker" :value="index" :range="array">
           {{ array[index] }}
          </picker>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "picker",
      array: ["中国", "美国", "巴西", "日本"],
      index: 0,
      time: "12:01",
    };
  },
  computed: {
   
  },
  methods: {
    bindPickerChange: function (e) {
      console.log("picker发送选择改变，携带值为", e.target.value);
      this.index = e.target.value;
    },
  
  },
  created(){
    this.$refs.mpvuePickerS.click();
  }
};
</script>