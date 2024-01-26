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
const pool = require('../config/database');

module.exports = (req, res, next) => {
  pool.query('INSERT INTO logs (request_path, request_method) VALUES (?, ?)', [req.path, req.method]);
  next();
};
