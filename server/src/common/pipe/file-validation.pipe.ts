import {
  Injectable,
  PipeTransform,
  BadRequestException,
  ArgumentMetadata,
} from '@nestjs/common';

@Injectable()
export class FileValidationPipe implements PipeTransform {
  transform(
    value: Express.Multer.File | Express.Multer.File[],
    metadata: ArgumentMetadata,
  ): Express.Multer.File | Express.Multer.File[] {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      throw new BadRequestException('File is required!');
    }

    const allowedMimeTypes = /\/(jpg|jpeg|png)$/;
    const maxSize = 5 * 1024 * 1024;

    const validateFile = (file: Express.Multer.File) => {
      if (!file.mimetype.match(allowedMimeTypes)) {
        throw new BadRequestException(
          'Only image files (jpg, jpeg, png) are allowed!',
        );
      }
      if (file.size > maxSize) {
        throw new BadRequestException(
          `File size exceeds the limit of ${maxSize / (1024 * 1024)}MB!`,
        );
      }
    };

    if (Array.isArray(value)) {
      value.forEach(validateFile);
    } else {
      validateFile(value);
    }

    return value;
  }
}
