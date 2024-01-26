/*
 * Este arquivo faz parte do projeto PetModel (https://github.com/opZywl/PetModel-Backend)
 * 
 * Copyright (c) 2024 - 2024 opZywl
 * 
 * Certifique-se de estar com o servidor frontend em execução antes de iniciar o backend para garantir
 * que as chamadas à API possam ser processadas corretamente. (https://github.com/opZywl/PetModel-Frontend)
 *
 * Este projeto foi desenvolvido como parte do Desafio da NectarLabs para o controle de adoção de pets por uma ONG.
 */
const express = require('express');
const petRouter = require('./router/petRouter');
const authRouter = require('./router/authRouter');
const authMiddleware = require('./middlewares/authMiddleware');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

// Rota Publica
app.use('/auth', authRouter);

// Rotas autenticadas
app.use(authMiddleware);
app.use('/pets', petRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
