import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projectsData } from '../data/projects';

interface ProjectCardProps {
  project: typeof projectsData[0];
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scale down as you scroll past
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const hasImages = project.images && project.images.length > 0;

  return (
    <div ref={containerRef} className="h-[85vh] sticky top-24 md:top-32" style={{ top: `${index * 28 + 96}px` }}>
      <motion.div
        style={{ scale }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 h-full flex flex-col"
      >
        {/* Top row: number, category, name, button */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <span
                className="hero-heading font-black leading-none"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
              >
                {String(project.id).padStart(2, '0')}
              </span>
              <span className="text-[#D7E2EA]/40 text-sm uppercase tracking-widest border border-[#D7E2EA]/30 rounded-full px-4 py-1">
                {project.category}
              </span>
            </div>
            <h3
              className="text-[#D7E2EA] font-medium uppercase"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.5rem)' }}
            >
              {project.title}
            </h3>
            <p className="text-[#D7E2EA]/40 text-sm">{project.role}</p>
          </div>

          {/* View Details Button */}
          <a
            href="#"
            className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors flex-shrink-0 self-start"
          >
            View Details
          </a>
        </div>

        {/* Image grid */}
        <div className="flex gap-3 flex-1 min-h-0">
          {hasImages ? (
            <>
              {/* Left column - 40% - 2 stacked images */}
              <div className="flex flex-col gap-3 w-2/5">
                <div
                  className="rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden bg-[#1a1a1a]"
                  style={{ height: 'clamp(130px, 16vw, 230px)' }}
                >
                  <img
                    src={project.images[0]}
                    alt={`${project.title} 效果图 1`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden bg-[#1a1a1a] flex-1"
                  style={{ height: 'clamp(160px, 22vw, 340px)' }}
                >
                  <img
                    src={project.images[1]}
                    alt={`${project.title} 效果图 2`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right column - 60% - 1 tall image */}
              <div className="w-3/5 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden bg-[#1a1a1a]">
                <img
                  src={project.images[2]}
                  alt={`${project.title} 主效果图`}
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          ) : (
            <>
              {/* Placeholder layout for projects without images */}
              <div className="flex flex-col gap-3 w-2/5">
                <div
                  className="rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#222] flex items-center justify-center"
                  style={{ height: 'clamp(130px, 16vw, 230px)' }}
                >
                  <div className="text-[#D7E2EA]/20 text-sm uppercase tracking-wider">效果图 1</div>
                </div>
                <div
                  className="rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden bg-gradient-to-br from-[#222] to-[#1a1a1a] flex items-center justify-center flex-1"
                  style={{ height: 'clamp(160px, 22vw, 340px)' }}
                >
                  <div className="text-[#D7E2EA]/20 text-sm uppercase tracking-wider">效果图 2</div>
                </div>
              </div>
              <div className="w-3/5 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C] flex items-center justify-center">
                <div className="text-[#D7E2EA]/20 text-sm uppercase tracking-wider">主效果图</div>
              </div>
            </>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#D7E2EA]/5 text-[#D7E2EA]/60 text-xs rounded-md border border-[#D7E2EA]/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-20 sm:pt-24 md:pt-32 pb-20 px-5 sm:px-8 md:px-10"
    >
      {/* Heading */}
      <div className="text-center mb-16 sm:mb-20 md:mb-28">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '50px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </motion.h2>
      </div>

      {/* Sticky stacking cards */}
      <div className="max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={projectsData.length}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;