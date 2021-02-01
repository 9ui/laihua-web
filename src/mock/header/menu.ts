interface MenuType {
  key: string; // menu的唯一标识
  path?: string; // 路由
  link?: string; // 跳转链接
  name: string; // menu菜单名臣
  children?: MenuType[]; // 子菜单
}

export const menus: MenuType[] = [
  {
    key: '/workbench',
    name: '工作台',
  },
  {
    key: '/templates',
    name: '模板广场',
  },
  {
    key: '/solution',
    name: '解决方案',
  },
  {
    key: '/pricing',
    name: '会员定价',
  },
  {
    key: '/vipservice',
    name: '企业服务',
  },
];
