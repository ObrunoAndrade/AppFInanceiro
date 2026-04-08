const service = require('./transaction.service');

class transactionController {

    async create(req, res) {
        try {
            const data = req.body;
            const result = await service.createTransaction(data);

            return res.json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async list(req, res) {
        const data = await service.getAllTransactions();
        return res.json(data);
    }
}

module.exports = new transactionController();