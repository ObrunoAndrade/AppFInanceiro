# 🚀 Email Finance Backend

Sistema backend em Node.js para leitura automática de e-mails e controle financeiro.

---

## 📌 Sobre o Projeto

Este projeto tem como objetivo automatizar o controle financeiro através da leitura de e-mails de cobrança.

O sistema conecta-se a uma conta de e-mail via IMAP, identifica mensagens relevantes (como faturas e boletos), extrai informações importantes e salva no banco de dados.

---

## 🧠 Funcionalidades

* 📧 Conexão com e-mail (Gmail via IMAP)
* 🔍 Leitura automática de e-mails
* 🎯 Filtro inteligente por palavras-chave
* 💰 Identificação de possíveis cobranças
* 🗄️ Persistência em banco de dados (PostgreSQL)
* 🔗 API REST para gerenciamento das transações

---

## 🏗️ Arquitetura

O projeto segue uma estrutura em camadas:

```
src/
 ├── modules/
 │    ├── transaction/
 │    │    ├── transaction.controller.js
 │    │    ├── transaction.service.js
 │    │    └── transaction.repository.js
 │    │
 │    └── email/
 │         └── email.service.js
 │
 ├── shared/
 │    └── database/
 │         └── prisma.js
 │
 └── app.js
```

---

## ⚙️ Tecnologias

* Node.js
* Express
* Prisma ORM
* PostgreSQL
* IMAP (node-imap)
* dotenv
* nodemon

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/database"
EMAIL_USER="seu_email@gmail.com"
EMAIL_PASSWORD="sua_senha_de_app"
```

---

## 📦 Instalação

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/email-finance-backend.git

# Entrar na pasta
cd email-finance-backend

# Instalar dependências
npm install
```

---

## 🗄️ Banco de Dados

```bash
# Gerar cliente Prisma
npx prisma generate

# Rodar migrations
npx prisma migrate dev
```

---

## ▶️ Executando o Projeto

```bash
npm run dev
```

Saída esperada:

```
Servidor rodando na porta 3000
✅ Conectado ao servidor de email
```

---

## 🔄 Funcionamento

1. O sistema conecta ao e-mail via IMAP
2. Busca os últimos e-mails recebidos
3. Filtra mensagens com palavras-chave (ex: "fatura", "boleto", "cobrança")
4. Identifica possíveis cobranças
5. (Em desenvolvimento) extrai valores e datas automaticamente
6. Salva os dados no banco

---

## 🚧 Roadmap

* [x] Estrutura inicial do backend
* [x] Integração com banco de dados
* [x] API de transações
* [x] Conexão com e-mail (IMAP)
* [x] Leitura de e-mails
* [x] Filtro de cobranças

### Próximos passos:

* [ ] Extração de valores (R$) com regex
* [ ] Extração de data de vencimento
* [ ] Salvamento automático no banco
* [ ] Agendamento com cron jobs
* [ ] Evitar duplicidade de registros
* [ ] Melhorias de performance

---

## ⚠️ Segurança

* Nunca subir o arquivo `.env`
* Utilize senha de aplicativo para Gmail
* Configuração atual de TLS é apenas para ambiente de desenvolvimento

---

## 📈 Objetivo

Este projeto foi desenvolvido com foco em aprendizado prático de backend, simulando um sistema real de automação financeira.

---

## 👨‍💻 Autor

Bruno Andrade

---

## 📄 Licença

Este projeto está sob a licença MIT.
