import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  //   @IsString()
  //   @IsEmail()
  //   @MaxLength(60)
  //   email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  // 영어와 숫자만 가능한 유효성 체크
  // RegExp
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts english and number',
  })
  password: string;
}
