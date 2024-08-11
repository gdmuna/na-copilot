
import { apiHandler } from '../../../../middleware/apiHandler';

import userService from '../../../../service/userService';

export async function POST(req) {
  try {

    const { wobject, keyword } = await req.json(); // 从请求体中获取 wobject 和 keyword

    // 检查参数
    if (!wobject || !keyword) {
      return new Response(JSON.stringify({ error: 'wobject and keyword are required' }), { status: 400 });
    }

    return apiHandler(async () => {
      const users = await userService.getRecordsByField(wobject, keyword); // 确保这个调用正确
      
      return users; // 返回用户数据
    })(req);
    
  } catch (error) {
    console.error('Error in API:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
