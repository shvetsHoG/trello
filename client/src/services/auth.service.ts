import { IAuthForm, IAuthResponse } from '../types/user.types.ts';
import { axiosClassic } from '../api/interceptors.ts';
import { removeFromStorage, saveTokenStorage } from './auth-token.service.ts';

export class authService {
    public static async main(type: 'login' | 'registration', data: IAuthForm) {
        const response = await axiosClassic.post<IAuthResponse>(
            `/auth/${type}`,
            data
        );

        if (response.data.accessToken)
            saveTokenStorage(response.data.accessToken);

        return response;
    }

    public static async getNewTokens() {
        const response = await axiosClassic.post<IAuthResponse>(
            '/auth/login/access-token'
        );

        if (response.data.accessToken)
            saveTokenStorage(response.data.accessToken);

        return response;
    }

    public static async logout() {
        const response = await axiosClassic.post<boolean>('/auth/logout');

        if (response.data) removeFromStorage();

        return response;
    }
}
