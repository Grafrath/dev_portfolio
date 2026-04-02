import Image from "next/image";
import { PROFILE } from "@/constants";
import FadeIn from "@/components/fade-in";

export default function HomePage() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-8 py-6 border-b-2 border-slate-100 dark:border-neutral-800">
      {/* 프로필 이미지 섹션 (fade-smart 적용) */}
      <FadeIn>
        <div className="relative w-[140px] h-[140px]">
          <Image
            src={PROFILE.image}
            alt="프로필 이미지"
            fill
            className="rounded-full object-cover border-[3px] border-[#3498db] shadow-md"
            priority
          />
        </div>
      </FadeIn>

      {/* 프로필 정보 섹션 */}
      <div className="flex-1 space-y-4 text-center md:text-left">
        <FadeIn delay={0.2}>
          <h1 className="text-[2rem] font-bold flex flex-wrap items-baseline justify-center md:justify-start gap-2">
            {PROFILE.name}
            <span className="text-base font-normal text-slate-500 dark:text-neutral-400">
              / {PROFILE.role}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-[#3498db] font-semibold text-[1.05rem]">
            {PROFILE.summary}
          </p>
        </FadeIn>

        <div className="space-y-4 text-slate-600 dark:text-neutral-300 leading-relaxed text-[1rem]">
          {PROFILE.description.map((paragraph, index) => (
            <FadeIn key={index} delay={0.4 + index * 0.1}>
              <p>{paragraph}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}