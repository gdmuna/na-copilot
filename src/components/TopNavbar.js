// components/TopNavbar.js
import React from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';

const TopNavbar = ({ title, route }) => {
    return (
        <div className="flex h-[4rem] w-full px-4 justify-between items-center bg-[#FFFFFF]" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <div className="flex h-full items-center">
                <Link href={route}>
                    <Icon type="back" extraclass="text-black-800 cursor-pointer text-[#4a4a4a]" size="20px" />
                </Link>
            </div>
            <div className="flex h-full items-center">
                <b className="text-xl text-[#4a4a4a]">{title}</b>
            </div>
            <div className="w-[20px]"></div>
        </div>
    );
};

export default TopNavbar;
