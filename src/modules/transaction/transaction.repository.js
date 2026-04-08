const prisma = require('../../shared/database/prisma');

class transactionRepository {
    async create(data) {
        return prisma.transaction.create({
            data: data,
        });
    }

    async findAll() {
        return prisma.transaction.findMany();
    }
}

module.exports = new transactionRepository();