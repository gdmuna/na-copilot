'use client';
import TopNavbar from '@/components/TopNavbar';
import InterviewOptions from '@/components/InterviewOptions';
import InterviewersPage from '@/components/InterviewersPage';
import { useState } from 'react';

const Interview = () => {
    const [currentPage, setCurrentPage] = useState('InterviewOptions');
    const [currentTitle, setCurrentTitle] = useState('面试系统');
    const [isActive, setIsActive] = useState({
        interviewOptions: true,
        interviewersPage: false
    });

    const handleSelectPage = (page, title) => {
        setIsActive((prev) => ({
            ...prev,
            interviewOptions: page === 'InterviewOptions',
            interviewersPage: page === 'InterviewersPage'
        }));

        setCurrentTitle(title);
        setCurrentPage(page);
    };

    return (
        <div className="max-w-[980px] w-full h-full bg-[#F9F9F9]">
            {/* 顶部导航栏 */}
            <TopNavbar title={currentTitle} className="fixed top-0 left-0 right-0 z-40" />
            {/* 子页面显示区域 */}
            <div className="w-full mt-4" style={{ height: 'calc(100% - 131.2px)' }}>
                {currentPage === 'InterviewOptions' && <InterviewOptions />}
                {currentPage === 'InterviewersPage' && <InterviewersPage />}
            </div>
            {/* 底部导航栏 */}
            <div className=" absolute bottom-0 flex h-[4.2rem] w-full px-4 pt-1 justify-between items-center bg-[#FFFFFF]">
                <div className={`flex flex-col flex-1 justify-center ${isActive.interviewOptions ? 'active-class' : ''}`} onClick={() => handleSelectPage('InterviewOptions', '面试系统')}>
                    <div className={isActive.interviewOptions ? 'bg-[#FDDDB4] h-[2.3rem] w-[2.3rem] rounded-[10px] m-auto' : 'bg-[#FDDDB4] h-[2rem] w-[2rem] rounded-[10px] m-auto'} />
                    <p className={isActive.interviewOptions ? 'text-[0.9rem] text-[#4a4a4a] m-auto' : 'text-[1rem] text-[#4a4a4a] m-auto'}>场次</p>
                </div>
                <div className={`flex flex-col flex-1 justify-center ${isActive.interviewersPage ? 'active-class' : ''}`} onClick={() => handleSelectPage('InterviewersPage', '面试系统')}>
                    <div className={isActive.interviewersPage ? 'bg-[#DED5F2] h-[2.3rem] w-[2.3rem] rounded-[10px] m-auto' : 'bg-[#DED5F2] h-[2rem] w-[2rem] rounded-[10px] m-auto'} />
                    <p className={isActive.interviewOptions ? 'text-[1rem] text-[#4a4a4a] m-auto' : 'text-[0.9rem] text-[#4a4a4a] m-auto'}>面试者</p>
                </div>
                <div className="flex flex-col flex-1 justify-center">
                    <div className="bg-[#CBF0F9] h-[2rem] w-[2rem] rounded-[10px] m-auto" />
                    <p className="text-[1rem] text-[#4a4a4a] m-auto">面试管理</p>
                </div>
            </div>
        </div>
    );
};

export default Interview;
