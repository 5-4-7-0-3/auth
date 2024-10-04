import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-up')
  @ApiOperation({ summary: 'New user registration' })
  @ApiResponse({
    status: 201,
    description: 'The user is successfully registered.',
  })
  @ApiResponse({ status: 400, description: 'Incorrect request data.' })
  async signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post('sign-in')
  @ApiOperation({ summary: 'User authorization' })
  @ApiResponse({
    status: 200,
    description: 'Successful authorization, a token is returned.',
  })
  @ApiResponse({ status: 401, description: 'Invalid credentials.' })
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  @ApiOperation({ summary: 'Getting information about the current user' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Returns information about the user.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized access.' })
  async getUser(@Request() req) {
    return this.authService.getUserInfo(req.user.userId);
  }
}