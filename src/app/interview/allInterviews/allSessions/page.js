'use client';
import Link from 'next/link';
import TopNavbar from '@/components/TopNavbar';
import { Avatar, Wrap, WrapItem } from '@chakra-ui/react';

const AllSessions = () => {
    return (
        <div className="w-full h-full bg-[#F9F9F9]">
            {/* 顶部导航栏 */}
            <TopNavbar title="场次1" />

            {/* 页面主题内容 */}
            <div className="w-full p-4" style={{ height: 'calc(100% - 64px)' }}>
                {/* 环节+节点提示 */}
                <div className="flex w-[95%] gap-2 mb-4">
                    <div className="bg-[#CDF1EE] px-3 py-1 rounded-[10px] text-[#48474C]">
                        <p className="mt-[0.1rem]">一面</p>
                    </div>
                    <div className="bg-[#D3F5E7] px-3 py-1 rounded-[10px] text-[#48474C]">
                        <p className="mt-[0.1rem]">科研部</p>
                    </div>
                </div>

                {/* 面试官卡片 */}
                <div className="flex flex-col bg-white rounded-[15px] items-center gap-2 py-4" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    {/* 卡片标题 */}
                    <p className="w-full font-semibold text-[#4A4A4A] text-center mb-2">面试官</p>
                    {/* 面试官 */}
                    <div className="flex w-full justify-between px-4 gap-4">
                        {/* 单个面试官 */}
                        <div className="flex grow flex-col gap-2 items-center">
                            {/* 面试官头像 */}
                            <div className="flex flex-col items-center">
                                <Wrap>
                                    <WrapItem>
                                        <Avatar name="orangeAvatar" src="https://krseoul.imgtbl.com/i/2024/08/15/66bdd85c2e2b6.png" />
                                    </WrapItem>
                                </Wrap>
                            </div>
                            {/* 面试官姓名 */}
                            <div className="w-auto max-w-fit bg-[#858585] rounded-full py-1 px-3 text-center text-white font-middle">灰太狼</div>
                        </div>
                    </div>
                </div>

                {/* 面试者卡片 */}
                <div>
                    {/* 提示信息 */}
                    <div className="mt-4">
                        <p className="font-semibold text-[#4A4A4A]">面试者:</p>
                    </div>
                    <div className="flex w-full justify-center mb-4">
                        <p>后方挂号21人,共7组</p>
                    </div>

                    {/* 面试者分组卡片 */}
                    <div className="flex flex-col gap-4">
                        {/* 单个面试者组别卡片 */}
                        <div className="rounded-[10px]" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                            {/* 分组表头 */}
                            <div className="flex w-full bg-[#EFEFEF] px-5 py-3 rounded-t-[10px] justify-between">
                                {/* 组号提示 */}
                                <div className="bg-[#0E0E0E] px-3 py-0.5 rounded-[5px] text-white text-[0.9rem] font-semibold">
                                    <p>组1</p>
                                </div>
                                {/* 组别状态 */}
                                <div className="flex items-center justify-center text-[0.9rem] text-[#4C9163] font-semibold">
                                    <div className="bg-[#4C9163] w-[0.8rem] h-[0.8rem] mr-1 rounded-full"></div>
                                    <p>进行中</p>
                                </div>
                                {/* <div className="flex items-center justify-center text-[0.9rem] text-[#4A4A4A] font-semibold">
                                <div className="bg-[#4A4A4A] w-[0.8rem] h-[0.8rem] mr-1 rounded-full"></div>
                                <p>未开始</p>
                            </div>
                            <div className="flex items-center justify-center text-[0.9rem] text-[#DDAB2B] font-semibold">
                                <div className="bg-[#DDAB2B] w-[0.8rem] h-[0.8rem] mr-1 rounded-full"></div>
                                <p>已结束</p>
                            </div> */}
                            </div>

                            {/* 分组表单内容 */}
                            <div className="bg-white w-full rounded-b-[10px]">
                                {/* 单个面试者 */}
                                <div className="flex items-center px-5 py-2 gap-2">
                                    {/* 面试者头像 */}
                                    <div>
                                        <Wrap>
                                            <WrapItem>
                                                <Avatar size="sm" name="orangeAvatar" src="https://krseoul.imgtbl.com/i/2024/08/15/66bdd85c2e2b6.png" />
                                            </WrapItem>
                                        </Wrap>
                                    </div>
                                    {/* 面试者名字 */}
                                    <p className="text-[#4A4A4A] font-semibold">喜羊羊</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSessions;
