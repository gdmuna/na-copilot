import request from '@/utils/request';

const moduleUrl = '/user';

const user = {
    
    getUserList(data) {
        
        return request.post(`${moduleUrl}/getUserList`, data);
    },
};

export default user;

