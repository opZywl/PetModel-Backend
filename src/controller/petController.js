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

exports.listPets = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM pets');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao buscar os pets');
  }
};

exports.getPetDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM pets WHERE id = ?', [id]);
    if (rows.length === 0) {
      res.status(404).send('Pet não encontrado');
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao buscar os detalhes do pet');
  }
};

exports.adoptPet = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('UPDATE pets SET dataAdocao = CURRENT_DATE() WHERE id = ?', [id]);
    res.send('Pet adotado com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao adotar o pet');
  }
};

exports.addPet = async (req, res) => {
  const { nome, idade, especie, raca } = req.body;
  try {
    await pool.query('INSERT INTO pets (nome, idade, especie, raca, dataAdocao) VALUES (?, ?, ?, ?, NULL)', [
      nome,
      idade,
      especie,
      raca,
    ]);
    res.send('Pet cadastrado com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao cadastrar o pet');
  }
};

exports.removePet = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM pets WHERE id = ?', [id]);
    res.send('Pet removido com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao remover o pet');
  }
};
// /src/controllers/petController.js

const pool = require('../config/database');

exports.listPets = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM pets');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao buscar os pets');
  }
};

exports.getPetDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM pets WHERE id = ?', [id]);
    if (rows.length === 0) {
      res.status(404).send('Pet não encontrado');
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao buscar os detalhes do pet');
  }
};

exports.adoptPet = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('UPDATE pets SET dataAdocao = CURRENT_DATE() WHERE id = ?', [id]);
    res.send('Pet adotado com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao adotar o pet');
  }
};

exports.addPet = async (req, res) => {
  const { nome, idade, especie, raca } = req.body;
  try {
    await pool.query('INSERT INTO pets (nome, idade, especie, raca, dataAdocao) VALUES (?, ?, ?, ?, NULL)', [
      nome,
      idade,
      especie,
      raca,
    ]);
    res.send('Pet cadastrado com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao cadastrar o pet');
  }
};

exports.removePet = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM pets WHERE id = ?', [id]);
    res.send('Pet removido com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao remover o pet');
  }
};
