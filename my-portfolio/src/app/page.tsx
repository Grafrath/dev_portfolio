import { ScrollProgress } from '@/components/ScrollProgress';
import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { SelfIntroduction } from '@/components/SelfIntroduction';
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

      {/* 3. 어바웃 영역 (상세 이력) */}
      <About />

      {/* 4. My Story 영역 (자기소개) */}
      <SelfIntroduction />

      {/* 5. 프로젝트 전시 영역 */}
      <ServicesSection />

      {/* 6. 문의하기 폼 영역 */}
      <ContactForm />

      {/* 7. 푸터 영역 */}
      <Footer />
    </main>
  );
}