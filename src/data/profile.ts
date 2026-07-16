export interface EducationInfo {
  school: string;
  major: string;
  degree: string;
  period: string;
  location: string;
}

export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  gender: string;
  phone: string;
  email: string;
  birthYear: string;
  education: EducationInfo;
  jobIntention: string[];
  salary: string;
  stats: {
    projects: number;
    renderings: number;
    experience: string;
  };
}

export const profileData: ProfileData = {
  name: '陈萌',
  title: '环境设计师',
  subtitle: '用设计塑造环境，用艺术点亮空间',
  gender: '女',
  phone: '15665890650',
  email: '3127591668@qq.com',
  birthYear: '2005.12',
  education: {
    school: '山东艺术学院',
    major: '环境艺术设计',
    degree: '本科',
    period: '2023.09 - 2027.07',
    location: '济南市长清区崮云湖街道紫薇路6000号山东艺术学院'
  },
  jobIntention: [
    '环境艺术设计师',
    '助理景观设计师',
    '室内设计师',
    '建模师'
  ],
  salary: '2.5k-6.5k',
  stats: {
    projects: 10,
    renderings: 50,
    experience: '2年'
  }
};