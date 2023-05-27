import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UrlLog } from './urlLog.entity';

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

	@OneToMany(() => UrlLog, (photo) => photo.url)
	urlLogs: UrlLog[];
}
