import {Body, Controller, Get, Post, Redirect} from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    getRequestBody(@Body() body: unknown): { ok: true } {
        console.log('getRequestBody', body);

        return {ok: true};
    }

    @Get('redirect')
    @Redirect('https://imposter18-request-checker-5ea4.twc1.net', 302)
    redirect(): void {
        console.log('redirect called');
    }


    @Get('redirect.git/info/refs')
    @Redirect('https://imposter18-request-checker-5ea4.twc1.net', 302)
    redirectGitRefs(): void {
        console.log('redirect called git refs');
    }

    @Post()
    postRequestBody(@Body() body: unknown): { ok: true } {
        console.log('postRequestBody', body)

        return {ok: true};
    }
}
