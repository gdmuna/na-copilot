import request from '@/utils/request';
const moduleUrl = '/entity';
const entity = {
    //获取面试实体列表
    getEntityList() {
        return request.get(`${moduleUrl}/list`);
    },

    //获取面试实体信息
    getInterviewInfo(data) {
        return request.get(`${moduleUrl}/getEntityInfo`, {
            params: { data }
        });
    },

    //创建面试实体
    createInterview(data) {
        return request.post(`${moduleUrl}/createInterview`, data);
    },

    //修改面试实体信息
    modifyInterview(data) {
        return request.put(`${moduleUrl}/modifyInterview`, data);
    },

    //删除面试实体信息
    deleteInterview(data) {
        return request.delete(`${moduleUrl}/delete`, data);
    },

    //创建环节实体
    createRound(data) {
        return request.post(`${moduleUrl}/createRound`, data);
    },

    //创建节点实体
    createTopic(data) {
        return request.post(`${moduleUrl}/createTopic`, data);
    },

    //修改环节实体的信息
    modifyRound(data) {
        return request.put(`${moduleUrl}/modifyRound`, data);
    },

    //创建场次实体
    createSession(data) {
        return request.post(`${moduleUrl}/createSession`, data);
    },

    //修改场次实体的信息
    modifySession(data) {
        return request.put(`${moduleUrl}/modifySession`, data);
    }
};

export default entity;
