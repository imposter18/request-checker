import { Body, Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRequestBody(@Body() body: unknown): { ok: true } {
    console.log(body);

    return { ok: true };
  }
}
