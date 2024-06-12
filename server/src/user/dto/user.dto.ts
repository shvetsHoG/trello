import {
    IsEmail,
    IsNumber,
    IsOptional,
    IsString,
    Max,
    Min,
    MinLength,
} from 'class-validator';

export class PomodoroSettingsDto {
    @IsOptional()
    @IsNumber()
    @Min(1)
    workInterval?: number;

    @IsOptional()
    @IsNumber()
    @Min(1)
    breakInterval?: number;

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(10)
    intervalsCount?: number;
}

export class UserDto extends PomodoroSettingsDto {
    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @MinLength(8, {
        message: 'Пароль должен быть не менее 8 символов',
    })
    @IsOptional()
    @IsString()
    password: string;
}
