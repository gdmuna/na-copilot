import { apiHandler } from '@/middleware/apiHandler';
import entityService from '@/service/entityService';

export async function GET(req) {
    return apiHandler(async () => {
        const interviewEntities = await entityService.getEntityList();
        return {
            code: 0,
            msg: 'success',
            data: interviewEntities
        };
    })(req);
}
