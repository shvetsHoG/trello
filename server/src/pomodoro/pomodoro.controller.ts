import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { PomodoroService } from './pomodoro.service';
import { Auth } from '../decorators/auth.decorator';
import { CurrentUser } from '../decorators/user.decorator';
import { PomodoroRoundDto, PomodoroSessionDto } from './dto/pomodoro.dto';

@Controller('user/timer')
export class PomodoroController {
    constructor(private readonly pomodoroService: PomodoroService) {}

    @Get('today')
    @Auth()
    async getTodaySession(@CurrentUser('id') id: string) {
        return this.pomodoroService.getTodaySession(id);
    }

    @Post()
    @HttpCode(200)
    @Auth()
    async create(@CurrentUser('id') id: string) {
        return this.pomodoroService.create(id);
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put('/round/:id')
    @Auth()
    async updateRound(@Param('id') id: string, @Body() dto: PomodoroRoundDto) {
        return this.pomodoroService.updateRound(dto, id);
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put(':id')
    @Auth()
    async update(
        @Body() dto: PomodoroSessionDto,
        @CurrentUser('id') userId: string,
        @Param('id') id: string,
    ) {
        return this.pomodoroService.update(dto, id, userId);
    }

    @HttpCode(200)
    @Delete(':id')
    @Auth()
    async delete(@CurrentUser('id') userId: string, @Param('id') id: string) {
        return this.pomodoroService.deleteSession(id, userId);
    }
}
