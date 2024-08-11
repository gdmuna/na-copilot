// dao/userDao.js
import prisma from '../utils/db'; // 使用默认导入

const userDao = {
    // 用户登录
    login: async (account) => {
        try {
            // 使用标签模板字面量
            const user = await prisma.$queryRaw`SELECT id, account, password AS passwordHash FROM userinfo WHERE account = ${account}`;
            return user.length > 0 ? user[0] : null; // 如果找到了用户，返回第一个用户对象，否则返回 null
        } catch (error) {
            console.error('Database query error:', error);
            throw new Error('Database query failed');
        }
    },
    // 用户注册
    register: async (account, passwordHash, userId) => {
        try {
            await prisma.$executeRaw`
                INSERT INTO userinfo (account, password, id, nickname) VALUES (${account}, ${passwordHash}, ${userId}::uuid, '用户')
            `;
        } catch (error) {
            console.error('Error in register:', error);
            throw error; // 重新抛出错误以便在服务层捕获
        }
    },

    // 查询账户
    queryAccount: async (account) => {
        const sql = await prisma.$queryRaw`
            SELECT account FROM userinfo WHERE account = ${account}
        `;
        return sql;
    }
};

export default userDao; // 使用默认导出
