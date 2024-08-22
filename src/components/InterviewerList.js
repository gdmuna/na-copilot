import React from 'react';
import { Avatar, Chip } from '@nextui-org/react';

// 面试官列表组件
const InterviewerList = ({ interviewers, setSelectedInterviewerIndex }) => {
    return (
        <div className='mt-4 bg-white p-4 rounded-lg shadow-md'>
            {/* 标题 */}
            <b className="flex justify-center items-center text-[18px]">面试官</b>
            <div className='grid grid-cols-3 mt-3'>
                {/* 遍历并显示每个面试官 */}
                {interviewers.map((interview, index) => (
                    <div
                        className="flex flex-col items-center ml-2 mt-2"
                        key={index}  // 使用索引作为每个面试官的唯一标识
                        onClick={() => setSelectedInterviewerIndex(index)}  // 点击面试官头像时，更新选中的面试官索引
                    >
                        {/* 面试官头像 */}
                        <Avatar src={interview.image} size="lg" />
                        {/* 面试官名字 */}
                        <Chip className="bg-[#858585] rounded-full px-2 py-4 mt-2 text-center">
                            <span className="text-md text-[white]">{interview.name}</span>
                        </Chip>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InterviewerList;
