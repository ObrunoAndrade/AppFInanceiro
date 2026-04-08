const Imap = require('imap');

class EmailService {
    connect() {
        const imap = new Imap({
            user: process.env.EMAIL_USER,
            password: process.env.EMAIL_PASSWORD,
            host: 'imap.gmail.com',
            port: 993,
            tls: true,
            tlsOptions: {
                rejectUnauthorized: false,
            },
        });

        imap.once('ready', () => {
            console.log('✅ Conectado ao servidor de email');

            imap.openBox('INBOX', true, (err) => {
                if (err) throw err;

                imap.search(['ALL'], (err, results) => {
                    if (err) throw err;

                    const latesEmails = results.slice(-10); // Pega os 10 emails mais recentes

                    const fetch = imap.fetch(latesEmails, { bodies: '' });

                    fetch.on('message', (msg, seqno) => {
                        let buffer = '';

                        msg.on('body', (stream) => {
                            stream.on('data', (chunk) => {
                                buffer += chunk.toString('utf8');
                            });

                            stream.once('end', () => {

                                // 🔥 FILTRO CORRETO AQUI
                                if (
                                    buffer.toLowerCase().includes('contadigitalvivo') 
                                    //buffer.toLowerCase().includes('fatura')
                                ) {
                                    console.log('💰 EMAIL DE COBRANÇA ENCONTRADO');
                                    console.log(`📧 Email #${seqno}`);
                                    console.log(buffer);
                                }

                            });
                        });
                    });

                    fetch.once('end', () => {
                        console.log('✅ Fim da busca de emails');
                        imap.end();
                    });
                });
            });
        });

        imap.once('error', (err) => {
            console.log('❌ Erro ao conectar ao servidor de email:', err);
        });

        imap.connect();
    }
}

module.exports = new EmailService();