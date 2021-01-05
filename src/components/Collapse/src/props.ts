export const CollapseProps = {
  value: {
    type: [Array, String],
    default: () => [],
  }, // 当前激活的面板的 name，可以使用 v-model 双向绑定
  accordion: {
    type: Boolean,
    default: false,
  }, // 是否开启手风琴模式，开启后每次至多展开一个面板
};

export const CollapseItemProps = {
  name: {
    type: [Number, String],
    default: 0,
  }, // 当前面板的 name，与 Collapse的value对应，不填为索引值
  title: {
    type: String,
    default: '',
  }, // 面板标题
};
