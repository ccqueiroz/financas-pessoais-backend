import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class MigrationsUsers1635302016553 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(new Table({
            name:'tb_users',
            columns:[
                {
                    name:"id",
                    type:"uuid",
                    isPrimary: true,
                    generationStrategy:'uuid',
                    default: 'uuid_generate_v4()',
                    isNullable: false
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'password',
                    type: 'varchar'
                },
                {
                    name: 'avatar',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'status',
                    type: 'smallint',
                    isNullable: true,
                    default: 1
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_users');
    }
}
