import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board-status.enum';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: BoardStatus,
    default: BoardStatus.PUBLIC,
  })
  status: BoardStatus;
}

// @Entity()
// export class Board extends BaseEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ type: 'varchar' }) // title 필드의 타입을 명시합니다.
//   title: string;

//   @Column({ type: 'varchar' }) // description 필드의 타입을 명시합니다.
//   description: string;

//   @Column({ type: 'enum', enum: BoardStatus }) // status 필드의 타입을 명시합니다.
//   status: BoardStatus;
// }
