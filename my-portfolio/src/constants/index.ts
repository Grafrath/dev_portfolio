// 1. 타입 정의
export interface Project {
    id: string;
    title: string;
    period: string;
    description: string;
    learnings?: string;
    techStack?: string[];
    githubUrl?: string;
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
    name: "임정도경",
    role: "Front-End Developer",
    summary: "끊임없는 배움으로 정답을 찾아가는 개발자",
    description: [
        { category: "학력", content: "인천정보산업고 전산과 졸업", period: "2012.03 - 2015.02" },
        { category: "경력", content: "코리아IT학원 JAVA&Python 빅데이터 분석 AI플랫폼 개발 수료", period: "2025.10 - 2026.04" },
        { category: "경력", content: "쿠팡 본사 민원팀 Lv.3", period: "2021.06 - 2025.04" },
        { category: "주소", content: "인천광역시 미추홀구 문학동" }
    ] as ProfileDetail[],
    selfIntroduction: [
        {
            title: "지원 동기 및 지향점",
            content: [
                "프론트엔드와 백엔드의 유기적인 연결을 설계하여 시스템 전체의 효율을 극대화하는 풀스택 개발자를 지향합니다. 단순히 기능 구현에 그치지 않고, 최적의 구조로 자원 낭비를 줄이며 사용자에게 끊김 없는 경험을 제공하는 것에 가장 큰 가치를 둡니다.",
                "테트리스 프로젝트 진행 시, 회전과 충돌 판정 로직의 결합도를 낮추고 의존성을 분리하는 구조 재설계를 통해 렌더링 효율을 크게 높인 경험이 있습니다. 이처럼 서비스 전체를 아우르는 시야를 바탕으로, 비즈니스 확장이 용이한 단단한 아키텍처를 구축해 나가겠습니다."
            ]
        },
        {
            title: "직무 강점 및 문제 해결 경험",
            content: [
                "저의 가장 큰 무기는 나무보다 숲을 먼저 보고, 발생 가능한 예외 상황을 '구조적 관점'에서 해결하는 설계 역량입니다. 복잡한 요구사항 속에서도 모듈 간의 결합도를 낮춰 유연하고 안정적인 시스템을 만드는 것을 즐깁니다.",
                "일례로 테트리스 게임을 이식할 때, 블록이 벽면에서 회전하지 않는 버그를 단순 조건문이 아닌 '로직 분리와 위치 자동 보정'이라는 구조적 개선으로 해결했습니다. 이를 통해 유지보수 효율을 높였듯, 앞으로도 예측 가능하고 확장성 있는 코드를 작성하겠습니다."
            ]
        },
        {
            title: "성격의 장단점",
            content: [
                "발생 가능한 변수를 사전에 대비하는 '신중함'은 저의 강력한 원동력입니다. 막연한 걱정으로 작업 속도가 지연될 때는, 그 우려를 '구체적인 체크리스트와 기준'으로 변환하여 체계적인 실행력으로 발전시키고 있습니다.",
                "과거 관악단 단장을 맡았을 때도 파트별 불협화음을 미리 예상하고, 각 악기의 특성을 분석해 단계별 점검 기준을 세워 성공적인 합주를 이끌어낸 경험이 있습니다. 개발 과정에서도 이러한 성향을 발휘해 엣지 케이스를 꼼꼼히 대비하고 서비스의 퀄리티를 보장하겠습니다."
            ]
        },
        {
            title: "앞으로의 목표",
            content: [
                "코드를 넘어 서비스의 완성도를 높이고, 비즈니스 가치를 함께 창출하는 핵심 개발자로 성장하는 것이 목표입니다. 항상 열린 태도로 동료들과 소통하며, 팀의 생산성과 협업 효율을 높이는 개발 문화에 기여하고 싶습니다.",
                "초기에는 시스템 아키텍처와 코드를 빠르게 흡수하여 작은 기능부터 신뢰를 쌓고, 점진적으로 성능 최적화와 신규 서비스 기획에 주도적으로 참여하겠습니다. 기술적 깊이와 넓은 시야를 동시에 갖춰, 어떤 환경에서도 확실한 임팩트를 내는 인재가 되겠습니다."
            ]
        }
    ] as IntroItem[],
    image: "/profil.png",
};
export const PROJECTS: Project[] = [
    {
        id: "portfolio-website",
        title: "개인 포트폴리오 웹사이트 자체 구축",
        period: "2025.10 - 2026.04",
        description: "React와 Next.js를 기반으로 개인 포트폴리오 웹사이트를 자체 구축함. 외부 로그인 기능을 성공적으로 연동하여 사용자 인증 프로세스를 구현함.",
        learnings: "기획 단계부터 프론트엔드 UI 개발, 백엔드 연동, 최종 배포까지 웹 서비스 개발의 전체 사이클을 1인 프로젝트로 완수함. 이를 통해 웹 사이트가 처음부터 끝까지 만들어지는 구조와 흐름에 대한 실무적인 이해도를 크게 향상시킴.",
        techStack: ['React', 'Next.js', 'Tailwind', 'CSS', 'TypeScript'],
        githubUrl: "https://github.com/Grafrath/dev_portfolio"
    },
    {
        id: "portfolio-backend",
        title: "포트폴리오 백엔드 인증 및 메일링 API 서버",
        period: "2026.02 - 2026.04",
        description: "포트폴리오 웹사이트와 연동되는 백엔드 API 서버를 독립적으로 구축함. 자체적인 로그인 인증 로직과 Google SMTP를 활용한 문의 메일 전송 기능을 구현하고, Cloudtype에 배포하여 서비스 환경을 완성함.",
        learnings: "Spring Security와 JJWT를 활용해 토큰 기반의 로그인 인증 아키텍처를 직접 설계함. JPA를 기반으로 H2 및 PostgreSQL을 연동해 데이터를 관리했으며, 민감한 환경변수(앱 비밀번호 등)를 YAML로 안전하게 분리 관리하는 백엔드 인프라 운영 역량을 키움. (소셜 로그인 등 확장성 고려)",
        techStack: ['Java 21', 'Spring Boot 3', 'Spring Security', 'JJWT', 'Spring Data JPA', 'H2', 'Google SMTP', 'Cloudtype'],
        githubUrl: "https://github.com/Grafrath/B_portfolio"
    },
    {
        id: "python-tetris-game",
        title: "파이썬 기반 테트리스(Tetris) 미니게임 개발",
        period: "2025.12.20 - 2025.12.31",
        description: "Pygame을 활용하여 클래식 테트리스 게임을 완벽하게 재현함. 7-Bag 블록 생성 알고리즘, 하드/소프트 드롭, 그리고 고난이도 기술인 T-Spin 로직 등 실제 게임과 동일한 조작감과 규칙을 세밀하게 구현함.",
        learnings: "파이썬 무한 루프(Game Loop) 환경에서 프레임 단위의 이벤트 처리와 화면 렌더링을 다루는 방법을 익힘. 특히 테트로미노의 회전 상태와 맵 격자(Grid) 간의 충돌 판정, T-Spin 성립 조건을 판별하는 복잡한 알고리즘을 직접 설계하며 프로그래밍적 논리력과 문제 해결 능력을 크게 향상시킴.",
        techStack: ['Python', 'Pygame'],
        githubUrl: "https://github.com/Grafrath/mini-game"
    },
    {
        id: "ai-diet-app",
        title: "AI 기반 맞춤형 식단 관리 어플리케이션 (팀 프로젝트)",
        period: "2026.01 - 2026.02",
        description: "Streamlit과 Python을 활용하여 사용자 맞춤형 식단 추천 및 소셜 로그인 기능을 제공하는 웹 어플리케이션을 구축함. 공공데이터 API와 Gemini API를 연동하여 정확한 영양 정보와 대화형 AI 챗봇 기능을 구현함.",
        learnings: "[데이터 정제 및 AI 연동 담당] Pandas를 활용해 방대한 공공데이터 속 중복된 음식 데이터를 통합하고 영양소 수치를 대표값으로 전처리하여 데이터의 품질을 높임. Gemini API를 서비스에 직접 통합하며 데이터 파이프라인 구축부터 AI 모델 서빙까지의 과정을 심도 있게 경험함.",
        techStack: ['Python', 'Streamlit', 'Pandas', 'Gemini API', 'Public Data API'],
        githubUrl: "https://github.com/Grafrath/teampj"
    },
    {
        id: "ecommerce-platform",
        title: "DDD 기반 이커머스 플랫폼 개발 (팀 프로젝트)",
        period: "2026.02 - 2026.03",
        description: "Next.js와 Spring Boot를 활용하여 도메인 주도 설계(DDD)가 적용된 이커머스 플랫폼을 구축함. 프로젝트의 전체 기획 및 구조 설계를 주도하였으며, 프론트엔드 영역 전체와 백엔드 코어 및 공통 모듈 구현을 전담함.",
        learnings: "[기획, 프론트엔드 전체, 백엔드 코어 담당] 향후 MSA(마이크로서비스 아키텍처)로의 확장을 고려해 각 도메인 간 결합도를 낮추는 약한 의존성 구조를 설계함. Git 브랜치 전략을 활용해 모듈을 분리하고, 도메인 간 이벤트 처리 및 트랜잭션 분리를 깊이 있게 고민하며 시스템 아키텍처 설계 역량을 크게 향상시킴.",
        techStack: ['Next.js', 'Spring Boot', "Spring Security", "Redis", 'DDD', 'MSA Architecture'],
        githubUrl: "https://github.com/Grafrath/Ecommerce_Project"
    },
    {
        id: "coming-soon",
        title: "준비 중",
        period: "예정",
        description: "새로운 프로젝트를 곧 추가할 예정입니다.",
        learnings: "",
        techStack: [],
        githubUrl: ""
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