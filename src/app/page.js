'use client';
import { useState } from 'react';
import UserList from '@/components/UserList';
import AvatarLogo from '@/components/AvatarLogo';
import Icon from '@/components/Icon';
import { Button, Image } from '@nextui-org/react';
import ScrollingText from '@/components/ScrollingText';
import React from 'react';
import MyDrawer from '@/components/MyDrawer'; // 确保引入 MyDrawer 组件
import Link from 'next/link';
import dayjs from 'dayjs';
import { StepDescription } from '@chakra-ui/react';

const Home = () => {
    const [parentMessage, setParentMessage] = useState('我是你爹谁'); // 父组件的状态
    const [childMessage, setChildMessage] = useState(''); // 用于接收子组件传来的消息
    const [openOk, setOpenOk] = useState(false); // 使用状态来控制 Drawer 的打开状态

    const handleOpenDrawer = () => {
        setOpenOk(!openOk); // 点击按钮时打开 Drawer
    };

    const handleMessageFromChild = (message) => {
        setChildMessage(message); // 更新父组件的状态
    };

    const list = [
        {
            index: 1,
            title: "面试系统",
            gradient: "linear-gradient(-57deg,#61EDFA,#EAF7FF)",
            color: "#CBF0F9",
            path: '/interview'
        },
        {
            index: 2,
            title: "通知系统",
            gradient: "linear-gradient(-57deg, #E3C0F0,#DDDDDD)",
            color: "#DED5F2",
            path: '/task'
        },
        {
            index: 3,
            title: "任务发布",
            gradient: "linear-gradient(-57deg, #D0F6EB, #EFDFA3)",
            color: "#FDDDB4",
            path: '/email'
        },
        {
            index: 4,
            title: "外挂云盘",
            gradient: "linear-gradient(-57deg, #EEA4D8, #FCE4E2)",
            color: "#FDB4E3",
            path: '/cloud'
        }
    ];
    const someThing = [
        {
            name: "社团嘉年华摆摊",
            time: "2024-10-29 01:47:17",
            place: "15栋楼下大创办公室",
            type: "任务",
            path: '/'
        },
        {
            name: "网协招新面试",
            time: "2024-10-29 01:47:17",
            place: "15栋楼下大创办公室",
            type: "面试",
            path: '/'
        },
        {
            name: "网协招新面试",
            time: "2024-10-29 01:47:17",
            place: "15栋楼下大创办公室",
            type: "通知",
            path: '/'
        },
    ]
    const getColor = (type) => {
        switch (type) {
            case '通知': return '#FDDDB4';
            case '面试': return '#CBF0F9';
            case '任务': return '#DED5F2';
            default: return '#F5F5F5';
        }
    }
    const formatTime =(time) => {
        return dayjs(time).format('YYYY/MM/DD');
    }

    return (
        <div className="bg-[#F9F9F9] w-full min-h-screen overflow-y-auto">
            <div className="w-full">
                {/* 放置在页面上方的部分 */}
                <div className="grid grid-cols-2">
                    <div className="ml-4 mt-2">
                        <AvatarLogo src="./cgw.jpg" name="陈椰蓉" position="宣传部干事" route="/user" />
                    </div>
                    <div className="h-full flex justify-end place-items-center mr-6 mt-4">
                        <Button isIconOnly variant="faded" className=' bg-white shadow-md ' onClick={handleOpenDrawer}>
                            <Icon type="menu" className="text-black-800 cursor-pointer text-[#4a4a4a]" size="30px" />
                        </Button>
                    </div>
                </div>
                <div className="h-[4vh] w-[80%] ml-9 m-4 rounded-lg" style={{ backgroundColor: '#f5f5f5', borderRadius: '15px' }}>
                    <ScrollingText text="网协天下第一！" />
                </div>
            </div>

            <div className="mt-1 py-4 mb-2 m-[5%] w-[90%] grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-lg shadow-md">
                {list.map((item, index) => (
                    <Link href={item.path}>
                        <div key={item.index} className="h-full flex flex-col place-content-center place-items-center">
                            <div className="rounded-3xl h-[110px] w-[120px]" style={{ background: item.gradient }} />
                            <div className={`rounded-full px-4 py-2 w-5/5 text-small text-center mt-1`} style={{ background: item.color }}>
                                {item.title}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="px-4 mt-6">
                {someThing.map((item, index) => (
                    <div key={index} className="bg-white w-full mb-4 p-4 rounded-lg shadow-md">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                            <span className={`text-sm text-[white] px-2 py-1 rounded-full`} style={{ backgroundColor: getColor(item.type) }}>{item.type}</span>
                        </div>
                        <p className="text-sm text-[#4A4A4A80] mt-2">地址：{item.place}</p>
                        <p className="text-sm text-[#4A4A4A80]">时间：{formatTime(item.time)}</p>
                    </div>
                ))} 
            </div>
            {/* 其他内容 */}
            <MyDrawer openOk={openOk} /> {/* 将 openOk 传递给 MyDrawer */}
        </div>

    );
};

export default Home;
