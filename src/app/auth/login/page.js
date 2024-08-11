'use client';
import Link from 'next/link';
import Icon from '@/components/Icon';



const Login = () => {
    return (
        <div className="max-w-[980px] w-[92%] h-full ">
            <div className='h-[9%] grid grid-cols-3'>
                <div className='h-full flex place-items-center ' >
                    <Link href="/">
                        <Icon type="back" extraclass="text-black-800 cursor-pointer" size='30px'/>
                    </Link>
                </div>
                <div className='h-full flex place-items-center justify-center'>
                    <b className='text-3xl'>登录</b>
                </div>
                <div className='h-full flex justify-end place-items-center'>
                    <p>先空者</p>
                </div>
            </div>
        </div>
    );
}

export default Login;