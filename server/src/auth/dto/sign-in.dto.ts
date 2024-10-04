import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({
    description: 'Username for authorization',
    example: 'user123',
  })
  @IsString({ message: 'Username must be a string' })
  username: string;

  @ApiProperty({
    description: 'User password for authorization',
    example: 'Password1',
  })
  @IsString({ message: 'Password must be a string' })
  password: string;
}
