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
    name: 'components',
    pathName: 'components',
    components: ['modal'],
  },
  {
    name: 'Blog',
    pathName: 'blog',
    components: ['blogA', 'blogB', 'blogC', 'blogD', 'blogE'],
  },
  {
    name: 'Card',
    pathName: 'card',
    components: ['cardA', 'cardB', 'cardC'],
  },
  {
    name: 'Header',
    pathName: 'header',
    components: ['headerA', 'headerB'],
  },
  {
    name: 'Sidebar',
    pathName: 'sidebar',
    components: ['sidebarA', 'sidebarB'],
  },
  {
    name: 'Side',
    pathName: 'side',
    components: ['sideOversA'],
  },
  {
    name: 'Form',
    pathName: 'form',
    components: ['formA'],
  },
  {
    name: 'Page',
    pathName: 'page',
    components: ['pageA', 'pageB', 'pageC', 'pageD', 'pageE'],
  },
];
