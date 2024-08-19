import { apiHandler } from '@/middleware/apiHandler';
import entityService from '@/service/entityService';

export async function GET(req) {
    return apiHandler(async () => {
        const { searchParams } = new URL(req.url);
        const interviewId = searchParams.get('interviewId');
        if (!interviewId) {
            throw new Error('interviewId is required');
        }
        const interviewInfo = await entityService.getInterviewInfo(interviewId);
        return {
            code: 0,
            msg: 'success',
            data: interviewInfo
        };
    })(req);
}
