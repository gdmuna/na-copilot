import entityDao from '@/dao/entityDao';
const entityService = {
    //获取面试实体列表
    getEntityList: async () => {
        const entities = await entityDao.getEntityList();
        return entities;
    },

    //获取面试实体信息
    getInterviewInfo: async (interviewId) => {
        const interviewInfo = await entityDao.getInterviewInfo(interviewId);
        return interviewInfo;
    },

    //创建面试实体
    createInterview: async ({ id, name, description }) => {
        const result = await entityDao.createInterview({ id, name, description });
        return result;
    },

    // 修改面试实体信息
    modifyInterview: async ({ id, name, description }) => {
        const result = await entityDao.modifyInterview({ id, name, description });
        return result;
    },

    // 删除面试实体信息
    deleteInterview: async (id) => {
        const result = await entityDao.deleteInterview(id);
        return result;
    },

    //创建环节实体
    createRound: async ({ interviewId, id, name, description, type, sort }) => {
        const result = await entityDao.createRound({ interviewId, id, name, description, type, sort });
        return result;
    },

    //创建节点实体
    createTopic: async ({ roundId, topic, name, description, type }) => {
        const result = await entityDao.createTopic({ roundId, topic, name, description, type });
        return result;
    },

    //修改环节实体的信息
    modifyRound: async ({ interviewId, id, name, description, type, sort }) => {
        const result = await entityDao.modifyRound({ interviewId, id, name, description, type, sort });
        return result;
    },

    //修改节点实体的信息
    modifyTopic: async ({ roundId, topic, name, description, type }) => {
        const result = await entityDao.modifyTopic({ roundId, topic, name, description, type });
        return result;
    },

    //创建场次实体
    createSession: async ({ roundId, session, name, description, time, place, topic }) => {
        const result = await entityDao.createSession({ roundId, session, name, description, time, place, topic });
        return result;
    },

    //修改场次实体的信息
    modifySession: async ({ roundId, session, name, description, time, place, topic }) => {
        const result = await entityDao.modifySession({ roundId, session, name, description, time, place, topic });
        return result;
    },

    //获取场次信息
    getSession: async ({ topic, roundId }) => {
        const result = await entityDao.getSession({ topic, roundId });
        return result;
    },

    //获取节点
    getTopic: async ({ roundId, interviewId }) => {
        const result = await entityDao.getTopic({ roundId, interviewId });
        return result;
    },

    //获取轮次
    getRound: async ({ interviewId }) => {
        const result = await entityDao.getRound({ interviewId });
        return result;
    }
};

export default entityService;
