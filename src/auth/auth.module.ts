import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmExModule } from 'src/boards/typeorm-ex.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'Secret1234', // Secret Text
      signOptions: {
        expiresIn: 60 * 60, // 토큰의 유효시간
      },
    }),
    TypeOrmExModule.forCustomRepository([UserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // 해당 부분은 AuthModule에서 사용하기 위함.
  exports: [JwtStrategy, PassportModule], // 해당 부분은 다른 모듈에서도 사용하기 위함.
})
export class AuthModule {}
