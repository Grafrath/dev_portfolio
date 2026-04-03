// 1. 타입 정의
export interface Project {
    id: string;
    title: string;
    period: string;
    description: string;
    techStack?: string[]; // 기존 데이터엔 없지만 확장을 위해 추가
    link?: string;
}

export interface ContactItem {
    title: string;
    content: string;
    link: string;
    type: 'email' | 'link';
}

// 2. 실제 데이터
export const PROFILE = {
    name: "김이박 라트다",
    role: "Front-End Developer",
    summary: "사용자 경험을 디자인하는 개발자",
    description: [
        "아이디어를 화면 위에 구현하는 과정에 큰 흥미를 느낍니다.",
        "시맨틱 HTML과 구조적인 CSS 작성을 기반으로 깔끔하고 일관성 있는 UI를 만드는 데 집중하고 있습니다.",
        "최근에는 JavaScript 기반의 동적 웹 페이지, SPA 방식의 라우팅, CSS 애니메이션, 다크 모드 UI 구현 등 프론트엔드 인터랙션 분야를 꾸준히 학습하고 있습니다.",
        "현재는 데이터베이스(DBMS) 기초와 Python도 함께 공부하며 더 넓은 영역에서 웹 서비스 제작 능력을 확장하고 있습니다."
    ],
    image: "/profil.png", // public 폴더에 위치시켜야 합니다.
};

export const PROJECTS: Project[] = [
    {
        id: "portfolio-website",
        title: "포트폴리오 웹사이트",
        period: "2025.10 - 진행중",
        description: "HTML/CSS/JS로 SPA 포트폴리오를 만들었습니다. 동적 로딩과 다크모드를 지원합니다.",
        techStack: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: "ui-component-practice",
        title: "UI 컴포넌트 연습",
        period: "2025.11 - 진행중",
        description: "버튼, 카드, 스위치 등 UI 컴포넌트를 구현하고 스타일링했습니다.",
        techStack: ["React", "Next.js"]
    },
    {
        id: "coming-soon",
        title: "준비 중",
        period: "예정",
        description: "새로운 프로젝트를 곧 추가할 예정입니다.",
    }
];

export const CONTACTS: ContactItem[] = [
    {
        title: "이메일",
        content: "iingtto951@gmail.com",
        link: "mailto:iingtto951@gmail.com",
        type: "email"
    },
    {
        title: "GitHub",
        content: "github.com/Grafrath",
        link: "https://github.com/Grafrath",
        type: "link"
    },
    {
        title: "포트폴리오 데모",
        content: "시연 영상 보러가기",
        link: "https://grafrath.github.io/dev_portfolio/#",
        type: "link"
    }
];

// 내비게이션 메뉴 정보
export const NAV_ITEMS = [
    { label: "홈", href: "/" },
    { label: "포트폴리오", href: "/portfolio" },
    { label: "연락처", href: "/contact" },
];