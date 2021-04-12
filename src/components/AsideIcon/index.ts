interface MenusType {
  name: string;
  pathName: string;
  components: string[];
}

export const sideMenus: MenusType[] = [
  {
    name: ' Home',
    pathName: 'home',
    components: ['Introduction'],
  },
  {
    name: 'components',
    pathName: 'components',
    components: ['Modal'],
  },
  {
    name: 'Blog',
    pathName: 'blog',
    components: ['BlogA', 'BlogB', 'BlogC', 'BlogD'],
  },
  {
    name: 'Card',
    pathName: 'card',
    components: ['CardA', 'CardB', 'CardC'],
  },
  {
    name: 'Header',
    pathName: 'header',
    components: ['HeaderA', 'HeaderB'],
  },
  {
    name: 'Sidebar',
    pathName: 'sidebar',
    components: ['SidebarA', 'SidebarB'],
  },
  {
    name: 'Side',
    pathName: 'side',
    components: ['SideOversA'],
  },
  {
    name: 'Form',
    pathName: 'form',
    components: ['FormA'],
  },
  {
    name: 'Page',
    pathName: 'page',
    components: ['PageA', 'PageB', 'PageC', 'PageD', 'PageE'],
  },
];
