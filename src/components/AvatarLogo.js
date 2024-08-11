import { Avatar, Chip } from '@nextui-org/react';
import { useRouter } from 'next/navigation'; // 导入 useRouter

const AvatarLogo = ({ src, name, position, route }) => {
    const router = useRouter(); // 获取路由实例

    const handleClick = () => {
        router.push(route); // 跳转到指定的路由
    };

    return (
        <div className="w-full h-[10vh] flex place-items-center gap-2">
            <div className="flex place-items-center gap-2 cursor-pointer" onClick={handleClick}>
                <Avatar isBordered src={src} size="lg" />
                <div className="flex flex-col">
                    <b className="text-2xl pl-1">{name}</b>
                    <Chip color="warning" variant="faded" size="sm">
                        {position}
                    </Chip>
                </div>
            </div>
        </div>
    );
};

export default AvatarLogo;
