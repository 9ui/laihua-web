interface MenusType {
  name: string;
  pathName: string;
  components: string[];
}

export const sideMenus: MenusType[] = [
  {
    name: ' Home',
    pathName: 'home',
    components: ['introduction'],
  },
  {
    name: 'Banner',
    pathName: 'banner',
    components: ['banner01', 'banner02'],
  },
  {
    name: 'Components',
    pathName: 'components',
    components: ['modal', 'lhButton'],
  },
  {
    name: 'Blog',
    pathName: 'blog',
    components: ['blog01', 'blog02', 'blog03', 'blog05', 'blog06'],
  },
  {
    name: 'Card',
    pathName: 'card',
    components: ['card01', 'card02', 'card03'],
  },
  {
    name: 'Header',
    pathName: 'header',
    components: ['header01', 'header02'],
  },
  {
    name: 'Sidebar',
    pathName: 'sidebar',
    components: ['sidebar01', 'sidebar02'],
  },
  {
    name: 'Side',
    pathName: 'side',
    components: ['sideOvers'],
  },
  {
    name: 'Form',
    pathName: 'form',
    components: ['form01'],
  },
  {
    name: 'Page',
    pathName: 'page',
    components: ['page01', 'page02', 'page03', 'page04', 'page05'],
  },
];
