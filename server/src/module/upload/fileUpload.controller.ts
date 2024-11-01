import {
  Controller,
  Post,
  UseInterceptors,
  UsePipes,
  Request,
  UploadedFiles,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FileUploadService } from './fileUpload.service';
import { FileValidationPipe } from 'src/common/pipe/file-validation.pipe';
import { UserService } from '../users/users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import * as path from 'path';

@ApiTags('File Upload')
@Controller('upload')
export class FileUploadController {
  constructor(
    private readonly fileUploadService: FileUploadService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  @UsePipes(FileValidationPipe)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Upload multiple files for authenticated users' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array',
          items: { type: 'string', format: 'binary' },
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Files uploaded successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({
    status: 400,
    description: 'Validation failed for uploaded files',
  })
  async uploadFiles(
    @UploadedFiles() files: Express.Multer.File[],
    @Request() req,
  ) {
    const user = await this.userService.findById(req.user.userId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return this.fileUploadService.handleFileUpload(files, user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('avatar')
  @UseInterceptors(FilesInterceptor('avatar'))
  @UsePipes(FileValidationPipe)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Upload avatar for the authenticated user' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        avatar: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Avatar uploaded successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 400, description: 'Validation failed for avatar' })
  async uploadAvatar(
    @UploadedFiles() avatar: Express.Multer.File,
    @Request() req,
  ) {
    const user = await this.userService.findById(req.user.userId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return this.fileUploadService.uploadAvatar(avatar, user);
  }
}
