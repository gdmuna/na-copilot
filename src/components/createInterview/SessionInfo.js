// components/createInterview/SessionInfo.js
import React from 'react';
import { useState } from 'react';
import NodeInfo from '@/components/createInterview/NodeInfo';

const SessionInfo = ({ nodeCount, setNodeCount, onNodeCount }) => {
    // 环节信息
    const [sessionName, setSessionName] = useState(''); //面试名称
    const [sessionDescription, setSessionDescription] = useState(''); //面试描述

    // 当节点数量变化时,调用传递的回调函数
    const changeNodeCount = (e) => {
        const value = parseInt(e.target.value);
        setNodeCount(value);
        onNodeCount(value);
    };
    return (
        <div>
            {/* 环节信息 */}
            <div className="flex flex-col w-full rounded-[5px] px-5 py-4 gap-2 text-[#4a4a4acc] font-semibold text-[0.95rem]">
                <form className="flex w-full gap-2">
                    <label htmlFor="sessionName">环节名称:</label>
                    <input id="sessionName" className="grow outline-none bg-[#F9F9F9]" maxLength={20} type="text" value={sessionName} onChange={(e) => setSessionName(e.target.value)} />
                </form>
                <form className="flex w-full gap-2">
                    <label htmlFor="sessionDescription" className="grow-0 whitespace-nowrap">
                        环节描述:
                    </label>
                    <textarea id="sessionDescription" className="grow outline-none bg-[#F9F9F9]" maxLength={30} type="text" value={sessionDescription} onChange={(e) => setSessionDescription(e.target.value)} />
                </form>
                <form className="flex w-full gap-2">
                    <label>节点数量:</label>
                    <input className="grow outline-none bg-[#F9F9F9]" type="number" value={nodeCount} onChange={changeNodeCount} />
                </form>
            </div>
            {/* 节点设置--节点卡片 */}
            <div className="flex flex-col w-full bg-white rounded-[5px] px-5 py-4 text-[#4a4a4a] font-semibold text-[0.95rem] mb-4" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <NodeInfo />
            </div>
        </div>
    );
};

export default SessionInfo;
