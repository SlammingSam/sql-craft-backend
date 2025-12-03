import { Router } from 'express';
import EffectsController from '../controllers/effects.controller.js';

const router = Router();

// Create a new effect
router.post('/', EffectsController.create);

// Retrieve all effects
router.get('/', EffectsController.findAll);

// Retrieve a single effect by id
router.get('/:id', EffectsController.findOne);

// Update an effect by id
router.put('/:id', EffectsController.update);

// Delete an effect by id
router.delete('/:id', EffectsController.delete);

// Delete all effects
router.delete('/', EffectsController.deleteAll);

export default router;
