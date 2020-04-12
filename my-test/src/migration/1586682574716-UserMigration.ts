import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1586682574716 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
    
        await queryRunner.query(
            "CREATE TABLE `users` ("
                + "`id` int(11) NOT NULL,"
                + "`first_name` varchar(20) DEFAULT NULL,"
                + "`last_name` varchar(20) DEFAULT NULL,"
                + "`age` smallint(6) NOT NULL"
            + ") ENGINE=InnoDB DEFAULT CHARSET=utf8;"
        );
    
        await queryRunner.query(
            "ALTER TABLE `users` ADD PRIMARY KEY (`id`);"
        );

        await queryRunner.query(
            "ALTER TABLE `users` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.query(
            "DROP TABLE `users`"
        );
    }

}
