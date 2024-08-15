'use client';
import Link from 'next/link';
import TopNavbar from '@/components/TopNavbar';
import { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

const AllInterviews = () => {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const changeDetailsVisibility = () => {
        setIsDetailsVisible(!isDetailsVisible);
    };

    return (
        <div className="w-full h-full bg-[#F9F9F9]">
            {/* 顶部导航栏 */}
            <TopNavbar title="网络协会招新面试" />
            <div className="w-full p-4" style={{ height: 'calc(100% - 64px)' }}>
                {/* 面包屑 */}
                <div className="w-full px-4 mb-3">
                    <Breadcrumb className="text-[1.07rem] font-semibold text-[#4a4a4a]" separator=">">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">开始</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">一面</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#">结束</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                {/* 节点选项 */}
                <div className="flex flex-col w-full items-center gap-4">
                    <div className="flex flex-col w-full items-center">
                        <div className="bg-white w-[95%] rounded-[8px] p-4 relative" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', zIndex: isDetailsVisible ? 3 : 2 }} onClick={changeDetailsVisibility}>
                            <div className="flex flex-col justify-between">
                                <div className="flex w-full justify-between items-center mb-3">
                                    {/* 节点名称 */}
                                    <p className="font-semibold text-[#4a4a4a] mt-[0.1rem]">科研部</p>
                                    {/* 节点状态提示 */}
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
                                {/* 节点描述 */}
                                <p className="text-[0.9rem] text-[#4a4a4a]">2024网络协会科研部干事招新一面</p>
                            </div>
                        </div>
                        {/* 展开详细信息 */}
                        {isDetailsVisible && (
                            <div className={`flex flex-col gap-2 w-[95%] bg-[#EFEFEF] rounded-b-[8px] p-3.5 mt-[-8px] relative ${isDetailsVisible ? 'slide-in' : 'slide-out'}`} style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', zIndex: 1 }}>
                                <div className="w-full">
                                    {/* 日期 */}
                                    <p className="text-right text-[0.85rem] text-[#4a4a4a] px-2 mt-1 mb-1">9月21日</p>
                                    <div className="flex flex-col gap-2">
                                        {/* 场次 */}
                                        <div className="flex w-full bg-white text-[0.9rem] justify-between rounded-[8px] py-1 px-3 mt-[0.1rem]">
                                            <p>第一场</p>
                                            <p>18:00-19:30</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllInterviews;
