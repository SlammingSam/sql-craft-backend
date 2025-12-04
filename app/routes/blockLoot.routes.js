import { Router } from 'express';
import blockLootController from '../controllers/blockLoot.controller.js';

const router = Router();

// Create a new blockLoot
router.post('/', blockLootController.create);

// Retrieve all blockLoot
router.get('/', blockLootController.findAll);

// Retrieve a single blockLoot by id
router.get('/:id', blockLootController.findOne);

// Update an blockLoot by id
router.put('/:id', blockLootController.update);

// Delete an blockLoot by id
router.delete('/:id', blockLootController.delete);

// Delete all blockLoot
router.delete('/', blockLootController.deleteAll);

export default router;
