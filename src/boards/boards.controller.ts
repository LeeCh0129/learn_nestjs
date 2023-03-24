import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto);
  }
}

// @Controller('boards')
// export class BoardsController {
//   constructor(private boardsService: BoardsService) {}

//   @Get('/:id')
//   getBoardById(@Param('id') id: number): Promise<Board> {
//     return this.boardsService.getBoardById(id);
//   }

//   @Post()
//   @UsePipes(ValidationPipe)
//   createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
//     return this.boardsService.createBoard(createBoardDto);
//   }
// }
