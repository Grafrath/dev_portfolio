"use client";
import React, { useState } from 'react';
import { PROJECTS } from '@/constants';
import { AnimatedSection } from './AnimatedSection';
import { FaLock, FaUnlock, FaPlus, FaTimes, FaUserPlus, FaGithub } from 'react-icons/fa';

export const ServicesSection: React.FC = () => {
  const [projectList, setProjectList] = useState(PROJECTS);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isJoinMode, setIsJoinMode] = useState(false);

  const [authData, setAuthData] = useState({
    email: 'admin@demo.com',
    password: '1234',
    nickname: ''
  });

  const handleLogin = async (e?: React.FormEvent) => {
    e?.preventDefault();
    try {
      const response = await fetch('https://port-0-b-portfolio-mmsil7aefe44530e.sel3.cloudtype.app/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: authData.email, password: authData.password }),
        credentials: 'include'
      });

      if (response.ok) {
        setIsLoggedIn(true);
        setShowLoginForm(false);
        alert('관리자 모드가 활성화되었습니다.');
      } else {
        alert('로그인 정보가 일치하지 않습니다.');
      }
    } catch (error) {
      alert('서버 연결에 실패했습니다.');
    }
  };

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isJoinMode) {
      setIsJoinMode(true);
      setAuthData({ email: '', password: '', nickname: '' });
      return;
    }
    try {
      const response = await fetch('https://port-0-b-portfolio-mmsil7aefe44530e.sel3.cloudtype.app/api/users/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authData)
      });
      if (response.ok) {
        alert('회원가입 성공! 이제 접속하기 버튼을 눌러 로그인해 주세요.');
        setIsJoinMode(false);
        setAuthData({ email: 'admin@demo.com', password: '1234', nickname: '' });
      } else {
        const errorData = await response.json();
        alert(errorData.message || '회원가입 실패');
      }
    } catch (error) {
      alert('서버 연결에 실패했습니다.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('로그아웃 되었습니다.');
  };

  const addProject = () => {
    const newProject = {
      id: String(Date.now()),
      title: "새로운 프로젝트",
      period: "2024.04 - 현재",
      description: "새롭게 추가된 프로젝트의 설명입니다.",
      learnings: "이곳에 기획 의도나 프로젝트를 통해 배운 점을 작성할 수 있습니다. 내용이 길어지면 카드 내부에 스크롤이 생성됩니다.",
      techStack: ["React", "Tailwind CSS"],
      githubUrl: "https://github.com/Grafrath"
    };
    setProjectList([...projectList, newProject]);
  };

  const deleteProject = (id: string) => {
    setProjectList(projectList.filter(p => p.id !== id));
  };

  return (
    <section id="services" className="py-32 bg-gray-50 dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <h2 className="section-header">Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">지금까지 진행해 온 프로젝트와 학습 결과물입니다.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {projectList.map((project, index) => (
            <AnimatedSection key={project.id} animation="fadeInUp" delay={index * 100}>
              {/* 1. 카드의 전체 높이를 고정 */}
              <div className="card h-[420px] flex flex-col pt-8 pb-6 pl-8 pr-4 group relative bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 ease-in-out rounded-2xl overflow-hidden">

                {/* 관리자 삭제 버튼 (카드 내부에서 스크롤과 무관하게 우측 상단 고정) */}
                {isLoggedIn && (
                  <button onClick={(e) => { e.stopPropagation(); deleteProject(project.id); }} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors z-20 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-sm">
                    <FaTimes size={16} />
                  </button>
                )}

                {/* 2. 내부 텍스트 영역: 내용이 420px을 넘어가면 세로 스크롤(overflow-y-auto) 생성 */}
                <div className="flex-1 flex flex-col overflow-y-auto pr-4 custom-scrollbar">

                  {/* 상단: 제목, 깃허브 링크, 기간 */}
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                        {project.title}
                      </h3>
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" title="GitHub Repository">
                          <FaGithub size={22} />
                        </a>
                      )}
                    </div>
                    <span className={`text-sm font-medium text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full whitespace-nowrap shrink-0 ${isLoggedIn ? 'mr-10' : ''}`}>
                      {project.period}
                    </span>
                  </div>

                  {/* 중단: 프로젝트 기본 설명 */}
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* 중단: 배운 점 / 기획 의도 */}
                  {project.learnings && (
                    <div className="mb-6 p-5 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30 text-gray-700 dark:text-gray-300 leading-relaxed">
                      <span className="block font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center text-sm">
                        <span className="mr-2">💡</span> 기획 의도 및 배운 점
                      </span>
                      {project.learnings}
                    </div>
                  )}

                  {/* 하단: 기술 스택 뱃지 (mt-auto로 인해 글이 짧으면 맨 아래에, 길면 내용 끝에 붙음) */}
                  <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700 flex flex-wrap gap-2">
                    {project.techStack && project.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}

          {/* 3. 새 프로젝트 추가 버튼 높이도 420px로 고정하여 통일감 부여 */}
          {isLoggedIn && (
            <div onClick={addProject} className="h-[420px] border-4 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl flex flex-col items-center justify-center p-12 hover:border-blue-500 hover:bg-blue-50/30 transition-all cursor-pointer group">
              <FaPlus className="text-gray-300 group-hover:text-blue-500 mb-4" size={40} />
              <span className="text-gray-400 group-hover:text-blue-500 font-bold">새 프로젝트 추가</span>
            </div>
          )}
        </div>

        {/* 인증 섹션 (수정 없음) */}
        <div className="flex flex-col items-center justify-center mt-10 space-y-6">
          {/* ... 기존 인증 코드 동일 ... */}
          {!isLoggedIn ? (
            <button onClick={() => { setShowLoginForm(!showLoginForm); setIsJoinMode(false); }} className="flex items-center gap-3 px-10 py-4 bg-white dark:bg-gray-800 border-2 border-blue-500 text-blue-600 font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all shadow-lg">
              <FaLock /> Admin Mode
            </button>
          ) : (
            <button onClick={handleLogout} className="flex items-center gap-3 px-10 py-4 bg-gray-100 dark:bg-gray-700 text-gray-600 font-bold rounded-full hover:bg-red-500 hover:text-white transition-all">
              <FaUnlock /> Admin Logout
            </button>
          )}

          {showLoginForm && !isLoggedIn && (
            <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 shadow-2xl rounded-3xl border border-gray-100 dark:border-gray-700 animate-in fade-in zoom-in duration-300">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold dark:text-white">{isJoinMode ? '회원가입' : '관리자 인증'}</h4>
                <FaTimes className="cursor-pointer text-gray-400 hover:text-gray-600" onClick={() => setShowLoginForm(false)} />
              </div>

              <form className="space-y-4">
                {isJoinMode && (
                  <input type="text" placeholder="닉네임" value={authData.nickname} className="w-full px-4 py-3 border rounded-xl dark:bg-gray-900 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" onChange={(e) => setAuthData({ ...authData, nickname: e.target.value })} />
                )}
                <input type="email" placeholder="이메일 주소" value={authData.email} className="w-full px-4 py-3 border rounded-xl dark:bg-gray-900 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" onChange={(e) => setAuthData({ ...authData, email: e.target.value })} />
                <input type="password" placeholder="비밀번호" value={authData.password} className="w-full px-4 py-3 border rounded-xl dark:bg-gray-900 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" onChange={(e) => setAuthData({ ...authData, password: e.target.value })} />

                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={handleLogin} className={`flex-1 py-4 rounded-xl font-bold transition-all shadow-lg ${!isJoinMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 dark:bg-gray-700 text-gray-500'}`}>접속하기</button>
                  <button type="button" onClick={handleJoin} className={`flex-1 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 ${isJoinMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white dark:bg-gray-800 border-2 border-blue-500 text-blue-600 hover:bg-blue-50'}`}><FaUserPlus size={14} /> 회원가입</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};