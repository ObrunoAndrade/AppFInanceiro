const repository = require('./transaction.repository');

class TransactionService {
    async createTransaction(data) {

        if( !data.title || !data.amount ) {
            throw new Error('Dados incompletos');
        }

        return repository.create(data);
    }

    async getAllTransactions() {
        return repository.findAll();
    }
}

module.exports = new TransactionService();