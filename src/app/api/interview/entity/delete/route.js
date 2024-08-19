import { apiHandler } from '@/middleware/apiHandler';
import entityService from '@/service/entityService';
export async function DELETE(req) {
    return apiHandler(async () => {
        const { id } = await req.json();
        await entityService.deleteInterview({ id });
        return {
            code: 0,
            msg: 'success'
        };
    })(req);
}
