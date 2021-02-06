export const getIcons = {
  Introduction: () => import('./src/home/Introduction.vue'),
  BlogA: () => import('./src/templates/BlogA.vue'),
  BlogB: () => import('./src/templates/BlogB.vue'),
  BlogC: () => import('./src/templates/BlogC.vue'),
  BlogD: () => import('./src/templates/BlogD.vue'),
  Modal: () => import('./src/components/Modal.vue'),
};

interface BlockListType {
  name: string;
  pathName: string;
  components: string[];
}

export const blockList: BlockListType[] = [
  {
    name: '主页',
    pathName: 'home',
    components: ['Introduction'],
  },
  {
    name: '组件',
    pathName: 'components',
    components: ['Modal'],
  },
  {
    name: '模板',
    pathName: 'templates',
    components: ['BlogA', 'BlogB', 'BlogC', 'BlogD'],
  },
];
