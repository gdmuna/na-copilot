// components/createInterview/InterviewInfo.js
import React from 'react';
import { useState } from 'react';

const InterviewInfo = ({ sessionCount, setSessionCount, onSessionCount }) => {
    // 面试信息
    const [interviewName, setInterviewName] = useState(''); //面试名称
    const [interviewDescription, setInterviewDescription] = useState(''); //面试描述

    // 当环节数量变化时,调用传递的回调函数
    const changeSessionCount = (e) => {
        const value = parseInt(e.target.value);
        setSessionCount(value);
        onSessionCount(value);
    };

    return (
        // 面试信息
        <div className="flex flex-col w-full bg-white rounded-[5px] px-5 py-4 gap-2 text-[#4a4a4a] font-semibold text-[0.95rem] mb-4" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <form className="flex w-full gap-2">
                <label htmlFor="interviewName">面试名称:</label>
                <input id="interviewName" className="grow outline-none" maxLength={20} type="text" value={interviewName} onChange={(e) => setInterviewName(e.target.value)} />
            </form>
            <form className="flex w-full gap-2">
                <label htmlFor="interviewDescription" className="grow-0 whitespace-nowrap">
                    面试描述:
                </label>
                <textarea id="interviewDescription" className="grow outline-none" maxLength={30} type="text" value={interviewDescription} onChange={(e) => setInterviewDescription(e.target.value)} />
            </form>
            <form className="flex w-full gap-2">
                <label htmlFor="sessionCount">环节数量:</label>
                <input id="sessionCount" className="grow outline-none" type="number" value={sessionCount} onChange={changeSessionCount} min="1" />
            </form>
        </div>
    );
};

export default InterviewInfo;
