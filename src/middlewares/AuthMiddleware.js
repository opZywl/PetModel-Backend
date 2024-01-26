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
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const { SECRET_KEY } = process.env;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send('Token de autenticação não fornecido');
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).send('Falha na autenticação do token');
    }
    req.user = decoded;
    next();
  });
};