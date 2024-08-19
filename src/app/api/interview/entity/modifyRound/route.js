import { apiHandler } from '@/middleware/apiHandler';
import entityService from '@/service/entityService';

export async function PUT(req) {
    return apiHandler(async () => {
        const { interviewId, id, name, description, type, sort } = await req.json();
        await entityService.modifyRound({ interviewId, id, name, description, type, sort });
        return {
            code: 0,
            msg: 'success'
        };
    })(req);
}
