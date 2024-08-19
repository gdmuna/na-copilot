import React, { useState, useEffect } from 'react';
import NodeInfo from '@/components/createInterview/NodeInfo';
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import { Input } from '@nextui-org/react';
import { Textarea } from '@nextui-org/react';

const SessionInfo = ({ sessionIndex, sessionData, updateSessionData }) => {
    // 环节信息
    const [sessionName, setSessionName] = useState(sessionData.sessionName || ''); //环节名称
    const [sessionDescription, setSessionDescription] = useState(sessionData.sessionDescription || ''); //环节描述
    const [nodeCount, setNodeCount] = useState(sessionData.nodeCount || 1); //节点数量

    useEffect(() => {
        updateSessionData({ sessionName, sessionDescription, nodeCount });
    }, [sessionName, sessionDescription, nodeCount]);

    const changeSessionName = (e) => {
        const value = e.target.value;
        setSessionName(value);
    };

    const changeSessionDescription = (value) => {
        setSessionDescription(value);
    };

    const changeNodeCount = (valueAsNumber) => {
        setNodeCount(valueAsNumber);
    };

    return (
        <div>
            {/* 环节信息 */}
            <div className="flex flex-col w-full rounded-[5px] px-5 py-4 gap-2 text-[#4a4a4acc] font-semibold text-[0.95rem]">
                <form className="flex w-full gap-2">
                    <label htmlFor="sessionName" className="grow-0 whitespace-nowrap">
                        环节名称:
                    </label>
                    <Input variant="underlined" type="text" size="sm" value={sessionName} onChange={changeSessionName} />
                </form>
                <form className="flex w-full gap-2">
                    <label htmlFor="sessionDescription" className="grow-0 whitespace-nowrap">
                        环节描述:
                    </label>
                    <Textarea variant="underlined" value={sessionDescription} onValueChange={changeSessionDescription} />
                </form>
                <form className="flex w-full gap-2">
                    <label className="flex items-center">节点数量:</label>
                    <NumberInput onChange={changeNodeCount} value={nodeCount} max={50} defaultValue={1} min={1} size={'sm'} maxW={20}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
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
