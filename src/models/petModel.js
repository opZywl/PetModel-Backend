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
const fs = require('fs');

const Pet = {
  initializeDatabase: async () => {
    try {
      const createTableScript = fs.readFileSync('src/models/petTable.sql', 'utf8');
      await pool.query(createTableScript);

      const insertDataScript = fs.readFileSync('src/models/insertPets.sql', 'utf8');
      await pool.query(insertDataScript);

      console.log('Tabela e dados iniciais criados com sucesso!');
    } catch (error) {
      console.error('Erro ao criar tabela e dados iniciais:', error);
    }
  },

  getAllPets: async () => {
    try {
      const query = 'SELECT * FROM pets';
      const [pets] = await pool.query(query);
      return pets;
    } catch (error) {
      throw error;
    }
  },

  getPetById: async (id) => {
    try {
      const query = 'SELECT * FROM pets WHERE id = ?';
      const [pet] = await pool.query(query, [id]);
      return pet[0];
    } catch (error) {
      throw error;
    }
  },

  adoptPet: async (id) => {
    try {
      const query = 'UPDATE pets SET dataAdocao = NOW() WHERE id = ?';
      await pool.query(query, [id]);
      return true;
    } catch (error) {
      throw error;
    }
  },

  addPet: async (newPet) => {
    try {
      const query = 'INSERT INTO pets SET ?';
      await pool.query(query, newPet);
      return true;
    } catch (error) {
      throw error;
    }
  },

  removePet: async (id) => {
    try {
      const query = 'DELETE FROM pets WHERE id = ?';
      await pool.query(query, [id]);
      return true;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = Pet;
