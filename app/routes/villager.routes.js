import { Router } from 'express';
import VillagerController from '../controllers/villager.controller.js';

const router = Router();

// Create a new villager
router.post('/', VillagerController.create);

// Retrieve all villagers
router.get('/', VillagerController.findAll);

// Retrieve a single villager by id
router.get('/:id', VillagerController.findOne);

// Update a villager by id
router.put('/:id', VillagerController.update);

// Delete a villager by id
router.delete('/:id', VillagerController.delete);

// Delete all villagers
router.delete('/', VillagerController.deleteAll);

export default router;
