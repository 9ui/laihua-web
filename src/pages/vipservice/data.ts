import { LevelTypes, BrandType, OtherServicesType } from './types';

// 解决方式
export const levelInfo: LevelTypes[] = [
  {
    id: '100',
    title: '多账号采购',
    desc: '多人创作，协同办公',
    icon: require('../../assets/images/vipservice/3.png'),
    mark: '',
    tag: [
      {
        tagId: '1001',
        tagName: '团队协作功能',
      },
      {
        tagId: '1002',
        tagName: '线上线下培训',
      },
      {
        tagId: '10021',
        tagName: '定制化模板',
      },
      {
        tagId: '1003',
        tagName: '定制化素材',
      },
      {
        tagId: '1004',
        tagName: '专属客服',
      },
      {
        tagId: '10041',
        tagName: '一站式服务',
      },
    ],
  },
  {
    id: '200',
    title: 'API定制',
    desc: '系统接入，高效赋能',
    icon: require('../../assets/images/vipservice/4.png'),
    mark: '多账号采购所有服务',
    tag: [
      {
        tagId: '2001',
        tagName: '视频创作编辑器',
      },
      {
        tagId: '2002',
        tagName: '模板应用中心',
      },
      {
        tagId: '2003',
        tagName: '视觉资产管理中心',
      },
      {
        tagId: '2004',
        tagName: '用户数据管理平台',
      },
      {
        tagId: '2005',
        tagName: '视频办公宝',
      },
      {
        tagId: '2006',
        tagName: '专人一对一服务',
      },
    ],
  },
  {
    id: '300',
    title: '私有化部署',
    desc: '深层开发，安全部署',
    icon: require('../../assets/images/vipservice/5.png'),
    mark: 'API定制所有服务',
    tag: [
      {
        tagId: '3001',
        tagName: '应用和数据本地化',
      },
      {
        tagId: '3003',
        tagName: '深层需求定制',
      },
      {
        tagId: '3004',
        tagName: '全套接入方案',
      },
      {
        tagId: '3005',
        tagName: '全方位产品技术对接',
      },
    ],
  },
];

// 品牌传播
export const brand: BrandType = {
  title: '短视频大赛定制+批量账号采购',
  desc: '最低投资成本、最优价值成效的定制化短视频大赛解决方案',
  tags: [
    '大赛活动策划',
    '专人一对一服务',
    '全渠道推广方案',
    '管理后台系统支持',
    '短视频创作营销培训',
    '大赛主题模板素材定制',
  ],
  img: '',
};

// otherServices
export const otherServices: OtherServicesType[] = [
  {
    id: '110001',
    title: '短视频培训课程',
    majorImg: require('../../assets/images/vipservice/sp1.png'),
    imgs: [
      require('../../assets/images/vipservice/sp2.png'),
      require('../../assets/images/vipservice/sp3.png'),
      require('../../assets/images/vipservice/sp4.png'),
      require('../../assets/images/vipservice/sp5.png'),
    ],
    descs: [
      {
        id: '1100011',
        name: '培训服务',
        desc: '短视频创作及营销课程服务',
      },
      {
        id: '1100012',
        name: '培训服务',
        desc:
          '主要包含短视频行业分析、短视频文案脚本制作、短视频美术设计、来画平台使用、短视频实操训练等课程内容',
      },
      {
        id: '1100013',
        name: '培训服务',
        desc: '线上或线下',
      },
      {
        id: '1100014',
        name: '培训服务',
        desc: '一天时间打造抖音爆款短视频，成为短视频运营高手及营销大咖',
      },
    ],
  },
  {
    id: '110002',
    title: '角色素材定制',
    majorImg: require('../../assets/images/vipservice/js1.png'),
    imgs: [
      require('../../assets/images/vipservice/js2.png'),
      require('../../assets/images/vipservice/js3.png'),
      require('../../assets/images/vipservice/js4.png'),
      require('../../assets/images/vipservice/js5.png'),
    ],
    descs: [
      {
        id: '1100021',
        name: '产品内容',
        desc: '1个动态角色素材（含3个动作）',
      },
      {
        id: '1100022',
        name: '产品说明',
        desc:
          '1.须提供高清正面或侧面角色参考图 <br> 2.角色服装如有特别指定，可额外发参考图示意，如使用同一照片内服装，须保证该服装无复杂花纹 <br>3.角色动作可从来画已有动作库中任意挑选3种 <br>4.初稿提供后，可提供不多于2次的修改服务',
      },
    ],
  },
  {
    id: '110003',
    title: '道具场景素材定制',
    majorImg: require('../../assets/images/vipservice/dj1.png'),
    imgs: [
      require('../../assets/images/vipservice/dj2.png'),
      require('../../assets/images/vipservice/dj3.png'),
      require('../../assets/images/vipservice/dj4.png'),
      require('../../assets/images/vipservice/dj5.png'),
    ],
    descs: [
      {
        id: '1100031',
        name: '产品内容',
        desc: '可选择3个道具素材或1个场景素材',
      },
      {
        id: '1100032',
        name: '产品说明',
        desc:
          '1.如为特定道具或场景，须提供相应高清图片示意 <br>2.来画平台素材整体为扁平风格，为更好地融合其它素材，道具及场景定制时会进行适当的美术处理 <br>3.初稿提供后，可提供不多于2次的修改服务',
      },
    ],
  },
  {
    id: '110004',
    title: '专属视频模板定制',
    majorImg: require('../../assets/images/vipservice/mb1.png'),
    imgs: [
      require('../../assets/images/vipservice/mb2.png'),
      require('../../assets/images/vipservice/mb3.png'),
      require('../../assets/images/vipservice/mb4.png'),
      require('../../assets/images/vipservice/mb5.png'),
    ],
    descs: [
      {
        id: '1100041',
        name: '产品内容',
        desc: '1个专属视频模板（5个场景页）',
      },
      {
        id: '1100042',
        name: '产品说明',
        desc:
          '1.定制时将按照分镜、初稿、修改稿依次确认 <br>2.其中涉及的特定人物、道具及场景需为可直接使用的现有素材（来画素材库现有素材或客户自 行提供） <br>3.初稿提供后，可提供不多于2次的修改服务',
      },
    ],
  },
  {
    id: '110005',
    title: '静态头像及形象定制',
    majorImg: require('../../assets/images/vipservice/xx1.png'),
    imgs: [
      require('../../assets/images/vipservice/xx2.png'),
      require('../../assets/images/vipservice/xx3.png'),
      require('../../assets/images/vipservice/xx4.png'),
      require('../../assets/images/vipservice/xx5.png'),
    ],
    descs: [
      {
        id: '1100051',
        name: '产品内容',
        desc: '1个静态手绘头像或卡通人物形象',
      },
      {
        id: '1100052',
        name: '产品说明',
        desc:
          '1.须提供高清正面或侧面人物参考图 <br>2.人物服装如有特别指定，可额外发参考图示意，如使用同一照片内服装，须保证该服装无复杂花纹 <br>3.初稿提供后，可提供不多于2次的修改服务',
      },
    ],
  },
];
