// components/createInterview/NodeInfo.js
import React from 'react';
import { useState } from 'react';
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import { Textarea } from '@nextui-org/react';
import { Input } from '@nextui-org/react';

const NodeInfo = ({ timesCount, setTimesCount, onTimesCount }) => {
    // 环节信息
    const [nodeName, setNodeName] = useState(''); //面试名称
    const [nodeDescription, setNodeDescription] = useState(''); //面试描述

    // 当节点数量变化时,调用传递的回调函数
    const changeTimesCount = (e) => {
        const value = parseInt(e.target.value);
        setTimesCount(value);
        onTimesCount(value);
    };
    return (
        <div className="flex flex-col gap-2">
            {/* 节点序号 */}
            <div className="flex w-full justify-center">
                <div className="bg-[#D3F5E7] w-auto max-w-fit px-3 py-1 rounded-full">节点1</div>
            </div>
            {/* 节点信息 */}
            <form className="flex w-full gap-2">
                <label htmlFor="nodeName" className="grow-0 whitespace-nowrap">
                    节点名称:
                </label>
                <Input variant="underlined" size="sm" type="text" value={nodeName} onChange={(e) => setNodeName(e.target.value)} />
            </form>
            <form className="flex w-full gap-2">
                <label htmlFor="nodeDescription" className="grow-0 whitespace-nowrap">
                    节点描述:
                </label>
                <Textarea variant="underlined" value={nodeDescription} onValueChange={(e) => setNodeDescription(e.target.value)} size="sm" />
            </form>
            <form className="flex w-full gap-2">
                <label htmlFor="timesCount" className="flex items-center">
                    场次数量:
                </label>
                <NumberInput onChange={changeTimesCount} value={timesCount} defaultValue={1} min={1} size="sm" maxW={20}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </form>
            <div className="flex w-full gap-2 bg-[#FDDDB4] px-5 py-2 rounded-[5px] items-center">
                <p className="mt-[0.1rem]">场次:</p>
                <div className="flex bg-white w-12 h-8 rounded-[5px] px-5 py-1 justify-center items-center">
                    <p className="mt-[0.1rem]">1</p>
                </div>
            </div>
        </div>
    );
};

export default NodeInfo;
