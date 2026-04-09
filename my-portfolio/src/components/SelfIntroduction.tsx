"use client";
import React from 'react';
import { PROFILE } from '@/constants';
import { AnimatedSection } from './AnimatedSection';

export const SelfIntroduction: React.FC = () => {
    return (
        <section id="story" className="py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
            <div className="container mx-auto px-4">

                {/* 타이틀 영역 */}
                <AnimatedSection className="text-center mb-20">
                    <h2 className="section-header">My Story</h2>
                    <div className="section-divider"></div>
                </AnimatedSection>

                {/* 본문 영역: 목차별 간격을 넓게 설정(space-y-12) */}
                <div className="max-w-3xl mx-auto space-y-12">
                    {PROFILE.selfIntroduction.map((item, index) => (
                        <AnimatedSection
                            key={index}
                            animation="fadeInUp"
                            delay={200 + index * 100}
                            className="space-y-4"
                        >
                            {/* 1. ✦ 목차명 형태로 제목 옆에 아이콘 한 번만 표시 */}
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                                <span className="mr-3 text-blue-500 text-sm">✦</span>
                                {item.title}
                            </h4>

                            {/* 2. 아래줄에서 시작 / 3. content 배열 매핑 */}
                            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-left">
                                {item.content.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="break-keep">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

            </div>
        </section>
    );
};