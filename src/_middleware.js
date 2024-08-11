import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// 接口前缀白名单
const apiPrefixWhiteList = [
    '/api/auth', // 认证相关接口
    '/api/public' // 公开访问接口
];


// 鉴权函数
export async function middleware(req) {
    const { pathname } = req.nextUrl;

    console.log('中间件Middleware is running for path:', pathname);

    // 放行白名单路径
    const isWhitelisted = apiPrefixWhiteList.some((prefix) => pathname.startsWith(prefix));
    
    if (isWhitelisted) {
        return NextResponse.next(); // 放行
    }

    // 处理授权逻辑
    const authorization = req.headers.get('authorization');
    if (!authorization) {
        return new Response('未提供 Authorization', { status: 401 });
    }

    const token = authorization.split(' ')[1];
    if (!token) {
        return new Response('Authorization 格式不满足 OAuth2 标准', { status: 401 });
    }

    // 使用 jose 验证 token
    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
        req.payload = payload; // 存储 payload
        return NextResponse.next(); // 继续处理请求
    } catch (error) {
        console.error('Token verification error:', error);
        return new Response('token 无效', { status: 401 });
    }
}

// 导出配置
export const config = {
    matcher: ['/api/:path*'], // 只对 /api 路径下的请求应用该中间件
};
