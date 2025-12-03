import { Router } from 'express';
import MobsController from '../controllers/mobs.controller.js';

const router = Router();

// Create a new mob
router.post('/', MobsController.create);

// Retrieve all mobs
router.get('/', MobsController.findAll);

// Retrieve a single mob by id
router.get('/:id', MobsController.findOne);

// Update a mob by id
router.put('/:id', MobsController.update);

// Delete a mob by id
router.delete('/:id', MobsController.delete);

// Delete all mobs
router.delete('/', MobsController.deleteAll);

export default router;
