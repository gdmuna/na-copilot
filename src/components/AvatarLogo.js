import { Avatar, Chip } from '@nextui-org/react';
import { useRouter } from 'next/navigation'; // 导入 useRouter

const AvatarLogo = ({ src, name, position, route }) => {
    const router = useRouter(); // 获取路由实例

    const handleClick = () => {
        router.push(route); // 跳转到指定的路由
    };

    return (
        <div className="w-full h-[10vh] flex place-items-center gap-2 mt-4">
            <div className="flex place-items-center gap-2 cursor-pointer ml-2" onClick={handleClick}>
                <Avatar isBordered src={src} className='w-[90px] h-[90px]' />
                <div className="flex flex-col ml-2 mt-4">
                    <b className="text-2xl pl-2">{name}</b>
                    <Chip className={`bg-[#D3F5E7] rounded-full px-3 py-1 mt-2 text-center`}>
                    <span className="text-md text-[#333]">{position}</span>
                    </Chip>
                </div>
            </div>
        </div>
    );
};

export default AvatarLogo;
