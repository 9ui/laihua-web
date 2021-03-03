export const getIcons = {
  // home
  Introduction: () => import('./src/home/IconIntroduction.vue'),
  // template/blog
  BlogA: () => import('./src/templates/blog/IconBlogA.vue'),
  BlogB: () => import('./src/templates/blog/IconBlogB.vue'),
  BlogC: () => import('./src/templates/blog/IconBlogC.vue'),

  SectionD: () => import('./src/templates/IconSectionD.vue'),
  SectionE: () => import('./src/templates/IconSectionE.vue'),
  SectionF: () => import('./src/templates/IconSectionF.vue'),
  // template/card
  CardA: () => import('./src/templates/card/IconCardA.vue'),
  CardB: () => import('./src/templates/card/IconCardB.vue'),
  CardC: () => import('./src/templates/card/IconCardD.vue'),

  // template/header
  HeaderA: () => import('./src/templates/header/IconHeaderA.vue'),
  HeaderB: () => import('./src/templates/header/IconHeaderB.vue'),
  // components
  Modal: () => import('./src/components/IconModal.vue'),
  // page
  PageA: () => import('./src/page/IconPageA.vue'),
  PageB: () => import('./src/page/IconPageB.vue'),
  PageC: () => import('./src/page/IconPageC.vue'),
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
      'CardA',
      'CardB',
      'CardC',
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
    components: ['PageA', 'PageB', 'PageC'],
  },
];
