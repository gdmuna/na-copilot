import React from 'react';
import { Avatar, Chip } from '@nextui-org/react';

// 面试官评价组件
const InterviewerEvaluation = ({ selectedInterviewer, index }) => {
    return (
        <div className='mt-4 bg-white p-4 rounded-lg shadow-md grid grid-cols-10'>
            {/* 显示面试官信息 */}
            <div className='space-y-1 col-span-7'>
                <b className="text-gray-500">面试官{index + 1}：</b> {/* 显示面试官的序号 */}
                <div className="flex items-center p-3 bg-gray-100 rounded-lg">
                    {/* 面试官头像 */}
                    <Avatar src={selectedInterviewer.image} size="sm" />
                    {/* 面试官名字 */}
                    <b className="ml-2">{selectedInterviewer.name}</b>
                    {/* 面试官职位 */}
                    <Chip className="bg-[#858585] rounded-full flex items-center ml-2 px-1 text-center">
                        <span className="text-md text-[white]">{selectedInterviewer.zhiwei}</span>
                    </Chip>
                </div>
            </div>
            {/* 空格区域 */}
            <div className='space-y-1 col-span-1'></div>
            {/* 显示面试官评分 */}
            <div className='space-y-1 col-span-2'>
                <b className="text-gray-500">评分：</b>
                <div className="text-white text-lg px-2 py-3.5 bg-[black] rounded-lg">
                    <p className='flex justify-center items-center'>{selectedInterviewer.score}分</p>
                </div>
            </div>
            {/* 显示面试官评语 */}
            <div className='mt-1 space-y-1 col-span-10'>
                <b className="text-gray-500">评语：</b>
                <div className="text-gray-500 text-sm p-3 bg-gray-100 rounded-lg">
                    <b className="bold-text">{selectedInterviewer.text}</b>
                </div>
            </div>
        </div>
    );
};

export default InterviewerEvaluation;
