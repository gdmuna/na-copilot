// service/authService.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v7 as uuidv7 } from 'uuid'; // 导入 UUIDv7 生成器

import authDao from '../dao/authDao'; // 使用默认导入

const authService = {
    // 用户登录
    login: async (account, password) => {
        const user = await authDao.login(account);
        if (!user || !user.passwordhash) {
            throw new Error('User not found or invalid data');
        }

        const match = await bcrypt.compare(password, user.passwordhash);
        if (!match) {
            throw new Error('Password mismatch');
        }

        const token = jwt.sign(
            {
                userId: user.userId,
                userAccount: user.account
            },
            process.env.JWT_SECRET, // 确保获取到正确的配置
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        );

        return token;
    },

    // 用户注册
    register: async (account, password) => {
        // 查询是否存在该账号
        const queryResult = await authDao.queryAccount(account);
        if (queryResult.length > 0) {
            return { code: 1, message: '账号已存在', data: 'HAD' };
        }
        try {
            // Generate UUIDv7
            const userId = uuidv7();

            // Hash password
            const saltRounds = 10;
            const passwordHash = await bcrypt.hash(password, saltRounds);

            // Save to database
            await authDao.register(account, passwordHash, userId);

            return { code: 0, message: '注册成功', data: true };
        } catch (error) {
            console.error('Registration error:', error);
            throw new Error('注册失败');
        }
    },

    // 凭证校验
    tokenVerify: async (token) => {
        try {
            return await jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            console.error('Token verification error:', err);
            return null;
        }
    }
};

export default authService; // 使用默认导出
