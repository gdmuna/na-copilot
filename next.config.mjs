/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';

// 加载环境变量
dotenv.config();

const nextConfig = {
  // 其他 Next.js 配置
  env: {
    DATABASE_URL: process.env.DATABASE_URL, // 将 DATABASE_URL 环境变量传递给客户端
  },
};

export default nextConfig;
