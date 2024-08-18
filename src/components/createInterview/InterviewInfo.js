// components/createInterview/InterviewInfo.js
import React from 'react';
import { useState } from 'react';
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import { Textarea } from '@nextui-org/react';
import { Input } from '@nextui-org/react';

const InterviewInfo = ({ setInterview, inputSessionCount }) => {
    // 面试信息
    const [interviewName, setInterviewName] = useState(''); //面试名称
    const [interviewDescription, setInterviewDescription] = useState(''); //面试描述
    const [sessionCount, setSessionCount] = useState(1);

    // 修改面试名称
    const changeInterviewName = (e) => {
        const value = e.target.value;
        setInterviewName(value);
        setInterview((prev) => ({ ...prev, interviewName: value }));
    };
    // 修改面试描述
    const changeInterviewDescription = (value) => {
        setInterviewDescription(value);
        setInterview((prev) => ({ ...prev, interviewDescription: value }));
    };
    // 修改环节数量
    const changeSessionCount = (value) => {
        setSessionCount(value);
        inputSessionCount(value); // 通知父组件更新 sessionCount
    };

    return (
        // 面试信息
        <div className="flex flex-col w-full bg-white rounded-[5px]  px-5 py-4 gap-2 text-[#4a4a4a] font-semibold text-[0.95rem] mb-4" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <form className="flex w-full gap-2">
                <label htmlFor="interviewName" className="grow-0 whitespace-nowrap">
                    面试名称:
                </label>
                <Input variant="underlined" size="sm" type="text" value={interviewName} onChange={changeInterviewName} />
            </form>
            <form className="flex w-full gap-2">
                <label htmlFor="interviewDescription" className="grow-0 whitespace-nowrap mt-1">
                    面试描述:
                </label>
                <Textarea variant="underlined" value={interviewDescription} onValueChange={changeInterviewDescription} size="sm" />
            </form>
            <form className="flex w-full gap-2 ">
                <label htmlFor="sessionCount" className="flex items-center">
                    环节数量:
                </label>
                <NumberInput onChange={changeSessionCount} value={sessionCount} defaultValue={1} min={1} size="sm" maxW={20}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </form>
        </div>
    );
};

export default InterviewInfo;
