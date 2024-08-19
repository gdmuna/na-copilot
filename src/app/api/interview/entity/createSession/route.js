import { apiHandler } from '@/middleware/apiHandler';
import entityService from '@/service/entityService';
export async function POST(req) {
    return apiHandler(async () => {
        const { roundId, session, name, description, time, place, topic } = await req.json();
        await entityService.createSession({ roundId, session, name, description, time, place, topic });
        return {
            code: 0,
            msg: 'success'
        };
    })(req);
}
