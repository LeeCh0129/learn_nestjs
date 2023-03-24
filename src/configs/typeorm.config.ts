import { Injectable } from '@nestjs/common';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory,
} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

// @Injectable()
// export class typeORMConfig implements TypeOrmOptionsFactory {
//   constructor(private configService: ConfigService) {}
// createTypeOrmOptions(): TypeOrmModuleOptions {
//   return {
//     type: 'postgres',
//     host: this.configService.get('localhost'),
//     port: parseInt(this.configService.get('5432'), 10),
//     username: this.configService.get('postgres'),
//     password: this.configService.get('1234'),
//     database: this.configService.get('board-app'),
//     entities: [__dirname + '/../**/*.entity.{js,ts}'],
//     // entities: [`${__dirname}/../entities/**/*.entity{.ts,.js}`],
//     // entities: ['dist/**/*.entity{.ts,.js}'],
//     synchronize: true,
//   };
// }
// }

@Injectable()
export class typeORMConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'board-app',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,
    };
  }
}

// export const typeORMConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: '1234',
//   database: 'board-app',
//   entities: [__dirname + '/../**/*.entity.{js,ts}'],
//   synchronize: true,
// };
