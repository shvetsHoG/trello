import { axiosWithAuth } from '../api/interceptors.ts';
import { ITaskResponse, TypeTaskFormState } from '../types/task.types.ts';

export class TaskService {
    private static BASE_URL = '/user/tasks';

    public static async getTasks() {
        return await axiosWithAuth.get<ITaskResponse[]>(this.BASE_URL);
    }

    public static async createTasks(data: TypeTaskFormState) {
        return await axiosWithAuth.post(this.BASE_URL, data);
    }

    public static async updateTasks(id: string, data: TypeTaskFormState) {
        return await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data);
    }

    public static async deleteTasks(id: string) {
        return await axiosWithAuth.delete(`${this.BASE_URL}/${id}`);
    }
}
