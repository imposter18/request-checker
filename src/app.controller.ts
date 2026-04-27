import {Body, Controller, Get, Post} from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRequestBody(@Body() body: unknown): { ok: true } {
    console.log('getRequestBody', body);

    return { ok: true };
  }


  @Post()
  postRequestBody(@Body() body: unknown): { ok: true } {
    console.log('postRequestBody', body)

    return { ok: true };
  }
}
