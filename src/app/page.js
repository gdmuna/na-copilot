'use client';
import { useState } from 'react';
import UserList from '../components/userList';
import AvatarLogo from '@/components/avatarLogo';
import Icon from '@/components/Icon';
import { Button, Image } from '@nextui-org/react';
import ScrollingText from '@/components/ScrollingText';
import React from 'react';
import MyDrawer from '../components/_darwer'; // 确保引入 MyDrawer 组件
import Link from 'next/link';

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
      title: "面试系统",
      img: "./cgw.jpg",
      path: "/interview",
    },
    {
      title: "任务分布",
      img: "./cgw.jpg",
      path: "/task",
    },
    {
      title: "邮件通知",
      img: "./cgw.jpg",
      path: "/email",
    },
    {
      title: "外挂云盘",
      img: "./cgw.jpg",
      path: "/cloud",
    }
  ];

  return (
    <div className="max-w-[980px] w-[92%] h-full ">
      <div className='h-[9%] grid grid-cols-2'>
        <div className='h-full'>
          <AvatarLogo src="./cgw.jpg" name="陈椰蓉" position="宣传部干事" route="/user"/>
        </div>
        <div className='h-full flex justify-end place-items-center'>
          <Button isIconOnly color="warning" variant="faded" onClick={handleOpenDrawer}>
            <Icon type="menu" extraclass="text-orange-500" size='25px'/>
          </Button>
        </div>
      </div> 
      <div className='h-[91%] overflow-auto hide-scrollbar'>
        <div className='h-[3%] w-full'>
          <ScrollingText text="欢迎使用本系统"/>
        </div>
        <div className='mt-2 mb-2 h-[35%] w-full grid grid-cols-2 md:grid-cols-4 gap-4' >
          {list.map((item, index) => (
            <Link href={item.path}>
              <div key={index} className='h-full flex flex-col place-content-center place-items-center'>
                
                  <Image className='h-[110px] md:h-[140px]' src={item.img} alt={item.title} />
                  <b>{item.title}</b>
                
              </div>
            </Link>
          ))}
        </div>
        <div className=' h-[62%] flex place-items-center flex-col overflow mr-1 ml-1'>
          <UserList />
        </div>
      </div>
      <MyDrawer openOk={openOk}/> {/* 将 openOk 传递给 MyDrawer */}
    </div>
  );
};

export default Home;
