require('dotenv').config();

const express = require('express');
const cors = require('cors');
const prisma = require('./shared/database/prisma');
const transactionController = require('./modules/transaction/transaction.controller');
const emailService = require('./modules/email/email.service');

const app = express();
emailService.connect();

app.use(cors());
app.use(express.json());

app.post('/transactions', (req, res) => {
    return transactionController.create(req, res);
});

app.get('/transactions', (req, res) => {
    return transactionController.list(req, res);
});

app.get('/', (req, res) => {
    return res.json({ message: 'API Rodando!' });
});

app.get('/tst-db', async (req, res) => {
    const transaction = await prisma.transaction.create({
        data: {
            title: 'Teste',
            amount: 100.5,
            type: new Date(),
        }
    })

    return res.json(transaction);
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});