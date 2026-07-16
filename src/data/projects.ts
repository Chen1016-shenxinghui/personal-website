export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  role: string;
  image: string;
  images: string[];
  technologies: string[];
  features: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: '济南市中区经三路改造项目',
    category: '景观规划',
    description: '参与城市街区改造设计，从调研到落地的全流程参与。负责建筑建模、效果图渲染及视觉设计工作。',
    role: '核心设计成员',
    image: '/assets/projects/jingsan-road/jingsan-1.jpg',
    images: [
      '/assets/projects/jingsan-road/jingsan-1.jpg',
      '/assets/projects/jingsan-road/jingsan-2.jpg',
      '/assets/projects/jingsan-road/jingsan-3.jpg',
      '/assets/projects/jingsan-road/jingsan-4.jpg',
      '/assets/projects/jingsan-road/jingsan-5.jpg',
    ],
    technologies: ['AutoCAD', 'SketchUp', '3DMAX', 'Lumion', 'Photoshop'],
    features: ['实地调研分析', '建筑建模渲染', '视觉设计', '方案汇报']
  },
  {
    id: 2,
    title: '山东艺术学院设计学院改造项目',
    category: '室内空间',
    description: '学院空间改造设计，优化功能布局与节点设计。负责空间建模、效果图渲染及汇报材料制作。',
    role: '核心设计成员',
    image: '/assets/projects/design-college/college-1.jpg',
    images: [
      '/assets/projects/design-college/college-1.jpg',
      '/assets/projects/design-college/college-2.jpg',
      '/assets/projects/design-college/college-3.jpg',
    ],
    technologies: ['AutoCAD', '3DMAX', 'V-Ray', 'Illustrator', 'Enscape'],
    features: ['空间测量调研', '功能布局优化', '效果渲染', '汇报材料']
  },
  {
    id: 3,
    title: '居住区环境设计项目',
    category: '环境设计',
    description: '现代化居住区环境规划设计，注重人与自然的和谐共生，创造舒适的生活空间。',
    role: '独立设计师',
    image: '/assets/projects/residential/residential-1.jpg',
    images: [
      '/assets/projects/residential/residential-1.jpg',
      '/assets/projects/residential/residential-2.jpg',
      '/assets/projects/residential/residential-3.jpg',
      '/assets/projects/residential/residential-4.jpg',
      '/assets/projects/residential/residential-5.jpg',
    ],
    technologies: ['AutoCAD', 'SketchUp', 'Lumion', 'D5渲染', 'Photoshop'],
    features: ['场地分析', '方案设计', '效果渲染', '文本排版']
  }
];

export const categories: string[] = ['全部', '景观规划', '室内空间', '环境设计'];