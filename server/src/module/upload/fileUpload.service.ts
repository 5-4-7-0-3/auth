import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { File } from './file.entity';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { UserService } from '../users/users.service';

@Injectable()
export class FileUploadService {
  private uploadDir = join(__dirname, '..', '..', 'uploads');

  constructor(
    @InjectRepository(File)
    private fileRepository: Repository<File>,
    private userService: UserService,
  ) {
    if (!existsSync(this.uploadDir)) {
      mkdirSync(this.uploadDir);
    }
  }

  async handleFileUpload(files: Express.Multer.File[], user: User) {
    if (!files || files.length === 0) {
      throw new BadRequestException('No files uploaded');
    }

    const fileRecords = files.map((file) => {
      const filePath = join(this.uploadDir, file.filename);
      return this.fileRepository.create({
        user,
        filePath,
      });
    });

    await this.fileRepository.save(fileRecords);

    return fileRecords.map((file) => ({
      message: 'File uploaded successfully',
      filePath: file.filePath,
    }));
  }

  async uploadAvatar(file: Express.Multer.File, user: User) {
    const fileRecord = this.fileRepository.create({
      user,
      filePath: file[0].path,
    });

    await this.userService.update(user.id, { avatar: file[0].path });
    await this.fileRepository.save(fileRecord);

    return {
      message: 'Avatar uploaded successfully',
      filePath: file[0].path,
    };
  }
}
