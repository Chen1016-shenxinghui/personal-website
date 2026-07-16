export interface ToolItem {
  name: string;
  level: number;
  description: string;
}

export interface SimpleItem {
  name: string;
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface SkillsData {
  designTools: {
    title: string;
    items: ToolItem[];
  };
  designAbilities: {
    title: string;
    items: string[];
  };
  interactiveSkills: {
    title: string;
    items: SimpleItem[];
  };
  comprehensiveAbilities: {
    title: string;
    items: SimpleItem[];
  };
  experiences: Experience[];
}

export const skillsData: SkillsData = {
  designTools: {
    title: '核心工具',
    items: [
      { name: 'AutoCAD', level: 95, description: '精通平立面制图' },
      { name: 'SketchUp', level: 90, description: '熟练建模与场景构建' },
      { name: 'Photoshop', level: 92, description: '效果图后期处理' },
      { name: '3DMAX', level: 88, description: '复杂场景建模' },
      { name: 'Lumion', level: 90, description: '实时渲染表现' },
      { name: 'V-Ray', level: 85, description: '高质量渲染输出' },
      { name: 'Enscape', level: 87, description: '快速渲染插件' },
      { name: 'Vantage', level: 82, description: '实时渲染引擎' },
      { name: 'D5渲染', level: 85, description: '新一代渲染工具' },
      { name: 'Illustrator', level: 88, description: '矢量图形设计' }
    ]
  },
  designAbilities: {
    title: '设计能力',
    items: [
      '环境艺术设计基础理论',
      '室内空间设计',
      '景观规划设计',
      '商业空间设计',
      '居住区环境设计',
      '施工图绘制',
      '效果图制作',
      '方案文本排版与汇报',
      '设计细节把控',
      '落地可行性分析'
    ]
  },
  interactiveSkills: {
    title: '交互技能',
    items: [
      { name: 'Unity 基础', description: '实现简单场景可视化与互动展示' }
    ]
  },
  comprehensiveAbilities: {
    title: '综合素质',
    items: [
      { name: '新媒体运营', description: '公众号运营、文案撰写、内容编辑' },
      { name: '活动策划', description: '公益活动执行、现场协调、后勤保障' },
      { name: '团队协作', description: '跨部门合作、项目管理、沟通协调' },
      { name: '设计表达', description: '方案汇报、视觉呈现、客户沟通' }
    ]
  },
  experiences: [
    {
      company: '济南市中区经三路改造项目',
      role: '核心设计成员',
      period: '课程实践',
      achievements: [
        '参与实地调研、问卷分析、设计思路梳理全流程',
        '负责作品小册子及海报排版设计，提升信息传达效率',
        '参与街道建筑建模与效果图渲染，掌握改造设计逻辑'
      ]
    },
    {
      company: '山东艺术学院设计学院改造项目',
      role: '核心设计成员',
      period: '课程实践',
      achievements: [
        '实地调研并测量，完成学院空间改造方案',
        '负责空间建模及效果图渲染和后期海报排版设计',
        '负责方案汇报材料排版与视觉优化'
      ]
    },
    {
      company: '学生处/正青春志愿服务团队',
      role: '网宣部成员',
      period: '校内实践',
      achievements: [
        '负责公众号文案撰写、编辑与排版，累计发布推送30余篇',
        '运用PS/AI设计活动海报与推文配图',
        '参与小学支教、公益义卖等活动，负责宣传和执行工作'
      ]
    }
  ]
};