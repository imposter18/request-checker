import {Body, Controller, Get, Post, Redirect} from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRequestBody(@Body() body: unknown): { ok: true } {
    console.log('getRequestBody', body);

    return { ok: true };
  }

  @Get('redirect')
  @Redirect('http://localhost:3001', 302)
  redirect(): void {
    console.log('redirect called');

  }

  @Post()
  postRequestBody(@Body() body: unknown): { ok: true } {
    console.log('postRequestBody', body)

    return { ok: true };
  }
}
