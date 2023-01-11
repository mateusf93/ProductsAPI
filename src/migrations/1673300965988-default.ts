import { MigrationInterface, QueryRunner } from "typeorm";

export class default1673300965988 implements MigrationInterface {
    name = 'default1673300965988'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Category\` (\`categoryID\` int NOT NULL AUTO_INCREMENT, \`category\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`categoryID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Costumers\` (\`CostumerID\` int NOT NULL AUTO_INCREMENT, \`CostumerName\` varchar(255) NOT NULL, \`adress\` varchar(255) NOT NULL, PRIMARY KEY (\`CostumerID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Orders\` (\`orderId\` int NOT NULL AUTO_INCREMENT, \`OrderDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`ShipDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`status\` enum ('Ordered', 'Cancelled', 'Shipping', 'Finished') NOT NULL DEFAULT 'Ordered', \`costumerId\` int NULL, PRIMARY KEY (\`orderId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Itens\` (\`ItemID\` int NOT NULL AUTO_INCREMENT, \`UnitPrice\` float NOT NULL, \`Quantity\` float NOT NULL, \`productId\` int NULL, \`orderId\` int NULL, PRIMARY KEY (\`ItemID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Product\` (\`ProductID\` int NOT NULL AUTO_INCREMENT, \`product\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`unitPrice\` float NOT NULL, \`Measure\` varchar(255) NOT NULL, \`categoryId\` int NULL, PRIMARY KEY (\`ProductID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`User\` (\`UserID\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`active\` tinyint NOT NULL, UNIQUE INDEX \`IDX_4a257d2c9837248d70640b3e36\` (\`email\`), PRIMARY KEY (\`UserID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Orders\` ADD CONSTRAINT \`FK_bed48909895b88b9ec1890b84e2\` FOREIGN KEY (\`costumerId\`) REFERENCES \`Costumers\`(\`CostumerID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Itens\` ADD CONSTRAINT \`FK_59392dafdd3be3fa7ae8e137bcb\` FOREIGN KEY (\`productId\`) REFERENCES \`Product\`(\`ProductID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Itens\` ADD CONSTRAINT \`FK_c61cf826ffdeac4909497a5728b\` FOREIGN KEY (\`orderId\`) REFERENCES \`Orders\`(\`orderId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Product\` ADD CONSTRAINT \`FK_896e2e0f6dfa6f80117a79e1d7e\` FOREIGN KEY (\`categoryId\`) REFERENCES \`Category\`(\`categoryID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Product\` DROP FOREIGN KEY \`FK_896e2e0f6dfa6f80117a79e1d7e\``);
        await queryRunner.query(`ALTER TABLE \`Itens\` DROP FOREIGN KEY \`FK_c61cf826ffdeac4909497a5728b\``);
        await queryRunner.query(`ALTER TABLE \`Itens\` DROP FOREIGN KEY \`FK_59392dafdd3be3fa7ae8e137bcb\``);
        await queryRunner.query(`ALTER TABLE \`Orders\` DROP FOREIGN KEY \`FK_bed48909895b88b9ec1890b84e2\``);
        await queryRunner.query(`DROP INDEX \`IDX_4a257d2c9837248d70640b3e36\` ON \`User\``);
        await queryRunner.query(`DROP TABLE \`User\``);
        await queryRunner.query(`DROP TABLE \`Product\``);
        await queryRunner.query(`DROP TABLE \`Itens\``);
        await queryRunner.query(`DROP TABLE \`Orders\``);
        await queryRunner.query(`DROP TABLE \`Costumers\``);
        await queryRunner.query(`DROP TABLE \`Category\``);
    }

}
