import { apiHandler } from '@/middleware/apiHandler';
import entityService from '@/service/entityService';

export async function GET(req) {
    return apiHandler(async () => {
        const { searchParams } = new URL(req.url);
        const topic = searchParams.get('topic');
        const roundId = searchParams.get('roundId');
        const result = await entityService.getSession({ topic, roundId });
        return {
            code: 0,
            msg: 'success',
            data: result
        };
    })(req);
}
