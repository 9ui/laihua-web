/**
 * @description: 查找节点
 * @param instance
 */
const findDOMNode = (instance: any) => {
  let node = instance && (instance.$el || instance);
  while (node && !node.tagName) {
    node = node.nextSibling;
  }
  return node;
};

export { findDOMNode };
