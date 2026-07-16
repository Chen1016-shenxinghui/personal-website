import React from 'react';
import FadeIn from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const Skills: React.FC = () => {
  const services: ServiceItem[] = [
    {
      number: '01',
      name: '空间设计',
      description: '覆盖室内空间设计、景观规划设计、商业空间设计与居住区环境设计全流程，注重设计细节与落地可行性。',
    },
    {
      number: '02',
      name: '建模与渲染',
      description: '精通 AutoCAD、SketchUp、3DMAX、Lumion、V-Ray、Enscape、Vantage、D5 渲染等工具，熟练完成建模与写实渲染。',
    },
    {
      number: '03',
      name: '施工图绘制',
      description: '系统掌握 CAD 制图、平立面制图、建筑制图与透视，可独立完成规范的施工图绘制与方案文本排版。',
    },
    {
      number: '04',
      name: '效果图后期',
      description: '运用 Photoshop、Illustrator 完成效果图后期处理、方案海报排版与视觉呈现，提升信息传达效率。',
    },
    {
      number: '05',
      name: '交互与运营',
      description: '掌握 Unity 基础交互场景可视化，具备新媒体运营、活动策划与方案汇报经验，沟通协作能力强。',
    },
  ];

  return (
    <section
      id="skills"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((service, index) => (
          <FadeIn key={service.number} delay={index * 0.1} y={30}>
            <div
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: index < services.length - 1 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none',
              }}
            >
              {/* Number */}
              <span
                className="text-[#0C0C0C] font-black leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>

              {/* Name + Description */}
              <div className="flex flex-col gap-2">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Skills;