import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  @IsOptional()
  firstName?: string;
  
  @IsString()
  @IsOptional()
  lastName?: string;
  
  @IsEmail()
  @IsOptional()
  email?: string;
}
