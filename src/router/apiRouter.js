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
const router = express.Router();
const petRouter = require('./petRouter');
const authRouter = require('./authRouter');
const loggerMiddleware = require('../middlewares/loggerMiddleware');

router.use(loggerMiddleware);
router.use('/pets', petRouter);
router.use('/auth', authRouter);

module.exports = router;
