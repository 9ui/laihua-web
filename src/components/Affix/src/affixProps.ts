export const AffixProps = {
  offsetTop: {
    type: Number,
    default: 0,
  }, // 定位在距离窗口顶部达到指定偏移量后
  offsetBottom: {
    type: Number,
    default: 0,
  }, // 定位在距离窗口底部达到指定偏移量后
  container: {
    type: Function,
    default: () => {},
  }, // 使用容器内的定位
  fixedOffsetTop: {
    type: Number,
    default: 0,
  }, // 定位在距离页面顶部达到指定偏移量后
  fixedOffsetBottom: {
    type: Number,
    default: 0,
  }, // 定位在距离页面底部达到指定偏移量后
  disabled: {
    type: Boolean,
    default: false,
  }, // 禁用
};
