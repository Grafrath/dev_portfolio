// 1. 타입 정의
export interface Project {
    id: string;
    title: string;
    period: string;
    description: string;
    techStack?: string[];
    link?: string;
}

export interface ContactItem {
    title: string;
    content: string;
    link: string;
    type: 'email' | 'link';
}

// 새롭게 추가된 이력사항 타입
export interface ProfileDetail {
    category: string;
    content: string;
    period?: string; // 기간은 없는 항목(주소 등)이 있을 수 있으므로 선택적(?)으로 처리
}

// 목차별 자기소개 타입 정의
export interface IntroItem {
    title: string;
    content: string[];
}

// 2. 실제 데이터
export const PROFILE = {
    name: "김이박 라트다",
    role: "Front-End Developer",
    summary: "끊임없는 배움으로 정답을 찾아가는 개발자",
    description: [
        { category: "학력", content: "ㅇㅇ대학교 컴퓨터공학과 졸업", period: "2015.03 - 2021.02" },
        { category: "경력", content: "ㅇㅇ컴퍼니 프론트엔드 개발팀", period: "2021.03 - 2024.12" },
        { category: "주소", content: "인천광역시 미추홀구 문학동" }
    ] as ProfileDetail[],
    selfIntroduction: [
        {
            title: "성장과정",
            content: [
                "어린 시절부터 새로운 기술을 접하고 원리를 파악하는 것에 즐거움을 느꼈습니다. 이러한 호기심은 자연스럽게 컴퓨터 프로그래밍으로 이어졌고, 대학 시절 다양한 프로젝트를 통해 논리적인 문제 해결 능력을 키웠습니다.",
                "특히 협업 프로젝트에서 프론트엔드 개발을 맡으며 사용자에게 직접적인 가치를 전달하는 화면 구현의 매력에 깊이 빠지게 되었습니다."
            ]
        },
        {
            title: "성격의 장단점",
            content: [
                "저는 리스크를 대비하는 신중함이 강점입니다.다만, 발생 가능한 변수를 과도하게 걱정해 같은 부분을 반복 확인하며 작업 속도가 늦어지는 단점도 있었습니다.",
                "이를 개선하기 위해 ‘막연한 걱정을 구체적인 기준으로 바꾸는 것’에 집중했습니다.고등학생 시절, 학교 관악단 창설 1기로 활동하며 단장을 맡았을 때도 비슷한 고민을 했습니다.대부분이 비전공자였기에 합주 과정에서 박자 어긋남이나 파트 간 조율 실패가 발생할 것을 우려했습니다.",
                "단순히 걱정하는 대신, 각 악기의 기초 연주 방식과 역할을 직접 학습하고 연습 단계별 체크 기준을 만들었습니다.합주 전 파트별 리듬 점검 시간을 운영하고, 문제 발생 가능 구간을 사전에 반복 연습하도록 구조를 정비했습니다.",
                "그 결과 연습 초기보다 합주 완성도가 빠르게 안정되었고, 신중함을 비효율이 아닌 체계적인 준비성으로 발전시킬 수 있었습니다."
            ]
        },
        {
            title: "직무관련 경험 및 역량",
            content: [
                "사용자의 일상을 편리하게 바꾸는 서비스를 만들고 싶다는 열망으로 지원하게 되었습니다. 귀사의 혁신적인 기술력과 사용자를 최우선으로 생각하는 가치관이 저의 지향점과 일치한다고 확신합니다."
            ]
        },
        {
            title: "입사 후 이루고 싶은 목표",
            content: [
                "입사 후에는 빠르게 실무 환경에 적응하여 팀의 생산성을 높이는 일원이 되겠습니다. 기술적인 성장은 물론, 비즈니스 목표를 이해하고 동료들과 활발히 소통하며 함께 성장하는 개발자가 되겠습니다."
            ]
        }
    ] as IntroItem[],
    image: "/profil.png",
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