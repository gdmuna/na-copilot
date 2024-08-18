"use client";
import React, { useState } from 'react';
import Icon from '@/components/Icon';
import { Avatar } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import Link from 'next/link';
import CustomModal from '@/components/ModalOne';

const User = () => {
    const user = [
        {
            name: '沸羊羊',
            shetuan: 'ACM协会',
            bumeng: '宣传部',
            zhiwei: '部长',
            phone: '13287981234',
            email: '1233214569@qq.com',
            student: '24209010001',
            wechat: '1233214569',
            path: '/'
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [currentModal, setCurrentModal] = useState(null);
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [student, setStudent] = React.useState("");
    const [wechat, setWechat] = React.useState("");
    const validateName = (name) => name.match(/^[\u4e00-\u9fa5A-Za-z]{2,15}$/i);
    const validatePhone = (phone) => phone.match(/^1\d{10}$/i);
    const validateEmail = (email) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    const validateStudent = (student) => student.match(/^2\d{10}$/i);
    const validateWechat = (wechat) => wechat.match(/^[a-zA-Z0-9_]{1,20}$/i);

    const isNameInvalid = React.useMemo(() => {
        if (name === "") return false;
        return !validateName(name);
    }, [name]);

    const isPhoneInvalid = React.useMemo(() => {
        if (phone === "") return false;
        return !validatePhone(phone);
    }, [phone]);

    const isEmailInvalid = React.useMemo(() => {
        if (email === "") return false;
        return !validateEmail(email);
    }, [email]);

    const isStudentInvalid = React.useMemo(() => {
        if (student === "") return false;
        return !validateStudent(student);
    }, [student]);

    const isWechatInvalid = React.useMemo(() => {
        if (wechat === "") return false;
        return !validateWechat(wechat);
    }, [wechat]);
    const openModal = (modal) => {
        setCurrentModal(modal);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentModal(null);
    };
    const shetuanOptions = [
        { id: 1, shetuan: 'ACM协会' },
        { id: 2, shetuan: '网络协会' },
        { id: 3, shetuan: '软件协会' }
    ];

    const bumengOptions = [
        { id: 1, bumeng: '宣传部' },
        { id: 2, bumeng: '财务处' },
        { id: 3, bumeng: '活动处' }
    ];

    const zhiweiOptions = [
        { id: 1, zhiwei: '部长' },
        { id: 2, zhiwei: '副部长' },
        { id: 3, zhiwei: '干事' }
    ];

    const [selectedShetuan] = useState(user[0].shetuan);
    const [selectedBumeng] = useState(user[0].bumeng);
    const [selectedZhiwei] = useState(user[0].zhiwei);

    return (
        <div className="max-w-[980px] bg-[#F9F9F9] w-full h-full flex flex-col items-center justify-start">
            {user.map((item, index) => (
                <div key={index} className="flex-grow w-full">
                    <div className="flex items-center justify-between">
                        <div className="flex justify-start">
                            <Link href='/user'>
                                <Icon type="back" extraclass="text-black-800 cursor-pointer" size="30px" />
                            </Link>
                        </div>
                        <div className="flex-grow flex justify-center mr-8">
                            <b className="text-2xl">个人资料</b>
                        </div>
                    </div>
                    <div className="h-[91%] w-full overflow-auto hide-scrollbar flex flex-col items-center justify-center mt-8"> {/* 这里添加了 justify-center */}
                        <div className="rounded-full">
                            <Avatar
                                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                                className="w-[100px] h-[100px]"
                                isBordered
                            />
                        </div>
                        {/* 个人资料卡片 */}
                        <div className="mt-6 mb-3 w-[90%]">
                            <Card className="w-full shadow-md bg-white">
                                <CardBody>
                                    <div className="flex justify-between items-center py-3 px-3" onClick={() => openModal('name')}>
                                        <p className="text-xl text-[#4A4A4A]">姓名</p>
                                        <p className="text-lg text-[#4A4A4A]">{item.name} <Icon className="mr-2" type="goRight" extraclass="text-gray-700" size="15px" /></p>
                                    </div>
                                    <div className="flex justify-between items-center py-3 px-3" onClick={() => openModal('shetuan')}>
                                        <p className="text-xl text-[#4A4A4A]">社团</p>
                                        <p className="text-lg text-[#4A4A4A]">{selectedShetuan} <Icon className="mr-2" type="goRight" extraclass="text-gray-700" size="15px" /></p>
                                    </div>
                                    <div className="flex justify-between items-center py-3 px-3" onClick={() => openModal('bumeng')}>
                                        <p className="text-xl text-[#4A4A4A]">部门</p>
                                        <p className="text-lg text-[#4A4A4A]">{selectedBumeng} <Icon className="mr-2" type="goRight" extraclass="text-gray-700" size="15px" /></p>
                                    </div>
                                    <div className="flex justify-between items-center py-3 px-3" onClick={() => openModal('zhiwei')}>
                                        <p className="text-xl text-[#4A4A4A]">职位</p>
                                        <p className="text-lg text-[#4A4A4A]">{selectedZhiwei} <Icon className="mr-2" type="goRight" extraclass="text-gray-700" size="15px" /></p>
                                    </div>
                                    <div className="flex justify-between items-center py-3 px-3" onClick={() => openModal('phone')}>
                                        <p className="text-xl text-[#4A4A4A]">手机号</p>
                                        <p className="text-lg text-[#4A4A4A]">{item.phone} <Icon className="mr-2" type="goRight" extraclass="text-gray-700" size="15px" /></p>
                                    </div>
                                    <div className="flex justify-between items-center py-3 px-3" onClick={() => openModal('email')}>
                                        <p className="text-xl text-[#4A4A4A]">邮箱</p>
                                        <p className="text-lg text-[#4A4A4A]">{item.email} <Icon className="mr-2" type="goRight" extraclass="text-gray-700" size="15px" /></p>
                                    </div>
                                    <div className="flex justify-between items-center py-3 px-3" onClick={() => openModal('student')}>
                                        <p className="text-xl text-[#4A4A4A]">学号</p>
                                        <p className="text-lg text-[#4A4A4A]">{item.student} <Icon className="mr-2" type="goRight" extraclass="text-gray-700" size="15px" /></p>
                                    </div>
                                    <div className="flex justify-between items-center py-3 px-3" onClick={() => openModal('wechat')} >
                                        <p className="text-xl text-[#4A4A4A]">微信</p>
                                        <p className="text-lg text-[#4A4A4A]">{item.wechat} <Icon className="mr-2" type="goRight" extraclass="text-gray-700" size="15px" /></p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        {/* 社团部门职位选择弹窗 */}
                        {currentModal === 'shetuan' && (
                            <CustomModal
                                title="请选择"
                                text={(
                                    <>
                                        <Select defaultSelectedKeys={[selectedShetuan]} labelPlacement="outside-left" label="社团" className="w-[100%]">
                                            {shetuanOptions.map((option) => (
                                                <SelectItem key={option.shetuan} value={option.shetuan}>
                                                    {option.shetuan}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                        <Select defaultSelectedKeys={[selectedBumeng]} labelPlacement="outside-left" label="部门" className="w-[100%]">
                                            {bumengOptions.map((option) => (
                                                <SelectItem key={option.bumeng} value={option.bumeng}>
                                                    {option.bumeng}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                        <Select defaultSelectedKeys={[selectedZhiwei]} labelPlacement="outside-left" label="职位" className="w-[100%]">
                                            {zhiweiOptions.map((option) => (
                                                <SelectItem key={option.zhiwei} value={option.zhiwei}>
                                                    {option.zhiwei}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                    </>)}
                                isOpen={isOpen}
                                modalPlacement='bottom'
                                onOpenChange={closeModal}
                                color="#FDDDB4"
                                route="/user/userSettings"
                            />
                        )}
                        {/* 姓名修改弹窗 */}
                        {currentModal === 'name' && (
                            <CustomModal
                                text={(
                                    <Input
                                        value={name}
                                        type="name"
                                        label="请输入新姓名"
                                        onValueChange={setName}
                                        variant="bordered"
                                        isInvalid={isNameInvalid}
                                        color={isNameInvalid ? "warning" : ""}
                                        errorMessage="请输入2到15的姓名"
                                        className="w-[100%]"
                                    />
                                )}
                                isOpen={isOpen}
                                modalPlacement='bottom'
                                onOpenChange={closeModal}
                                color="#FDDDB4"
                                route="/user/userSettings"
                            />
                        )}
                        {/* 手机号修改弹窗 */}
                        {currentModal === 'phone' && (
                            <CustomModal
                                text={(
                                    <Input
                                        value={phone}
                                        type="phone"
                                        label="请输入新手机号"
                                        onValueChange={setPhone}
                                        variant="bordered"
                                        isInvalid={isPhoneInvalid}
                                        color={isPhoneInvalid ? "warning" : ""}
                                        errorMessage="请输入正确的手机号码"
                                        className="w-[100%]"
                                    />
                                )}
                                isOpen={isOpen}
                                modalPlacement='bottom'
                                onOpenChange={closeModal}
                                color="#FDDDB4"
                                route="/user/userSettings"
                            />
                        )}
                        {/*邮箱修改弹窗 */}
                        {currentModal === 'email' && (
                            <CustomModal
                                text={(
                                    <Input
                                        value={email}
                                        type="email"
                                        label="请输入新邮箱"
                                        onValueChange={setEmail}
                                        variant="bordered"
                                        isInvalid={isEmailInvalid}
                                        color={isEmailInvalid ? "warning" : ""}
                                        errorMessage="请输入正确的邮箱"
                                        className="w-[100%]"
                                    />
                                )}
                                isOpen={isOpen}
                                modalPlacement='bottom'
                                onOpenChange={closeModal}
                                color="#FDDDB4"
                                route="/user/userSettings"
                            />
                        )}
                        {/*学号修改弹窗 */}
                        {currentModal === 'student' && (
                            <CustomModal
                                text={(
                                    <Input
                                        value={student}
                                        type="student"
                                        label="请输入新学号"
                                        onValueChange={setStudent}
                                        variant="bordered"
                                        isInvalid={isStudentInvalid}
                                        color={isStudentInvalid ? "warning" : ""}
                                        errorMessage="请输入正确的学号"
                                        className="w-[100%]"
                                    />
                                )}
                                isOpen={isOpen}
                                modalPlacement='bottom'
                                onOpenChange={closeModal}
                                color="#FDDDB4"
                                route="/user/userSettings"
                            />
                        )}
                        {/*微信修改弹窗 */}
                        {currentModal === 'wechat' && (
                            <CustomModal
                                text={(
                                    <Input
                                        value={wechat}
                                        type="wechat"
                                        label="请输入新微信号"
                                        onValueChange={setWechat}
                                        variant="bordered"
                                        isInvalid={isWechatInvalid}
                                        color={isWechatInvalid ? "warning" : ""}
                                        errorMessage="请输入正确的微信号"
                                        className="w-[100%]"
                                    />
                                )}
                                isOpen={isOpen}
                                modalPlacement='bottom'
                                onOpenChange={closeModal}
                                color="#FDDDB4"
                                route="/user/userSettings"
                            />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default User;
