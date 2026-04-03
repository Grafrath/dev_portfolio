import React from 'react';

// 새로 넣은 템플릿 컴포넌트들 불러오기
import { ScrollProgress } from '@/components/ScrollProgress';
import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { ServicesSection } from '@/components/ServicesSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative w-full overflow-hidden bg-white dark:bg-gray-900">
      {/* 1. 상단 스크롤 진행바 */}
      <ScrollProgress />

      {/* 2. 메인 헤더 영역 (이름 및 기술 스택) */}
      <Header />

      {/* 3. 어바웃 영역 (상세 자기소개) */}
      <About />

      {/* 4. 프로젝트 전시 영역 */}
      <ServicesSection />

      {/* 5. 문의하기 폼 영역 */}
      <ContactForm />

      {/* 6. 푸터 영역 */}
      <Footer />
    </main>
  );
}