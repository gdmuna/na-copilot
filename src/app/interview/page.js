'use client';
import TopNavbar from '@/components/TopNavbar';
import InterviewOptions from '@/app/interview/InterviewOptions/_page';
import InterviewersPage from '@/app/interview/InterviewersPage/_page';
import { useState, useEffect } from 'react';
import Icon from '@/components/Icon';
import { Button } from '@nextui-org/react';

const Interview = () => {
    const [currentPage, setCurrentPage] = useState('InterviewOptions');
    const [currentTitle, setCurrentTitle] = useState('面试系统');
    const [isActive, setIsActive] = useState({
        interviewOptions: true,
        interviewersPage: false
    });
    const [isNavVisible, setIsNavVisible] = useState(false); // 控制导航栏可见性

    const handleSelectPage = (page, title) => {
        setIsActive((prev) => ({
            ...prev,
            interviewOptions: page === 'InterviewOptions',
            interviewersPage: page === 'InterviewersPage'
        }));

        setCurrentTitle(title);
        setCurrentPage(page);
        setIsNavVisible(false); // 切换页面时隐藏导航栏
    };

    // 显示导航栏函数
    const showNav = () => {
        setIsNavVisible(true);
    };

    // 点击空白区域隐藏导航栏
    const handleOutsideClick = (e) => {
        if (!document.getElementById('dh').contains(e.target)) {
            setIsNavVisible(false);
        }
    };

    useEffect(() => {
        if (isNavVisible) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isNavVisible]);

    const interviews = [
        {
            title: '网络协会招新面试',
            status: {
                text: '未开始',
                bgColor: 'bg-[#B4B4B4]',
                textColor: 'text-[#4A4A4A]',
                dotColor: 'bg-[#4A4A4A]'
            },
            description: '2024-2025年度网络协会干事招新面试，期待你的加入'
        },
        {
            title: '技术部面试',
            status: {
                text: '进行中',
                bgColor: 'bg-[#B1D1BC]',
                textColor: 'text-[#4C9163]',
                dotColor: 'bg-[#4C9163]'
            },
            description: '技术部2024年度面试，欢迎你的加入'
        }
        // 更多面试信息...
    ];

    return (
        <div className="max-w-[980px] w-screen h-screen relative">
            {/* 顶部导航栏 */}
            <TopNavbar title={currentTitle} route="/" className="fixed top-0 left-0 right-0 z-40" />
            <Button isIconOnly color="warning" variant="faded" onClick={() => showNav()} className="absolute right-3 top-3 hidden md:block">
                <Icon type="menu" extraclass="text-red-500" size="25px" />
            </Button>
            {/* 子页面显示区域 */}
            <div className="w-full mt-4">
                {currentPage === 'InterviewOptions' && <InterviewOptions interviews={interviews} />}
                {currentPage === 'InterviewersPage' && <InterviewersPage />}
            </div>
            {/* 底部导航栏 */}
            <div
                id="dh"
                className={`absolute bottom-0 left-auto w-full px-4 pt-1 justify-between items-center bg-[#FFFFFF]
                            md:right-0 md:bottom-auto md:w-[10%]  md:top-[30%] md:h-[40%] md:flex-col flex
                            md:shadow-md md:rounded-[10px]
                            md:transition-all md:duration-300 md:ease-in-out md:transform ${isNavVisible ? 'md:opacity-100 md:scale-100' : 'md:opacity-0 md:scale-0 md:pointer-events-none'}`}>
                <div className={`flex flex-col flex-1 cursor-pointer justify-center ${isActive.interviewOptions ? 'active-class' : ''}`} onClick={() => handleSelectPage('InterviewOptions', '面试系统')}>
                    <div className="text-center">
                        <div className={isActive.interviewOptions ? 'bg-[#FDDDB4] h-[2.3rem] w-[2.3rem] rounded-[10px] m-auto' : 'bg-[#FDDDB4] h-[2rem] w-[2rem] rounded-[10px] m-auto'} />
                        <p className={isActive.interviewOptions ? 'text-[0.9rem] text-[#4a4a4a] m-auto' : 'text-[1rem] text-[#4a4a4a] m-auto'}>场次</p>
                    </div>
                </div>
                <div className={`flex flex-col flex-1 cursor-pointer justify-center ${isActive.interviewersPage ? 'active-class' : ''}`} onClick={() => handleSelectPage('InterviewersPage', '面试系统')}>
                    <div className="text-center">
                        <div className={isActive.interviewersPage ? 'bg-[#DED5F2] h-[2.3rem] w-[2.3rem] rounded-[10px] m-auto' : 'bg-[#DED5F2] h-[2rem] w-[2rem] rounded-[10px] m-auto'} />
                        <p className={isActive.interviewOptions ? 'text-[1rem] text-[#4a4a4a] m-auto' : 'text-[0.9rem] text-[#4a4a4a] m-auto'}>面试者</p>
                    </div>
                </div>
                <div className="flex flex-col flex-1 justify-center">
                    <div className="text-center">
                        <div className="bg-[#CBF0F9] h-[2rem] w-[2rem] rounded-[10px] m-auto" />
                        <p className="text-[1rem] text-[#4a4a4a] m-auto">面试管理</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Interview;
