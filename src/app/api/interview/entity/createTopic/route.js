import { apiHandler } from '@/middleware/apiHandler';
import entityService from '@/service/entityService';

//创建节点实体
export async function POST(req) {
    return apiHandler(async () => {
        const { roundId, topic, name, description, type } = await req.json();
        await entityService.createTopic({ roundId, topic, name, description, type });
        return {
            code: 0,
            msg: 'success'
        };
    })(req);
}
