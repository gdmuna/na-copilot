import React from 'react';
import { AddIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const InterviewOptions = ({ interviews }) => {
    // 使用变量接收面试数据数组
    const interviewList = interviews;

    return (
        <div className="flex flex-col h-full w-full px-4 bg-[#F9F9F9]">
            {/* 顶部提示 */}
            <div className="flex w-full justify-center">
                <div className="flex w-[95%] justify-between items-center px-2 mb-4">
                    <div className="mt-0.5 text-[1.15rem] font-semibold text-[#4a4a4a]">当前面试</div>
                    <button className="bg-[#CDF1EE] w-[4.5rem] h-7 rounded-[5px] text-[0.9rem] font-semibold text-[#4a4a4a]">历史面试</button>
                </div>
            </div>
            {/* 面试选项 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {interviewList.map((interview, index) => (
                    <div key={index} className="flex flex-col w-full items-center gap-4">
                        <div className="bg-white w-[95%] rounded-[8px] p-4" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                            <div className="flex flex-col justify-between">
                                <div className="flex w-full justify-between items-center mb-3">
                                    {/* 环节名称 */}
                                    <p className="font-semibold text-[#4a4a4a] mt-[0.1rem]">{interview.title}</p>
                                    {/* 环节状态提示 */}
                                    <div className={`flex items-center justify-center w-[4.5rem] h-[1.6rem] rounded-full text-[0.9rem] font-semibold ${interview.status.bgColor} ${interview.status.textColor}`}>
                                        <div className={`${interview.status.dotColor} w-[0.8rem] h-[0.8rem] mr-1 rounded-full`}></div>
                                        <p>{interview.status.text}</p>
                                    </div>
                                </div>
                                {/* 环节描述 */}
                                <p className="text-[0.9rem] text-[#4a4a4a]">{interview.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* 新建面试按钮 */}
            <Link href="/interview/createInterview">
                <div className="absolute bottom-24 right-6 flex justify-center items-center bg-white rounded-full w-[3.5rem] h-[3.5rem]" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <AddIcon boxSize={6} />
                </div>
            </Link>
        </div>
    );
};

export default InterviewOptions;
