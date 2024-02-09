import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('index')
  index() {
    let viewData = [];
    viewData['title'] = 'Home Page - Online Store';
    return {
      viewData: viewData,
    };
  }

  // Rendering the about page
  @Get('/about')
  @Render('about')
  about() {
    const viewData = [];
    viewData['title'] = 'About us - Online Store ...';
    viewData['description'] = 'This is the about page ...';
    viewData['author'] = 'Developed by: Moses';
    viewData['subtitle'] = 'About us';
    // let title = 'About us - Online Store';

    return {
      viewData: viewData,
    };
  }
}
