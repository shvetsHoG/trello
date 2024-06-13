import { IUser, TypeUserForm } from '../types/user.types.ts';
import { axiosWithAuth } from '../api/interceptors.ts';

export interface IProfileResponse {
    user: IUser;
    statistics: {
        label: string;
        value: string;
    }[];
}

export class UserService {
    private static BASE_URL = '/user/profile';

    public static async getProfile() {
        const response = await axiosWithAuth.get<IProfileResponse>(
            this.BASE_URL
        );
        return response.data;
    }

    public static async update(data: TypeUserForm) {
        const response = await axiosWithAuth.put(this.BASE_URL, data);
        return response.data;
    }
}
