import { Injectable } from '@nestjs/common';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory,
} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as config from 'config';

const dbConfig = config.get('db');

@Injectable()
export class typeORMConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: dbConfig.type,
      host: process.env.RDS_HOSTNAME || dbConfig.host,
      port: process.env.RDS_PORT || dbConfig.port,
      username: process.env.RDS_USERNAME || dbConfig.username,
      password: process.env.RDS_PASSWORD || dbConfig.password,
      database: process.env.RDS_DB_NAME || dbConfig.database,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: dbConfig.synchronize,
    };
  }
}
