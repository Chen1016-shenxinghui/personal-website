import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import { profileData } from '../data/profile';

const About: React.FC = () => {
  const aboutText = `我是${profileData.name}，一名环境艺术设计专业的学生。具备扎实的环境艺术设计基础，覆盖室内空间设计、景观规划设计、商业空间设计和居住区环境设计全流程。可独立完成施工图绘制、效果图制作、方案文本排版与汇报，注重设计细节与落地可行性。让我们一起创造令人难忘的空间吧！`;

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Decorative corner elements - using CSS shapes instead of images */}
      {/* Top-left decorative element */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
        <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] h-[120px] sm:h-[160px] md:h-[210px]">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#646973]/20 to-[#BBCCD7]/10 blur-2xl" />
          <div className="absolute inset-0 flex items-center justify-center text-[#BBCCD7]/30 text-6xl md:text-8xl font-black">✦</div>
        </div>
      </FadeIn>

      {/* Bottom-left decorative element */}
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
        <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] h-[100px] sm:h-[140px] md:h-[180px]">
          <div className="w-full h-full rounded-3xl bg-gradient-to-tr from-[#B600A8]/15 to-[#7621B0]/10 blur-2xl rotate-12" />
          <div className="absolute inset-0 flex items-center justify-center text-[#B600A8]/30 text-5xl md:text-7xl font-black">◆</div>
        </div>
      </FadeIn>

      {/* Top-right decorative element */}
      <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
        <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] h-[120px] sm:h-[160px] md:h-[210px]">
          <div className="w-full h-full rounded-full bg-gradient-to-bl from-[#BE4C00]/15 to-[#B600A8]/10 blur-2xl" />
          <div className="absolute inset-0 flex items-center justify-center text-[#BE4C00]/30 text-6xl md:text-8xl font-black">●</div>
        </div>
      </FadeIn>

      {/* Bottom-right decorative element */}
      <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
        <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] h-[130px] sm:h-[170px] md:h-[220px]">
          <div className="w-full h-full rounded-2xl bg-gradient-to-tl from-[#BBCCD7]/15 to-[#646973]/10 blur-2xl rotate-6" />
          <div className="absolute inset-0 flex items-center justify-center text-[#BBCCD7]/30 text-6xl md:text-8xl font-black">▲</div>
        </div>
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={aboutText}
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px]"
        />

        {/* Education & Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full mt-8">
          <FadeIn delay={0.1} y={30}>
            <div className="border border-[#D7E2EA]/10 rounded-2xl p-6 bg-[#0C0C0C]/50">
              <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest mb-2">教育背景</p>
              <p className="text-[#D7E2EA] font-medium">{profileData.education.school}</p>
              <p className="text-[#D7E2EA]/60 text-sm mt-1">{profileData.education.major}</p>
              <p className="text-[#D7E2EA]/40 text-sm">{profileData.education.period}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={30}>
            <div className="border border-[#D7E2EA]/10 rounded-2xl p-6 bg-[#0C0C0C]/50">
              <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest mb-2">求职意向</p>
              <p className="text-[#D7E2EA] font-medium">环境艺术设计师</p>
              <p className="text-[#D7E2EA]/60 text-sm mt-1">{profileData.jobIntention.slice(1).join(' / ')}</p>
              <p className="text-[#D7E2EA]/40 text-sm">期望薪资：{profileData.salary}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} y={30}>
            <div className="border border-[#D7E2EA]/10 rounded-2xl p-6 bg-[#0C0C0C]/50">
              <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest mb-2">联系方式</p>
              <p className="text-[#D7E2EA] font-medium break-all">{profileData.email}</p>
              <p className="text-[#D7E2EA]/60 text-sm mt-1">{profileData.phone}</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} y={20}>
          <ContactButton label="Get in touch" href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};

export default About;