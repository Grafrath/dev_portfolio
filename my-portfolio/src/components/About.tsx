"use client";
import React from 'react';
import Image from 'next/image';
import { PROFILE } from '@/constants';
import { AnimatedSection } from './AnimatedSection';

export const About: React.FC = () => {
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
              {/* 제목 수정 */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-4 dark:border-gray-700">
                이력 사항
              </h3>
              <div className="space-y-4">
                {/* 객체 배열에 맞게 렌더링 로직 수정 */}
                {PROFILE.description.map((item, index) => (
                  <div key={index} className="flex items-start text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    <span className="mr-3 mt-1.5 text-blue-500 text-sm shrink-0">✦</span>

                    {/* justify-between으로 양끝 정렬 */}
                    <div className="flex-1 flex justify-between items-start gap-4">
                      <div>
                        <span className="font-bold text-gray-800 dark:text-gray-200 mr-3 inline-block min-w-[3rem]">
                          {item.category}
                        </span>
                        <span>{item.content}</span>
                      </div>

                      {/* 기간(period)이 있는 경우에만 렌더링되며 우측 끝에 배치됨 */}
                      {item.period && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 shrink-0 mt-1 text-right">
                          {item.period}
                        </span>
                      )}
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