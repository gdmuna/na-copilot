import authentication from '@/utils/authentication';

const auth = {
    // 用户登录
    login(data) {
        return authentication.login(data);
    },
    // 用户注册
    register(data) {
        return authentication.register(data);
    },
    tokenVerify() {
        return authentication.tokenVerify();
    }
};

export default auth;
