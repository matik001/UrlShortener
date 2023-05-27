import { MigrationInterface, QueryRunner } from "typeorm";

export class  AddedLogs1685214883342 implements MigrationInterface {
    name = 'AddedLogs1685214883342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "url_log" ("id" SERIAL NOT NULL, "ip" character varying NOT NULL, "headers" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "urlId" integer, CONSTRAINT "PK_a700144aef0a62c32e00c35b544" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "url_log" ADD CONSTRAINT "FK_73cfad252f4d9aa359f202cedc1" FOREIGN KEY ("urlId") REFERENCES "url"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "url_log" DROP CONSTRAINT "FK_73cfad252f4d9aa359f202cedc1"`);
        await queryRunner.query(`DROP TABLE "url_log"`);
    }

}
