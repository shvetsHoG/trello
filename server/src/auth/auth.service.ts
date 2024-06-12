import {
    BadRequestException,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { AuthDto } from '../dto/auth.dto';
import { verify } from 'argon2';
import { Response } from 'express';

@Injectable()
export class AuthService {
    EXPIRE_DAY_REFRESH_TOKEN = 1;
    REFRESH_TOKEN_NAME = 'refreshToken';

    constructor(
        private jwt: JwtService,
        private userService: UserService,
    ) {}

    async login(dto: AuthDto) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...user } = await this.validateUser(dto);
        const tokens = this.issueToken(user.id);

        return {
            user,
            ...tokens,
        };
    }

    async register(dto: AuthDto) {
        const oldUser = await this.userService.getByEmail(dto.email);
        if (oldUser) {
            throw new BadRequestException('Пользователь уже существует');
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...user } = await this.userService.create(dto);
        const tokens = this.issueToken(user.id);

        return {
            user,
            ...tokens,
        };
    }

    private issueToken(userId: string) {
        const data = { id: userId };

        const accessToken = this.jwt.sign(data, {
            expiresIn: '1h',
        });

        const refreshToken = this.jwt.sign(data, {
            expiresIn: '1d',
        });

        return { accessToken, refreshToken };
    }

    private async validateUser(dto: AuthDto) {
        const user = await this.userService.getByEmail(dto.email);

        if (!user) {
            throw new NotFoundException('Пользователь не найден');
        }

        const isValid = await verify(user.password, dto.password);

        if (!isValid) {
            throw new UnauthorizedException('Пароль неверный');
        }

        return user;
    }

    async getNewTokens(refreshToken: string) {
        const result = await this.jwt.verifyAsync(refreshToken);
        if (!result) {
            throw new UnauthorizedException('Неверный рефреш токен');
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...user } = await this.userService.getById(result.id);

        const tokens = this.issueToken(user.id);

        return {
            user,
            ...tokens,
        };
    }

    addRefreshTokenToResponse(res: Response, refreshToken: string) {
        const expiresIn = new Date();
        expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN);

        res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
            httpOnly: true,
            domain: 'localhost',
            expires: expiresIn,
            secure: true,
            sameSite: 'none',
        });
    }

    removeRefreshTokenFromResponse(res: Response) {
        res.cookie(this.REFRESH_TOKEN_NAME, {
            httpOnly: true,
            domain: 'localhost',
            expires: new Date(0),
            secure: true,
            sameSite: 'none',
        });
    }
}
