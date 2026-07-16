import React from 'react';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import { Mail, Phone, MapPin } from 'lucide-react';
import { profileData } from '../data/profile';

const Contact: React.FC = () => {
  const contactItems = [
    {
      icon: Mail,
      label: '邮箱',
      value: profileData.email,
      href: `mailto:${profileData.email}`,
    },
    {
      icon: Phone,
      label: '电话',
      value: profileData.phone,
      href: `tel:${profileData.phone}`,
    },
    {
      icon: MapPin,
      label: '地址',
      value: profileData.education.location,
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B600A8]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7621B0]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BE4C00]/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16 max-w-4xl">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Contact
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={30}>
          <p
            className="text-[#D7E2EA] font-light leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          >
            如果您对我的作品感兴趣，或有任何合作意向，欢迎随时联系我。让我们一起创造令人难忘的空间。
          </p>
        </FadeIn>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4">
          {contactItems.map((item, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1} y={30}>
              <a
                href={item.href}
                className="block border border-[#D7E2EA]/10 rounded-2xl p-8 bg-[#0C0C0C]/50 hover:border-[#D7E2EA]/30 transition-colors text-center group"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-[#D7E2EA]/5 flex items-center justify-center mb-4 group-hover:bg-[#D7E2EA]/10 transition-colors">
                  <item.icon className="text-[#D7E2EA]" size={24} />
                </div>
                <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-[#D7E2EA] font-medium break-all">{item.value}</p>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Job intention tags */}
        <FadeIn delay={0.5} y={30}>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {profileData.jobIntention.map((job) => (
              <span
                key={job}
                className="px-5 py-2 bg-[#D7E2EA]/5 text-[#D7E2EA]/80 border border-[#D7E2EA]/10 rounded-full text-sm uppercase tracking-wider"
              >
                {job}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* CTA Button */}
        <FadeIn delay={0.6} y={20}>
          <ContactButton label="Send Email" href={`mailto:${profileData.email}`} />
        </FadeIn>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-6 px-6 text-center">
        <p className="text-[#D7E2EA]/30 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} {profileData.name} · Environmental Design
        </p>
      </div>
    </section>
  );
};

export default Contact;