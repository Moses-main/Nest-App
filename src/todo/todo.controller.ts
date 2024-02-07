import { Controller, Get, Body, Post, Logger } from '@nestjs/common';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly TodoService: TodoService) {}

  @Post()
  create(@Body() todo: Todo): void {
    return this.TodoService.create(todo);
  }

  @Get()
  findAll(): Todo[] {
    return this.TodoService.findAll();
  }
}
