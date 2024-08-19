import { v7 as uuidv7 } from 'uuid';
import { apiHandler } from '@/middleware/apiHandler';
import entityService from '@/service/entityService';
export async function POST(req) {
    return apiHandler(async () => {
        const { name, description } = await req.json();
        const id = uuidv7();
        await entityService.createInterview({ id, name, description });
        return {
            code: 0,
            msg: 'success'
        };
    })(req);
}
