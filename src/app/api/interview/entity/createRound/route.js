import { v7 as uuidv7 } from 'uuid';
import { apiHandler } from '@/middleware/apiHandler';
import entityService from '@/service/entityService';
export async function POST(req) {
    return apiHandler(async () => {
        const { interviewId, name, description, type, sort } = await req.json();
        const id = uuidv7();
        await entityService.createRound({ interviewId, id, name, description, type, sort });
        return {
            code: 0,
            msg: 'success'
        };
    })(req);
}
