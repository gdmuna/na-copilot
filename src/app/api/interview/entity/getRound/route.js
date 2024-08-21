import { apiHandler } from '@/middleware/apiHandler';
import entityService from '@/service/entityService';

export async function GET(req) {
    return apiHandler(async () => {
        const { searchParams } = new URL(req.url);
        const interviewId = searchParams.get('interviewId');
        const result = await entityService.getRound({ interviewId });
        return {
            code: 0,
            msg: 'success',
            data: result
        };
    })(req);
}
