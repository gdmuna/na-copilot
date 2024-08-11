import authService from '../../../../service/authService';

/**
 * @function POST
 * @description 凭证校验
 * @param {Object} req - 请求对象
 * @param {Object} res - 响应对象
 * @return {Object} - 凭证校验的结果
 */
export async function POST(req) {
    const { token } = await req.json(); // 从请求体中获取 token

    try {
        const payload = await authService.tokenVerify(token);
        if (payload) {
            // 返回有效凭证的响应
            return new Response(JSON.stringify({ code: 0, message: '凭证有效', valid: true }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            // 返回无效凭证的响应
            return new Response(JSON.stringify({ code: 1, message: '凭证无效' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (error) {
        console.error('Token verification error:', error);
        // 返回错误响应
        return new Response(JSON.stringify({ code: 1, message: '凭证校验失败' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
