import {MigrationInterface, QueryRunner} from "typeorm";

export class nestjsDb1586765893710 implements MigrationInterface {
    name = 'nestjsDb1586765893710'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `age` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `photo` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `photo` ADD CONSTRAINT `FK_4494006ff358f754d07df5ccc87` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `photo` DROP FOREIGN KEY `FK_4494006ff358f754d07df5ccc87`", undefined);
        await queryRunner.query("DROP TABLE `photo`", undefined);
        await queryRunner.query("DROP TABLE `user`", undefined);
    }

}
