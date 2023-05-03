import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sourcePath: string;

  @Column()
  destinationUrl: string;

  @Column()
  createdDate: Date;

  @Column()
  clicked: number;
}
