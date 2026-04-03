"use client";
import React, { useMemo } from 'react';
import { PROFILE } from '@/constants';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiCplusplus
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { AnimatedSection } from './AnimatedSection';

export const Header: React.FC = () => {
  // 기술 스택: 호버 시 나타날 고유 색상(text-...)을 추가했습니다.
  const techStack = useMemo(() => [
    { name: 'HTML5', icon: SiHtml5, hoverColor: 'group-hover:text-[#E34F26]' },
    { name: 'CSS3', icon: SiCss, hoverColor: 'group-hover:text-[#1572B6]' },
    { name: 'JavaScript', icon: SiJavascript, hoverColor: 'group-hover:text-[#F7DF1E]' },
    { name: 'React', icon: SiReact, hoverColor: 'group-hover:text-[#61DAFB]' },
    { name: 'Next.js', icon: SiNextdotjs, hoverColor: 'group-hover:text-black dark:group-hover:text-white' },
    { name: 'Python', icon: SiPython, hoverColor: 'group-hover:text-[#3776AB]' },
    { name: 'Java', icon: FaJava, hoverColor: 'group-hover:text-[#ED8B00]' },
    { name: 'C++', icon: SiCplusplus, hoverColor: 'group-hover:text-[#00599C]' },
  ], []);

  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* 상단 태그 */}
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-blue-100/50 text-blue-600 font-semibold text-sm tracking-wider border border-blue-200 backdrop-blur-sm dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800">
              {PROFILE.role}
            </div>
          </AnimatedSection>

          {/* 메인 타이틀 */}
          <AnimatedSection animation="fadeInUp" delay={400}>
            <h1 className="text-[1.85rem] xs:text-4xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight break-keep">
              <span className="inline">안녕하세요, </span>
              <span className="whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                {PROFILE.name}
              </span>
              <span className="inline">입니다.</span>
            </h1>
          </AnimatedSection>

          {/* 한 줄 소개 */}
          <AnimatedSection animation="fadeInUp" delay={600}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-medium">
              {PROFILE.summary}
            </p>
          </AnimatedSection>

          {/* 기술 스택: 줄바꿈 없이 크기만 줄어드는 구조 */}
          <AnimatedSection animation="fadeIn" delay={1000} className="mt-16 md:mt-24 w-full">
            <p className="text-sm font-semibold text-gray-400 dark:text-gray-500 mb-8 tracking-widest uppercase">
              Tech Stack
            </p>

            {/* flex-nowrap으로 한 줄 고정, gap도 vw 단위로 유연하게 조절 */}
            <div className="flex flex-nowrap justify-center items-center gap-[2vw] md:gap-8 opacity-90 w-full max-w-4xl mx-auto px-2">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center flex-1 min-w-0 group cursor-pointer"
                >
                  {/* 아이콘 박스: 화면 너비에 따라 크기(vw)가 변함 */}
                  <div className="relative flex items-center justify-center w-[10vw] h-[10vw] min-w-[40px] min-h-[40px] max-w-[80px] max-h-[80px] rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    {/* 호버 시 색상이 사라지지 않도록 단색 hoverColor 적용 */}
                    <tech.icon className={`w-[50%] h-[50%] text-gray-400 transition-colors duration-300 ${tech.hoverColor}`} />
                  </div>

                  {/* 기술명: 아주 작은 화면에서는 숨기거나 폰트 조절 */}
                  <span className="mt-2 text-[8px] md:text-xs font-bold text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase truncate w-full text-center">
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