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

    useEffect(() => {
        setSessions(Array(sessionCount).fill({}));
    }, [sessionCount]);

    useEffect(() => {
        setCurrentSessionIndex(Math.min(currentSessionIndex, sessions.length - 1));
    }, [sessions]);

    const updateSessionData = (index, data) => {
        const newSessions = [...sessions];
        newSessions[index] = data;
        setSessions(newSessions);
        console.log(newSessions);
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
        <div className="max-w-[980px] w-full  bg-[#F9F9F9]">
            <TopNavbar title="新建面试" route="/interview" />

            <div className="relative w-full p-4" style={{ height: 'calc(100% - 64px)', scrollbarWidth: 'none', zIndex: '1' }}>
                <InterviewInfo setInterview={() => {}} inputSessionCount={changeSessionCount} />

                <div className="relative w-full overflow-hidden" style={{ height: 'calc(100% - 139.2px)' }}>
                    <div className="flex w-full bg-[#EFEFEF] text-[#4A4A4A] px-4 py-3 rounded-[10px] justify-between items-center">
                        <button onClick={lastSession} disabled={currentSessionIndex === 0}>
                            <ArrowLeftIcon color="rgba(74,74,74,0.5)" />
                        </button>
                        <div className="font-semibold">环节 {currentSessionIndex + 1}</div>
                        <button onClick={nextSession} disabled={currentSessionIndex === sessionCount - 1}>
                            <ArrowRightIcon color="#4A4A4A" />
                        </button>
                    </div>

                    <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentSessionIndex * 100}%)` }}>
                        {sessions.map((session, index) => (
                            <div key={index} className="w-full shrink-0">
                                <SessionInfo sessionData={session} updateSessionData={(data) => updateSessionData(index, data)} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-1"></div>
            </div>
        </div>
    );
};

export default CreateInterview;
