import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge" // npx shadcn@latest add badge 로 설치 가능

const projects = [
  {
    title: "SPA Portfolio",
    description: "기존 HTML 프로젝트를 리액트와 Next.js로 전환한 프로젝트입니다.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "https://github.com"
  },
  {
    title: "Shadcn UI Library",
    description: "현대적이고 접근성이 뛰어난 UI 컴포넌트를 적용해 보았습니다.",
    tags: ["Shadcn/UI", "TypeScript"],
    link: "https://ui.shadcn.com"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-12 py-10">
      {/* 히어로 섹션 */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">나의 포트폴리오</h1>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          HTML에서 리액트로 진화한 저의 작업물들을 소개합니다.
        </p>
      </section>

      {/* 포트폴리오 그리드 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col justify-between transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href={project.link} target="_blank" rel="noreferrer">
                  프로젝트 보기
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  )
}