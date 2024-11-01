import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  NotFoundException,
  UseGuards,
  UnauthorizedException,
  Request,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { UserService } from './users.service';
import { GetUserDto } from './dto/get-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiOperation({ summary: 'Getting information about the current user' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Returns information about the user.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized access.' })
  async getProfile(@Request() req) {

    const user = await this.userService.findById(req.user.userId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const { password, ...result } = user;
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get user information by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'User ID',
  })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Information about the user',
    type: GetUserDto,
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  async getUserById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<GetUserDto> {
    const user = await this.userService.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return {
      id: user.id,
      username: user.username,
      email: user.email,
    };
  }
}
