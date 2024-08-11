import authService from '../../../../service/authService';

export async function POST(req) {
    const { account, password } = await req.json(); // 从请求体获取用户账号和密码

    try {
        const result = await authService.register(account, password);

        // 返回注册结果
        return new Response(JSON.stringify({ code: 0, message: result.message, data: result.data }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Registration error:', error);
        
        // 返回错误信息
        return new Response(JSON.stringify({ code: 1, message: error.message || '注册失败' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
