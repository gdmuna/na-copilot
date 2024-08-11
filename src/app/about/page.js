// app/page.tsx
'use client';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/react';
import React from 'react';
import { useState } from 'react';
import auth from '../api/auth/auth';

export default function Page() {
    const [data, setData] = useState(null);
    const test = async () => {
        const response = await fetch('/api/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.text(); // 获取文本数据
        setData(result); // 更新状态
    };

    const login = async () => {
        const response = await auth.login({ account: '91', password: '123456' });
        console.log(response);
    };

    return (
        <div className="h-screen flex place-content-center place-items-center flex-col">
            <Button color="primary" onClick={() => test()}>
                Click me
            </Button>
            <b>{data}</b>
            <Image isBlurred isZoomed width={200} src="https://nextui-docs-v2.vercel.app/images/album-cover.png" alt="NextUI Album Cover" className="m-5" />
            <Button color="success" onClick={() => login()}>
                Click me登录
            </Button>
        </div>
    );
}
