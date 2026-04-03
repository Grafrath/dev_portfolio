"use client";
import React, { useState } from 'react';
import { PROJECTS } from '@/constants';
import { AnimatedSection } from './AnimatedSection';
import { FaLock, FaUnlock, FaPlus, FaTimes, FaUserPlus } from 'react-icons/fa';

export const ServicesSection: React.FC = () => {
  const [projectList, setProjectList] = useState(PROJECTS);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isJoinMode, setIsJoinMode] = useState(false);

  // 1. 초기값에 데모 계정 정보를 미리 넣어둡니다.
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

    // 회원가입 모드로 전환할 때 입력창을 비워줍니다.
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
        // 로그인 모드로 돌아올 때 다시 데모 계정 세팅
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
    setProjectList([...projectList, {
      id: Date.now(),
      title: "새로운 프로젝트",
      period: "2024.04 - 현재",
      description: "현재는 시연을 위해 인메모리(In-memory)로 관리 모드를 구현했습니다.",
      techStack: ["Stack", "Added"],
      link: "#"
    }]);
  };

  const deleteProject = (id: number) => {
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

        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {projectList.map((project, index) => (
            <AnimatedSection key={project.id} animation="fadeInUp" delay={index * 100}>
              <div className="card h-full flex flex-col group relative border-t-4 border-t-blue-500 hover:border-t-purple-500 transition-all">
                {isLoggedIn && (
                  <button onClick={(e) => { e.stopPropagation(); deleteProject(project.id); }} className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors z-20 p-1">
                    <FaTimes size={20} />
                  </button>
                )}
                <div className="p-2 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">{project.title}</h3>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{project.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
          {isLoggedIn && (
            <div onClick={addProject} className="border-4 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl flex flex-col items-center justify-center p-12 hover:border-blue-500 hover:bg-blue-50/30 transition-all cursor-pointer group">
              <FaPlus className="text-gray-300 group-hover:text-blue-500 mb-4" size={40} />
              <span className="text-gray-400 group-hover:text-blue-500 font-bold">새 프로젝트 추가</span>
            </div>
          )}
        </div>

        {/* 인증 섹션 */}
        <div className="flex flex-col items-center justify-center mt-10 space-y-6">
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
                <p className="text-center text-xs text-gray-400 mt-4">{isJoinMode ? '이미 계정이 있으신가요? 접속하기를 누르세요.' : '처음이신가요? 회원가입을 눌러 계정을 만드세요.'}</p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};