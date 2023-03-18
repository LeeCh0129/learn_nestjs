import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { createBoardDto } from './dto/create-board.dto';
@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    console.log(this);
    return this.boards;
  }

  createBoard(createBoardDto: createBoardDto) {
    const { title, description } = createBoardDto;

    const board: Board = {
      // title: title,
      // description: description, JS에서는 똑같으면 하나만 작성해도 됨.
      id: uuid(), // 아이디가 같은게 아니라 유니크한 값을 게시판의 아이디로 줄 수 있음.
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }
  // 게시물 검색
  getBoardById(id: string): Board {
    return this.boards.find((boards) => boards.id === id);
  }
  // 게시물 삭제
  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id); // 아이디가 다른것만 남겨주고, 아이디가 같은것은 지워줌.
  }
}

// AppModule에서 BoardsService를 사용하기 위해 export한다.
export default BoardsService;