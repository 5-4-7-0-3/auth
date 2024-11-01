import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
  @ApiProperty({
    description: 'User ID',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Unique username',
    example: 'user123',
  })
  username: string;

  @ApiProperty({
    description: "User's email address",
    example: 'user@example.com',
  })
  email: string;
}
