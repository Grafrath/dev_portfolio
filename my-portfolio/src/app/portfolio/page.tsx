import { PROJECTS } from "@/constants";
import FadeIn from "@/components/fade-in";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PortfolioPage() {
    return (
        <section className="space-y-6">
            {/* 섹션 타이틀 - 기존의 보라색 선 스타일 적용 */}
            <FadeIn>
                <h2 className="section-title">포트폴리오</h2>
            </FadeIn>

            {/* 프로젝트 리스트 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, index) => (
                    <FadeIn key={project.id} delay={index * 0.1}>
                        <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 dark:bg-[#333333] dark:border-[#444444]">
                            <CardHeader className="pb-3">
                                <div className="flex justify-between items-start gap-2">
                                    <CardTitle className="text-xl font-bold leading-tight">
                                        {project.title}
                                    </CardTitle>
                                    <span className="text-xs text-slate-500 dark:text-neutral-400 whitespace-nowrap">
                                        {project.period}
                                    </span>
                                </div>
                            </CardHeader>

                            <CardContent className="flex-1 flex flex-col justify-between gap-4">
                                <CardDescription className="text-sm leading-relaxed text-slate-600 dark:text-neutral-300">
                                    {project.description}
                                </CardDescription>

                                {/* 기술 스택 배지 (기존 데이터에 techStack이 있을 경우) */}
                                {project.techStack && project.techStack.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mt-2">
                                        {project.techStack.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className="text-[10px] px-2 py-0 bg-slate-100 dark:bg-neutral-700"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}