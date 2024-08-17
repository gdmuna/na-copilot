'use client';
import React, { useState, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import TopNavbar from '@/components/TopNavbar';
import InterviewInfo from '@/components/createInterview/InterviewInfo';
import SessionInfo from '@/components/createInterview/SessionInfo';

const CreateInterview = () => {
    const [sessionCount, setSessionCount] = useState(1);
    const [sessions, setSessions] = useState([]);
    const [currentSessionIndex, setCurrentSessionIndex] = useState(0);

    const [nodeCount, setNodeCount] = useState(1); //节点数量
    const [nodes, setNodes] = useState([]);
    const [currentNodeIndex, setCurrentNode, Index] = useState(0);

    // Effect to handle session initialization and validation
    useEffect(() => {
        if (Number.isInteger(sessionCount) && sessionCount > 0) {
            setSessions(Array(sessionCount).fill({}));
        } else {
            setSessions([]);
        }
    }, [sessionCount]);

    // Effect to adjust the current session index based on sessions array
    useEffect(() => {
        if (sessions.length === 0) {
            setCurrentSessionIndex(0);
        } else {
            setCurrentSessionIndex(Math.min(currentSessionIndex, sessions.length - 1));
        }
    }, [sessions]);

    const updateSessionData = (index, data) => {
        const newSessions = [...sessions];
        newSessions[index] = data;
        setSessions(newSessions);
    };

    const changeSessionCount = (count) => {
        const validCount = parseInt(count, 10);
        if (Number.isInteger(validCount) && validCount > 0) {
            setSessionCount(validCount);
        } else {
            setSessionCount(1); // Default to 1 if invalid
        }
    };

    const lastSession = () => {
        setCurrentSessionIndex(Math.max(0, currentSessionIndex - 1));
    };

    const nextSession = () => {
        setCurrentSessionIndex(Math.min(sessionCount - 1, currentSessionIndex + 1));
    };

    return (
        <div className="w-full h-full bg-[#F9F9F9]">
            {/* 顶部导航栏 */}
            <div className="fixed top-0 right-0 left-0" style={{ zIndex: '2' }}>
                <TopNavbar title="新建面试" />
            </div>

            {/* 页面主体内容 */}
            <div className="relative w-full top-[64px] p-4 overflow-y-auto scroll-" style={{ height: 'calc(100% - 64px)', scrollbarWidth: 'none', zIndex: '1' }}>
                {/* 面试信息 */}
                <InterviewInfo setInterview={() => {}} inputSessionCount={changeSessionCount} />

                {/* 环节设置 */}
                <div className="w-full" style={{ height: 'calc(100% - 139.2px)' }}>
                    {/* 环节选择卡 */}
                    <div className="flex bg-[#EFEFEF] text-[#4A4A4A] px-4 py-3 rounded-[10px] justify-between">
                        <div className="mb-0.5" onClick={lastSession} disabled={currentSessionIndex === 0}>
                            <ArrowLeftIcon color="rgba(74,74,74,0.5)" />
                        </div>
                        <div className="font-semibold mt-[0.1rem]">环节{currentSessionIndex + 1}</div>
                        <div className="mb-0.5" onClick={nextSession} disabled={currentSessionIndex === sessionCount - 1}>
                            <ArrowRightIcon color="#4A4A4A" />
                        </div>
                    </div>

                    {/* 环节卡片 */}
                    {sessions.length > 0 && <SessionInfo sessionIndex={currentSessionIndex} sessionData={sessions[currentSessionIndex]} updateSessionData={updateSessionData} />}

                    {/* 底部留空填充 */}
                    <div className="h-1"></div>
                </div>
            </div>
        </div>
    );
};

export default CreateInterview;
