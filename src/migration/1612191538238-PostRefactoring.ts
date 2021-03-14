import { MigrationInterface, QueryRunner } from "typeorm";

export class PostRefactoring1612191538238 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `users` ADD COLUMN `address` varchar(255)"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `users` DROP COLUMN `address`");
  }
}
