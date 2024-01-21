const express = require('express');
const router = express.Router();
const petController = require('../controller/petController');

router.get('/', petController.listPets);
router.get('/:id', petController.getPetDetails);
router.put('/adopt/:id', petController.adoptPet);
router.post('/', petController.addPet);
router.delete('/:id', petController.removePet);

module.exports = router;
