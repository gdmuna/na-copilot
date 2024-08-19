import { apiHandler } from '@/middleware/apiHandler';
import entityService from '@/service/entityService';

export async function PUT(req) {
    return apiHandler(async () => {
        const { roundId, topic, name, description, type } = await req.json();
        await entityService.modifyTopic({ roundId, topic, name, description, type });
        return {
            code: 0,
            msg: 'success'
        };
    })(req);
}
