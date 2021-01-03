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
    key: '/vip',
    name: '会员定价',
  },
  {
    key: '/vipservice',
    name: '企业服务',
  },
  {
    key: '6',
    name: '...',
    children: [
      {
        key: '61',
        name: '定制服务',
        children: [
          {
            key: '611',
            name: '素材模板',
          },
          {
            key: '612',
            name: '培训课程',
          },
        ],
      },
      {
        key: '62',
        name: '视频学院',
      },
      {
        key: '63',
        name: '创作者招募',
      },
    ],
  },
];
