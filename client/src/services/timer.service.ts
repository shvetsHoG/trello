import { axiosWithAuth } from '../api/interceptors.ts';
import {
    IPomodoroSessionResponse,
    TypePomodoroRoundState,
    TypePomodoroSessionState
} from '../types/timer.types.ts';

export class TimerService {
    private static BASE_URL = '/user/timer';

    public static async getTodaySession() {
        return await axiosWithAuth.get<IPomodoroSessionResponse>(
            `${this.BASE_URL}/today`
        );
    }

    public static async createSession() {
        return await axiosWithAuth.post<IPomodoroSessionResponse>(
            this.BASE_URL
        );
    }

    public static async updateSession(
        id: string,
        data: TypePomodoroSessionState
    ) {
        return await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data);
    }

    public static async deleteSession(id: string) {
        return await axiosWithAuth.delete(`${this.BASE_URL}/round/${id}`);
    }

    public static async updateRound(id: string, data: TypePomodoroRoundState) {
        return await axiosWithAuth.put(`${this.BASE_URL}/round/${id}`, data);
    }
}
