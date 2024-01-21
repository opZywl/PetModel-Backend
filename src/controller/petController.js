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
