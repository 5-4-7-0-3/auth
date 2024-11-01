import { MigrationInterface, QueryRunner } from "typeorm";

export class Avatar1730387825148 implements MigrationInterface {
    name = 'Avatar1730387825148'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "avatar" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar"`);
    }

}
