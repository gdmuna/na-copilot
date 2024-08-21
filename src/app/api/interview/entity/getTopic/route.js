import { apiHandler } from '@/middleware/apiHandler';
import entityService from '@/service/entityService';

export async function GET(req) {
    return apiHandler(async () => {
        const { searchParams } = new URL(req.url);
        const interviewId = searchParams.get('interviewId');
        const roundId = searchParams.get('roundId');
        const result = await entityService.getTopic({ interviewId, roundId });
        return {
            code: 0,
            msg: 'success',
            data: result
        };
    })(req);
}
