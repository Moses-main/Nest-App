import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodoService } from './todo/todo.service';
@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return '<b>Hello World</b>';
    // return this.appService.getHello();
  }
}
