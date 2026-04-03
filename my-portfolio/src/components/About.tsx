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
          {/* 왼쪽: 프로필 이미지 */}
          <AnimatedSection animation="fadeInLeft" className="relative group">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl">
              {/* Image 컴포넌트로 최적화 */}
              <Image
                src={PROFILE.image}
                alt="Profile Image"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
            </div>
            {/* 장식용 배경 블러 */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl -z-10 rounded-full group-hover:opacity-30 transition-opacity duration-500"></div>
          </AnimatedSection>

          {/* 오른쪽: 소개 텍스트 */}
          <AnimatedSection animation="fadeInRight" delay={200} className="space-y-6">
            <div className="card bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border-none shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-4 dark:border-gray-700">
                개발자로서의 여정
              </h3>
              <div className="space-y-4">
                {PROFILE.description.map((text, index) => (
                  <p key={index} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed flex items-start">
                    <span className="mr-3 mt-1.5 text-blue-500 text-sm">✦</span>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};