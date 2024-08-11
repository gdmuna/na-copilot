import userDao  from '../dao/userDao';

const userService = {
    getRecordsByField: async (field, keyword) => {
        const users = await userDao.getRecordsByField(field, keyword);
        return users;
    }
};

export default userService; // 使用默认导出
