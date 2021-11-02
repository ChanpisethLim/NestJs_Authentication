import { Controller, Get, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { FacebookAuthGuard } from 'src/authentication/guard/facebook.guard';
import { GoogleAuthGuard } from 'src/authentication/guard/google.guard';

@Controller('/auth')
export class AuthController {
    @Get('/facebook')
    @UseGuards(FacebookAuthGuard)
    async facebookLogin(): Promise<any> {
        return HttpStatus.OK
    }

    @Get('facebook/redirect')
    @UseGuards(FacebookAuthGuard)
    async facebookLoginRedirect( @Req() req: Request): Promise<any> {
        return {
            statusCode: HttpStatus.OK,
            data: req.user
        }
    }

    @Get('/google')
    @UseGuards(GoogleAuthGuard)
    async googleLogin(): Promise<any> {
        return HttpStatus.OK
    }

    @Get('/google/redirect')
    @UseGuards(GoogleAuthGuard)
    async googleLoginRedirect( @Req() req: Request): Promise<any> {
        return {
            statusCode: HttpStatus.OK,
            data: req.user
        }
    }
    
}
