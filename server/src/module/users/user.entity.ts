import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { File } from '../upload/file.entity';

@Entity('users')
export class User {
  @ApiProperty({
    description: 'User ID',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Unique username',
    example: 'user123',
  })
  @Column({ unique: true })
  username: string;

  @ApiProperty({
    description: "User's email address",
    example: 'user@example.com',
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'Password1',
  })
  @Column()
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @OneToMany(() => File, (file) => file.user, { cascade: true })
  files: File[];
}
