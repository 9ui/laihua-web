export const getIcons = {
  Introduction: () => import('./src/home/Introduction.vue'),
  BlogA: () => import('./src/templates/BlogA.vue'),
  BlogB: () => import('./src/templates/BlogB.vue'),
  BlogC: () => import('./src/templates/BlogC.vue'),
  BlogD: () => import('./src/templates/BlogD.vue'),
  SectionC: () => import('./src/templates/SectionC.vue'),
  SectionD: () => import('./src/templates/SectionD.vue'),
  SectionE: () => import('./src/templates/SectionE.vue'),
  SectionF: () => import('./src/templates/SectionF.vue'),
  CardA: () => import('./src/templates/CardA.vue'),
  CardB: () => import('./src/templates/CardB.vue'),
  Modal: () => import('./src/components/Modal.vue'),
  PageA: () => import('./src/page/PageA.vue'),
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
    components: [
      'BlogA',
      'BlogB',
      'BlogC',
      'BlogD',
      'CardA',
      'CardB',
      'SectionC',
      'SectionD',
      'SectionE',
      'SectionF',
    ],
  },
  {
    name: '页面',
    pathName: 'page',
    components: ['PageA'],
  },
];
