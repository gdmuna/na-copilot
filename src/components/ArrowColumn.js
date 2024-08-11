'use client';

import { Card, CardBody } from '@nextui-org/react';
import Icon from '@/components/Icon'; // 确保引入 Icon 组件
import { useRouter } from 'next/navigation'; // 导入 useRouter

const ArrowColumn = ({ listProps = [] }) => {
    // 设置默认值为一个空数组
    const list = Array.isArray(listProps) ? listProps : []; // 确保 list 是一个数组

    const router = useRouter(); // 获取路由实例

    const handeClick = (path) => {
        router.push(path);
        console.log(path);
    };

    return (
        <div className="w-[95%] md:w-[60%]">
            <Card shadow>
                <CardBody className="m-0 p-0">
                    {list.map((item, index) => (
                        <div onClick={() => handeClick(item.path)} key={index} className="pr-3 pl-3 h-16 flex w-full place-content-between place-items-center hover:bg-slate-100">
                            <b className="text-2xl text-gray-700">{item.title}</b>
                            <Icon type="goRight" extraclass="text-gray-700" size="20px" />
                        </div>
                    ))}
                </CardBody>
            </Card>
        </div>
    );
};

export default ArrowColumn;
