"use client";
import React from 'react';
import { PROJECTS } from '@/constants';
import { AnimatedSection } from './AnimatedSection';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-gray-50 dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <h2 className="section-header">Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            지금까지 진행해 온 프로젝트와 학습 결과물입니다.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PROJECTS.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="fadeInUp"
              delay={index * 200}
            >
              <div className="card h-full flex flex-col group cursor-pointer border-t-4 border-t-blue-500 hover:border-t-purple-500">
                <div className="p-2 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                      {project.period}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* 기술 스택 뱃지 */}
                  {project.techStack && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block rounded-md bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {project.link && (
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:text-purple-600 transition-colors flex items-center gap-1">
                      보러가기 &rarr;
                    </a>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};