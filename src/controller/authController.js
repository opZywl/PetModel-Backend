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

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === 'user' && password === 'password') {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Credenciais inválidas');
  }
};
