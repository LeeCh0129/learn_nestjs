import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { createBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}
  // getAllBoards(): Board[] {
  //   console.log(this);
  //   return this.boards;
  // }
  // createBoard(createBoardDto: createBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     // title: title,
  //     // description: description, JS에서는 똑같으면 하나만 작성해도 됨.
  //     id: uuid(), // 아이디가 같은게 아니라 유니크한 값을 게시판의 아이디로 줄 수 있음.
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }

  // // 게시물 검색
  // getBoardById(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Can't find Board with id ${id}`);
  //   }
  //   return found;
  // }
  // // 게시물 삭제
  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== found.id); // 아이디가 다른것만 남겨주고, 아이디가 같은것은 지워줌.
  // }
  // // 게시물 상태 업데이트
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}

// AppModule에서 BoardsService를 사용하기 위해 export한다.
export default BoardsService;
