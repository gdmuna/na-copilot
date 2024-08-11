import Icon from '@/components/Icon';
import{Avatar, Chip } from '@nextui-org/react';
import ArrowColumn from '@/components/arrowColumn';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

const User = () =>  {

    const list = [
        {
          title: "编辑信息",
          path: "/",
        },
        {
          title: "任务分布",
          path: "/",
        },
        {
          title: "邮件通知",
          path: "/",
        },
        {
          title: "外挂云盘",
          path: "/",
        }
    ]

    return (
        <div className="max-w-[980px] w-[92%] h-full ">
            <div className='h-[9%] grid grid-cols-2'>
                <div className='h-full flex place-items-center ' >
                    <Link href="/">
                        <Icon type="back" extraclass="text-black-800 cursor-pointer" size='30px'/>
                    </Link>
                </div>
                <div className='h-full flex justify-end place-items-center'>
                    <p>先空者</p>
                </div>
            </div>
            <div className='h-[91%] w-full  overflow-auto hide-scrollbar'>
                <div className='flex place-content-center '>
                    <div className='flex gap-3 w-[95%] md:w-[60%]'>
                        <Avatar isBordered src='./cgw.jpg' className='w-20 h-20 m-1' />
                        <div className="flex flex-col place-content-center">
                            <b className="text-5xl pl-1">ssss</b>
                            <Chip color="warning" variant="faded" size="lg">sss</Chip>
                        </div>
                    </div>
                </div>
                <div className='mt-3 mb-3 w-full  flex place-content-center'>
                    <ArrowColumn listProps={list} />
                </div>
                <div className='w-[full] flex place-content-center'>
                    <div className='w-[95%] md:w-[60%] flex place-content-center'>
                        <Button color="danger" variant="shadow" className='w-full max-w-[500px]'>退出登录</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;