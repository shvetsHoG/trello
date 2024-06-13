import { axiosWithAuth } from '../api/interceptors.ts';
import {
    ITimeBlockResponse,
    TypeTimeBlockStateForm
} from '../types/time-block.types.ts';

export class TimeBlockService {
    private static BASE_URL = '/user/time-blocks';

    public static async getTimeBlocks() {
        return await axiosWithAuth.get<ITimeBlockResponse[]>(this.BASE_URL);
    }

    public static async createTimeBlock(data: TypeTimeBlockStateForm) {
        return await axiosWithAuth.post(this.BASE_URL, data);
    }

    public static async updateOrderTimeBlock(ids: string[]) {
        return await axiosWithAuth.put(`${this.BASE_URL}/update-order`, ids);
    }

    public static async updateTimeBlock(
        id: string,
        data: TypeTimeBlockStateForm
    ) {
        return await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data);
    }

    public static async deleteTimeBlock(id: string) {
        return await axiosWithAuth.delete(`${this.BASE_URL}/${id}`);
    }
}
