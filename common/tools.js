//统一提示组件方便全局修改
const msg = (title, duration = 1500, mask = false, icon = 'none') => {
  if (Boolean(title) === false) {
    return;
  }
  uni.showToast({
    title,
    duration,
    mask,
    icon,
  });
};

export default {
  msg,
};
