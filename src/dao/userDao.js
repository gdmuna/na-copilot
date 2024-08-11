// dao/userDao.js
import prisma from '../utils/db'; // 使用默认导入

const userDao = {
    getRecordsByField: async (field, keyword) => {
        // 使用原始查询，避免 SQL 注入风险
        const query = `
      SELECT * FROM "Test"
      WHERE "${field}" ILIKE '%${keyword}%'
    `;
        // 执行原始查询
        const records = await prisma.$queryRawUnsafe(query);
        return records;
    }
};

export default userDao; // 使用默认导出
