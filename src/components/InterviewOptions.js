// components/InterviewOptions.js
import React from 'react';

const InterviewOptions = () => {
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
            <div className="flex flex-col w-full items-center gap-4">
                <div className="bg-white w-[95%] rounded-[8px] p-4" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <div className="flex flex-col justify-between">
                        <div className="flex w-full justify-between items-center mb-3">
                            {/* 环节名称 */}
                            <p className="font-semibold text-[#4a4a4a] mt-[0.1rem]">网络协会招新面试</p>
                            {/* 环节状态提示 */}
                            {/* <div className='flex items-center justify-center bg-[#B1D1BC] w-[4.5rem] h-[1.6rem] rounded-full text-[0.9rem] text-[#4C9163] font-semibold'>
                                <div className='bg-[#4C9163] w-[0.8rem] h-[0.8rem] mr-1 rounded-full'></div>
                                <p>进行中</p>
                            </div> */}
                            {/* <div className='flex items-center justify-center bg-[#FBF2A8] w-[4.5rem] h-[1.6rem] rounded-full text-[0.9rem] text-[#DDAB2B] font-semibold'>
                                <div className='bg-[#DDAB2B] w-[0.8rem] h-[0.8rem] mr-1 rounded-full'></div>
                                <p>已结束</p>
                            </div> */}
                            <div className="flex items-center justify-center bg-[#B4B4B4] w-[4.5rem] h-[1.6rem] rounded-full text-[0.9rem] text-[#4A4A4A] font-semibold">
                                <div className="bg-[#4A4A4A] w-[0.8rem] h-[0.8rem] mr-1 rounded-full"></div>
                                <p>未开始</p>
                            </div>
                        </div>
                        {/* 环节描述 */}
                        <p className="text-[0.9rem] text-[#4a4a4a]">2024-2025年度网络协会干事招新面试，期待你的加入</p>
                    </div>
                </div>
            </div>
            {/* 新建面试按钮 */}
        </div>
    );
};

export default InterviewOptions;
