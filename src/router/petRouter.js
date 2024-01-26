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
const petController = require('../controller/petController');

router.get('/', petController.listPets);
router.get('/:id', petController.getPetDetails);
router.put('/adopt/:id', petController.adoptPet);
router.post('/', petController.addPet);
router.delete('/:id', petController.removePet);

module.exports = router;
