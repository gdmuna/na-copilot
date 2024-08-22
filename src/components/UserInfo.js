import React, { useRef, useState, useEffect } from 'react';

const UserInfo = ({ user }) => {
    // 控制详细信息是否展开的状态
    const [isExpanded, setIsExpanded] = useState(false);
    // 用于获取内容区域的引用，以便测量其高度
    const contentRef = useRef(null);
    // 存储内容区域的最大高度，用于平滑过渡效果
    const [maxHeight, setMaxHeight] = useState('0px');

    // 切换展开/收起状态
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    // 根据展开状态更新内容区域的最大高度
    useEffect(() => {
        if (contentRef.current) {
            // 设置最大高度以便展开或收起
            setMaxHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isExpanded]);

    return (
        <div className='mt-4 bg-white p-4 rounded-lg shadow-md'>
            {/* 点击头部区域以切换展开状态 */}
            <div className="cursor-pointer" onClick={toggleExpand}>
                <b className="text-lg mt-2">详细信息：</b>
                <div className="grid grid-cols-2 gap-4 mt-4 text-[11.5px] text-[#4A4A4A]">
                    {/* 显示基本的用户信息 */}
                    <div>学号：{user.student}</div>
                    <div>年级：{user.nianji}</div>
                    <div>手机号：{user.phone}</div>
                    <div>学院：{user.xueyuan}</div>
                    <div>邮箱：{user.email}</div>
                    <div>专业：{user.zhuanye}</div>
                </div>
            </div>
            {/* 展开或收起的内容区域 */}
            <div
                ref={contentRef}
                style={{
                    maxHeight: maxHeight,  // 动态设置最大高度
                    overflow: 'hidden',    // 隐藏超出部分
                    transition: 'max-height 0.3s ease-in-out',  // 平滑过渡效果
                }}
            >
                <div className="grid grid-cols-2 gap-4 mt-4 text-[11.5px] text-[#4A4A4A]">
                    {/* 显示详细的用户信息 */}
                    <div>微信：{user.wechat}</div>
                    <div>政治面貌：{user.mianmao}</div>
                    <div>特长：{user.techang}</div>
                </div>
                <p className="text-[13px] mt-4">个人简介：</p>
                <div className="text-[11.5px] p-4 mt-2 bg-gray-100 rounded-lg">
                    {/* 显示个人简介 */}
                    {user.techang}
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
