import { MigrationInterface, QueryRunner } from "typeorm";

export class  InitialDB1685139137099 implements MigrationInterface {
    name = 'InitialDB1685139137099'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "url" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "key" character varying NOT NULL, "createdDate" TIMESTAMP NOT NULL, "clicked" integer NOT NULL, CONSTRAINT "PK_7421088122ee64b55556dfc3a91" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "url"`);
    }

}
