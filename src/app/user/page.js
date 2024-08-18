"use client";
import React from 'react';
import Icon from '@/components/Icon';
import AvatarLogo from '@/components/AvatarLogo';
import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";
import Link from 'next/link';
import CustomModal from '@/components/ModalOne';
import { useDisclosure } from "@nextui-org/react";

const User = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const user = [
        {
            name: '沸羊羊',
            shetuan: '网络协会',
            bumeng: 'BI部',
            zhiwei: '部长',
            path: '/'
        },
    ];

    return (
        <div className="max-w-[980px] bg-[#F9F9F9] w-full h-full flex flex-col justify-between">
            {user.map((item, index) => (
                <div key={index} className="flex-grow">
                    <div className="h-[9%] grid grid-cols-2">
                        <div className="h-full flex place-items-center">
                            <Link href={item.path}>
                                <Icon type="back" extraclass="text-black-800 cursor-pointer" size="30px" />
                            </Link>
                        </div>
                    </div>
                    <div className="h-[91%] w-full overflow-auto hide-scrollbar">
                        <div className="ml-6 mt-6">
                            <AvatarLogo src="./cgw.jpg" name={item.name} position={item.bumeng + item.zhiwei} />
                        </div>
                        {/* 个人资料卡片 */}
                        <div className="mt-7 mb-3 w-full flex place-content-center">
                            <Card className="w-[85%] shadow-md" >
                                <Link href={'/user/userSettings'}>
                                    <CardHeader className="flex justify-between items-center bg-[#DED5F2] py-2">
                                        <div className="flex flex-col">
                                            <p className="text-lg pl-2">个人资料</p>
                                        </div>
                                        <Icon className="mr-2" type="goRight" extraclass="text-gray-700" size="15px" />
                                    </CardHeader>
                                    <Divider />
                                    <CardBody>
                                        <p className="text-sm text-[#4A4A4A] mt-1 ml-1">名字：{item.name}</p>
                                        <p className="text-sm text-[#4A4A4A] mt-3 ml-1">社团：{item.shetuan}</p>
                                        <p className="text-sm text-[#4A4A4A] mt-3 ml-1">部门：{item.bumeng}</p>
                                        <p className="text-sm text-[#4A4A4A] mt-3 ml-1">职位：{item.zhiwei}</p>
                                    </CardBody>
                                    <Divider />
                                </Link>
                            </Card>
                        </div>
                        {/* 显示设置卡片 */}
                        <div className="mt-4 mb-3 w-full flex place-content-center">
                            <Card className="w-[85%] shadow-md">
                                <CardHeader className="flex justify-between items-center bg-[#D3F5E7] py-2">
                                    <div className="flex flex-col">
                                        <p className="text-lg pl-2">显示设置</p>
                                    </div>
                                    <Icon className="mr-2" type="goRight" extraclass="text-gray-700" size="15px" />
                                </CardHeader>
                                <Divider />
                                <CardBody>
                                    <p className="text-sm text-[#4A4A4A] mt-1 ml-1">暂时为空</p>
                                </CardBody>
                                <Divider />
                            </Card>
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex justify-center mt-4 mb-4">
                <Button className="w-[60%] bg-[#FDDDB4] text-xl py-6 font-semibold text-[white] max-w-[500px]" onPress={onOpen}>
                    退出登录
                </Button>
            </div>
            {/* 弹窗组件 */}
            <CustomModal
                title="确认退出登录?"
                text="您即将退出登录，确定继续吗？"
                isOpen={isOpen}
                modalPlacement='bottom'
                onOpenChange={onOpenChange}
                color="#FDDDB4"
                route="/auth/login"
            />
        </div>
    );
};

export default User;

