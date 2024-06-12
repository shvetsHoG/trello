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
import { TaskService } from './task.service';
import { Auth } from '../decorators/auth.decorator';
import { CurrentUser } from '../decorators/user.decorator';
import { TaskDto } from './dto/task.dto';

@Controller('user/tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    @Auth()
    async getAll(@CurrentUser('id') userId: string) {
        return this.taskService.getAll(userId);
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(201)
    @Post()
    @Auth()
    async create(@Body() dto: TaskDto, @CurrentUser('id') userId: string) {
        return this.taskService.create(dto, userId);
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put(':id')
    @Auth()
    async update(
        @Body() dto: TaskDto,
        @CurrentUser('id') userId: string,
        @Param('id') id: string,
    ) {
        return this.taskService.update(dto, id, userId);
    }

    @HttpCode(200)
    @Delete(':id')
    @Auth()
    async delete(@CurrentUser('id') userId: string, @Param('id') id: string) {
        return this.taskService.delete(id, userId);
    }
}
