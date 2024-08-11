import authService from '../../../../service/authService';

export async function POST(req) {
    const { account, password } = await req.json(); // 从请求体获取用户账号和密码

    try {
        const token = await authService.login(account, password);
        
        if (token) {
            return new Response(JSON.stringify({ code: 0, message: '登录成功', data: token }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            return new Response(JSON.stringify({ code: 1, message: '登录失败' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (error) {
        console.error('Login error:', error);
        return new Response(JSON.stringify({ message: '登录过程中出现错误' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
