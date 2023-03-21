import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory,
} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class typeORMConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get('localhost'),
      port: parseInt(this.configService.get('5432'), 10),
      username: this.configService.get('postgres'),
      password: this.configService.get('1234'),
      database: this.configService.get('board-app'),
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,
    };
  }
}
