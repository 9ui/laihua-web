export const getIcons = {
  // home
  Introduction: () => import('./src/home/IconIntroduction.vue'),
  // template
  BlogA: () => import('./src/templates/IconBlogA.vue'),
  BlogB: () => import('./src/templates/IconBlogB.vue'),
  BlogC: () => import('./src/templates/IconBlogC.vue'),
  BlogD: () => import('./src/templates/IconBlogD.vue'),
  SectionC: () => import('./src/templates/IconSectionC.vue'),
  SectionD: () => import('./src/templates/IconSectionD.vue'),
  SectionE: () => import('./src/templates/IconSectionE.vue'),
  SectionF: () => import('./src/templates/IconSectionF.vue'),
  CardA: () => import('./src/templates/IconCardA.vue'),
  CardB: () => import('./src/templates/IconCardB.vue'),
  // template/header
  HeaderA: () => import('./src/templates/header/IconHeaderA.vue'),
  HeaderB: () => import('./src/templates/header/IconHeaderB.vue'),
  // components
  Modal: () => import('./src/components/IconModal.vue'),
  // page
  PageA: () => import('./src/page/IconPageA.vue'),
  PageB: () => import('./src/page/IconPageB.vue'),
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
      'HeaderA',
      'HeaderB',
    ],
  },
  {
    name: '页面',
    pathName: 'page',
    components: ['PageA', 'PageB'],
  },
];
