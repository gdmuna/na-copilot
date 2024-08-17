'use client';
import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import TopNavbar from '@/components/TopNavbar';
import InterviewInfo from '@/components/createInterview/InterviewInfo';
import SessionInfo from '@/components/createInterview/SessionInfo';

const CreateInterview = () => {
    return (
        <div className="w-full h-full bg-[#F9F9F9]">
            {/* 顶部导航栏 */}
            <div className="fixed top-0 right-0 left-0" style={{ zIndex: '2' }}>
                <TopNavbar title="新建面试" />
            </div>

            {/* 页面主体内容 */}
            <div className="relative w-full top-[64px] p-4 overflow-y-auto scroll-" style={{ height: 'calc(100% - 64px)', scrollbarWidth: 'none', zIndex: '1' }}>
                {/* 面试信息 */}
                <InterviewInfo />

                {/* 环节设置 */}
                <div className="w-full" style={{ height: 'calc(100% - 139.2px)' }}>
                    {/* 环节选择卡 */}
                    <div className="flex bg-[#EFEFEF] text-[#4A4A4A] px-4 py-3 rounded-[10px] justify-between">
                        <div className="mb-0.5">
                            <ArrowLeftIcon color="rgba(74,74,74,0.5)" />
                        </div>
                        <div className="font-semibold mt-[0.1rem]">环节1</div>
                        <div className="mb-0.5">
                            <ArrowRightIcon color="#4A4A4A" />
                        </div>
                    </div>

                    {/* 环节卡片 */}
                    <SessionInfo />

                    {/* 底部留空填充 */}
                    <div className="h-1"></div>
                </div>
            </div>
        </div>
    );
};

export default CreateInterview;
