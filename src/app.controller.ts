import {Body, Controller, Get, HttpException, HttpStatus, Post, Redirect} from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    getRequestBody(@Body() body: unknown): { ok: true } {
        console.log('getRequestBody', body);

        throw new HttpException('test_err', HttpStatus.INTERNAL_SERVER_ERROR);

        // return {ok: true};
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


    @Get('redis.git/info/refs')
    @Redirect('https://192.168.10.213', 302)
    redirectGitRedis(): void {
        console.log('redirect called git refs');
    }


    @Get('redisno.git/info/refs')
    @Redirect('https://193.168.10.213', 302)
    redirectGitRedisNo(): void {
        console.log('redirect called git refs');
    }

    @Get('redisno2.git/info/refs')
    @Redirect('https://192.168.10.200', 302)
    redirectGitRedisNo2(): void {
        console.log('redirect called git refs');
    }

    @Post()
    postRequestBody(@Body() body: unknown): { ok: true } {
        console.log('postRequestBody', body)

        return {ok: true};
    }
}
