import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmExModule } from './typeorm-ex.module';
import { TYPEORM_EX_CUSTOM_REPOSITORY } from './typeorm-ex.decorator';
import { AuthModule } from 'src/auth/auth.module';

// @Module({
//   imports: [TypeOrmModule.forFeature([BoardRepository])],
//   controllers: [BoardsController],
//   providers: [BoardsService],
// })
// export class BoardsModule {}

@Module({
  imports: [TypeOrmExModule.forCustomRepository([BoardRepository]), AuthModule],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
