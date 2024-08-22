'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { Image, Chip } from '@nextui-org/react';
import UserInfo from '@/components/UserInfo'; // 面试者信息组件
import InterviewerList from '@/components/InterviewerList'; // 面试官列表组件
import InterviewerEvaluation from '@/components/InterviewerEvaluation'; // 面试官评价组件

const InterviewUser = () => {
    // 当前选中的面试官索引，默认为第一个面试官
    const [selectedInterviewerIndex, setSelectedInterviewerIndex] = useState(0);
    
    // 模拟的用户数据
    const user = {
        userId: 666,
        name: '吗喽',
        bumeng: '黑神话悟空',
        image: 'https://ts1.cn.mm.bing.net/th/id/R-C.3f7c90d543ff16cf84d0e1fd84d6319d?rik=PyXvyXeptQhKWw&riu=http%3a%2f%2fwww.gamelook.com.cn%2fwp-content%2fuploads%2f2020%2f08%2f1-14-1.png&ehk=wbw%2bn%2fw%2fkLte%2fH0z01T3lbKwB3PzZOeu%2bmmUx3V0%2bo0%3d&risl=&pid=ImgRaw&r=0',
        student: '20239010001',
        nianji: '2023级',
        phone: '12332101300',
        xueyuan: '生物医学工程学院',
        email: '2053619887@qq.com',
        zhuanye: '信息管理与信息系统',
        wechat: 'KJvHakbnlK',
        mianmao: '共青团员',
        techang: '吃饭, 睡觉, 打豆豆',
        text: '黑吗喽，启动',
        img: [
            'https://img2.baidu.com/it/u=555387571,2506329404&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500',
            'https://img1.baidu.com/it/u=2789206540,2533848471&fm=253&fmt=auto&app=138&f=JPEG?w=1422&h=800'
        ],
        video: 'https://www.bilibili.com/video/BV1oH4y1c7Kk?t=0.0',
        interview: [
            {
                name: '星铁',
                image: 'https://moetoutiao.com/wp-content/uploads/2022/05/img_6276784b28da5.jpg',
                zhiwei: '宣传部部长',
                score: '9',
                text: '玩原神玩的',
            },
            {
                name: '原神',
                image: 'https://gd-hbimg.huaban.com/f3cc5b767a0437ec48c27a42835ea8b22235e7a35a256-VfYpGo_fw658',
                zhiwei: '宣传部副部',
                score: '9.5',
                text: '玩绝区零玩的',
            },
            {
                name: '绝区零',
                image: 'https://moetoutiao.com/wp-content/uploads/2022/05/img_6276784b93b8a.jpg',
                zhiwei: '网络协会会长',
                score: '10',
                text: '玩星穹铁道玩的',
            },
        ]
    };

    return (
        <div className='max-w-[980px] bg-[#F9F9F9] w-full h-[100vh] mx-auto my-4 p-4 rounded-lg shadow-md overflow-y-auto'>
            {/* 返回首页的链接 */}
            <div className='ml-2'>
                <Link href='/interview'>
                    <Icon type="back" className="text-black-800 cursor-pointer" size="30px" />
                </Link>
            </div>
            {/* 头部信息部分 */}
            <div>
                <div className="flex justify-between items-center ml-2 mr-2">
                    <div className="flex flex-col ml-2 mt-4">
                        {/* 显示用户名字 */}
                        <b className="text-2xl ml-2 pl-2">{user.name}</b>
                        {/* 显示用户意向部门 */}
                        <Chip className="bg-[#D3F5E7] rounded-full px-2 py-4 mt-3 text-center">
                            <span className="text-sm text-[#333]">意向部门：{user.bumeng}</span>
                        </Chip>
                    </div>
                    {/* 显示用户头像 */}
                    <Image width={90} height={120} src={user.image}/>
                </div>
                {/* 显示用户详细信息 */}
                <UserInfo user={user} />
                {/* 显示面试官列表 */}
                <InterviewerList
                    interviewers={user.interview}
                    selectedInterviewerIndex={selectedInterviewerIndex}
                    setSelectedInterviewerIndex={setSelectedInterviewerIndex}
                />
                {/* 显示选中面试官的评价 */}
                <InterviewerEvaluation
                    selectedInterviewer={user.interview[selectedInterviewerIndex]}
                    index={selectedInterviewerIndex} // 传递 index
                />
                {/* 面试记录部分 */}
                <div className='mt-4 bg-white p-4 rounded-lg shadow-md'>
                    <b className="flex justify-center items-center text-[18px]">面试记录</b>
                    {/* 照片部分 */}
                    <b className="text-gray-500">照片 ：</b>
                    <div className='grid grid-cols-10'>
                        {user.img.map((photo, index) => (
                            <div className='mt-1 space-y-1 p-1 space-x-2 col-span-5' key={index}>
                                <Image src={photo}/>
                            </div>
                        ))}
                    </div>
                    {/* 录像部分 */}
                    <b className="text-gray-500">录像 ：</b>
                    <div className='grid grid-cols-10'>
                        <div className='mt-1 space-y-1 p-1 space-x-2 col-span-10'>
                            {/* 使用 a 标签包裹 Image 组件，并设置 href 属性为视频链接 */}
                            <a href={user.video} target="_blank">
                                <Image src="https://ts1.cn.mm.bing.net/th/id/R-C.3f7c90d543ff16cf84d0e1fd84d6319d?rik=PyXvyXeptQhKWw&riu=http%3a%2f%2fwww.gamelook.com.cn%2fwp-content%2fuploads%2f2020%2f08%2f1-14-1.png&ehk=wbw%2bn%2fw%2fkLte%2fH0z01T3lbKwB3PzZOeu%2bmmUx3V0%2bo0%3d&risl=&pid=ImgRaw&r=0"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewUser;
