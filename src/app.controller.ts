import { Controller, Get, Render } from '@nestjs/common';

// @Controller()
// export class AppController {
//   @Get()
//   getHello(): string {
//     return '<b>{{firstname}} {{lastname}}</b>';
//   }
// }

@Controller()
export class AppController {
  @Get('/')
  @Render('index')
  index() {
    return {
      title: 'Home Page - Online Store',
    };
  }

  // Rendering the about page
  @Get('/about')
  @Render('about')
  about() {
    let viewData = [];
    viewData['description']= "This is the about page ...";
    viewData['author'] = "Developed by: Moses";
    let data1 = 'About us - Online Store';
    
    return {
      title: data1;
      subtitle:"About us";
      viewData: viewData
    }
  }
}
