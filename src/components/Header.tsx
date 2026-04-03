"use client";
import React, { useMemo } from 'react';
import { PROFILE } from '@/constants'; // 경로에 맞게 수정 필요
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiPython
} from 'react-icons/si';
import { AnimatedSection } from './AnimatedSection';

export const Header: React.FC = () => {
  const techStack = useMemo(() => [
    { name: 'HTML5', icon: SiHtml5, color: 'from-orange-400 to-orange-600' },
    { name: 'CSS3', icon: SiCss, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', icon: SiJavascript, color: 'from-yellow-300 to-yellow-500' },
    { name: 'React', icon: SiReact, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'from-gray-700 to-black' },
    { name: 'Python', icon: SiPython, color: 'from-blue-300 to-blue-500' },
  ], []);

  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-blue-100/50 text-blue-600 font-semibold text-sm tracking-wider border border-blue-200 backdrop-blur-sm dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800">
              {PROFILE.role}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={400}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
              안녕하세요, <br className="md:hidden" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                {PROFILE.name}
              </span> 입니다.
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={600}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-medium">
              {PROFILE.summary}
            </p>
          </AnimatedSection>

          {/* 기술 스택 슬라이더 */}
          <AnimatedSection animation="fadeIn" delay={1000} className="mt-20">
            <p className="text-sm font-semibold text-gray-400 dark:text-gray-500 mb-6 tracking-widest uppercase">
              Tech Stack
            </p>
            <div className="flex flex-wrap justify-center gap-6 opacity-80">
              {techStack.map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className={`p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                    <tech.icon className={`w-8 h-8 text-gray-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${tech.color} transition-all duration-300`} />
                  </div>
                  <span className="text-xs font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </header>
  );
};