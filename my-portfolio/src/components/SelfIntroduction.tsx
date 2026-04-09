"use client";
import React, { useState } from 'react'; // 1. useState 추가
import { PROFILE } from '@/constants';
import { AnimatedSection } from './AnimatedSection';

export const SelfIntroduction: React.FC = () => {
    // 2. 더 보기 상태 관리
    const [isExpanded, setIsExpanded] = useState(false);

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
                    {PROFILE.selfIntroduction.map((item, index) => {
                        // 3. 상태에 따라 보여줄 문단 데이터 결정 (첫 문단만 vs 전체)
                        const visibleContent = isExpanded ? item.content : item.content.slice(0, 1);

                        return (
                            <AnimatedSection
                                key={index}
                                animation="fadeInUp"
                                delay={200 + index * 100}
                                className="space-y-4"
                            >
                                {/* ✦ 목차명 형태로 제목 옆에 아이콘 한 번만 표시 */}
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                                    <span className="mr-3 text-blue-500 text-sm">✦</span>
                                    {item.title}
                                </h4>

                                {/* 아래줄에서 시작 / visibleContent 배열 매핑 */}
                                <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-left">
                                    {visibleContent.map((paragraph, pIndex) => (
                                        <p key={pIndex} className="break-keep">
                                            {paragraph}
                                            {/* 접혀있고, 문단이 더 남아있을 때 첫 문단 끝에 줄임표(...) 표시 */}
                                            {!isExpanded && item.content.length > 1 && pIndex === 0 && (
                                                <span className="text-gray-400 ml-1">...</span>
                                            )}
                                        </p>
                                    ))}
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>

                {/* 4. 더 보기 / 접기 버튼 영역 */}
                <AnimatedSection className="mt-16 text-center" animation="fadeInUp" delay={400}>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    >
                        <span>{isExpanded ? '간략히 보기' : '더 보기'}</span>
                        <svg
                            className={`ml-2 w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </AnimatedSection>

            </div>
        </section>
    );
};