"use client";
import React, { useMemo } from 'react';
import Image from 'next/image';
import { PROFILE } from '@/constants';
import { AnimatedSection } from './AnimatedSection';

export const About: React.FC = () => {
  // 1. 데이터를 카테고리별로 묶어주는 로직 (배열 등장 순서 유지)
  const groupedDescription = useMemo(() => {
    return PROFILE.description.reduce((acc, curr) => {
      const existingGroup = acc.find(group => group.category === curr.category);
      if (existingGroup) {
        existingGroup.items.push({ content: curr.content, period: curr.period });
      } else {
        acc.push({
          category: curr.category,
          items: [{ content: curr.content, period: curr.period }]
        });
      }
      return acc;
    }, [] as { category: string; items: { content: string; period?: string }[] }[]);
  }, []);

  return (
    <section id="about" className="py-32 bg-white dark:bg-[#161b22] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-20">
          <h2 className="section-header">About Me</h2>
          <div className="section-divider"></div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 왼쪽: 프로필 이미지 (수정 없음) */}
          <AnimatedSection animation="fadeInLeft" className="relative group">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={PROFILE.image}
                alt="Profile Image"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl -z-10 rounded-full group-hover:opacity-30 transition-opacity duration-500"></div>
          </AnimatedSection>

          {/* 오른쪽: 이력 텍스트 */}
          <AnimatedSection animation="fadeInRight" delay={200} className="space-y-6">
            <div className="card bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border-none shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-4 dark:border-gray-700">
                이력 사항
              </h3>

              {/* 2. 카테고리별 그룹화된 데이터 렌더링 */}
              <div className="space-y-8">
                {groupedDescription.map((group, index) => (
                  <div key={index} className="space-y-3">

                    {/* 카테고리 제목 (아이콘 포함) */}
                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center">
                      <span className="mr-2 text-blue-500 text-sm shrink-0">✦</span>
                      {group.category}
                    </h4>

                    {/* 세부 항목 리스트 (내용 - 기간 양끝 정렬) */}
                    <div className="space-y-3 pl-5">
                      {group.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-start gap-4 w-full">
                          <span className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {item.content}
                          </span>

                          {item.period && (
                            <span className="text-sm text-gray-500 dark:text-gray-400 shrink-0 mt-1.5 text-right whitespace-nowrap">
                              {item.period}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};