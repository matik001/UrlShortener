import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Url } from './url.entity';

@Entity()
export class UrlLog {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne((type) => Url)
	@JoinColumn({ name: 'urlId' })
	url: Url;

	@Column()
	ip: string;

	@Column()
	headers: string;

	@Column()
	date: Date;
}
