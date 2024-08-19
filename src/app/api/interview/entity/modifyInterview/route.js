import { apiHandler } from '@/middleware/apiHandler';
import entityService from '@/service/entityService';
export async function PUT(req) {
    return apiHandler(async () => {
        const { id, name, description } = await req.json();
        await entityService.modifyInterview({ id, name, description });
        return {
            code: 0,
            msg: 'success'
        };
    })(req);
}
