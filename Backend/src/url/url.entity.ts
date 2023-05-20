import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Url {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	url: string;

	@Column()
	key: string;

	@Column()
	createdDate: Date;

	@Column()
	clicked: number;
}
