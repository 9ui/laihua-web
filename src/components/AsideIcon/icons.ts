export const getIcons = {
  // home
  Introduction: () => import('./src/home/IconIntroduction.vue'),

  // blog
  BlogA: () => import('./src/templates/blog/IconBlogA.vue'),
  BlogB: () => import('./src/templates/blog/IconBlogB.vue'),
  BlogC: () => import('./src/templates/blog/IconBlogC.vue'),

  // card
  CardA: () => import('./src/templates/card/IconCardA.vue'),
  CardB: () => import('./src/templates/card/IconCardB.vue'),
  CardC: () => import('./src/templates/card/IconCardD.vue'),

  // header
  HeaderA: () => import('./src/templates/header/IconHeaderA.vue'),
  HeaderB: () => import('./src/templates/header/IconHeaderB.vue'),

  // form
  FormA: () => import('./src/templates/form/IconFormA.vue'),

  // sidebar
  SidebarA: () => import('./src/templates/sidebar/IconSidebarA.vue'),
  SidebarB: () => import('./src/templates/sidebar/IconSidebarB.vue'),

  // components
  Modal: () => import('./src/components/IconSideOvers.vue'),

  // side
  SideOversA: () => import('./src/components/IconSideOvers.vue'),

  // page
  PageA: () => import('./src/page/IconPageA.vue'),
  PageB: () => import('./src/page/IconPageB.vue'),
  PageC: () => import('./src/page/IconPageC.vue'),
  PageD: () => import('./src/page/IconPageD.vue'),
};
